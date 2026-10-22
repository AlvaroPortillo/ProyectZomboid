"""Servidor local del panel (solo biblioteca estándar de Python).

Sirve la carpeta web/ y, solo en lectura, las páginas y los datos en directo de los mods
PZ Pulse y PZ Map, para poder verlos dentro del panel (pestaña «En directo").

Uso:  python web/servidor.py            (puerto 4242)
      python web/servidor.py --puerto 4300

Seguridad:
- Escucha solo en 127.0.0.1: no es accesible desde otros equipos.
- Solo GET y HEAD, más un único POST (/live/abrir-app) que abre esta misma página en una
  ventana de Edge en modo app. La orden es fija (no recibe nada del cliente) y exige la cabecera
  X-Panel y el mismo origen, así que otra web no puede dispararla desde el navegador.
- Sin listados de carpetas fuera de web/.
- Cada ruta se resuelve y se comprueba que no sale de su carpeta raíz.
"""
import argparse
import http.server
import json
import os
import re
import socketserver
import sys
import urllib.parse

WEB = os.path.dirname(os.path.abspath(__file__))
ZOMBOID_LUA = os.path.join(os.path.expanduser('~'), 'Zomboid', 'Lua')
MODS = {'pulse': 'PZ_Pulse', 'map': 'PZ_Map'}


def find_mod_web(folder):
    """Lee el aviso MOVED.txt que el mod escribe en Zomboid/Lua/<mod>/ y extrae la carpeta de su página."""
    moved = os.path.join(ZOMBOID_LUA, folder, 'MOVED.txt')
    if not os.path.isfile(moved):
        return None
    text = open(moved, encoding='utf-8', errors='replace').read()
    m = re.search(r'file:///(\S+?)/index\.html\?d=', text)
    if not m:
        return None
    path = urllib.parse.unquote(m.group(1)).replace('/', os.sep)
    return path if os.path.isdir(path) else None


def build_roots():
    roots = {}
    status = {}
    for key, folder in MODS.items():
        page = find_mod_web(folder)
        data = os.path.join(ZOMBOID_LUA, folder)
        if page:
            roots[f'/live/{key}/'] = (page, False)
        if os.path.isdir(data):
            roots[f'/live/{key}-data/'] = (data, True)
        status[key] = {'page': bool(page), 'data': os.path.isdir(data)}
    return roots, status


ROOTS, STATUS = build_roots()


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB, **kwargs)

    def log_message(self, fmt, *args):  # menos ruido en la terminal
        if '/live/' not in (self.path or '') or '404' in (fmt % args):
            sys.stderr.write('%s - %s\n' % (self.address_string(), fmt % args))

    def end_headers(self):
        # Los datos en directo y el estado nunca se guardan en caché.
        if self.path.startswith('/live/'):
            self.send_header('Cache-Control', 'no-store')
        else:
            # El panel cambia a menudo: el navegador debe comprobar siempre si hay versión nueva.
            self.send_header('Cache-Control', 'no-cache')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

    def do_GET(self):
        if self.path.split('?')[0] == '/live/estado.json':
            body = json.dumps({'mods': STATUS, 'roots': sorted(ROOTS)}).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def do_POST(self):
        if self.path.split('?')[0] == '/live/abrir-app':
            self.open_app()
            return
        self.send_error(405)

    def do_PUT(self):
        self.send_error(405)

    do_DELETE = do_PATCH = do_PUT

    def open_app(self):
        """Hace lo mismo que Start-Process msedge "--app=.../directo.html": una ventana de Edge sin barras."""
        port = self.server.server_address[1]
        own = {f'http://127.0.0.1:{port}', f'http://localhost:{port}'}
        origin = self.headers.get('Origin')
        if self.headers.get('X-Panel') != '1' or (origin is not None and origin not in own):
            self.send_error(403)
            return
        if not hasattr(os, 'startfile'):
            self.send_error(501, 'Solo disponible en Windows')
            return
        try:
            # startfile usa el mismo mecanismo que Start-Process: encuentra msedge aunque no esté en el PATH.
            os.startfile('msedge', 'open', f'--app=http://127.0.0.1:{port}/directo.html?vista=both')
        except OSError as e:
            self.send_error(500, f'No se pudo abrir Edge: {e}')
            return
        self.send_response(204)
        self.end_headers()

    TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
             '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.md': 'text/plain; charset=utf-8',
             '.py': 'text/plain; charset=utf-8'}

    def guess_type(self, path):
        # Los .txt de datos de los mods son JavaScript que la página carga con <script>.
        if path.endswith('.txt') and getattr(self, '_live_data', False):
            return 'text/javascript; charset=utf-8'
        # Tipos fijos: en Windows el registro puede declarar .js como texto y, con nosniff, se bloquearía.
        ext = os.path.splitext(path)[1].lower()
        return self.TYPES.get(ext) or super().guess_type(path)

    def translate_path(self, path):
        clean = urllib.parse.unquote(path.split('?', 1)[0].split('#', 1)[0])
        self._live_data = False
        for prefix, (root, is_data) in ROOTS.items():
            if clean.startswith(prefix):
                rel = clean[len(prefix):]
                full = os.path.realpath(os.path.join(root, *[p for p in rel.split('/') if p not in ('', '.', '..')]))
                root_real = os.path.realpath(root)
                if os.path.commonpath([full, root_real]) != root_real:
                    return os.path.join(WEB, '__denegado__')
                self._live_data = is_data
                return full
        if clean.startswith('/live/'):
            return os.path.join(WEB, '__no_existe__')
        return super().translate_path(path)

    def list_directory(self, path):
        if self.path.startswith('/live/'):
            self.send_error(404)
            return None
        return super().list_directory(path)


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = False  # en Windows, True permitiría compartir el puerto con otro servidor sin avisar


def main():
    ap = argparse.ArgumentParser(description='Servidor local del panel de Project Zomboid')
    ap.add_argument('--puerto', type=int, default=4242)
    args = ap.parse_args()
    print(f'Panel en http://127.0.0.1:{args.puerto}/  (Ctrl+C para parar)')
    for key, st in STATUS.items():
        nombre = MODS[key].replace('_', ' ')
        if st['page'] and st['data']:
            print(f'  {nombre}: detectado, en http://127.0.0.1:{args.puerto}/directo.html')
        else:
            print(f'  {nombre}: no detectado (instala y activa el mod, y carga una partida una vez)')
    try:
        httpd = Server(('127.0.0.1', args.puerto), Handler)
    except OSError:
        print(f'El puerto {args.puerto} ya está en uso. Cierra el otro servidor (Ctrl+C en su terminal) o usa --puerto 4300.')
        sys.exit(1)
    with httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
