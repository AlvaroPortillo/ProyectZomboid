"""Lector mínimo de scripts de Project Zomboid (bloques `item Nombre { clave = valor, ... }`).

Solo lee: no modifica nada del juego ni de los mods. Devuelve, por objeto, sus campos con la
clave en minúsculas (el juego no distingue mayúsculas en las claves), el fichero y la línea.
"""
import re
from pathlib import Path

_COMMENT = re.compile(r'/\*.*?\*/', re.S)


def _strip_comments(text):
    # Sustituye los comentarios por espacios conservando los saltos de línea, para no perder la numeración
    return _COMMENT.sub(lambda m: re.sub(r'[^\n]', ' ', m.group(0)), text)


def parse_items(path, rel=None):
    """Devuelve {id: {'_file', '_line', 'clave': valor | [valores]}} de un fichero de scripts."""
    path = Path(path)
    text = _strip_comments(path.read_text(encoding='utf-8', errors='replace'))
    items = {}
    lines = text.split('\n')
    i = 0
    depth = 0
    cur = None
    cur_depth = None
    for n, raw in enumerate(lines, 1):
        line = raw.split('//')[0].strip()
        if not line:
            continue
        m = re.match(r'^item\s+([\w\-\.]+)\s*(\{)?', line)
        if m and cur is None:
            cur = {'_file': rel or str(path), '_line': n, '_id': m.group(1)}
            cur_depth = depth
            if m.group(2):
                depth += 1
            continue
        opens, closes = line.count('{'), line.count('}')
        if cur is not None and depth == cur_depth + 1 and '=' in line:
            k, v = line.split('=', 1)
            k = k.strip().lower()
            v = v.strip().rstrip(',').strip()
            if k in cur and not k.startswith('_'):
                if not isinstance(cur[k], list):
                    cur[k] = [cur[k]]
                cur[k].append(v)
            else:
                cur[k] = v
        depth += opens - closes
        if cur is not None and depth <= cur_depth:
            items[cur['_id']] = cur
            cur = None
            cur_depth = None
    return items


def parse_dir(root, base=None):
    """Lee todos los .txt de una carpeta de scripts. Los ficheros posteriores no se mezclan: el último gana."""
    root = Path(root)
    out = {}
    for f in sorted(root.rglob('*.txt')):
        rel = f.relative_to(base).as_posix() if base else f.as_posix()
        out.update(parse_items(f, rel))
    return out


def num(v, default=None):
    if v is None:
        return default
    if isinstance(v, list):
        v = v[-1]
    try:
        x = float(str(v).strip())
        return int(x) if x.is_integer() else x
    except ValueError:
        return default


def truthy(v):
    if isinstance(v, list):
        v = v[-1]
    return str(v or '').strip().lower() == 'true'
