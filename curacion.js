/* Guía de curación de Project Zomboid 42.21.0, leída de los ficheros del juego instalado (solo lectura).
   Reglas: media/lua/client/XpSystem/ISUI/ISHealthPanel.lua (qué opción aparece y con qué objetos) y
   media/lua/shared/TimedActions/IS*.lua (duración, dolor, experiencia). Objetos: media/scripts/generated/items/*.txt.
   Nombres: traducción oficial (Translate/ES). Los campos order, severity y tip son valoración propia, no datos del juego. */
window.PZ_HEAL = {
  meta: {
    version: '42.21.0',
    consulted: '14/10/2026',
    panelFile: 'media/lua/client/XpSystem/ISUI/ISHealthPanel.lua',
    actionsDir: 'media/lua/shared/TimedActions/',
    recipesFile: 'media/scripts/generated/recipes/recipes_medical.txt',
    fluidsFiles: 'media/scripts/generated/fluids.txt y fluids_Alcoholic.txt',
    tooltipFile: 'media/lua/shared/Translate/ES/Tooltip.json',
  },

  // Regla que sale de BaseHandler:isInjured(): casi todas las curas exigen que la zona NO esté vendada.
  rule: {
    title: 'Todo antes de vendar',
    text: 'Con la zona vendada, el menú de curación no ofrece desinfectar, suturar, extraer la bala, extraer cristales, limpiar la quemadura ni poner cataplasmas. Si ya la vendaste, quita el vendaje, cura y vuelve a vendar. La férula es la excepción: se pone aunque haya vendaje.',
    src: 'BaseHandler:isInjured() en ISHealthPanel.lua',
    order: [
      { t: 'Extraer', d: 'Bala o cristales. Hasta que no salen los cristales, el juego no deja suturar.' },
      { t: 'Suturar', d: 'Solo heridas profundas. Suturar puede infectar la herida, así que se desinfecta después.' },
      { t: 'Desinfectar', d: 'Alcohol sobre la herida abierta. Duele, pero es lo que protege de la infección.' },
      { t: 'Vendar', d: 'Mejor con venda esterilizada. Es el último paso porque bloquea los demás.' },
      { t: 'Entablillar', d: 'Si hay fractura. Se puede hacer en cualquier momento, con o sin vendaje.' },
    ],
  },

  groups: [
    { id: 'all', label: 'Todas' },
    { id: 'sangre', label: 'Sangrado y cortes' },
    { id: 'extraer', label: 'Bala y cristales' },
    { id: 'hueso', label: 'Fracturas' },
    { id: 'quemadura', label: 'Quemaduras' },
    { id: 'infeccion', label: 'Infección y mordiscos' },
  ],

  // severity: valoración propia para ordenar. leve · media · grave · mortal
  injuries: [
    {
      id: 'hemorragia', group: 'sangre', severity: 'grave',
      name: 'Hemorragia', panel: ['Hemorragia'],
      what: 'La zona pierde sangre. Acompaña a cortes, heridas profundas, balas y mordiscos.',
      steps: [
        { t: 'Vendar ya', d: 'Para cortar el sangrado. Si la herida necesita más cosas (extraer, suturar, desinfectar), venda primero para no desangrarte y después quita el vendaje para terminar la cura.', items: ['Venda', 'Venda esterilizada', 'Retales de tela', 'Tela esterilizada', 'Tirita'] },
        { t: 'Cura la herida de debajo', d: 'Mira qué pone el panel de salud (laceración, herida profunda, bala…) y sigue su ficha.' },
      ],
      facts: [['Vendar', '120 − 4 × nivel de Medicina'], ['Experiencia', '+5 Medicina (si la zona lo permite)'], ['Hemofobia', '+50 de pánico al vendar si sangra']],
      tip: 'Cualquier cosa que vende sirve en un apuro, pero las vendas sucias no cuentan: el juego les da una vida de vendaje de 0 y pueden infectar.',
      src: ['ISApplyBandage.lua: complete() y getDuration()'],
    },
    {
      id: 'rasguno', group: 'sangre', severity: 'leve',
      name: 'Rasguño', panel: ['Rasguño', 'Rasguñado'],
      what: 'Herida superficial. Se cura sola con tiempo si no se infecta.',
      steps: [
        { t: 'Desinfectar', d: 'Con alcohol, antes de vendar.', items: ['Toallitas con alcohol', 'Algodón con alcohol', 'Bote de desinfectante', 'Licor de 40 % o más'] },
        { t: 'Vendar', d: 'Una tirita basta. Cámbiala cuando se ensucie.', items: ['Tirita', 'Venda', 'Venda esterilizada'] },
      ],
      facts: [['Desinfectar', '120 − 4 × nivel'], ['Dolor al desinfectar', '≈ 52 − nivel ÷ 2 con alcohol puro']],
      tip: 'Si te lo hizo un zombi, la cura no evita el contagio: solo evita una infección normal de la herida.',
      src: ['ISDisinfect.lua: complete() y getDuration()'],
    },
    {
      id: 'laceracion', group: 'sangre', severity: 'media',
      name: 'Laceración', panel: ['Laceración', 'Herido'],
      what: 'Corte que sangra más que un rasguño. No necesita puntos.',
      steps: [
        { t: 'Desinfectar', d: 'Antes de vendar.', items: ['Toallitas con alcohol', 'Algodón con alcohol', 'Bote de desinfectante', 'Licor de 40 % o más'] },
        { t: 'Vendar', d: 'Con venda o tela esterilizada si tienes; protege de la infección.', items: ['Venda esterilizada', 'Tela esterilizada', 'Venda'] },
        { t: 'Opcional: cataplasma de llantén', d: 'Según el juego, «ayuda a la recuperación de heridas». Se aplica antes de vendar.', items: ['Cataplasma de llantén'] },
      ],
      facts: [['Vendar', '120 − 4 × nivel'], ['Cataplasma', '120 − 4 × nivel']],
      src: ['ISDisinfect.lua', 'ISApplyBandage.lua', 'Tooltip_Plantain en Tooltip.json'],
    },
    {
      id: 'profunda', group: 'sangre', severity: 'grave',
      name: 'Herida profunda', panel: ['Herida profunda', 'Suturado'],
      what: 'Herida que necesita puntos. Sin sutura sangra y tarda mucho en cerrar.',
      steps: [
        { t: 'Extraer cristales si los hay', d: 'El juego no ofrece suturar mientras queden cristales en la herida.' },
        { t: 'Suturar', d: 'Con aguja de sutura, o con aguja normal más hilo. Si llevas pinzas quirúrgicas en el inventario, la sutura es más rápida y duele menos.', items: ['Aguja de sutura', 'Aguja + Hilo', 'Pinzas quirúrgicas (opcional)'] },
        { t: 'Desinfectar', d: 'Suturar puede infectar la herida: 1 entre 5 a nivel 0 de Medicina, 1 entre 30 a nivel 10.', items: ['Bote de desinfectante', 'Toallitas con alcohol', 'Licor de 40 % o más'] },
        { t: 'Vendar', d: 'Con venda esterilizada si puedes.', items: ['Venda esterilizada', 'Venda'] },
        { t: 'Quitar los puntos', d: 'Cuando el panel ya no la marque como herida, quítalos desde el mismo menú.' },
      ],
      facts: [['Suturar', '200 − 4 × nivel (150 − 4 × nivel con aguja de sutura o pinzas quirúrgicas)'], ['Dolor', '20 − nivel (10 − nivel con aguja de sutura o pinzas quirúrgicas)'], ['Infección al suturar', '1 entre 5 + 2,5 × nivel'], ['Experiencia', '+15 Medicina']],
      src: ['HStitch en ISHealthPanel.lua', 'ISStitch.lua: complete() y getDuration()'],
    },
    {
      id: 'bala', group: 'extraer', severity: 'grave',
      name: 'Bala alojada', panel: ['Bala alojada', 'Bala'],
      what: 'Un disparo dejó la bala dentro. Hay que sacarla antes de nada.',
      steps: [
        { t: 'Extraer bala', d: 'Necesitas una herramienta que el juego acepte para extraer balas. Es la cura que más duele.', items: ['Pinzas', 'Pinzas quirúrgicas', 'Pinzas de depilar', 'Alicates', 'Multiherramienta'] },
        { t: 'Trata lo que quede', d: 'Después mira el panel: si queda herida profunda, sutura; si sangra, venda. Desinfecta antes de vendar.' },
      ],
      facts: [['Extraer', '250 − 6 × nivel'], ['Dolor', '80 − nivel'], ['Experiencia', '+20 Medicina'], ['Hemofobia', '+50 de pánico']],
      tip: 'Toma analgésicos antes si puedes: 80 de dolor de golpe es mucho.',
      src: ['HRemoveBullet en ISHealthPanel.lua', 'ISRemoveBullet.lua'],
    },
    {
      id: 'cristales', group: 'extraer', severity: 'media',
      name: 'Fragmentos de vidrio alojados', panel: ['Fragmentos de vidrio alojados'],
      what: 'Te cortaste con una ventana rota o al saltar por ella. Mientras quede vidrio no se puede suturar.',
      steps: [
        { t: 'Extraer cristales', d: 'Con una herramienta aceptada, o con la mano si no tienes ninguna (tarda el doble y duele 30 más).', items: ['Pinzas', 'Pinzas quirúrgicas', 'Pinzas de depilar', 'Alicates', 'Multiherramienta', 'Mano'] },
        { t: 'Desinfectar y vendar', d: 'Y suturar antes si el panel marca herida profunda.' },
      ],
      facts: [['Extraer', '150 − 4 × nivel (300 − 4 × nivel con la mano)'], ['Dolor', '30 − nivel (+30 con la mano)'], ['Experiencia', '+15 Medicina']],
      tip: 'Quita los cristales de las ventanas antes de saltar y te ahorras esta ficha.',
      src: ['HRemoveGlass en ISHealthPanel.lua', 'ISRemoveGlass.lua'],
    },
    {
      id: 'fractura', group: 'hueso', severity: 'grave',
      name: 'Fractura', panel: ['Fractura', 'Entablillado'],
      what: 'Hueso roto por una caída o un golpe. Duele mucho y en las piernas te hace ir lento.',
      steps: [
        { t: 'Entablillar', d: 'Con una férula, o con madera más retales de tela. No se puede en cabeza ni torso.', items: ['Férula', 'Tablón + Retales de tela', 'Rama de árbol + Retales de tela', 'Vara de madera + Retales de tela'] },
        { t: 'Opcional: cataplasma de consuelda', d: 'Según el juego, «ayuda a la recuperación de fracturas óseas».', items: ['Cataplasma de consuelda'] },
        { t: 'Analgésicos para el dolor', d: 'La férula no quita el dolor.', items: ['Analgésicos'] },
        { t: 'Quitar la férula', d: 'Cuando la fractura ya no aparezca en el panel. Recuperas la madera y, si no era una férula, también los retales.' },
      ],
      facts: [['Entablillar', '140 − 4 × nivel'], ['Calidad de la férula', '(nivel + 1) ÷ 2: mejor cuanto más Medicina'], ['Experiencia', '+15 Medicina']],
      tip: 'Si puedes, que la ponga quien tenga más Medicina: la calidad depende de su nivel.',
      src: ['HSplint en ISHealthPanel.lua', 'ISSplint.lua', 'Tooltip_Comfrey en Tooltip.json'],
    },
    {
      id: 'quemadura', group: 'quemadura', severity: 'media',
      name: 'Quemadura', panel: ['Quemadura', 'Necesita limpieza'],
      what: 'Fuego o algo muy caliente. Si el panel dice «Necesita limpieza», hay que lavarla antes de vendar.',
      steps: [
        { t: 'Limpiar quemadura', d: 'Con una venda o tela de potencia 2 o más: se gasta en la limpieza. Las tiritas y las vendas sucias no sirven.', items: ['Venda', 'Venda esterilizada', 'Retales de tela', 'Tela esterilizada', 'Retales de tela vaquera', 'Retales de cuero'] },
        { t: 'Vendar', d: 'Con otra venda limpia.', items: ['Venda esterilizada', 'Venda'] },
      ],
      facts: [['Limpiar', '250 − 6 × nivel'], ['Dolor', '60 − nivel'], ['Experiencia', '+10 Medicina']],
      src: ['HCleanBurn en ISHealthPanel.lua', 'ISCleanBurn.lua'],
    },
    {
      id: 'infeccion', group: 'infeccion', severity: 'grave',
      name: 'Herida infectada', panel: ['Infectado'],
      what: 'Infección normal de la herida, por no desinfectar, por una venda sucia o tras suturar. No es la zombificación.',
      steps: [
        { t: 'Desinfectar', d: 'Quita el vendaje, desinfecta y vuelve a vendar.', items: ['Bote de desinfectante', 'Toallitas con alcohol', 'Algodón con alcohol', 'Licor de 40 % o más'] },
        { t: 'Antibióticos', d: 'Según el juego, «combaten infecciones de heridas».', items: ['Antibióticos'] },
        { t: 'Opcional: cataplasma de ajo silvestre', d: 'Según el juego, «ayuda a luchar contra la infección».', items: ['Cataplasma de ajo silvestre'] },
        { t: 'Venda esterilizada y cambiarla a menudo', d: 'Una venda sucia puede volver a infectar.', items: ['Venda esterilizada', 'Tela esterilizada'] },
      ],
      facts: [['Desinfectar', '120 − 4 × nivel'], ['Cataplasma', '120 − 4 × nivel']],
      src: ['ISDisinfect.lua', 'ISApplyBandage.lua (una venda infectada infecta la zona)', 'Tooltip_Antibiotics y Tooltip_Garlic en Tooltip.json'],
    },
    {
      id: 'mordisco', group: 'infeccion', severity: 'mortal',
      name: 'Mordisco', panel: ['Mordisco', 'Mordido'],
      what: 'Mordisco de zombi. Con los ajustes por defecto contagia siempre la infección zombi, y esa no tiene cura.',
      steps: [
        { t: 'Vendar y desinfectar igual', d: 'Para no desangrarte ni sumar una infección normal mientras te queda tiempo.', items: ['Venda', 'Bote de desinfectante'] },
        { t: 'No hay cura', d: 'El juego avisa de que los antibióticos «no pueden evitar la zombificación». Aprovecha el tiempo para dejar tus cosas a salvo.' },
      ],
      facts: [['Antibióticos', 'No evitan la zombificación']],
      community: 'Probabilidad de contagio zombi con los ajustes por defecto, según la comunidad: mordisco 100 %, laceración 25 % y rasguño 7 %. No está en los ficheros Lua del juego y no se ha podido comprobar en ellos.',
      src: ['Tooltip_Antibiotics en Tooltip.json'],
    },
    {
      id: 'sucio', group: 'infeccion', severity: 'leve',
      name: 'Vendaje sucio', panel: ['Vendaje sucio'],
      what: 'El vendaje se ha empapado. Ya no protege y puede infectar la herida.',
      steps: [
        { t: 'Quitar vendaje', d: 'Al quitarlo recuperas la venda sucia (si estaba gastada, sale ya usada).' },
        { t: 'Vendar con una limpia', d: 'Desinfecta antes si la herida sigue abierta.', items: ['Venda esterilizada', 'Venda'] },
        { t: 'Lavar la sucia para reutilizarla', d: 'Receta «Limpiar venda»: 0,5 de agua. Luego se puede esterilizar.' },
      ],
      facts: [['Venda sucia puesta', 'Vida de vendaje 0: no sirve']],
      src: ['ISApplyBandage.lua: complete()', 'CleanBandage en recipes_medical.txt'],
    },
  ],

  // Objetos que el menú de curación acepta, leídos de los scripts. value: potencia de vendaje (BandagePower).
  kit: [
    {
      id: 'vendar', title: 'Vendar', rule: 'Cualquier objeto con potencia de vendaje mayor que 0. La potencia se suma a la vida del vendaje.',
      items: [
        { n: 'Venda esterilizada', v: 4, note: 'Esterilizada: protege de la infección' },
        { n: 'Venda', v: 4 },
        { n: 'Tela esterilizada', v: 2, note: 'Esterilizada' },
        { n: 'Retales de tela', v: 2 },
        { n: 'Retales de tela vaquera', v: 2 },
        { n: 'Retales de cuero', v: 2 },
        { n: 'Tirita', v: 1.5, note: 'No sirve para limpiar quemaduras' },
        { n: 'Venda sucia, tela sucia, retales sucios', v: 0.5, note: 'Vida 0 al ponerla: lávala antes' },
      ],
    },
    {
      id: 'desinfectar', title: 'Desinfectar', rule: 'Objetos con alcohol de potencia 4, o un recipiente con más de 0,15 de un líquido de 40 % de alcohol o más. Cada uso gasta 0,15.',
      items: [
        { n: 'Bote de desinfectante', note: 'Alcohol isopropílico, 100 %' },
        { n: 'Toallitas con alcohol' },
        { n: 'Algodón con alcohol', note: 'Se fabrica: ver abajo' },
        { n: 'Perfume', note: '80 %' },
        { n: 'Colonia', note: '70 %' },
        { n: 'Vodka, whisky, whisky escocés, ginebra, ron, tequila, brandy, curaçao', note: '40 %' },
      ],
    },
    {
      id: 'extraer', title: 'Extraer bala o cristales', rule: 'Las mismas herramientas valen para las dos cosas. Los cristales también salen con la mano.',
      items: [
        { n: 'Pinzas' }, { n: 'Pinzas quirúrgicas', note: 'Además hacen la sutura más rápida y menos dolorosa' }, { n: 'Pinzas de depilar' },
        { n: 'Pinzas (forjadas)' }, { n: 'Alicates' }, { n: 'Multiherramienta' },
      ],
    },
    {
      id: 'suturar', title: 'Suturar', rule: 'Aguja de sutura sola, o cualquier aguja de coser más cualquier hilo.',
      items: [
        { n: 'Aguja de sutura', note: 'Sola. Más rápida y menos dolorosa' },
        { n: 'Aguja, aguja de hueso, aguja de latón o aguja forjada', note: 'Junto con un hilo' },
        { n: 'Hilo, hilo de aramida, hilo de tendón, hilo dental, sedal o línea de pesca premium', note: 'El hilo que se gaste' },
      ],
    },
    {
      id: 'entablillar', title: 'Entablillar', rule: 'Férula sola, o madera más retales de tela. Desde el menú de curación solo valen los retales de tela; la receta de férula acepta también vaqueros y cuero.',
      items: [
        { n: 'Férula' },
        { n: 'Tablón, rama de árbol o vara de madera', note: 'Junto con retales de tela' },
      ],
    },
    {
      id: 'remedios', title: 'Cataplasmas y medicinas', rule: 'Solo una cataplasma a la vez por zona: si ya tiene una, el menú no ofrece otra.',
      items: [
        { n: 'Cataplasma de llantén', note: 'Heridas' },
        { n: 'Cataplasma de consuelda', note: 'Fracturas' },
        { n: 'Cataplasma de ajo silvestre', note: 'Infección' },
        { n: 'Antibióticos', note: 'Infección de herida. No zombificación' },
        { n: 'Analgésicos', note: 'Dolor' },
      ],
    },
  ],

  recipes: [
    { n: 'Esterilizar con alcohol', in: 'Venda o retales de tela + 0,1 de alcohol isopropílico, vodka o whisky', out: 'Venda esterilizada o tela esterilizada', t: 40, id: 'DisinfectRag' },
    { n: 'Esterilizar hirviendo', in: 'Venda o retales de tela + 0,5 de agua caliente', out: 'Venda esterilizada o tela esterilizada', t: 100, id: 'DisinfectBandage' },
    { n: 'Lavar venda sucia', in: 'Venda o retales sucios (tela, vaquero, cuero) + 0,5 de agua', out: 'La misma venda limpia, sin esterilizar', t: 40, id: 'CleanBandage' },
    { n: 'Férula', in: 'Retales (tela, vaquero o cuero, limpios o sucios) + tablón, rama de árbol o vara de madera', out: 'Férula', t: 70, id: 'MakeSplint' },
    { n: 'Algodón con alcohol', in: 'Bolas de algodón + 0,1 de alcohol isopropílico, vodka o whisky', out: 'Algodón con alcohol', t: 20, id: 'DouseCottonInAlcohol' },
    { n: 'Cataplasmas', in: 'Mortero + 5 de llantén, consuelda o ajo silvestre', out: 'Cataplasma de llantén, consuelda o ajo silvestre', t: 60, id: 'MakePlantainPoultice', learn: true },
    { n: 'Retales de tela', in: 'Una sábana (10 retales) o una prenda de algodón', out: 'Retales de tela', t: 40, id: 'RipSheets' },
  ],

  doctor: [
    'Todas las curas tardan menos con más nivel de Medicina: entre 4 y 6 unidades menos por nivel.',
    'El dolor que añade cada cura baja 1 por nivel (medio punto al desinfectar).',
    'Vendas: la vida del vendaje es un número al azar entre (nivel + 1) × 0,5 y (nivel + 1) × 1, más la potencia de la venda.',
    'Férulas y cataplasmas también salen mejores con más nivel.',
    'Suturar infecta la herida 1 vez entre 5 + 2,5 × nivel: 1 entre 5 a nivel 0 y 1 entre 30 a nivel 10.',
    'Experiencia de Medicina: vendar +5, limpiar quemadura +10, suturar, entablillar y extraer cristales +15, extraer bala +20.',
  ],

  sources: [
    { title: 'Probabilidades de contagio zombi (comunidad)', url: 'https://pzfans.com/bitten_in_pz_build_41_vs_42_survival_hacks_unveiled/', where: 'Sitio de aficionados, no oficial. Cifras por defecto que se repiten en la comunidad.', version: '42.19' },
  ],
};
