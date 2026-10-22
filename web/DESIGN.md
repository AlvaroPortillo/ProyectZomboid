# DESIGN.md · Panel de tier de armas (Project Zomboid 42.21)

## Idea
Un panel de referencia que se deja abierto en un segundo monitor mientras se juega.
La dirección visual sale del propio mundo del juego: Knox County de noche en 1993,
farolas de sodio ámbar y el brillo cian de un monitor CRT sobre un fondo verde azulado
muy oscuro. Nada de tonos militares de plantilla ni del morado por defecto.

El elemento memorable es uno solo: **la letra del tier, enorme y fija en el margen
izquierdo de su grupo**, con trazo ámbar o cian. Todo lo demás es tranquilo y disciplinado.

## Paleta
Tokens en `styles.css` (`:root`). El oscuro es el tema por defecto y el claro se activa con
`prefers-color-scheme: light` o con el botón de tema (`data-theme`).

| Token | Oscuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `#0C171B` | `#EEF3F2` | Fondo de página (noche de Knox / papel frío) |
| `--bg-mesh-1` | `#12343D` | `#D5E7E6` | Malla de color, esquina superior |
| `--bg-mesh-2` | `#3A2A12` | `#F3E2C6` | Malla de color, resplandor de farola |
| `--surface` | `rgba(22,44,52,.55)` | `rgba(255,255,255,.72)` | Tarjetas translúcidas |
| `--line` | `rgba(150,220,228,.16)` | `rgba(20,60,70,.16)` | Borde sutil |
| `--ink` | `#ECF4F3` | `#0D2026` | Texto principal (16:1 / 15:1) |
| `--ink-2` | `#B9CDCF` | `#2C474D` | Texto secundario (≥ 8:1) |
| `--ink-3` | `#93ABAE` | `#4D666B` | Metadatos (≥ 5:1) |
| `--sodium` | `#FFB547` | `#8A4D00` | Acento 1: tier S, foco de atención |
| `--phosphor` | `#5CE1E6` | `#006685` | Acento 2: tier A, foco de teclado |
| `--meter` | `#1AA6B8` | `#007FA8` | Relleno de medidores (validado con la skill dataviz) |

Tiers: S usa `--sodium`, A usa `--phosphor`, B usa `--ink` y C usa `--ink-3`.
Solo hay dos neones. B y C son tintas neutras a propósito: el tier es un orden y
**siempre lleva su letra**, así que el color nunca es la única pista.

Contraste comprobado (WCAG AA, texto ≥ 4,5:1) sobre fondo y superficie en ambos temas.
El par ámbar/cian de los medidores pasa el validador de la skill `dataviz`
(separación para daltonismo ΔE ≥ 18).

## Tipografía
Una sola familia con eje de anchura: **Archivo** (Google Fonts, variable `wdth 62–125`, `wght 100–900`).
Sin conexión cae a `system-ui`.

| Rol | Ajuste | Tamaño |
|---|---|---|
| Letra de tier | wdth 125, wght 900 | `clamp(4.5rem, 9vw, 7.5rem)` |
| Título de página | wdth 125, wght 800 | 1.95rem (31 px) |
| Nombre de arma | wdth 112, wght 750 | 1.25rem (20 px) |
| Texto | wdth 100, wght 420 | 1rem (16 px), interlineado 1.5 |
| Datos | wdth 82, wght 560, cifras tabulares | 0.875rem (14 px) |
| Metadatos | wdth 90, wght 500 | 0.78rem (12,5 px) |

Escala de tercera mayor (×1.25). Nada de mayúsculas forzadas en etiquetas ni de
monoespaciada para datos: los datos usan la versión estrecha de la misma familia.

## Espaciado
Base 4 px: `--s1 4` · `--s2 8` · `--s3 12` · `--s4 16` · `--s5 24` · `--s6 32` · `--s7 48` · `--s8 64`.
Margen lateral mínimo de 16 px en móvil. Ancho máximo de contenido: 1360 px.

## Radios
Jerarquía, no un radio único:
- `--r-chip` 999 px: filtros y etiquetas.
- `--r-card` 20 px: tarjetas de arma.
- `--r-panel` 28 px: cabecera fija y bloques grandes.
- Medidores: extremos de 4 px.

