# Project Zomboid · panel de consulta

Panel en castellano para Project Zomboid 42.21, pensado para tenerlo abierto en otra pantalla mientras juegas:
tier de armas de fuego, armas del mod Firearms B42, qué desbloquea cada habilidad y cómo curar cada herida.

**Web:** https://alvaroportillo.github.io/ProyectZomboid/ · Más proyectos: https://alvaroportillo.github.io/

- `web/`: la web (HTML, CSS y JS sin dependencias). Detalles, uso y ficheros en [`web/README.md`](web/README.md).
- `herramientas/`: generadores en Python que leen los ficheros del juego y del mod.

En local, con «En directo» (mapa y personaje en tiempo real con los mods PZ Map y PZ Pulse):

```powershell
python web/servidor.py   # y abrir http://127.0.0.1:4242
```

Publicar los cambios de la web (después del push a `main`):

```powershell
git subtree push --prefix web origin gh-pages
```
