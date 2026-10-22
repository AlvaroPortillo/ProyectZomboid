# Project Zomboid · panel de consulta para la 42.21

Panel local con cinco secciones, todo en castellano y con datos sacados de los ficheros del juego
instalado (versión 42.21.0). HTML, CSS y JS sin dependencias ni build.

- **Armas** (`index.html`): tier de las 20 armas de fuego, con filtro por tipo y por munición.
- **Armas con mods** (`firearms.html`): las 51 armas de fuego y las 13 municiones con el mod
  [Firearms B42](https://steamcommunity.com/sharedfiles/filedetails/?id=2256623447) activo, con su
  propio tier, qué cambia el mod en cada arma del juego, cómo se consigue cada una y los fallos del mod.
- **Habilidades** (`habilidades.html`): guía de fabricación y construcción por habilidad.
  Muestra qué se desbloquea en cada nivel, con herramientas y materiales, y qué recetas hay que
  aprender y con qué revista o profesión. También indica los libros de cada nivel, por dónde
  empezar y una guía de la comunidad contrastada con los datos del juego.
- **Curación** (`curacion.html`): cómo curar cada herida (hemorragia, rasguño, laceración, herida
  profunda, bala, cristales, fractura, quemadura, infección, mordisco y vendaje sucio), qué objetos
  acepta el juego para cada cura, recetas de material médico y qué cambia con el nivel de Medicina.
- **En directo** (`directo.html`): mapa (mod PZ Map) y estado del personaje (mod PZ Pulse) en
  directo, para la otra pantalla.

## Arrancar

Desde la raíz del proyecto, en PowerShell:

```powershell
python web/servidor.py
```

`servidor.py` usa solo la biblioteca estándar de Python. Solo escucha en `127.0.0.1`, así que no
es accesible desde otros equipos de la red. Además del panel, entrega en solo lectura la página y
los datos en directo de PZ Map y PZ Pulse; bloquea cualquier ruta que intente salir de esas
carpetas y rechaza escrituras. Con `python -m http.server` funciona todo menos «En directo».

## Abrirlo como ventana propia, sin pestañas

En otra terminal:

```powershell
Start-Process msedge "--app=http://127.0.0.1:4242"
```

Con Chrome:

```powershell
Start-Process chrome "--app=http://127.0.0.1:4242"
```

Las pestañas **Armas**, **Armas con mods**, **Habilidades**, **Curación** y **En directo** de la cabecera cambian de sección.
Para dejar el directo en la otra pantalla:

```powershell
Start-Process msedge "--app=http://127.0.0.1:4242/directo.html"
```

## En directo (PZ Map y PZ Pulse)
- Necesita los mods [PZ Map](https://steamcommunity.com/sharedfiles/filedetails/?id=3770149036) y
  [PZ Pulse](https://steamcommunity.com/sharedfiles/filedetails/?id=3753700423) del Steam
  Workshop, activos y con una partida cargada al menos una vez.
- No hace falta copiar el enlace del juego: cada mod deja en `%USERPROFILE%\Zomboid\Lua\<mod>\MOVED.txt`
  la dirección de su página, y `servidor.py` la lee al arrancar. Si actualizas o reinstalas un mod,
  reinicia el servidor.
- Botones para ver mapa y personaje juntos o por separado, y para abrir cada uno en su ventana.
- El indicador dice «en directo» solo cuando los datos cambian: si la partida está cerrada o en
  pausa, lo indica.

## Uso
- `/` enfoca la búsqueda y `Esc` la borra.
- **Compacto** cambia a una vista densa para un monitor secundario.
- **Flotante** (solo en Armas) abre una ventana pequeña siempre encima con los tiers S, A y B.
  Solo aparece en Edge o Chrome recientes. Si no aparece, usa la ventana `--app`.
- El filtro, la búsqueda y la habilidad elegida se guardan en la URL y sobreviven a recargas.
- **Recarga automática:** si cambian los datos, la página se repinta en unos 2 segundos sin perder
  el filtro. Si cambian la página o los estilos, se recarga entera. Solo funciona abierta desde el
  servidor, no con doble clic en el fichero.

## Habilidades
- **Selector:** las 24 habilidades con libros o recetas. Los grupos (Construcción, Fabricación,
  Comida y naturaleza…) filtran el selector.
- **Ficha:** descripción oficial, cómo se entrena, libros por nivel y las herramientas y materiales
  que más se repiten. Incluye también «Cómo empezar»: las recetas de nivel 0 o 1 que más
  experiencia dan por unidad de tiempo.
- **Qué desbloqueas por nivel:** del nivel 0 al 10. Cada receta se despliega para ver herramientas,
  materiales, resultado, experiencia y cómo se aprende. Se puede filtrar por construcción o
  fabricación, o ver solo las que no hay que aprender.
- **Buscador:** busca en las 747 recetas y construcciones y lleva a la ficha con la receta abierta.

## Armas con mods (Firearms B42)
- Vale para **Firearms B42** y **Firearms B42 Beta**: sus objetos tienen las mismas cifras; solo cambian
  el botín y los modelos 3D. Con **Models Only** las armas son las del juego base: usa la pestaña Armas.
  Las tres variantes son incompatibles entre sí, así que solo puede haber una activa.
- El juego 42.21 carga la carpeta `42.16` del mod; sus cifras pueden no estar al día con la 42.21.
- Filtro **Origen**: nuevas del mod, cambiadas por el mod (con «juego base › con el mod») o sin cambios.
- El mod solo trae textos en inglés: en una partida en español, las armas del juego mantienen su
  nombre español y las nuevas salen en inglés. Cada tarjeta muestra ambos si cambian.
- **Fallos del mod**: nombres mal escritos que hacen que el FN FAL nunca salga como botín y que los
  zombis nunca lleven la UZI, entre otros. Están con fichero y línea.
- Para regenerar los datos tras actualizar el mod, desde la raíz del proyecto:

  ```powershell
  python herramientas/generar_firearms.py
  ```

  Lee el juego y el mod en solo lectura, escribe `web/firearms-data.js` y copia los iconos a
  `web/icons/firearms/`. El tier y los motivos se editan a mano en `herramientas/firearms_valoracion.json`;
  el generador avisa de las armas nuevas que no tengan valoración.

## Mapa interactivo (pzmap.org, en Armas)
- El botón **Mapa** abre [pzmap.org](https://pzmap.org/) en su propia ventana. No se puede meter
  dentro del panel porque el sitio prohíbe incrustarse.
- **Spoilers:** la primera vez pulsa el botón en inglés «Enable spoilers» y confirma con «Yes».
  pzmap.org lo recuerda un año en ese navegador.
- pzmap.org llega hasta la versión 42.20 y los datos del panel son de la 42.21.

## Ficheros
- `index.html`, `data.js`: sección de armas.
- `firearms.html`, `firearms-data.js`, `icons/firearms/`: sección de armas con el mod Firearms B42.
  Los iconos son del mod (`common/media/textures`), para uso personal en este panel.
- `../herramientas/`: generador de `firearms-data.js` (`generar_firearms.py`, `pzscript.py`) y
  valoraciones propias (`firearms_valoracion.json`).
- `habilidades.html`, `habilidades.js`: sección de habilidades.
- `curacion.html`, `curacion.js`: sección de curación. Las reglas salen de
  `media/lua/client/XpSystem/ISUI/ISHealthPanel.lua` y `media/lua/shared/TimedActions/`; la gravedad
  y los consejos son valoración propia.
- `profesiones.html`, `profesiones.js`, `icons/prof/`: guía de profesiones. Está hecha pero no
  enlazada desde las pestañas, porque no se pidió.
- `styles.css`: estilos compartidos (ver `DESIGN.md`).
- `icons/`: iconos de inventario del juego, recortados de `media/texturepacks/UI2.pack` y `UI.pack`
  (solo lectura). Son material de The Indie Stone, para uso personal en este panel.
  `icons/ammo/` tiene los dibujos de la munición. La caja de colores es el dibujo principal:
  amarilla para rifle, roja para pistola, verde para escopeta y roja y blanca para los
  fulminantes. Están también el cartucho suelto, el cartón y el cargador. Las cantidades salen
  de las recetas de abrir cajas y cartones.

## Web publicada
GitHub Pages sirve la rama `gh-pages`, que contiene solo la carpeta `web/` (`herramientas/` no se publica):
https://alvaroportillo.github.io/ProyectZomboid/. Para publicar los cambios, después de hacer push a `main`:

```powershell
git subtree push --prefix web origin gh-pages
```

Allí no hay `servidor.py`, así que `publicado.js` marca «En directo» como «Próximamente» y `directo.html`
muestra un aviso. En local (127.0.0.1) todo sigue igual.

Los ficheros `.js` de datos se generan desde los scripts del juego. Los campos de valoración
(tier, motivos, guías, grupos) son propios y están marcados como tales en la página.

La tipografía Archivo se carga de Google Fonts. Sin conexión se usa la fuente del sistema.