## Movimiento
- `--t-fast` 160 ms (hover, foco), `--t-base` 240 ms (abrir detalles, cambiar modo).
- Curva `cubic-bezier(.2,.7,.2,1)`.
- Un único momento orquestado: al cargar, las letras de tier se encienden como un
  neón (opacidad y brillo, 300 ms). No hay animaciones de entrada por tarjeta.
- Con `prefers-reduced-motion: reduce` se anulan transiciones y animaciones.

## Maquetación
```
┌ cabecera fija (translúcida) ────────────────────────────────────────┐
│ Project Zomboid · 42.21     [buscar] [categorías] [compacto] [tema] │
│ S  M16 · M1A                                                        │
│ A  M1911 · B-F · JS-14 · Trapper · JS-2000 · JS-3T                  │
└─────────────────────────────────────────────────────────────────────┘
 ┌──┐  ┌ tarjeta ─┐ ┌ tarjeta ─┐ ┌ tarjeta ─┐
 │S │  │ nombre   │ │          │ │          │
 │  │  │ medidores│ │          │ │          │
 └──┘  └──────────┘ └──────────┘ └──────────┘
 ┌──┐  ...
 │A │
 └──┘
 Zonas en el mapa · Hipótesis revisadas · Método y fuentes
```
- Texto alineado a la izquierda. La letra de tier ocupa una columna propia y es `sticky`.
- 1280 px: rejilla de tarjetas `auto-fill, minmax(340px, 1fr)` (tres columnas).
- 390 px: la letra pasa encima del grupo, una tarjeta por fila, sin scroll horizontal
  de página (la fila de resumen hace scroll interno si no cabe).
- Modo compacto: filas densas de una línea, sin detalles, pensado para monitor secundario.

## Cabecera
- Fila 1: marca y pestañas a la izquierda; buscador y botones a la derecha. «Mapa» lleva texto
  porque es un destino; el resto de botones (compacto, tema, flotante) van solo con icono y tooltip.
- Debajo, una fila por filtro con su etiqueta en una columna fija («Tipo», «Munición», «Grupo»),
  para que todos los botones empiecen a la misma altura.
- El resumen S/A va separado por una línea fina: es navegación, no filtro.
- La versión del juego va a la derecha de la línea de estado.
- En móvil las pestañas pasan a su propia fila con scroll interno y la cabecera deja de ser fija.

## Curación
- El elemento memorable es la regla «Todo antes de vendar», en ámbar, con el orden de cura en cinco
  pasos numerados con el mismo trazo hueco que las letras de tier. Es una secuencia real.
- Tarjetas de herida con la franja lateral según gravedad: leve `--ink-3`, media `--ink`, grave y
  mortal `--sodium` (mortal además con la etiqueta rellena). La gravedad siempre va escrita.

## Iconos de las armas
- Icono de inventario del juego (32 × 32 px), ampliado a 56 px con `image-rendering: pixelated`
  para conservar el pixel art sin desenfoque.
- Va en una casilla de 64 px con radio de 16 px y un halo claro (`--icon-light`), porque los
  iconos son metal oscuro y se perderían sobre el fondo nocturno. En oscuro llevan además un
  contorno de 1 px (`--icon-filter`).
- Versión de 24 px en el resumen de la cabecera y de 40 px en el modo compacto.

## Accesibilidad no negociable
- `:focus-visible` con anillo de 2 px en `--phosphor` y separación de 2 px.
- Objetivos táctiles de al menos 40 px.
- Los medidores llevan el valor escrito al lado; la barra solo refuerza.
- Funciona a 390 px y 1280 px sin scroll horizontal.

## Armas con mods
- Solo tres datos por arma: daño, munición y rareza. Cada tier es una tabla, ordenada por daño máximo,
  con la letra del tier fija a la izquierda como en Armas.
- El motivo del tier va en el tooltip de la fila; las notas del mod y sus fallos, en un desplegable cerrado al final.
- Grupo «×» (no se consiguen): letra hueca en `--ink-3` y rareza «No se consigue» con borde discontinuo.
- Por debajo de 860 px cada fila pasa a dos líneas: nombre arriba; daño, munición y rareza debajo.
