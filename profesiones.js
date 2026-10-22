/* Generado desde los scripts de Project Zomboid 42.21.0 (solo lectura).
   Datos: media/scripts/generated/characters/. Los campos guide, suggestedTraits, role y community son valoraciones. */
window.PZ_PROF = {
 "meta": {
  "version": "42.21.0",
  "consulted": "13/10/2026",
  "files": [
   "media/scripts/generated/characters/character_professions.txt",
   "media/scripts/generated/characters/character_traits.txt"
  ],
  "pointsRule": "Puntos disponibles = coste de la profesión + puntos de rasgos negativos − coste de rasgos positivos (más los puntos libres de la partida, si los hay). Comprobado en media/lua/client/OptionScreens/CharacterCreationProfession.lua, líneas 645, 703 y 864.",
  "levelRule": "El número de cada habilidad es el nivel inicial. Se suma al de los rasgos; fuerza y forma física parten de 5; el total se limita entre 0 y 10. Comprobado en CharacterCreationProfession.lua, líneas 405 a 432.",
  "perkRule": "Nombres de habilidad según PerkFactory y la traducción oficial (IG_UI.json, ES): Lightfoot = Pies ligeros, Sneak = Sigilo, Nimble = Destreza, PlantScavenging = Rebuscar.",
  "map": {
   "url": "https://pzmap.org/",
   "version": "42.20"
  }
 },
 "roles": {
  "combate": "Combate",
  "oficios": "Construcción y técnica",
  "comida": "Comida y naturaleza",
  "medicina": "Medicina",
  "movilidad": "Sigilo y movilidad",
  "libre": "Libre"
 },
 "sources": {
  "pzwiki_occ": {
   "title": "Profesiones (projectzomboid.wiki)",
   "titleOriginal": "Occupations",
   "url": "https://projectzomboid.wiki/builds/occupations/",
   "version": "42.20",
   "where": "Web de fans. Dice estar actualizada el 28/08/2026 y no indica autor. Incluye una profesión, “Brewer”, que no existe en 42.21."
  },
  "pzfans_builds": {
   "title": "Las mejores configuraciones para principiantes en Project Zomboid (versión 42.19)",
   "titleOriginal": "Best Beginner Builds for Project Zomboid (Build 42.19)",
   "url": "https://pzfans.com/the-best-builds-for-beginners/",
   "version": "42.19",
   "where": "pzfans.com, web de fans, sin fecha ni autor."
  }
 },
 "builds": [
  {
   "name": "Hachero",
   "original": "Axeman",
   "prof": "lumberjack",
   "profName": "Leñador",
   "profCost": 0,
   "good": [
    {
     "id": "fit",
     "name": "En forma",
     "cost": 6
    },
    {
     "id": "stout",
     "name": "Robusto",
     "cost": 6
    },
    {
     "id": "brave",
     "name": "Valiente",
     "cost": 4
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "cost": 2
    }
   ],
   "bad": [
    {
     "id": "highthirst",
     "name": "Mucha sed",
     "cost": -2
    },
    {
     "id": "smoker",
     "name": "Fumador",
     "cost": -3
    },
    {
     "id": "slowreader",
     "name": "Lector lento",
     "cost": -2
    },
    {
     "id": "weakstomach",
     "name": "Estómago delicado",
     "cost": -2
    },
    {
     "id": "shortsighted",
     "name": "Miope",
     "cost": -2
    },
    {
     "id": "heartyappetite",
     "name": "Comilón",
     "cost": -4
    },
    {
     "id": "slowhealer",
     "name": "Sanador lento",
     "cost": -3
    }
   ],
   "spent": 18,
   "refund": 18,
   "left": 0,
   "claimedLeft": 0,
   "matches": true
  },
  {
   "name": "Fantasma",
   "original": "Ghost",
   "prof": "burglar",
   "profName": "Ladrón",
   "profCost": -6,
   "good": [
    {
     "id": "dextrous",
     "name": "Hábil",
     "cost": 2
    },
    {
     "id": "inconspicuous",
     "name": "Discreto",
     "cost": 4
    },
    {
     "id": "nightvision",
     "name": "Ojos de gato",
     "cost": 3
    },
    {
     "id": "graceful",
     "name": "Sigiloso",
     "cost": 4
    }
   ],
   "bad": [
    {
     "id": "highthirst",
     "name": "Mucha sed",
     "cost": -2
    },
    {
     "id": "smoker",
     "name": "Fumador",
     "cost": -3
    },
    {
     "id": "slowreader",
     "name": "Lector lento",
     "cost": -2
    },
    {
     "id": "weakstomach",
     "name": "Estómago delicado",
     "cost": -2
    },
    {
     "id": "shortsighted",
     "name": "Miope",
     "cost": -2
    },
    {
     "id": "slowhealer",
     "name": "Sanador lento",
     "cost": -3
    },
    {
     "id": "heartyappetite",
     "name": "Comilón",
     "cost": -4
    },
    {
     "id": "disorganized",
     "name": "Desordenado",
     "cost": -6
    }
   ],
   "spent": 13,
   "refund": 24,
   "left": 5,
   "claimedLeft": 5,
   "matches": true
  },
  {
   "name": "Todoterreno",
   "original": "Everyman",
   "prof": "unemployed",
   "profName": "Desempleado",
   "profCost": 8,
   "good": [
    {
     "id": "fit",
     "name": "En forma",
     "cost": 6
    },
    {
     "id": "stout",
     "name": "Robusto",
     "cost": 6
    },
    {
     "id": "fastlearner",
     "name": "Aprendiz rápido",
     "cost": 6
    },
    {
     "id": "dextrous",
     "name": "Hábil",
     "cost": 2
    },
    {
     "id": "needslesssleep",
     "name": "Insomne",
     "cost": 3
    }
   ],
   "bad": [
    {
     "id": "highthirst",
     "name": "Mucha sed",
     "cost": -2
    },
    {
     "id": "smoker",
     "name": "Fumador",
     "cost": -3
    },
    {
     "id": "slowreader",
     "name": "Lector lento",
     "cost": -2
    },
    {
     "id": "weakstomach",
     "name": "Estómago delicado",
     "cost": -2
    },
    {
     "id": "shortsighted",
     "name": "Miope",
     "cost": -2
    },
    {
     "id": "slowhealer",
     "name": "Sanador lento",
     "cost": -3
    },
    {
     "id": "heartyappetite",
     "name": "Comilón",
     "cost": -4
    }
   ],
   "spent": 23,
   "refund": 18,
   "left": 3,
   "claimedLeft": 3,
   "matches": true
  },
  {
   "name": "Obrero",
   "original": "Construction Worker",
   "prof": "constructionworker",
   "profName": "Obrero",
   "profCost": -2,
   "good": [
    {
     "id": "fit",
     "name": "En forma",
     "cost": 6
    },
    {
     "id": "stout",
     "name": "Robusto",
     "cost": 6
    },
    {
     "id": "handy",
     "name": "Manitas",
     "cost": 8
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "cost": 2
    }
   ],
   "bad": [
    {
     "id": "highthirst",
     "name": "Mucha sed",
     "cost": -2
    },
    {
     "id": "smoker",
     "name": "Fumador",
     "cost": -3
    },
    {
     "id": "slowreader",
     "name": "Lector lento",
     "cost": -2
    },
    {
     "id": "weakstomach",
     "name": "Estómago delicado",
     "cost": -2
    },
    {
     "id": "shortsighted",
     "name": "Miope",
     "cost": -2
    },
    {
     "id": "heartyappetite",
     "name": "Comilón",
     "cost": -4
    },
    {
     "id": "slowhealer",
     "name": "Sanador lento",
     "cost": -3
    },
    {
     "id": "disorganized",
     "name": "Desordenado",
     "cost": -6
    }
   ],
   "spent": 22,
   "refund": 24,
   "left": 0,
   "claimedLeft": 0,
   "matches": true
  }
 ],
 "professions": [
  {
   "id": "fireofficer",
   "name": "Bombero",
   "nameEn": "Firefighter",
   "desc": null,
   "descEn": null,
   "cost": 0,
   "icon": "icons/prof/profession_fireofficer2.png",
   "iconName": "profession_fireofficer2",
   "role": "combate",
   "roleLabel": "Combate",
   "boosts": [
    {
     "id": "Sprinting",
     "name": "Carrera",
     "level": 1
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "level": 1
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "level": 1
    },
    {
     "id": "Axe",
     "name": "Hacha",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Sprinting",
     "name": "Carrera",
     "desc": "Aumenta la velocidad al correr.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Axe",
     "name": "Hacha",
     "desc": "Aumenta la velocidad de ataque y el daño al usar hachas, y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [],
   "guide": {
    "summary": "Profesión gratuita con algo de todo para pelear y aguantar.",
    "strengths": [
     "Cuesta 0 puntos.",
     "Hacha 1 y un nivel extra de Carrera, Fuerza y Estado físico."
    ],
    "weaknesses": [
     "Ninguna habilidad de oficio para montar la base."
    ],
    "firstDays": [
     "Consigue un hacha cuanto antes: ya tienes nivel 1.",
     "Limpia una zona pequeña antes de saquear a fondo.",
     "Busca libros del oficio que pienses subir."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "nameEn": "Outdoorsy",
     "desc": "No le afectan las condiciones climáticas adversas.",
     "cost": 2,
     "boosts": [],
     "recipes": [],
     "line": 766,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "firestorage",
     "label": "Almacenes de bomberos",
     "count": 20
    },
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier S: arma o herramienta más habilidades de combate o recolección. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 95
  },
  {
   "id": "lumberjack",
   "name": "Leñador",
   "nameEn": "Lumberjack",
   "desc": "Movimiento ligeramente más rápido a través de zonas forestales y bosques.",
   "descEn": "Slightly faster movement through forests and woodland. Less muscle strain from chopping trees.",
   "cost": 0,
   "icon": "icons/prof/profession_lumberjack.png",
   "iconName": "profession_lumberjack",
   "role": "combate",
   "roleLabel": "Combate",
   "boosts": [
    {
     "id": "Axe",
     "name": "Hacha",
     "level": 2
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "level": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Axe",
     "name": "Hacha",
     "desc": "Aumenta la velocidad de ataque y el daño al usar hachas, y reduce la fatiga muscular que provocan.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "axeman",
     "name": "Señor de las hachas",
     "nameEn": "Ax-pert",
     "desc": "Rompe las puertas el doble de rápido con un hacha. Ataca con hachas más rápidamente.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 70,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [],
   "guide": {
    "summary": "El especialista en hachas: talar y pelear con la misma herramienta.",
    "strengths": [
     "Hacha 2 y rasgo gratis que acelera el golpe con hacha.",
     "Se mueve algo más rápido por el bosque."
    ],
    "weaknesses": [
     "Depende de encontrar un hacha pronto."
    ],
    "firstDays": [
     "Busca un hacha en ferreterías y almacenes.",
     "Tala para conseguir troncos y tablas de la base.",
     "Vigila la fatiga muscular al talar."
    ]
   },
   "suggestedTraits": [
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    }
   ],
   "community": [
    {
     "src": "pzfans_builds",
     "text": "La propone como base de su configuración “Hachero”.",
     "build": "Hachero"
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 124
  },
  {
   "id": "policeofficer",
   "name": "Agente de policía",
   "nameEn": "Police Officer",
   "desc": null,
   "descEn": null,
   "cost": -4,
   "icon": "icons/prof/profession_policeofficer2.png",
   "iconName": "profession_policeofficer2",
   "role": "combate",
   "roleLabel": "Combate",
   "boosts": [
    {
     "id": "Aiming",
     "name": "Puntería",
     "level": 4
    },
    {
     "id": "Reloading",
     "name": "Recarga",
     "level": 1
    },
    {
     "id": "Nimble",
     "name": "Destreza",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Aiming",
     "name": "Puntería",
     "desc": "Aumenta tu probabilidad de acertar a un objetivo con armas de fuego y de hacer daño adicional.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "Nimble",
     "name": "Destreza",
     "desc": "Aumenta la velocidad de movimiento mientras estás en \"postura de combate\" y reduce el ruido de tus pasos.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Reloading",
     "name": "Recarga",
     "desc": "Aumenta la velocidad de recarga de las armas de fuego y los cargadores. Se entrena recargando armas de fuego.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [],
   "guide": {
    "summary": "La mejor puntería inicial del juego.",
    "strengths": [
     "Puntería 4 y Recarga 1 desde el primer día.",
     "Sabe sacar partido a cualquier arma de fuego."
    ],
    "weaknesses": [
     "Cuesta 4 puntos.",
     "Las armas hacen mucho ruido y la munición se acaba."
    ],
    "firstDays": [
     "Revisa comisarías para armas y munición.",
     "Usa el arma solo cuando el ruido no te condene.",
     "Lleva un arma cuerpo a cuerpo de respaldo."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "eagleeyed",
     "name": "Vista de águila",
     "nameEn": "Eagle Eyed",
     "desc": "Transición de visibilidad más rápida. Mayor arco de visión. Miras de armas más efectivas a larga distancia.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 270,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "target_shooter",
     "name": "Tirador de precisión",
     "nameEn": "Target Shooter",
     "desc": "",
     "cost": 5,
     "boosts": [
      {
       "id": "Aiming",
       "name": "Puntería",
       "level": 1
      }
     ],
     "recipes": [],
     "line": 515,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "policegunstorage",
     "label": "Armeros de comisaría",
     "count": 15
    },
    {
     "room": "gunstore",
     "label": "Armerías",
     "count": 30
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 180
  },
  {
   "id": "veteran",
   "name": "Veterano",
   "nameEn": "Veteran",
   "desc": null,
   "descEn": null,
   "cost": -8,
   "icon": "icons/prof/profession_veteran2.png",
   "iconName": "profession_veteran2",
   "role": "combate",
   "roleLabel": "Combate",
   "boosts": [
    {
     "id": "Aiming",
     "name": "Puntería",
     "level": 2
    },
    {
     "id": "Reloading",
     "name": "Recarga",
     "level": 2
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Aiming",
     "name": "Puntería",
     "desc": "Aumenta tu probabilidad de acertar a un objetivo con armas de fuego y de hacer daño adicional.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "Reloading",
     "name": "Recarga",
     "desc": "Aumenta la velocidad de recarga de las armas de fuego y los cargadores. Se entrena recargando armas de fuego.",
     "level": 2,
     "fromProfession": 2
    }
   ],
   "freeTraits": [
    {
     "id": "desensitized",
     "name": "Insensible",
     "nameEn": "Desensitized",
     "desc": "Menos propenso a entrar en pánico. Ignora la incomodidad.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 237,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "MakeTarpChestRig",
     "name": "Hacer arnés con lona"
    }
   ],
   "guide": {
    "summary": "Tirador curtido que no entra en pánico.",
    "strengths": [
     "Rasgo gratis Insensible: casi no sufre pánico.",
     "Puntería 2 y Recarga 2."
    ],
    "weaknesses": [
     "La profesión más cara: 8 puntos."
    ],
    "firstDays": [
     "Aprovecha que el pánico no te frena en grupos grandes.",
     "Busca armas en armerías y zonas militares.",
     "Compensa el coste con rasgos negativos que no te molesten."
    ]
   },
   "suggestedTraits": [
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "eagleeyed",
     "name": "Vista de águila",
     "nameEn": "Eagle Eyed",
     "desc": "Transición de visibilidad más rápida. Mayor arco de visión. Miras de armas más efectivas a larga distancia.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 270,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "keenhearing",
     "name": "Oído fino",
     "nameEn": "Keen Hearing",
     "desc": "Mayor radio de percepción.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 600,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "gunstore",
     "label": "Armerías",
     "count": 30
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9
    },
    {
     "room": "armystorage",
     "label": "Almacenes militares",
     "count": 22
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 250
  },
  {
   "id": "tailor",
   "name": "Sastre",
   "nameEn": "Tailor",
   "desc": null,
   "descEn": null,
   "cost": 2,
   "icon": "icons/prof/profession_tailor.png",
   "iconName": "profession_tailor",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Tailoring",
     "name": "Sastrería",
     "level": 4
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Tailoring",
     "name": "Sastrería",
     "desc": "Aumenta la calidad de las reparaciones de ropa y del acolchado defensivo de las prendas.",
     "level": 4,
     "fromProfession": 4
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "KnitBalaclavaFace",
     "name": "Tejer asamontañas abierto"
    },
    {
     "id": "KnitBalaclavaFull",
     "name": "Tejer pasamontañas completo"
    },
    {
     "id": "KnitBeany",
     "name": "Tejer gorro de lana"
    },
    {
     "id": "KnitDoily",
     "name": "Tejer mantelito"
    },
    {
     "id": "KnitLegwarmers",
     "name": "Tejer calentadores de pierna"
    },
    {
     "id": "KnitScarf",
     "name": "Tejer bufanda"
    },
    {
     "id": "KnitSocks",
     "name": "Tejer calcetines gruesos"
    },
    {
     "id": "KnitSweaterVest",
     "name": "Tejer chaleco de cuello en V"
    },
    {
     "id": "KnitWoolyHat",
     "name": "Tejer gorro de lana"
    },
    {
     "id": "SewCrudeLeatherBackpack",
     "name": "Coser mochila de cuero pequeña"
    },
    {
     "id": "SewHideBoots",
     "name": "Coser botas de piel"
    },
    {
     "id": "SewHidePants",
     "name": "Coser pantalones de piel"
    },
    {
     "id": "SewHideSleepingBag",
     "name": "Coser saco de dormir de piel"
    },
    {
     "id": "SewHideCoat",
     "name": "Coser abrigo de piel"
    },
    {
     "id": "SewHideHoodie",
     "name": "Coser chaqueta con capucha de piel"
    },
    {
     "id": "SewHideJacket",
     "name": "Coser chaqueta de piel"
    },
    {
     "id": "SewHideRobe",
     "name": "Coser Túnica de Cuero"
    },
    {
     "id": "SewHideHat",
     "name": "Coser Sombrero de Cuero"
    },
    {
     "id": "MakeTarpChestRig",
     "name": "Hacer arnés con lona"
    },
    {
     "id": "AssembleSmallFramepack",
     "name": "Crear mochila de cuero pequeña reforzada"
    },
    {
     "id": "AssembleLargeFramepack",
     "name": "Crear mochila de cuero reforzada"
    },
    {
     "id": "AssembleAdvancedFramepack",
     "name": "Crear mochila con armazón"
    },
    {
     "id": "AssembleAdvancedLargeFramepack",
     "name": "Crear mochila con armazón grande"
    },
    {
     "id": "MakeGarbageBagTankTop",
     "name": "Crear chaleco de bolsa de basura"
    },
    {
     "id": "MakeTarpTankTop",
     "name": "Crear chaleco de lona"
    },
    {
     "id": "MakeGarbageBagDress",
     "name": "Crear vestido de bolsa de basura"
    },
    {
     "id": "MakeTarpDress",
     "name": "Crear vestido de lona"
    },
    {
     "id": "WeaveTwineShoes",
     "name": "Tejer zapatos de cuerda"
    },
    {
     "id": "SewLeatherCodpiece",
     "name": "Coser coquilla de cuero"
    },
    {
     "id": "SewLeatherGorget",
     "name": "Coser protector de cuello de cuero"
    },
    {
     "id": "SewHolster",
     "name": "Coser funda"
    },
    {
     "id": "SewHolsterDouble",
     "name": "Coser funda doble"
    },
    {
     "id": "MakeWesternBoots",
     "name": "Coser botas vaqueras"
    },
    {
     "id": "SewBelt",
     "name": "Coser cinturón"
    },
    {
     "id": "SewLeatherToolRoll",
     "name": "Coser estuche de herramientas de cuero"
    },
    {
     "id": "SewSandals",
     "name": "Coser sandalias"
    },
    {
     "id": "SewLeatherGloves",
     "name": "Coser guantes de cuero"
    },
    {
     "id": "SewLeatherWaterBag",
     "name": "Coser bolsa de agua de cuero"
    },
    {
     "id": "SewBandolier",
     "name": "Coser Bandolera"
    },
    {
     "id": "SewShellsBandolier",
     "name": "Coser Bandolera de Cartuchos"
    },
    {
     "id": "SewHideWallet",
     "name": "Coser Cartera de Cuero"
    },
    {
     "id": "SewFurredHideCoat",
     "name": "Coser Abrigo de Cuero con Pelaje"
    },
    {
     "id": "SewFurredHideJacket",
     "name": "Coser Chaqueta de Cuero con Pelaje"
    },
    {
     "id": "SewLeatherGaiter",
     "name": "Coser Polaina de Cuero"
    },
    {
     "id": "SewLeatherVambrace",
     "name": "Coser protección de antebrazo de cuero"
    },
    {
     "id": "SewElbowPads",
     "name": "Coser Coderas"
    },
    {
     "id": "SewKneePads",
     "name": "Coser Rodilleras"
    },
    {
     "id": "SewLeatherPants",
     "name": "Coser Pantalones de Cuero"
    },
    {
     "id": "SewHideFannyBag",
     "name": "Coser riñonera de piel"
    },
    {
     "id": "SewClothSatchel",
     "name": "Coser morral"
    },
    {
     "id": "SewDressKnees",
     "name": "Coser vestido a la rodilla"
    },
    {
     "id": "SewLongjohns",
     "name": "Coser ropa interior larga"
    },
    {
     "id": "SewShirt",
     "name": "Coser camisa"
    },
    {
     "id": "SewSkirtKnees",
     "name": "Coser falda a la rodilla"
    },
    {
     "id": "SewTrousers",
     "name": "Coser pantalones"
    },
    {
     "id": "SewDressLong",
     "name": "Coser vestido largo"
    },
    {
     "id": "SewLongjohnsBottom",
     "name": "Coser pantalones de ropa interior larga"
    },
    {
     "id": "SewShirtSleeveless",
     "name": "Coser chaleco"
    },
    {
     "id": "SewSkirtLong",
     "name": "Coser falda larga"
    }
   ],
   "guide": {
    "summary": "Ropa reforzada y reparada: más protección con lo que llevas.",
    "strengths": [
     "Sastrería 4 y 59 recetas.",
     "Da 2 puntos en vez de costarlos."
    ],
    "weaknesses": [
     "Nada de combate."
    ],
    "firstDays": [
     "Consigue aguja, hilo y tijeras.",
     "Refuerza la ropa con parches para protegerte de mordiscos.",
     "Repara la ropa en vez de tirarla."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 232
  },
  {
   "id": "carpenter",
   "name": "Carpintero",
   "nameEn": "Carpenter",
   "desc": null,
   "descEn": null,
   "cost": -2,
   "icon": "icons/prof/profession_hammer2.png",
   "iconName": "profession_hammer2",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "level": 4
    },
    {
     "id": "Carving",
     "name": "Tallar",
     "level": 1
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "level": 1
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "level": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "desc": "Permite construir estructuras de madera.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "desc": "Permite crear construcciones de ladrillo y piedra más fuertes y duraderas.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas contundentes cortas, y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Carving",
     "name": "Tallar",
     "desc": "Permite crear pequeños objetos de madera.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "MakeBrakeWeapon",
     "name": "Fabricar garrote con disco de freno"
    },
    {
     "id": "CanReinforceLongWeapon",
     "name": "Reforzar bate de béisbol con latas"
    },
    {
     "id": "CanReinforceShortWeapon",
     "name": "Reforzar mango con latas"
    },
    {
     "id": "CanReinforceWeapon",
     "name": "Puede reforzar arma"
    },
    {
     "id": "MakeGardenForkHeadWeapon",
     "name": "Fabricar bate de béisbol con cabeza de horquilla"
    },
    {
     "id": "RailspikeBaseballBat",
     "name": "Fabricar bate de béisbol con clavos de riel"
    },
    {
     "id": "MakeRailspikeCudgel",
     "name": "Fabricar garrote con clavos de riel"
    },
    {
     "id": "MakeRailspikeLongHandle",
     "name": "Hacer Mango Largo con Clavo de Riel"
    },
    {
     "id": "MakeRakeHeadWeapon",
     "name": "Fabricar bate de béisbol con cabeza de rastrillo"
    },
    {
     "id": "MakeSawPlank",
     "name": "Fabricar tablón con sierra"
    },
    {
     "id": "MakeSawbladeCudgel",
     "name": "Fabricar garrote con disco de sierra"
    },
    {
     "id": "MakeSawbladeLongHandle",
     "name": "Fabricar mango largo con disco de sierra"
    },
    {
     "id": "MakeSawbladePlank",
     "name": "Fabricar tablón con sierra"
    },
    {
     "id": "MakeSawbladeTableLeg",
     "name": "Fabricar pata de mesa con disco de sierra"
    },
    {
     "id": "MakeSawbladeWeapon",
     "name": "Fabricar bate con disco de sierra"
    },
    {
     "id": "SheetMetalWeapon",
     "name": "Fabricar bate de béisbol reforzado con chapa"
    },
    {
     "id": "MakeSpadeHeadCudgel",
     "name": "Fabricar garrote con cabeza de pala"
    },
    {
     "id": "MakeAdvancedFramepackFrame",
     "name": "Fabricar armazón de mochila"
    },
    {
     "id": "MakeAdvancedLargeFramepackFrame",
     "name": "Fabricar armazón de mochila grande"
    }
   ],
   "guide": {
    "summary": "La base sólida: barricadas, muebles y armas reforzadas.",
    "strengths": [
     "Carpintería 4, el atajo para construir pronto.",
     "19 recetas, sobre todo de armas improvisadas."
    ],
    "weaknesses": [
     "Poca ayuda en combate."
    ],
    "firstDays": [
     "Consigue martillo, sierra y clavos.",
     "Refuerza ventanas y puertas de tu primer refugio.",
     "Fabrica armas reforzadas con las recetas que ya conoces."
    ]
   },
   "suggestedTraits": [
    {
     "id": "handy",
     "name": "Manitas",
     "nameEn": "Handy",
     "desc": "Construcciones más rápidas y resistentes.",
     "cost": 8,
     "boosts": [
      {
       "id": "Carving",
       "name": "Tallar",
       "level": 1
      },
      {
       "id": "Maintenance",
       "name": "Mantenimiento",
       "level": 1
      },
      {
       "id": "Masonry",
       "name": "Albañilería",
       "level": 1
      },
      {
       "id": "Woodwork",
       "name": "Carpintería",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "BarbedWireWeapon",
       "name": "Fabricar escoba con alambre de espino"
      },
      {
       "id": "BoltBat",
       "name": "Fabricar bate de béisbol metálico con tornillos"
      },
      {
       "id": "MakeBrakeWeapon",
       "name": "Fabricar garrote con disco de freno"
      },
      {
       "id": "MakeBucketMaul",
       "name": "Fabricar maza con cubo"
      },
      {
       "id": "CanReinforceLongWeapon",
       "name": "Reforzar bate de béisbol con latas"
      },
      {
       "id": "CanReinforceShortWeapon",
       "name": "Reforzar mango con latas"
      },
      {
       "id": "CanReinforceWeapon",
       "name": "Puede reforzar arma"
      },
      {
       "id": "MakeGardenForkHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de horquilla"
      },
      {
       "id": "MakeKettleMaul",
       "name": "Fabricar maza con tetera"
      },
      {
       "id": "RailspikeBaseballBat",
       "name": "Fabricar bate de béisbol con clavos de riel"
      },
      {
       "id": "MakeRailspikeCudgel",
       "name": "Fabricar garrote con clavos de riel"
      },
      {
       "id": "MakeRailspikeIronPipe",
       "name": "Fabricar tubo metálico con clavo de riel"
      },
      {
       "id": "MakeRailspikeLongHandle",
       "name": "Hacer Mango Largo con Clavo de Riel"
      },
      {
       "id": "MakeRailspikeWeapon",
       "name": "Fabricar bate corto con clavo de riel"
      },
      {
       "id": "MakeRakeHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de rastrillo"
      },
      {
       "id": "MakeSawPlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeCudgel",
       "name": "Fabricar garrote con disco de sierra"
      },
      {
       "id": "MakeSawbladeLongHandle",
       "name": "Fabricar mango largo con disco de sierra"
      },
      {
       "id": "MakeSawbladePlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeTableLeg",
       "name": "Fabricar pata de mesa con disco de sierra"
      },
      {
       "id": "MakeSawbladeWeapon",
       "name": "Fabricar bate con disco de sierra"
      },
      {
       "id": "SheetMetalWeapon",
       "name": "Fabricar bate de béisbol reforzado con chapa"
      },
      {
       "id": "MakeSpadeHeadCudgel",
       "name": "Fabricar garrote con cabeza de pala"
      },
      {
       "id": "MakeScrewdriver",
       "name": "Fabricar destornillador improvisado"
      }
     ],
     "line": 401,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "organized",
     "name": "Organizado",
     "nameEn": "Organized",
     "desc": "Mayor capacidad de almacenamiento de contenedores.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 755,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier A: destacan a partir del tercer día, con base, vehículos o medicina. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 24
  },
  {
   "id": "electrician",
   "name": "Electricista",
   "nameEn": "Electrician",
   "desc": "Puede manejar generadores.",
   "descEn": "Can operate generators.",
   "cost": -2,
   "icon": "icons/prof/profession_electrician.png",
   "iconName": "profession_electrician",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Electricity",
     "name": "Electrónica",
     "level": 5
    }
   ],
   "skills": [
    {
     "id": "Electricity",
     "name": "Electrónica",
     "desc": "Permite crear y mantener dispositivos eléctricos.",
     "level": 5,
     "fromProfession": 5
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "Generator",
     "name": "Generador"
    },
    {
     "id": "MakeRemoteControllerV1",
     "name": "Hacer controlador remoto V1"
    },
    {
     "id": "MakeRemoteControllerV2",
     "name": "Hacer controlador remoto V2"
    },
    {
     "id": "MakeRemoteControllerV3",
     "name": "Hacer controlador remoto V3"
    },
    {
     "id": "MakeRemoteTrigger",
     "name": "Hacer disparador remoto"
    },
    {
     "id": "MakeTimer",
     "name": "Hacer temporizador"
    },
    {
     "id": "CraftMakeshiftRadio",
     "name": "Fabricar radio casera"
    },
    {
     "id": "CraftMakeshiftHAMRadio",
     "name": "Fabricar emisora casera"
    },
    {
     "id": "CraftMakeshiftWalkieTalkie",
     "name": "Fabricar Walkie-talkie casero"
    },
    {
     "id": "MakeImprovisedFlashlight",
     "name": "Fabricar linterna improvisada"
    },
    {
     "id": "MakeImprovisedLantern",
     "name": "Fabricar farol improvisado"
    },
    {
     "id": "MakeImprovisedLighter",
     "name": "Fabricar mechero improvisado"
    }
   ],
   "guide": {
    "summary": "Luz y generadores sin leer un solo libro.",
    "strengths": [
     "Electrónica 5 y la receta del generador.",
     "Radios, linternas y mandos improvisados."
    ],
    "weaknesses": [
     "Nada de combate."
    ],
    "firstDays": [
     "Busca un generador y combustible antes de que se vaya la luz.",
     "Fabrica una radio o walkie con las recetas que ya tienes.",
     "Combínalo con alguien que pelee si jugáis en grupo."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "organized",
     "name": "Organizado",
     "nameEn": "Organized",
     "desc": "Mayor capacidad de almacenamiento de contenedores.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 755,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fastlearner",
     "name": "Aprendiz rápido",
     "nameEn": "Fast Learner",
     "desc": "Aumenta los puntos de XP ganados.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 303,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    },
    {
     "room": "gasstore",
     "label": "Gasolineras",
     "count": 97
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier A: destacan a partir del tercer día, con base, vehículos o medicina. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 63
  },
  {
   "id": "constructionworker",
   "name": "Obrero",
   "nameEn": "Construction Worker",
   "desc": null,
   "descEn": null,
   "cost": -2,
   "icon": "icons/prof/profession_constructionworker2.png",
   "iconName": "profession_constructionworker2",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "level": 2
    },
    {
     "id": "Blunt",
     "name": "Arma larga contundente",
     "level": 1
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "level": 2
    },
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "level": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "desc": "Permite crear construcciones de ladrillo y piedra más fuertes y duraderas.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas contundentes cortas, y reduce la fatiga muscular que provocan.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "Blunt",
     "name": "Arma larga contundente",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas contundentes largas, y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "desc": "Permite construir estructuras de madera.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [],
   "guide": {
    "summary": "Obras y golpes: Albañilería y Arma corta contundente.",
    "strengths": [
     "Arma corta contundente 2 y Albañilería 2.",
     "Carpintería 1 y Mantenimiento 1."
    ],
    "weaknesses": [
     "No da recetas."
    ],
    "firstDays": [
     "Usa martillos y llaves como arma mientras subes el resto.",
     "Aprovecha la albañilería para muros y hornos.",
     "Mantenimiento 1 alarga la vida de tus armas."
    ]
   },
   "suggestedTraits": [
    {
     "id": "handy",
     "name": "Manitas",
     "nameEn": "Handy",
     "desc": "Construcciones más rápidas y resistentes.",
     "cost": 8,
     "boosts": [
      {
       "id": "Carving",
       "name": "Tallar",
       "level": 1
      },
      {
       "id": "Maintenance",
       "name": "Mantenimiento",
       "level": 1
      },
      {
       "id": "Masonry",
       "name": "Albañilería",
       "level": 1
      },
      {
       "id": "Woodwork",
       "name": "Carpintería",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "BarbedWireWeapon",
       "name": "Fabricar escoba con alambre de espino"
      },
      {
       "id": "BoltBat",
       "name": "Fabricar bate de béisbol metálico con tornillos"
      },
      {
       "id": "MakeBrakeWeapon",
       "name": "Fabricar garrote con disco de freno"
      },
      {
       "id": "MakeBucketMaul",
       "name": "Fabricar maza con cubo"
      },
      {
       "id": "CanReinforceLongWeapon",
       "name": "Reforzar bate de béisbol con latas"
      },
      {
       "id": "CanReinforceShortWeapon",
       "name": "Reforzar mango con latas"
      },
      {
       "id": "CanReinforceWeapon",
       "name": "Puede reforzar arma"
      },
      {
       "id": "MakeGardenForkHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de horquilla"
      },
      {
       "id": "MakeKettleMaul",
       "name": "Fabricar maza con tetera"
      },
      {
       "id": "RailspikeBaseballBat",
       "name": "Fabricar bate de béisbol con clavos de riel"
      },
      {
       "id": "MakeRailspikeCudgel",
       "name": "Fabricar garrote con clavos de riel"
      },
      {
       "id": "MakeRailspikeIronPipe",
       "name": "Fabricar tubo metálico con clavo de riel"
      },
      {
       "id": "MakeRailspikeLongHandle",
       "name": "Hacer Mango Largo con Clavo de Riel"
      },
      {
       "id": "MakeRailspikeWeapon",
       "name": "Fabricar bate corto con clavo de riel"
      },
      {
       "id": "MakeRakeHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de rastrillo"
      },
      {
       "id": "MakeSawPlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeCudgel",
       "name": "Fabricar garrote con disco de sierra"
      },
      {
       "id": "MakeSawbladeLongHandle",
       "name": "Fabricar mango largo con disco de sierra"
      },
      {
       "id": "MakeSawbladePlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeTableLeg",
       "name": "Fabricar pata de mesa con disco de sierra"
      },
      {
       "id": "MakeSawbladeWeapon",
       "name": "Fabricar bate con disco de sierra"
      },
      {
       "id": "SheetMetalWeapon",
       "name": "Fabricar bate de béisbol reforzado con chapa"
      },
      {
       "id": "MakeSpadeHeadCudgel",
       "name": "Fabricar garrote con cabeza de pala"
      },
      {
       "id": "MakeScrewdriver",
       "name": "Fabricar destornillador improvisado"
      }
     ],
     "line": 401,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    }
   ],
   "community": [
    {
     "src": "pzfans_builds",
     "text": "La propone como base de su configuración “Obrero”.",
     "build": "Obrero"
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 45
  },
  {
   "id": "repairman",
   "name": "Reparador",
   "nameEn": "DIY Expert",
   "desc": null,
   "descEn": null,
   "cost": -2,
   "icon": "icons/prof/profession_repairman2.png",
   "iconName": "profession_repairman2",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "level": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 2
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "level": 1
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "desc": "Permite crear construcciones de ladrillo y piedra más fuertes y duraderas.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas contundentes cortas, y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "desc": "Permite construir estructuras de madera.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "inventive_prof",
     "name": "Inventivo",
     "nameEn": "Inventive",
     "desc": "Requiere un nivel de habilidad más bajo para investigar recetas a partir de objetos o aprenderlas automáticamente.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 558,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "BarbedWireWeapon",
     "name": "Fabricar escoba con alambre de espino"
    },
    {
     "id": "BoltBat",
     "name": "Fabricar bate de béisbol metálico con tornillos"
    },
    {
     "id": "MakeBrakeWeapon",
     "name": "Fabricar garrote con disco de freno"
    },
    {
     "id": "MakeBucketMaul",
     "name": "Fabricar maza con cubo"
    },
    {
     "id": "CanReinforceLongWeapon",
     "name": "Reforzar bate de béisbol con latas"
    },
    {
     "id": "CanReinforceShortWeapon",
     "name": "Reforzar mango con latas"
    },
    {
     "id": "CanReinforceWeapon",
     "name": "Puede reforzar arma"
    },
    {
     "id": "MakeGardenForkHeadWeapon",
     "name": "Fabricar bate de béisbol con cabeza de horquilla"
    },
    {
     "id": "MakeKettleMaul",
     "name": "Fabricar maza con tetera"
    },
    {
     "id": "RailspikeBaseballBat",
     "name": "Fabricar bate de béisbol con clavos de riel"
    },
    {
     "id": "MakeRailspikeCudgel",
     "name": "Fabricar garrote con clavos de riel"
    },
    {
     "id": "MakeRailspikeIronPipe",
     "name": "Fabricar tubo metálico con clavo de riel"
    },
    {
     "id": "MakeRailspikeLongHandle",
     "name": "Hacer Mango Largo con Clavo de Riel"
    },
    {
     "id": "MakeRailspikeWeapon",
     "name": "Fabricar bate corto con clavo de riel"
    },
    {
     "id": "MakeRakeHeadWeapon",
     "name": "Fabricar bate de béisbol con cabeza de rastrillo"
    },
    {
     "id": "MakeSawPlank",
     "name": "Fabricar tablón con sierra"
    },
    {
     "id": "MakeSawbladeCudgel",
     "name": "Fabricar garrote con disco de sierra"
    },
    {
     "id": "MakeSawbladeLongHandle",
     "name": "Fabricar mango largo con disco de sierra"
    },
    {
     "id": "MakeSawbladePlank",
     "name": "Fabricar tablón con sierra"
    },
    {
     "id": "MakeSawbladeTableLeg",
     "name": "Fabricar pata de mesa con disco de sierra"
    },
    {
     "id": "MakeSawbladeWeapon",
     "name": "Fabricar bate con disco de sierra"
    },
    {
     "id": "SheetMetalWeapon",
     "name": "Fabricar bate de béisbol reforzado con chapa"
    },
    {
     "id": "MakeSpadeHeadCudgel",
     "name": "Fabricar garrote con cabeza de pala"
    },
    {
     "id": "MakeScrewdriver",
     "name": "Fabricar destornillador improvisado"
    }
   ],
   "guide": {
    "summary": "Manitas generalista: aprende recetas con facilidad.",
    "strengths": [
     "Mantenimiento 2 y rasgo Inventivo: menos requisitos para aprender recetas.",
     "24 recetas."
    ],
    "weaknesses": [
     "Ninguna habilidad destaca mucho."
    ],
    "firstDays": [
     "Repara y mantén tus armas: duran más.",
     "Investiga objetos para desbloquear recetas.",
     "Elige un oficio principal y súbelo con libros."
    ]
   },
   "suggestedTraits": [
    {
     "id": "handy",
     "name": "Manitas",
     "nameEn": "Handy",
     "desc": "Construcciones más rápidas y resistentes.",
     "cost": 8,
     "boosts": [
      {
       "id": "Carving",
       "name": "Tallar",
       "level": 1
      },
      {
       "id": "Maintenance",
       "name": "Mantenimiento",
       "level": 1
      },
      {
       "id": "Masonry",
       "name": "Albañilería",
       "level": 1
      },
      {
       "id": "Woodwork",
       "name": "Carpintería",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "BarbedWireWeapon",
       "name": "Fabricar escoba con alambre de espino"
      },
      {
       "id": "BoltBat",
       "name": "Fabricar bate de béisbol metálico con tornillos"
      },
      {
       "id": "MakeBrakeWeapon",
       "name": "Fabricar garrote con disco de freno"
      },
      {
       "id": "MakeBucketMaul",
       "name": "Fabricar maza con cubo"
      },
      {
       "id": "CanReinforceLongWeapon",
       "name": "Reforzar bate de béisbol con latas"
      },
      {
       "id": "CanReinforceShortWeapon",
       "name": "Reforzar mango con latas"
      },
      {
       "id": "CanReinforceWeapon",
       "name": "Puede reforzar arma"
      },
      {
       "id": "MakeGardenForkHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de horquilla"
      },
      {
       "id": "MakeKettleMaul",
       "name": "Fabricar maza con tetera"
      },
      {
       "id": "RailspikeBaseballBat",
       "name": "Fabricar bate de béisbol con clavos de riel"
      },
      {
       "id": "MakeRailspikeCudgel",
       "name": "Fabricar garrote con clavos de riel"
      },
      {
       "id": "MakeRailspikeIronPipe",
       "name": "Fabricar tubo metálico con clavo de riel"
      },
      {
       "id": "MakeRailspikeLongHandle",
       "name": "Hacer Mango Largo con Clavo de Riel"
      },
      {
       "id": "MakeRailspikeWeapon",
       "name": "Fabricar bate corto con clavo de riel"
      },
      {
       "id": "MakeRakeHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de rastrillo"
      },
      {
       "id": "MakeSawPlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeCudgel",
       "name": "Fabricar garrote con disco de sierra"
      },
      {
       "id": "MakeSawbladeLongHandle",
       "name": "Fabricar mango largo con disco de sierra"
      },
      {
       "id": "MakeSawbladePlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeTableLeg",
       "name": "Fabricar pata de mesa con disco de sierra"
      },
      {
       "id": "MakeSawbladeWeapon",
       "name": "Fabricar bate con disco de sierra"
      },
      {
       "id": "SheetMetalWeapon",
       "name": "Fabricar bate de béisbol reforzado con chapa"
      },
      {
       "id": "MakeSpadeHeadCudgel",
       "name": "Fabricar garrote con cabeza de pala"
      },
      {
       "id": "MakeScrewdriver",
       "name": "Fabricar destornillador improvisado"
      }
     ],
     "line": 401,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fastlearner",
     "name": "Aprendiz rápido",
     "nameEn": "Fast Learner",
     "desc": "Aumenta los puntos de XP ganados.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 303,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier B: premian estilos de juego concretos o necesitan rasgos de combate de apoyo. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 199
  },
  {
   "id": "engineer",
   "name": "Ingeniero",
   "nameEn": "Engineer",
   "desc": "Puede fabricar trampas y explosivos. Puede manejar generadores.",
   "descEn": "Can make traps and explosives. Can operate generators.",
   "cost": -4,
   "icon": "icons/prof/profession_engineer.png",
   "iconName": "profession_engineer",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Electricity",
     "name": "Electrónica",
     "level": 1
    },
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "level": 1
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Masonry",
     "name": "Albañilería",
     "desc": "Permite crear construcciones de ladrillo y piedra más fuertes y duraderas.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Woodwork",
     "name": "Carpintería",
     "desc": "Permite construir estructuras de madera.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Electricity",
     "name": "Electrónica",
     "desc": "Permite crear y mantener dispositivos eléctricos.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "MakeAerosolBomb",
     "name": "Hacer bomba de aerosol"
    },
    {
     "id": "MakeFlameBomb",
     "name": "Hacer bomba incendiaria"
    },
    {
     "id": "MakePipeBomb",
     "name": "Hacer bomba de tubo"
    },
    {
     "id": "MakeNoiseMaker",
     "name": "Hacer señuelo sonoro"
    },
    {
     "id": "MakeSmokeBomb",
     "name": "Hacer bomba de humo"
    },
    {
     "id": "MakeFirecracker",
     "name": "Hacer petardos"
    },
    {
     "id": "MakeCraftedGasMaskFilter",
     "name": "Hacer filtro para máscara de gas"
    },
    {
     "id": "MakeImprovisedGasMask",
     "name": "Hacer máscara de gas improvisada"
    },
    {
     "id": "RechargeFilters",
     "name": "Recargar filtros"
    },
    {
     "id": "MakeImprovisedFlashlight",
     "name": "Fabricar linterna improvisada"
    },
    {
     "id": "MakeImprovisedLantern",
     "name": "Fabricar farol improvisado"
    },
    {
     "id": "MakeImprovisedLighter",
     "name": "Fabricar mechero improvisado"
    },
    {
     "id": "Generator",
     "name": "Generador"
    }
   ],
   "guide": {
    "summary": "Trampas, explosivos y generadores.",
    "strengths": [
     "Puede fabricar trampas y explosivos según su descripción.",
     "Maneja generadores."
    ],
    "weaknesses": [
     "Habilidades iniciales bajas: solo nivel 1 en Electrónica, Carpintería y Albañilería."
    ],
    "firstDays": [
     "Prepara trampas o señuelos ruidosos para alejar hordas.",
     "Asegura un generador.",
     "Sube Electrónica con libros para aprovechar sus recetas."
    ]
   },
   "suggestedTraits": [
    {
     "id": "handy",
     "name": "Manitas",
     "nameEn": "Handy",
     "desc": "Construcciones más rápidas y resistentes.",
     "cost": 8,
     "boosts": [
      {
       "id": "Carving",
       "name": "Tallar",
       "level": 1
      },
      {
       "id": "Maintenance",
       "name": "Mantenimiento",
       "level": 1
      },
      {
       "id": "Masonry",
       "name": "Albañilería",
       "level": 1
      },
      {
       "id": "Woodwork",
       "name": "Carpintería",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "BarbedWireWeapon",
       "name": "Fabricar escoba con alambre de espino"
      },
      {
       "id": "BoltBat",
       "name": "Fabricar bate de béisbol metálico con tornillos"
      },
      {
       "id": "MakeBrakeWeapon",
       "name": "Fabricar garrote con disco de freno"
      },
      {
       "id": "MakeBucketMaul",
       "name": "Fabricar maza con cubo"
      },
      {
       "id": "CanReinforceLongWeapon",
       "name": "Reforzar bate de béisbol con latas"
      },
      {
       "id": "CanReinforceShortWeapon",
       "name": "Reforzar mango con latas"
      },
      {
       "id": "CanReinforceWeapon",
       "name": "Puede reforzar arma"
      },
      {
       "id": "MakeGardenForkHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de horquilla"
      },
      {
       "id": "MakeKettleMaul",
       "name": "Fabricar maza con tetera"
      },
      {
       "id": "RailspikeBaseballBat",
       "name": "Fabricar bate de béisbol con clavos de riel"
      },
      {
       "id": "MakeRailspikeCudgel",
       "name": "Fabricar garrote con clavos de riel"
      },
      {
       "id": "MakeRailspikeIronPipe",
       "name": "Fabricar tubo metálico con clavo de riel"
      },
      {
       "id": "MakeRailspikeLongHandle",
       "name": "Hacer Mango Largo con Clavo de Riel"
      },
      {
       "id": "MakeRailspikeWeapon",
       "name": "Fabricar bate corto con clavo de riel"
      },
      {
       "id": "MakeRakeHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de rastrillo"
      },
      {
       "id": "MakeSawPlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeCudgel",
       "name": "Fabricar garrote con disco de sierra"
      },
      {
       "id": "MakeSawbladeLongHandle",
       "name": "Fabricar mango largo con disco de sierra"
      },
      {
       "id": "MakeSawbladePlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeTableLeg",
       "name": "Fabricar pata de mesa con disco de sierra"
      },
      {
       "id": "MakeSawbladeWeapon",
       "name": "Fabricar bate con disco de sierra"
      },
      {
       "id": "SheetMetalWeapon",
       "name": "Fabricar bate de béisbol reforzado con chapa"
      },
      {
       "id": "MakeSpadeHeadCudgel",
       "name": "Fabricar garrote con cabeza de pala"
      },
      {
       "id": "MakeScrewdriver",
       "name": "Fabricar destornillador improvisado"
      }
     ],
     "line": 401,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "organized",
     "name": "Organizado",
     "nameEn": "Organized",
     "desc": "Mayor capacidad de almacenamiento de contenedores.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 755,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 74
  },
  {
   "id": "mechanics",
   "name": "Mecánico",
   "nameEn": "Mechanic",
   "desc": "Familiarizado con el mantenimiento y reparación de todos los modelos de vehículos en las carreteras de Kentucky.",
   "descEn": "Familiar with the maintenance and repair of all vehicle models on the roads of Kentucky.",
   "cost": -4,
   "icon": "icons/prof/profession_mechanic.png",
   "iconName": "profession_mechanic",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Mechanics",
     "name": "Mecánica",
     "level": 4
    },
    {
     "id": "MetalWelding",
     "name": "Metalistería",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Mechanics",
     "name": "Mecánica",
     "desc": "Aumenta la eficacia de las reparaciones de vehículos.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "MetalWelding",
     "name": "Metalistería",
     "desc": "Permite construir barricadas de metal y objetos.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "mechanics2",
     "name": "Mecánico aficionado",
     "nameEn": "Vehicle Knowledge",
     "desc": "Tiene un conocimiento detallado de los modelos de vehículos comunes y comerciales, y de sus reparaciones.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 668,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "Basic Mechanics",
     "name": "Mecánica básica",
     "own": true
    },
    {
     "id": "Intermediate Mechanics",
     "name": "Mecánica intermedia",
     "own": true
    },
    {
     "id": "Advanced Mechanics",
     "name": "Mecánica avanzada",
     "own": true
    }
   ],
   "guide": {
    "summary": "Coches en marcha y reparados desde el primer día.",
    "strengths": [
     "Mecánica 4 y conocimiento de todos los modelos de vehículo.",
     "Metalistería 1 y 3 recetas."
    ],
    "weaknesses": [
     "Cuesta 4 puntos.",
     "No arranca coches sin llave: eso es del ladrón."
    ],
    "firstDays": [
     "Busca llaves en casas y cadáveres cerca de coches.",
     "Repara un vehículo fiable y llénalo en una gasolinera.",
     "Guarda piezas de repuesto de talleres."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "speeddemon",
     "name": "Demonio de la velocidad",
     "nameEn": "Speed Demon",
     "desc": "Conduce muy rápido.",
     "cost": 1,
     "boosts": [],
     "recipes": [],
     "line": 899,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "mechanic",
     "label": "Talleres",
     "count": 85
    },
    {
     "room": "gasstore",
     "label": "Gasolineras",
     "count": 97
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier A: destacan a partir del tercer día, con base, vehículos o medicina. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 135
  },
  {
   "id": "metalworker",
   "name": "Obrero metalúrgico",
   "nameEn": "Welder",
   "desc": "Puede soldar metal forjado para crear objetos y barricadas.",
   "descEn": "Can weld foraged metal to create items and barricades.",
   "cost": -4,
   "icon": "icons/prof/profession_metalworker.png",
   "iconName": "profession_metalworker",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "MetalWelding",
     "name": "Metalistería",
     "level": 4
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "MetalWelding",
     "name": "Metalistería",
     "desc": "Permite construir barricadas de metal y objetos.",
     "level": 4,
     "fromProfession": 4
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "MakeMetalSheet",
     "name": "Hacer chapa metálica"
    },
    {
     "id": "MakeSmallMetalSheet",
     "name": "Hacer chapa metálica pequeña"
    },
    {
     "id": "MakeScrapMetalHelmet",
     "name": "Fabricar casco de chatarra"
    },
    {
     "id": "MakeScrapMetalShoulderArmor",
     "name": "Fabricar hombrera de chatarra"
    },
    {
     "id": "MakeScrapMetalThighArmor",
     "name": "Fabricar musleras de chatarra"
    },
    {
     "id": "MakeScrapMetalBodyArmor",
     "name": "Fabricar armadura de chatarra"
    },
    {
     "id": "SpikeArmorWelding",
     "name": "Soldar pinchos en armadura metálica"
    },
    {
     "id": "Drill_Draw_Plate",
     "name": "Perforar placa de trefilado"
    },
    {
     "id": "Drill_Heading_Tool",
     "name": "Perforar herramienta de cabeceo"
    },
    {
     "id": "MetalWallLvl1",
     "name": "Pared de metal (Básico)"
    },
    {
     "id": "MetalWallLvl2",
     "name": "Pared de metal (Avanzado)"
    },
    {
     "id": "MetalDoorFrameLvl1",
     "name": "Marco de puerta de metal"
    },
    {
     "id": "MetalWindowFrameLvl1",
     "name": "Marco de ventana de metal"
    },
    {
     "id": "MetalWindowFrameLvl2",
     "name": "Marco de ventana de metal"
    },
    {
     "id": "MetalWallFrame",
     "name": "Marco de pared metálica"
    },
    {
     "id": "MetalDoorFrameLvl2",
     "name": "Marco de puerta de metal"
    },
    {
     "id": "Metal_Stairs",
     "name": "Escaleras metálicas"
    },
    {
     "id": "Metal_Counter_Lvl1",
     "name": "Mostrador de metal"
    },
    {
     "id": "Metal_Counter_Lvl2",
     "name": "Mostrador de metal"
    },
    {
     "id": "Metal_CounterCorner_Lvl1",
     "name": "Esquinero de metal"
    },
    {
     "id": "Metal_CounterCorner_Lvl2",
     "name": "Esquinero de metal"
    },
    {
     "id": "Metal_Crate_Lvl1",
     "name": "Caja de Metal"
    },
    {
     "id": "Metal_Crate_Lvl2",
     "name": "Caja de Metal"
    },
    {
     "id": "Metal_LockerBig_Lvl1",
     "name": "Taquilla Grande de Metal"
    },
    {
     "id": "Metal_LockerBig_Lvl2",
     "name": "Taquilla Grande de Metal"
    },
    {
     "id": "Metal_LockerSmall_Lvl1",
     "name": "Taquilla Pequeña de Metal"
    },
    {
     "id": "Metal_LockerSmall_Lvl2",
     "name": "Taquilla Pequeña de Metal"
    },
    {
     "id": "Metal_Shelves_Lvl1",
     "name": "Estanterías de Metal"
    },
    {
     "id": "Metal_Shelves_Lvl2",
     "name": "Estanterías de Metal"
    },
    {
     "id": "MetalPoleFenceGate",
     "name": "Puerta de valla alta de barrotes"
    },
    {
     "id": "MetalPoleFenceGateSmall",
     "name": "Puerta de valla de barrotes"
    },
    {
     "id": "MetalWireFenceGate",
     "name": "Puerta de alambre"
    },
    {
     "id": "MetalWireFenceGateSmall",
     "name": "Puerta de valla de alambre"
    },
    {
     "id": "MetalFenceLvl1",
     "name": "Valla metálica"
    },
    {
     "id": "MetalFenceLvl2",
     "name": "Valla metálica de nivel 2",
     "own": true
    },
    {
     "id": "MetalSmallWireFence",
     "name": "Valla de alambre"
    }
   ],
   "guide": {
    "summary": "Soldador: barricadas de metal y objetos soldados.",
    "strengths": [
     "Metalistería 4.",
     "36 recetas de metal."
    ],
    "weaknesses": [
     "Necesita soplete, gas y máscara de soldar."
    ],
    "firstDays": [
     "Busca soplete, propano y máscara en talleres y almacenes.",
     "Suelda barricadas de metal en los accesos clave.",
     "Guarda chapa y tubos que encuentres."
    ]
   },
   "suggestedTraits": [
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "organized",
     "name": "Organizado",
     "nameEn": "Organized",
     "desc": "Mayor capacidad de almacenamiento de contenedores.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 755,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "handy",
     "name": "Manitas",
     "nameEn": "Handy",
     "desc": "Construcciones más rápidas y resistentes.",
     "cost": 8,
     "boosts": [
      {
       "id": "Carving",
       "name": "Tallar",
       "level": 1
      },
      {
       "id": "Maintenance",
       "name": "Mantenimiento",
       "level": 1
      },
      {
       "id": "Masonry",
       "name": "Albañilería",
       "level": 1
      },
      {
       "id": "Woodwork",
       "name": "Carpintería",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "BarbedWireWeapon",
       "name": "Fabricar escoba con alambre de espino"
      },
      {
       "id": "BoltBat",
       "name": "Fabricar bate de béisbol metálico con tornillos"
      },
      {
       "id": "MakeBrakeWeapon",
       "name": "Fabricar garrote con disco de freno"
      },
      {
       "id": "MakeBucketMaul",
       "name": "Fabricar maza con cubo"
      },
      {
       "id": "CanReinforceLongWeapon",
       "name": "Reforzar bate de béisbol con latas"
      },
      {
       "id": "CanReinforceShortWeapon",
       "name": "Reforzar mango con latas"
      },
      {
       "id": "CanReinforceWeapon",
       "name": "Puede reforzar arma"
      },
      {
       "id": "MakeGardenForkHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de horquilla"
      },
      {
       "id": "MakeKettleMaul",
       "name": "Fabricar maza con tetera"
      },
      {
       "id": "RailspikeBaseballBat",
       "name": "Fabricar bate de béisbol con clavos de riel"
      },
      {
       "id": "MakeRailspikeCudgel",
       "name": "Fabricar garrote con clavos de riel"
      },
      {
       "id": "MakeRailspikeIronPipe",
       "name": "Fabricar tubo metálico con clavo de riel"
      },
      {
       "id": "MakeRailspikeLongHandle",
       "name": "Hacer Mango Largo con Clavo de Riel"
      },
      {
       "id": "MakeRailspikeWeapon",
       "name": "Fabricar bate corto con clavo de riel"
      },
      {
       "id": "MakeRakeHeadWeapon",
       "name": "Fabricar bate de béisbol con cabeza de rastrillo"
      },
      {
       "id": "MakeSawPlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeCudgel",
       "name": "Fabricar garrote con disco de sierra"
      },
      {
       "id": "MakeSawbladeLongHandle",
       "name": "Fabricar mango largo con disco de sierra"
      },
      {
       "id": "MakeSawbladePlank",
       "name": "Fabricar tablón con sierra"
      },
      {
       "id": "MakeSawbladeTableLeg",
       "name": "Fabricar pata de mesa con disco de sierra"
      },
      {
       "id": "MakeSawbladeWeapon",
       "name": "Fabricar bate con disco de sierra"
      },
      {
       "id": "SheetMetalWeapon",
       "name": "Fabricar bate de béisbol reforzado con chapa"
      },
      {
       "id": "MakeSpadeHeadCudgel",
       "name": "Fabricar garrote con cabeza de pala"
      },
      {
       "id": "MakeScrewdriver",
       "name": "Fabricar destornillador improvisado"
      }
     ],
     "line": 401,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "mechanic",
     "label": "Talleres",
     "count": 85
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    },
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 147
  },
  {
   "id": "smither",
   "name": "Herrero",
   "nameEn": "Blacksmith",
   "desc": "Puede construir un horno de piedra y manipular metales.",
   "descEn": "Can build a stone furnace and work metal.",
   "cost": -6,
   "icon": "icons/prof/profession_smither.png",
   "iconName": "profession_smither",
   "role": "oficios",
   "roleLabel": "Construcción y técnica",
   "boosts": [
    {
     "id": "Blacksmith",
     "name": "Herrería",
     "level": 4
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 1
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Blacksmith",
     "name": "Herrería",
     "desc": "Permite la creación de objetos y artículos de metal.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas contundentes cortas, y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "blacksmith2",
     "name": "Herrería",
     "nameEn": "Blacksmith Knowledge",
     "desc": "Puede usar un yunque para elaborar objetos metálicos.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 104,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "BarbedWireWeapon",
     "name": "Fabricar escoba con alambre de espino"
    },
    {
     "id": "Advanced_Forge",
     "name": "Construir Forja Avanzada"
    },
    {
     "id": "Blast_Furnace",
     "name": "Construir alto horno"
    },
    {
     "id": "Charcoal_Burner_MetalDrum",
     "name": "Quemador de Carbón"
    },
    {
     "id": "Charcoal_Pit",
     "name": "Montón para quemar carbón"
    },
    {
     "id": "Dome_Kiln",
     "name": "Horno - cúpula"
    },
    {
     "id": "Forge",
     "name": "Forja Simple"
    },
    {
     "id": "Smelting_Furnace",
     "name": "Construir horno de fundición"
    },
    {
     "id": "Forge_Primitive_Forge",
     "name": "Construir Forja Primitiva"
    },
    {
     "id": "Primitive_Furnace",
     "name": "Construir horno primitivo"
    },
    {
     "id": "Forge_Baking_Pan",
     "name": "Forjar molde para hornear"
    },
    {
     "id": "Forge_Baking_Tray",
     "name": "Forjar bandeja de horno"
    },
    {
     "id": "Forge_Bucket",
     "name": "Forjar cubo"
    },
    {
     "id": "Forge_Ball_Peen_Hammer_Head",
     "name": "Forjar cabeza de martillo de bola"
    },
    {
     "id": "Forge_Clawhammer_Head",
     "name": "Forjar cabeza de martillo de carpintero"
    },
    {
     "id": "Forge_Cooking_Pot",
     "name": "Forjar olla"
    },
    {
     "id": "Forge_Corkscrew",
     "name": "Forjar sacacorchos"
    },
    {
     "id": "Forge_Crowbar",
     "name": "Forjar palanca"
    },
    {
     "id": "Forge_Crude_Shortsword_Blade",
     "name": "Forjar hoja de espada corta simple"
    },
    {
     "id": "Forge_Crude_Sword_Blade",
     "name": "Forjar hoja de espada simple"
    },
    {
     "id": "Forge_Door_Knob",
     "name": "Forjar pomo de puerta"
    },
    {
     "id": "Forge_Fine_Butter_Knives",
     "name": "Forjar cuchillos de mantequilla"
    },
    {
     "id": "Forge_Fine_Forks",
     "name": "Forjar tenedores"
    },
    {
     "id": "Forge_Fine_Spoons",
     "name": "Forjar cucharas"
    },
    {
     "id": "Forge_Fishing_Hooks",
     "name": "Forjar 4 anzuelos de pesca"
    },
    {
     "id": "Forge_Forceps",
     "name": "Forjar pinzas"
    },
    {
     "id": "Forge_Forks",
     "name": "Forjar tenedores"
    },
    {
     "id": "Forge_Frying_Pan",
     "name": "Forjar sartén"
    },
    {
     "id": "Forge_Garden_Hoe_Head",
     "name": "Forjar cabeza de azada de jardín"
    },
    {
     "id": "Forge_Gardening_Trowel",
     "name": "Forjar pala de jardinería"
    },
    {
     "id": "Forge_Hand_Scythe_Head",
     "name": "Forjar hoja de hoz de mano"
    },
    {
     "id": "Forge_Hinge",
     "name": "Forjar bisagra"
    },
    {
     "id": "Forge_Hunting_Knife_Blade",
     "name": "Forjar hoja de cuchillo de caza"
    },
    {
     "id": "Forge_Kettle",
     "name": "Forjar tetera"
    },
    {
     "id": "Forge_Kitchen_Knife_Blade",
     "name": "Forjar hoja de cuchillo de cocina"
    },
    {
     "id": "Forge_Large_Knife_Blade",
     "name": "Forjar hoja de cuchillo grande"
    },
    {
     "id": "Forge_Machete_Blade",
     "name": "Forjar hoja de machete"
    },
    {
     "id": "Forge_Masons_Chisel",
     "name": "Forjar cincel de albañil"
    },
    {
     "id": "Forge_Masons_Trowel",
     "name": "Forjar paleta de albañil"
    },
    {
     "id": "Forge_Meat_Cleaver_Blade",
     "name": "Forjar hoja de cuchillo de carnicero"
    },
    {
     "id": "Forge_Metalworking_Chisel",
     "name": "Forjar cincel de metalurgia"
    },
    {
     "id": "Forge_Metalworking_Pliers",
     "name": "Forjar alicates de metalurgia"
    },
    {
     "id": "Forge_Metalworking_Punch",
     "name": "Forjar punzón para metal"
    },
    {
     "id": "Forge_File",
     "name": "Forjar lima"
    },
    {
     "id": "Forge_Drill",
     "name": "Forjar taladro"
    },
    {
     "id": "Forge_Nails",
     "name": "Forjar 10 clavos"
    },
    {
     "id": "Forge_Needle",
     "name": "Forjar aguja"
    },
    {
     "id": "Forge_Pick_Axe_Head",
     "name": "Forjar cabeza de pico"
    },
    {
     "id": "Forge_Roasting_Pan",
     "name": "Forjar bandeja para asar"
    },
    {
     "id": "Forge_Saucepan",
     "name": "Forjar cacerola"
    },
    {
     "id": "Forge_Saw",
     "name": "Forjar sierra"
    },
    {
     "id": "Forge_Scissors",
     "name": "Forjar tijeras"
    },
    {
     "id": "Forge_Scythe_Head",
     "name": "Forjar Hoja de guadaña"
    },
    {
     "id": "Forge_Spade_Head",
     "name": "Forjar cabeza de pala"
    },
    {
     "id": "Forge_Sheep_Shears",
     "name": "Forjar tijeras de esquilar"
    },
    {
     "id": "Forge_Sledgehammer_Head",
     "name": "Forjar cabeza de almádena"
    },
    {
     "id": "Forge_Small_Knife",
     "name": "Forjar cuchillo pequeño"
    },
    {
     "id": "Forge_Small_Steel_Sheet",
     "name": "Forjar chapa metálica pequeña"
    },
    {
     "id": "Forge_Smithing_Hammer_Head",
     "name": "Forjar cabeza de martillo de herrero"
    },
    {
     "id": "Forge_Spoons",
     "name": "Forjar 2 cucharas"
    },
    {
     "id": "Forge_Steel_Sheet",
     "name": "Forjar chapa metálica"
    },
    {
     "id": "Forge_Straight_Razor",
     "name": "Forjar navaja de afeitar"
    },
    {
     "id": "Forge_Sword_Blade",
     "name": "Forjar hoja de espada"
    },
    {
     "id": "Forge_Tongs",
     "name": "Forjar tenazas"
    },
    {
     "id": "Forge_Tweezers",
     "name": "Forjar pinzas"
    },
    {
     "id": "MakeCrudeWhetstone",
     "name": "Crear piedra de afilar improvisada"
    },
    {
     "id": "Forge_Heading_Tool",
     "name": "Forjar herramienta de cabeceo"
    },
    {
     "id": "Forge_Draw_Plate",
     "name": "Forjar placa de trefilado"
    },
    {
     "id": "ForgeMaceHead",
     "name": "Forjar cabeza de maza"
    },
    {
     "id": "MakeSpikedClub",
     "name": "Fabricar garrote con clavos"
    },
    {
     "id": "ForgeSpearHead",
     "name": "Forjar punta de lanza"
    },
    {
     "id": "ForgeLongSpearHead",
     "name": "Forjar punta de lanza larga"
    },
    {
     "id": "Forge_Wood_Axe_Head",
     "name": "Forjar cabeza de hacha de leñador"
    },
    {
     "id": "Forge_Old_Axe_Head",
     "name": "Forjar cabeza de hacha"
    },
    {
     "id": "Forge_Hand_Axe_Head",
     "name": "Forjar cabeza de hacha de mano"
    },
    {
     "id": "Forge_Fleshing_Tool",
     "name": "Forjar herramienta para curtir"
    },
    {
     "id": "Forge_Cup",
     "name": "Forjar taza"
    },
    {
     "id": "Forge_Buckle",
     "name": "Forjar hebilla"
    },
    {
     "id": "Forge_Lantern",
     "name": "Forjar farol"
    },
    {
     "id": "Forge_Carpentry_Chisel",
     "name": "Forjar cincel de carpintería"
    },
    {
     "id": "Forge_Wrench",
     "name": "Forjar llave inglesa"
    }
   ],
   "guide": {
    "summary": "Herrero: horno de piedra y forja de objetos de metal.",
    "strengths": [
     "Herrería 4 y rasgo gratis para usar el yunque.",
     "81 recetas, la profesión con más."
    ],
    "weaknesses": [
     "Cuesta 6 puntos.",
     "Necesita yunque, horno y tiempo para rendir."
    ],
    "firstDays": [
     "Elige una base donde puedas montar el horno de piedra.",
     "Reúne metal y combustible antes de forjar.",
     "Fabrica herramientas que escaseen en el mundo."
    ]
   },
   "suggestedTraits": [
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "organized",
     "name": "Organizado",
     "nameEn": "Organized",
     "desc": "Mayor capacidad de almacenamiento de contenedores.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 755,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    },
    {
     "room": "warehouse",
     "label": "Almacenes",
     "count": 42
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 220
  },
  {
   "id": "burgerflipper",
   "name": "Aprendiz de cocina",
   "nameEn": "Burger Flipper",
   "desc": null,
   "descEn": null,
   "cost": 2,
   "icon": "icons/prof/profession_burgerflipper.png",
   "iconName": "profession_burgerflipper",
   "role": "comida",
   "roleLabel": "Comida y naturaleza",
   "boosts": [
    {
     "id": "Cooking",
     "name": "Cocina",
     "level": 2
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 1
    },
    {
     "id": "SmallBlade",
     "name": "Arma de hoja corta",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Cooking",
     "name": "Cocina",
     "desc": "Permite preparar alimentos más nutritivos y deliciosos.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "SmallBlade",
     "name": "Arma de hoja corta",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas de hoja cortas y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "cook2",
     "name": "Cocinar",
     "nameEn": "Keen Cook",
     "desc": "Conoce las recetas de cocina.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 193,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [],
   "guide": {
    "summary": "Cocina básica y 2 puntos extra.",
    "strengths": [
     "Da 2 puntos.",
     "Rasgo Cocinar gratis y Cocina 2."
    ],
    "weaknesses": [
     "Habilidades bajas en todo lo demás."
    ],
    "firstDays": [
     "Usa los puntos extra en rasgos de combate o forma física.",
     "Saquea comida en supermercados y restaurantes.",
     "Cocina para no desperdiciar ingredientes."
    ]
   },
   "suggestedTraits": [
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "grocery",
     "label": "Supermercados",
     "count": 79
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier C: máxima flexibilidad, pero sin equipo gratis. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 14
  },
  {
   "id": "rancher",
   "name": "Ganadero",
   "nameEn": "Rancher",
   "desc": null,
   "descEn": null,
   "cost": 0,
   "icon": "icons/prof/profession_rancher.png",
   "iconName": "profession_rancher",
   "role": "comida",
   "roleLabel": "Comida y naturaleza",
   "boosts": [
    {
     "id": "Husbandry",
     "name": "Cuidado de animales",
     "level": 4
    },
    {
     "id": "Butchering",
     "name": "Carnicería",
     "level": 3
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Husbandry",
     "name": "Cuidado de animales",
     "desc": "Aumenta la información disponible sobre los animales y la cantidad de recursos obtenidos de ellos.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "Butchering",
     "name": "Carnicería",
     "desc": "Aumenta la calidad de la carne obtenida de los animales.",
     "level": 3,
     "fromProfession": 3
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "MakeBarbedWire",
     "name": "Hacer alambre de espino con alambre"
    }
   ],
   "guide": {
    "summary": "Animales de granja: carne, leche y huevos.",
    "strengths": [
     "Cuidado de animales 4 y Carnicería 3.",
     "Gratis."
    ],
    "weaknesses": [
     "Necesita encontrar animales vivos y protegerlos."
    ],
    "firstDays": [
     "Busca granjas con animales.",
     "Prepara cercado, comida y agua para ellos.",
     "Despieza con cuidado para aprovechar la carne."
    ]
   },
   "suggestedTraits": [
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "nameEn": "Outdoorsy",
     "desc": "No le afectan las condiciones climáticas adversas.",
     "cost": 2,
     "boosts": [],
     "recipes": [],
     "line": 766,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "grocery",
     "label": "Supermercados",
     "count": 79
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier B: premian estilos de juego concretos o necesitan rasgos de combate de apoyo. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 189
  },
  {
   "id": "farmer",
   "name": "Granjero",
   "nameEn": "Farmer",
   "desc": null,
   "descEn": null,
   "cost": 0,
   "icon": "icons/prof/profession_farmer2.png",
   "iconName": "profession_farmer2",
   "role": "comida",
   "roleLabel": "Comida y naturaleza",
   "boosts": [
    {
     "id": "Farming",
     "name": "Agricultura",
     "level": 4
    },
    {
     "id": "Husbandry",
     "name": "Cuidado de animales",
     "level": 1
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Farming",
     "name": "Agricultura",
     "desc": "Aumenta la información disponible sobre los cultivos. Se entrena cosechando cultivos que hayas plantado tú mismo.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "Husbandry",
     "name": "Cuidado de animales",
     "desc": "Aumenta la información disponible sobre los animales y la cantidad de recursos obtenidos de ellos.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "MakeMildewCure",
     "name": "Hacer cura para el moho"
    },
    {
     "id": "MakeFliesCureFromCigarettes",
     "name": "Hacer insecticida con cigarrillos"
    },
    {
     "id": "MakeFliesCureFromLooseTobacco",
     "name": "Hacer insecticida con tabaco suelto"
    },
    {
     "id": "MakeFliesCureFromChewingTobacco",
     "name": "Hacer insecticida con tabaco de mascar"
    },
    {
     "id": "MakeAphidsCure",
     "name": "Hacer cura para pulgones"
    },
    {
     "id": "MakeScarecrow",
     "name": "Hacer espantapájaros"
    },
    {
     "id": "MakeBarbedWire",
     "name": "Hacer alambre de espino con alambre"
    },
    {
     "id": "base:carrot growing season",
     "name": "Temporada de cultivo de zanahoria"
    },
    {
     "id": "base:broccoli growing season",
     "name": "Temporada de cultivo de brócoli"
    },
    {
     "id": "base:radish growing season",
     "name": "Temporada de cultivo de rábano"
    },
    {
     "id": "base:strawberry growing season",
     "name": "Temporada de cultivo de fresa"
    },
    {
     "id": "base:tomato growing season",
     "name": "Temporada de cultivo de tomate"
    },
    {
     "id": "base:potato growing season",
     "name": "Temporada de cultivo de patata"
    },
    {
     "id": "base:cabbage growing season",
     "name": "Temporada de cultivo de col"
    },
    {
     "id": "base:corn growing season",
     "name": "Temporada de cultivo de maíz"
    },
    {
     "id": "base:kale growing season",
     "name": "Temporada de cultivo de col rizada"
    },
    {
     "id": "base:sweet potato growing season",
     "name": "Temporada de cultivo de boniato"
    },
    {
     "id": "base:green pea growing season",
     "name": "Temporada de cultivo de guisante"
    },
    {
     "id": "base:onion growing season",
     "name": "Temporada de cultivo de cebolla"
    },
    {
     "id": "base:garlic growing season",
     "name": "Temporada de cultivo de ajo"
    },
    {
     "id": "base:soybean growing season",
     "name": "Temporada de cultivo de soja"
    },
    {
     "id": "base:wheat growing season",
     "name": "Temporada de cultivo de trigo"
    },
    {
     "id": "base:basil growing season",
     "name": "Temporada de cultivo de albahaca"
    },
    {
     "id": "base:chives growing season",
     "name": "Temporada de cultivo de cebollino"
    },
    {
     "id": "base:cilantro growing season",
     "name": "Temporada de cultivo de cilantro"
    },
    {
     "id": "base:oregano growing season",
     "name": "Temporada de cultivo de orégano"
    },
    {
     "id": "base:parsley growing season",
     "name": "Temporada de cultivo de perejil"
    },
    {
     "id": "base:sage growing season",
     "name": "Temporada de cultivo de salvia"
    },
    {
     "id": "base:rosemary growing season",
     "name": "Temporada de cultivo de romero"
    },
    {
     "id": "base:thyme growing season",
     "name": "Temporada de cultivo de tomillo"
    },
    {
     "id": "base:barley growing season",
     "name": "Temporada de cultivo de cebada"
    },
    {
     "id": "base:flax growing season",
     "name": "Temporada de cultivo de lino"
    },
    {
     "id": "base:hops growing season",
     "name": "Temporada de cultivo de lúpulo"
    },
    {
     "id": "base:rye growing season",
     "name": "Temporada de cultivo de centeno"
    },
    {
     "id": "base:sugar beet growing season",
     "name": "Temporada de cultivo de remolacha azucarera"
    },
    {
     "id": "base:tobacco growing season",
     "name": "Temporada de cultivo de tabaco"
    },
    {
     "id": "base:bell pepper growing season",
     "name": "Temporada de cultivo de pimiento"
    },
    {
     "id": "base:cauliflower growing season",
     "name": "Temporada de cultivo de coliflor"
    },
    {
     "id": "base:cucumber growing season",
     "name": "Temporada de cultivo de pepino"
    },
    {
     "id": "base:habanero growing season",
     "name": "Temporada de cultivo de habanero"
    },
    {
     "id": "base:jalapeno growing season",
     "name": "Temporada de cultivo de jalapeño"
    },
    {
     "id": "base:leek growing season",
     "name": "Temporada de cultivo de puerro"
    },
    {
     "id": "base:lettuce growing season",
     "name": "Temporada de cultivo de lechuga"
    },
    {
     "id": "base:pumpkin growing season",
     "name": "Temporada de cultivo de calabaza"
    },
    {
     "id": "base:spinach growing season",
     "name": "Temporada de cultivo de espinaca"
    },
    {
     "id": "base:sunflower growing season",
     "name": "Temporada de cultivo de girasol"
    },
    {
     "id": "base:turnip growing season",
     "name": "Temporada de cultivo de nabo"
    },
    {
     "id": "base:watermelon growing season",
     "name": "Temporada de cultivo de sandía"
    },
    {
     "id": "base:zucchini growing season",
     "name": "Temporada de cultivo de calabacín"
    },
    {
     "id": "base:chamomile growing season",
     "name": "Temporada de cultivo de manzanilla"
    },
    {
     "id": "base:lemongrass growing season",
     "name": "Temporada de cultivo de hierba limón"
    },
    {
     "id": "base:marigold growing season",
     "name": "Temporada de cultivo de caléndula"
    },
    {
     "id": "base:mint growing season",
     "name": "Temporada de cultivo de menta"
    },
    {
     "id": "base:rose growing season",
     "name": "Temporada de cultivo de rosa"
    },
    {
     "id": "base:poppy growing season",
     "name": "Temporada de cultivo de amapola"
    },
    {
     "id": "base:hemp growing season",
     "name": "Temporada de cultivo de cáñamo"
    },
    {
     "id": "base:lavender growing season",
     "name": "Temporada de cultivo de lavanda"
    },
    {
     "id": "base:comfrey growing season",
     "name": "Temporada de cultivo de consuelda"
    },
    {
     "id": "base:common mallow growing season",
     "name": "Temporada de cultivo de malva común"
    },
    {
     "id": "base:broadleaf plantain growing season",
     "name": "Temporada de cultivo de llantén mayor"
    },
    {
     "id": "base:black sage growing season",
     "name": "Temporada de cultivo de salvia negra"
    },
    {
     "id": "base:wild garlic growing season",
     "name": "Temporada de cultivo de ajo silvestre"
    },
    {
     "id": "MakeJar",
     "name": "Preparar tarro de productos"
    }
   ],
   "guide": {
    "summary": "Comida a largo plazo: cultivos y animales.",
    "strengths": [
     "Agricultura 4 y Cuidado de animales 1.",
     "63 recetas, sobre todo de temporadas de cultivo."
    ],
    "weaknesses": [
     "Rinde a medio plazo: los primeros días aporta poco."
    ],
    "firstDays": [
     "Recoge semillas y herramientas de jardín pronto.",
     "Elige una base con tierra cultivable y agua.",
     "Planta según la temporada que indican tus recetas."
    ]
   },
   "suggestedTraits": [
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "gardener",
     "name": "Jardinero",
     "nameEn": "Gardener",
     "desc": "",
     "cost": 2,
     "boosts": [
      {
       "id": "Farming",
       "name": "Agricultura",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "MakeFliesCureFromCigarettes",
       "name": "Hacer insecticida con cigarrillos"
      },
      {
       "id": "MakeFliesCureFromLooseTobacco",
       "name": "Hacer insecticida con tabaco suelto"
      },
      {
       "id": "MakeFliesCureFromChewingTobacco",
       "name": "Hacer insecticida con tabaco de mascar"
      },
      {
       "id": "MakeMildewCure",
       "name": "Hacer cura para el moho"
      },
      {
       "id": "MakeAphidsCure",
       "name": "Hacer cura para pulgones"
      },
      {
       "id": "MakeScarecrow",
       "name": "Hacer espantapájaros"
      },
      {
       "id": "base:carrot growing season",
       "name": "Temporada de cultivo de zanahoria"
      },
      {
       "id": "base:broccoli growing season",
       "name": "Temporada de cultivo de brócoli"
      },
      {
       "id": "base:radish growing season",
       "name": "Temporada de cultivo de rábano"
      },
      {
       "id": "base:strawberry growing season",
       "name": "Temporada de cultivo de fresa"
      },
      {
       "id": "base:tomato growing season",
       "name": "Temporada de cultivo de tomate"
      },
      {
       "id": "base:potato growing season",
       "name": "Temporada de cultivo de patata"
      },
      {
       "id": "base:cabbage growing season",
       "name": "Temporada de cultivo de col"
      },
      {
       "id": "base:corn growing season",
       "name": "Temporada de cultivo de maíz"
      },
      {
       "id": "base:kale growing season",
       "name": "Temporada de cultivo de col rizada"
      },
      {
       "id": "base:sweet potato growing season",
       "name": "Temporada de cultivo de boniato"
      },
      {
       "id": "base:green pea growing season",
       "name": "Temporada de cultivo de guisante"
      },
      {
       "id": "base:onion growing season",
       "name": "Temporada de cultivo de cebolla"
      },
      {
       "id": "base:garlic growing season",
       "name": "Temporada de cultivo de ajo"
      },
      {
       "id": "base:soybean growing season",
       "name": "Temporada de cultivo de soja"
      },
      {
       "id": "base:basil growing season",
       "name": "Temporada de cultivo de albahaca"
      },
      {
       "id": "base:chives growing season",
       "name": "Temporada de cultivo de cebollino"
      },
      {
       "id": "base:cilantro growing season",
       "name": "Temporada de cultivo de cilantro"
      },
      {
       "id": "base:oregano growing season",
       "name": "Temporada de cultivo de orégano"
      },
      {
       "id": "base:parsley growing season",
       "name": "Temporada de cultivo de perejil"
      },
      {
       "id": "base:sage growing season",
       "name": "Temporada de cultivo de salvia"
      },
      {
       "id": "base:rosemary growing season",
       "name": "Temporada de cultivo de romero"
      },
      {
       "id": "base:thyme growing season",
       "name": "Temporada de cultivo de tomillo"
      },
      {
       "id": "base:hops growing season",
       "name": "Temporada de cultivo de lúpulo"
      },
      {
       "id": "base:sugar beet growing season",
       "name": "Temporada de cultivo de remolacha azucarera"
      },
      {
       "id": "base:bell pepper growing season",
       "name": "Temporada de cultivo de pimiento"
      },
      {
       "id": "base:cauliflower growing season",
       "name": "Temporada de cultivo de coliflor"
      },
      {
       "id": "base:cucumber growing season",
       "name": "Temporada de cultivo de pepino"
      },
      {
       "id": "base:habanero growing season",
       "name": "Temporada de cultivo de habanero"
      },
      {
       "id": "base:jalapeno growing season",
       "name": "Temporada de cultivo de jalapeño"
      },
      {
       "id": "base:leek growing season",
       "name": "Temporada de cultivo de puerro"
      },
      {
       "id": "base:lettuce growing season",
       "name": "Temporada de cultivo de lechuga"
      },
      {
       "id": "base:pumpkin growing season",
       "name": "Temporada de cultivo de calabaza"
      },
      {
       "id": "base:spinach growing season",
       "name": "Temporada de cultivo de espinaca"
      },
      {
       "id": "base:sunflower growing season",
       "name": "Temporada de cultivo de girasol"
      },
      {
       "id": "base:turnip growing season",
       "name": "Temporada de cultivo de nabo"
      },
      {
       "id": "base:watermelon growing season",
       "name": "Temporada de cultivo de sandía"
      },
      {
       "id": "base:zucchini growing season",
       "name": "Temporada de cultivo de calabacín"
      },
      {
       "id": "base:chamomile growing season",
       "name": "Temporada de cultivo de manzanilla"
      },
      {
       "id": "base:lemongrass growing season",
       "name": "Temporada de cultivo de hierba limón"
      },
      {
       "id": "base:marigold growing season",
       "name": "Temporada de cultivo de caléndula"
      },
      {
       "id": "base:mint growing season",
       "name": "Temporada de cultivo de menta"
      },
      {
       "id": "base:black sage growing season",
       "name": "Temporada de cultivo de salvia negra"
      },
      {
       "id": "base:broadleaf plantain growing season",
       "name": "Temporada de cultivo de llantén mayor"
      },
      {
       "id": "base:comfrey growing season",
       "name": "Temporada de cultivo de consuelda"
      },
      {
       "id": "base:common mallow growing season",
       "name": "Temporada de cultivo de malva común"
      },
      {
       "id": "base:wild garlic growing season",
       "name": "Temporada de cultivo de ajo silvestre"
      },
      {
       "id": "base:rose growing season",
       "name": "Temporada de cultivo de rosa"
      },
      {
       "id": "base:poppy growing season",
       "name": "Temporada de cultivo de amapola"
      },
      {
       "id": "base:lavender growing season",
       "name": "Temporada de cultivo de lavanda"
      },
      {
       "id": "MakeJar",
       "name": "Preparar tarro de productos"
      }
     ],
     "line": 369,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "nameEn": "Outdoorsy",
     "desc": "No le afectan las condiciones climáticas adversas.",
     "cost": 2,
     "boosts": [],
     "recipes": [],
     "line": 766,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "grocery",
     "label": "Supermercados",
     "count": 79
    },
    {
     "room": "toolstore",
     "label": "Ferreterías",
     "count": 60
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier B: premian estilos de juego concretos o necesitan rasgos de combate de apoyo. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 85
  },
  {
   "id": "chef",
   "name": "Cocinero",
   "nameEn": "Chef",
   "desc": null,
   "descEn": null,
   "cost": -2,
   "icon": "icons/prof/profession_chef2.png",
   "iconName": "profession_chef2",
   "role": "comida",
   "roleLabel": "Comida y naturaleza",
   "boosts": [
    {
     "id": "Cooking",
     "name": "Cocina",
     "level": 4
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "level": 1
    },
    {
     "id": "SmallBlade",
     "name": "Arma de hoja corta",
     "level": 1
    },
    {
     "id": "Butchering",
     "name": "Carnicería",
     "level": 2
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Cooking",
     "name": "Cocina",
     "desc": "Permite preparar alimentos más nutritivos y deliciosos.",
     "level": 4,
     "fromProfession": 4
    },
    {
     "id": "Butchering",
     "name": "Carnicería",
     "desc": "Aumenta la calidad de la carne obtenida de los animales.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "SmallBlade",
     "name": "Arma de hoja corta",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas de hoja cortas y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Maintenance",
     "name": "Mantenimiento",
     "desc": "Reduce la probabilidad de que las armas cuerpo a cuerpo sufran daños. Se entrena mediante el combate cuerpo a cuerpo.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "cook2",
     "name": "Cocinar",
     "nameEn": "Keen Cook",
     "desc": "Conoce las recetas de cocina.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 193,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "MakeCakeBatter",
     "name": "Preparar masa para tarta"
    },
    {
     "id": "MakePieDough",
     "name": "Preparar masa para pastel"
    },
    {
     "id": "MakeBreadDough",
     "name": "Preparar masa de pan"
    },
    {
     "id": "MakeBaguetteDough",
     "name": "Preparar baguette"
    },
    {
     "id": "MakeBiscuits",
     "name": "Preparar galletas"
    },
    {
     "id": "MakeChocolateCookieDough",
     "name": "Hacer masa de galletas de chocolate"
    },
    {
     "id": "MakeChocolateChipCookieDough",
     "name": "Hacer masa de galletas con pepitas de chocolate"
    },
    {
     "id": "MakeOatmealCookieDough",
     "name": "Hacer masa de galletas de avena"
    },
    {
     "id": "MakeShortbreadCookieDough",
     "name": "Hacer masa de galletas de mantequilla"
    },
    {
     "id": "MakeSugarCookieDough",
     "name": "Hacer masa de galletas de azúcar"
    },
    {
     "id": "MakePizza",
     "name": "Preparar masa de pizza"
    },
    {
     "id": "MakeFriedOnionRings",
     "name": "Preparar aros de cebolla fritos"
    },
    {
     "id": "MakeFriedShrimp",
     "name": "Preparar gamba frita"
    },
    {
     "id": "MakeSushi",
     "name": "Preparar sushi"
    },
    {
     "id": "MakeOnigiri",
     "name": "Preparar onigiri"
    },
    {
     "id": "MakeMaki",
     "name": "Preparar maki"
    },
    {
     "id": "MakeCabbageRolls",
     "name": "Preparar 4 rollos de repollo"
    },
    {
     "id": "PrepareMuffins",
     "name": "Preparar muffins"
    },
    {
     "id": "MakeGuacamole",
     "name": "Preparar guacamole"
    },
    {
     "id": "MakeJar",
     "name": "Preparar tarro de productos"
    }
   ],
   "guide": {
    "summary": "Cocina que alimenta más y se estropea menos.",
    "strengths": [
     "Cocina 4 y Carnicería 2.",
     "20 recetas de masas, dulces y platos."
    ],
    "weaknesses": [
     "Nada de combate."
    ],
    "firstDays": [
     "Saquea supermercados antes de que se pudra la comida fresca.",
     "Cocina guisos para aprovechar restos.",
     "Guarda harina, levadura y azúcar para hornear."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "grocery",
     "label": "Supermercados",
     "count": 79
    },
    {
     "room": "gigamart",
     "label": "Gigamart",
     "count": 9
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier B: premian estilos de juego concretos o necesitan rasgos de combate de apoyo. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 34
  },
  {
   "id": "fisherman",
   "name": "Guía de Pesca",
   "nameEn": "Fishing Guide",
   "desc": null,
   "descEn": null,
   "cost": -2,
   "icon": "icons/prof/profession_fisher2.png",
   "iconName": "profession_fisher2",
   "role": "comida",
   "roleLabel": "Comida y naturaleza",
   "boosts": [
    {
     "id": "Fishing",
     "name": "Pesca",
     "level": 3
    },
    {
     "id": "PlantScavenging",
     "name": "Rebuscar",
     "level": 1
    },
    {
     "id": "Butchering",
     "name": "Carnicería",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Fishing",
     "name": "Pesca",
     "desc": "Aumenta tu probabilidad de atrapar un pez, la calidad de tus capturas y hace que tu equipo de pesca sea menos propenso a romperse.",
     "level": 3,
     "fromProfession": 3
    },
    {
     "id": "Butchering",
     "name": "Carnicería",
     "desc": "Aumenta la calidad de la carne obtenida de los animales.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "PlantScavenging",
     "name": "Rebuscar",
     "desc": "Aumenta la calidad de los objetos encontrados mediante el modo de búsqueda, las categorías de búsqueda disponibles y el radio de búsqueda.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [
    {
     "id": "MakeFishingRod",
     "name": "Hacer caña de pescar"
    },
    {
     "id": "FixFishingRod",
     "name": "Reparar caña de pescar"
    },
    {
     "id": "GetWireBack",
     "name": "Recuperar alambre"
    },
    {
     "id": "MakeFishingNet",
     "name": "Hacer nasa de pescar"
    },
    {
     "id": "MakeChum",
     "name": "Hacer carnada"
    }
   ],
   "guide": {
    "summary": "Pesca para no depender de las latas.",
    "strengths": [
     "Pesca 3, Rebuscar 1 y Carnicería 1.",
     "5 recetas."
    ],
    "weaknesses": [
     "Poca ayuda fuera del agua."
    ],
    "firstDays": [
     "Busca caña, sedal y cebo.",
     "Instálate cerca de un lago o río.",
     "Combina la pesca con Rebuscar para comer sin saquear."
    ]
   },
   "suggestedTraits": [
    {
     "id": "fishing",
     "name": "Pescador",
     "nameEn": "Angler",
     "desc": "",
     "cost": 4,
     "boosts": [
      {
       "id": "Fishing",
       "name": "Pesca",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "MakeFishingRod",
       "name": "Hacer caña de pescar"
      },
      {
       "id": "FixFishingRod",
       "name": "Reparar caña de pescar"
      },
      {
       "id": "MakeChum",
       "name": "Hacer carnada"
      }
     ],
     "line": 347,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "nameEn": "Outdoorsy",
     "desc": "No le afectan las condiciones climáticas adversas.",
     "cost": 2,
     "boosts": [],
     "recipes": [],
     "line": 766,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "fishingstorage",
     "label": "Almacenes de pesca",
     "count": 14
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 104
  },
  {
   "id": "parkranger",
   "name": "Guardia forestal",
   "nameEn": "Park Ranger",
   "desc": "Movimiento mucho más rápido a través de zonas forestales y bosques.",
   "descEn": "Much faster movement through forests and woodland.",
   "cost": -4,
   "icon": "icons/prof/profession_parkranger2.png",
   "iconName": "profession_parkranger2",
   "role": "comida",
   "roleLabel": "Comida y naturaleza",
   "boosts": [
    {
     "id": "Trapping",
     "name": "Trampas",
     "level": 1
    },
    {
     "id": "Doctor",
     "name": "Primeros auxilios",
     "level": 1
    },
    {
     "id": "PlantScavenging",
     "name": "Rebuscar",
     "level": 1
    },
    {
     "id": "FlintKnapping",
     "name": "Labrar piedra",
     "level": 1
    },
    {
     "id": "Carving",
     "name": "Tallar",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "PlantScavenging",
     "name": "Rebuscar",
     "desc": "Aumenta la calidad de los objetos encontrados mediante el modo de búsqueda, las categorías de búsqueda disponibles y el radio de búsqueda.",
     "level": 2,
     "fromProfession": 1
    },
    {
     "id": "FlintKnapping",
     "name": "Labrar piedra",
     "desc": "Permite crear pequeños objetos de piedra.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Doctor",
     "name": "Primeros auxilios",
     "desc": "Aumenta la información disponible sobre las heridas y la calidad de los tratamientos médicos.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Carving",
     "name": "Tallar",
     "desc": "Permite crear pequeños objetos de madera.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Trapping",
     "name": "Trampas",
     "desc": "Aumenta la probabilidad de atrapar un animal con una trampa y permite fabricar trampas mejores.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "herbalist_prof",
     "name": "Herborista",
     "nameEn": "Herbalist",
     "desc": "Puede encontrar hierbas medicinales para elaborar medicamentos y cataplasmas con ellas.",
     "cost": 0,
     "boosts": [
      {
       "id": "PlantScavenging",
       "name": "Rebuscar",
       "level": 1
      }
     ],
     "recipes": [
      {
       "id": "Herbalist",
       "name": "Remedios herbales"
      },
      {
       "id": "MakePlantainPoultice",
       "name": "Hacer cataplasma con llantén"
      },
      {
       "id": "MakeComfreyPoultice",
       "name": "Hacer cataplasma con consuelda"
      },
      {
       "id": "MakeWildGarlicPoultice",
       "name": "Hacer cataplasma con ajo silvestre"
      },
      {
       "id": "base:black sage growing season",
       "name": "Temporada de cultivo de salvia negra"
      },
      {
       "id": "base:broadleaf plantain growing season",
       "name": "Temporada de cultivo de llantén mayor"
      },
      {
       "id": "base:comfrey growing season",
       "name": "Temporada de cultivo de consuelda"
      },
      {
       "id": "base:common mallow growing season",
       "name": "Temporada de cultivo de malva común"
      },
      {
       "id": "base:wild garlic growing season",
       "name": "Temporada de cultivo de ajo silvestre"
      }
     ],
     "line": 459,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "MakeStickTrap",
     "name": "Hacer trampa para aves"
    },
    {
     "id": "MakeSnareTrap",
     "name": "Hacer trampa de lazo"
    },
    {
     "id": "MakeWoodenBoxTrap",
     "name": "Hacer caja trampa"
    },
    {
     "id": "MakeTrapBox",
     "name": "Hacer jaula de madera"
    },
    {
     "id": "MakeCageTrap",
     "name": "Hacer trampa de jaula"
    },
    {
     "id": "Herbalist",
     "name": "Remedios herbales"
    },
    {
     "id": "MakePlantainPoultice",
     "name": "Hacer cataplasma con llantén"
    },
    {
     "id": "MakeComfreyPoultice",
     "name": "Hacer cataplasma con consuelda"
    },
    {
     "id": "MakeWildGarlicPoultice",
     "name": "Hacer cataplasma con ajo silvestre"
    },
    {
     "id": "base:black sage growing season",
     "name": "Temporada de cultivo de salvia negra"
    },
    {
     "id": "base:broadleaf plantain growing season",
     "name": "Temporada de cultivo de llantén mayor"
    },
    {
     "id": "base:comfrey growing season",
     "name": "Temporada de cultivo de consuelda"
    },
    {
     "id": "base:common mallow growing season",
     "name": "Temporada de cultivo de malva común"
    },
    {
     "id": "base:wild garlic growing season",
     "name": "Temporada de cultivo de ajo silvestre"
    }
   ],
   "guide": {
    "summary": "Bosque y supervivencia: se mueve rápido entre árboles.",
    "strengths": [
     "Se mueve mucho más rápido por el bosque.",
     "Rasgo Herborista: hierbas medicinales y emplastos."
    ],
    "weaknesses": [
     "Cuesta 4 puntos.",
     "Habilidades iniciales a nivel 1 o 2."
    ],
    "firstDays": [
     "Usa el bosque para escapar de las hordas.",
     "Recolecta hierbas para curarte sin farmacias.",
     "Sube Trampas para tener carne fija."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "outdoorsman",
     "name": "Amante de la naturaleza",
     "nameEn": "Outdoorsy",
     "desc": "No le afectan las condiciones climáticas adversas.",
     "cost": 2,
     "boosts": [],
     "recipes": [],
     "line": 766,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "hunting",
     "label": "Tiendas de caza",
     "count": 29
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier S: arma o herramienta más habilidades de combate o recolección. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 168
  },
  {
   "id": "nurse",
   "name": "Enfermera",
   "nameEn": "Nurse",
   "desc": null,
   "descEn": null,
   "cost": 0,
   "icon": "icons/prof/profession_nurse.png",
   "iconName": "profession_nurse",
   "role": "medicina",
   "roleLabel": "Medicina",
   "boosts": [
    {
     "id": "Doctor",
     "name": "Primeros auxilios",
     "level": 3
    },
    {
     "id": "Lightfoot",
     "name": "Pies ligeros",
     "level": 1
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Doctor",
     "name": "Primeros auxilios",
     "desc": "Aumenta la información disponible sobre las heridas y la calidad de los tratamientos médicos.",
     "level": 3,
     "fromProfession": 3
    },
    {
     "id": "Lightfoot",
     "name": "Pies ligeros",
     "desc": "Reduce el ruido de tus pasos, ya sea al correr, caminar o agacharte.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "nightowl",
     "name": "Noctámbulo",
     "nameEn": "Night Owl",
     "desc": "Necesita dormir poco. Se mantiene en alerta incluso cuando duerme.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 701,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [],
   "guide": {
    "summary": "Medicina, agilidad y poco sueño.",
    "strengths": [
     "Primeros auxilios 3, Pies ligeros 1 y Estado físico 1.",
     "Rasgo Noctámbulo: necesita dormir poco."
    ],
    "weaknesses": [
     "Menos primeros auxilios que el médico."
    ],
    "firstDays": [
     "Aprovecha las noches para moverte o vigilar.",
     "Reúne material médico en clínicas y farmacias.",
     "Sube primeros auxilios curando heridas reales."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fasthealer",
     "name": "Sanador rápido",
     "nameEn": "Fast Healer",
     "desc": "Se recupera rápido de lesiones y enfermedades.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 292,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "hospital",
     "label": "Hospitales",
     "count": 104
    },
    {
     "room": "medclinic",
     "label": "Clínicas",
     "count": 70
    },
    {
     "room": "pharmacy",
     "label": "Farmacias",
     "count": 37
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier A: destacan a partir del tercer día, con base, vehículos o medicina. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 158
  },
  {
   "id": "doctor",
   "name": "Médico",
   "nameEn": "Doctor",
   "desc": null,
   "descEn": null,
   "cost": 0,
   "icon": "icons/prof/profession_doctor2.png",
   "iconName": "profession_doctor2",
   "role": "medicina",
   "roleLabel": "Medicina",
   "boosts": [
    {
     "id": "Doctor",
     "name": "Primeros auxilios",
     "level": 6
    },
    {
     "id": "SmallBlade",
     "name": "Arma de hoja corta",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Doctor",
     "name": "Primeros auxilios",
     "desc": "Aumenta la información disponible sobre las heridas y la calidad de los tratamientos médicos.",
     "level": 6,
     "fromProfession": 6
    },
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "SmallBlade",
     "name": "Arma de hoja corta",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas de hoja cortas y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [],
   "recipes": [],
   "guide": {
    "summary": "Primeros auxilios al máximo desde el inicio.",
    "strengths": [
     "Primeros auxilios 6.",
     "Gratis."
    ],
    "weaknesses": [
     "Sin recetas ni combate."
    ],
    "firstDays": [
     "Busca botiquín, vendas y desinfectante.",
     "Cura bien cada herida: evita infecciones.",
     "Muy útil en grupo para atender a los demás."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fasthealer",
     "name": "Sanador rápido",
     "nameEn": "Fast Healer",
     "desc": "Se recupera rápido de lesiones y enfermedades.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 292,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "hospital",
     "label": "Hospitales",
     "count": 104
    },
    {
     "room": "medclinic",
     "label": "Clínicas",
     "count": 70
    },
    {
     "room": "pharmacy",
     "label": "Farmacias",
     "count": 37
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 54
  },
  {
   "id": "securityguard",
   "name": "Guardia de seguridad",
   "nameEn": "Security Guard",
   "desc": null,
   "descEn": null,
   "cost": -2,
   "icon": "icons/prof/profession_securityguard2.png",
   "iconName": "profession_securityguard2",
   "role": "movilidad",
   "roleLabel": "Sigilo y movilidad",
   "boosts": [
    {
     "id": "Sprinting",
     "name": "Carrera",
     "level": 2
    },
    {
     "id": "Lightfoot",
     "name": "Pies ligeros",
     "level": 1
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Sprinting",
     "name": "Carrera",
     "desc": "Aumenta la velocidad al correr.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "SmallBlunt",
     "name": "Arma corta contundente",
     "desc": "Aumenta la velocidad de ataque y el daño al usar armas contundentes cortas, y reduce la fatiga muscular que provocan.",
     "level": 1,
     "fromProfession": 1
    },
    {
     "id": "Lightfoot",
     "name": "Pies ligeros",
     "desc": "Reduce el ruido de tus pasos, ya sea al correr, caminar o agacharte.",
     "level": 1,
     "fromProfession": 1
    }
   ],
   "freeTraits": [
    {
     "id": "nightowl",
     "name": "Noctámbulo",
     "nameEn": "Night Owl",
     "desc": "Necesita dormir poco. Se mantiene en alerta incluso cuando duerme.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 701,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [],
   "guide": {
    "summary": "Vigilante nocturno: duerme poco y corre.",
    "strengths": [
     "Carrera 2 y rasgo Noctámbulo.",
     "Pies ligeros 1 y Arma corta contundente 1."
    ],
    "weaknesses": [
     "Habilidades modestas."
    ],
    "firstDays": [
     "Usa la noche para moverte con menos zombis a la vista.",
     "Lleva un arma contundente corta.",
     "Huye antes que pelear contra grupos."
    ]
   },
   "suggestedTraits": [
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "gunstore",
     "label": "Armerías",
     "count": 30
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier S: arma o herramienta más habilidades de combate o recolección. El motivo es el mismo para todo el tier, no específico de esta profesión."
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 210
  },
  {
   "id": "burglar",
   "name": "Ladrón",
   "nameEn": "Burglar",
   "desc": null,
   "descEn": null,
   "cost": -6,
   "icon": "icons/prof/profession_burglar2.png",
   "iconName": "profession_burglar2",
   "role": "movilidad",
   "roleLabel": "Sigilo y movilidad",
   "boosts": [
    {
     "id": "Nimble",
     "name": "Destreza",
     "level": 2
    },
    {
     "id": "Sneak",
     "name": "Sigilo",
     "level": 2
    },
    {
     "id": "Lightfoot",
     "name": "Pies ligeros",
     "level": 2
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Nimble",
     "name": "Destreza",
     "desc": "Aumenta la velocidad de movimiento mientras estás en \"postura de combate\" y reduce el ruido de tus pasos.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "Lightfoot",
     "name": "Pies ligeros",
     "desc": "Reduce el ruido de tus pasos, ya sea al correr, caminar o agacharte.",
     "level": 2,
     "fromProfession": 2
    },
    {
     "id": "Sneak",
     "name": "Sigilo",
     "desc": "Reduce la distancia a la que los zombis pueden detectarte y el ruido de tus pasos mientras estás agachado.",
     "level": 2,
     "fromProfession": 2
    }
   ],
   "freeTraits": [
    {
     "id": "burglar",
     "name": "Ladrón",
     "nameEn": "Burglar",
     "desc": "Puede puentear vehículos, menos posibilidades de romper la cerradura de una ventana.",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 137,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [
    {
     "id": "MakeForearmMagazineArmor",
     "name": "Crear protección de antebrazo con revistas"
    },
    {
     "id": "MakeBodyMagazineArmor",
     "name": "Crear armadura con revistas"
    },
    {
     "id": "MakeGlassShiv",
     "name": "Fabricar cuchilla de vidrio"
    },
    {
     "id": "MakeShiv",
     "name": "Fabricar cuchilla"
    },
    {
     "id": "MakeToothbrushShiv",
     "name": "Fabricar cuchilla de cepillo de dientes"
    },
    {
     "id": "CopyBuildingKey",
     "name": "Copiar llave del edificio"
    },
    {
     "id": "MakeHollowBook",
     "name": "Vaciar libro"
    },
    {
     "id": "MakeForearmBulletproofVestArmor",
     "name": "Crear 2 protecciones de antebrazos antibalas"
    },
    {
     "id": "MakeShinBulletproofVestArmor",
     "name": "Crear 2 espinilleras antibalas"
    },
    {
     "id": "MakeThighBulletproofVestArmor",
     "name": "Crear 2 musleras antibalas"
    },
    {
     "id": "base:hemp growing season",
     "name": "Temporada de cultivo de cáñamo"
    },
    {
     "id": "MakeScrewdriver",
     "name": "Fabricar destornillador improvisado"
    },
    {
     "id": "MakeBlankID",
     "name": "Hacer identificación en blanco"
    },
    {
     "id": "MakeImprovisedLighter",
     "name": "Fabricar mechero improvisado"
    }
   ],
   "guide": {
    "summary": "Sigilo y coches sin llave.",
    "strengths": [
     "Puede hacer puente a los coches.",
     "Destreza, Sigilo y Pies ligeros a 2."
    ],
    "weaknesses": [
     "Cuesta 6 puntos."
    ],
    "firstDays": [
     "Haz un puente a un coche para tener movilidad desde el día 1.",
     "Entra en casas sin llamar la atención.",
     "Evita peleas que no necesites."
    ]
   },
   "suggestedTraits": [
    {
     "id": "graceful",
     "name": "Sigiloso",
     "nameEn": "Graceful",
     "desc": "Hace menos ruido cuando se mueve.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 380,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "inconspicuous",
     "name": "Discreto",
     "nameEn": "Inconspicuous",
     "desc": "Es menos probable que los zombis te vean.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 536,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "nightvision",
     "name": "Ojos de gato",
     "nameEn": "Cat's Eyes",
     "desc": "Mejor visión en la noche.",
     "cost": 3,
     "boosts": [],
     "recipes": [],
     "line": 711,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "pawnshop",
     "label": "Casas de empeños",
     "count": 11
    },
    {
     "room": "gasstore",
     "label": "Gasolineras",
     "count": 97
    }
   ],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier B: premian estilos de juego concretos o necesitan rasgos de combate de apoyo. El motivo es el mismo para todo el tier, no específico de esta profesión."
    },
    {
     "src": "pzfans_builds",
     "text": "La propone como base de su configuración “Fantasma”.",
     "build": "Fantasma"
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 3
  },
  {
   "id": "fitnessinstructor",
   "name": "Monitor de fitness",
   "nameEn": "Fitness Instructor",
   "desc": null,
   "descEn": null,
   "cost": -6,
   "icon": "icons/prof/profession_fitnessinstructor.png",
   "iconName": "profession_fitnessinstructor",
   "role": "movilidad",
   "roleLabel": "Sigilo y movilidad",
   "boosts": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "level": 3
    },
    {
     "id": "Sprinting",
     "name": "Carrera",
     "level": 2
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "level": 1
    }
   ],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 8,
     "fromProfession": 3
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 6,
     "fromProfession": 1
    },
    {
     "id": "Sprinting",
     "name": "Carrera",
     "desc": "Aumenta la velocidad al correr.",
     "level": 2,
     "fromProfession": 2
    }
   ],
   "freeTraits": [
    {
     "id": "nutritionist2",
     "name": "Nutricionista",
     "nameEn": "Nutritionist",
     "desc": "Puede ver los valores nutricionales de cualquier alimento",
     "cost": 0,
     "boosts": [],
     "recipes": [],
     "line": 732,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "recipes": [],
   "guide": {
    "summary": "Estado físico alto: correr y aguantar más.",
    "strengths": [
     "Estado físico 3 y Carrera 2: empieza con Estado físico 8.",
     "Rasgo Nutricionista: ve el valor nutritivo."
    ],
    "weaknesses": [
     "Cuesta 6 puntos.",
     "Sin oficios."
    ],
    "firstDays": [
     "Huye corriendo cuando haga falta: aguantas más.",
     "Controla la dieta para mantener el peso.",
     "Elige un oficio y súbelo con libros."
    ]
   },
   "suggestedTraits": [
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "brave",
     "name": "Valiente",
     "nameEn": "Brave",
     "desc": "Menos propenso a entrar en pánico.",
     "cost": 4,
     "boosts": [],
     "recipes": [],
     "line": 115,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fastlearner",
     "name": "Aprendiz rápido",
     "nameEn": "Fast Learner",
     "desc": "Aumenta los puntos de XP ganados.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 303,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [
    {
     "room": "sportstore",
     "label": "Tiendas de deporte",
     "count": 10
    }
   ],
   "community": [],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 114
  },
  {
   "id": "unemployed",
   "name": "Desempleado",
   "nameEn": "Custom Occupation",
   "desc": "8 puntos extras para rasgos.",
   "descEn": "Use free trait points to make a custom build for your character.",
   "cost": 8,
   "icon": null,
   "iconName": null,
   "role": "libre",
   "roleLabel": "Libre",
   "boosts": [],
   "skills": [
    {
     "id": "Fitness",
     "name": "Estado físico",
     "desc": "Aumenta la velocidad de ataque cuerpo a cuerpo, así como la velocidad y la probabilidad de éxito al trepar. Reduce el ritmo de agotamiento.",
     "level": 5,
     "fromProfession": 0
    },
    {
     "id": "Strength",
     "name": "Fuerza",
     "desc": "Aumenta el daño y el retroceso de los ataques cuerpo a cuerpo, así como el límite de carga del inventario. Reduce la fatiga muscular.",
     "level": 5,
     "fromProfession": 0
    }
   ],
   "freeTraits": [],
   "recipes": [],
   "guide": {
    "summary": "Sin habilidades pero con 8 puntos para montar lo que quieras.",
    "strengths": [
     "Da 8 puntos, el máximo.",
     "Libertad total de rasgos."
    ],
    "weaknesses": [
     "Empieza sin ninguna habilidad."
    ],
    "firstDays": [
     "Gasta los puntos en rasgos que no se pueden conseguir jugando.",
     "Elige un oficio y busca sus libros.",
     "Sobrevive primero, especialízate después."
    ]
   },
   "suggestedTraits": [
    {
     "id": "fastlearner",
     "name": "Aprendiz rápido",
     "nameEn": "Fast Learner",
     "desc": "Aumenta los puntos de XP ganados.",
     "cost": 6,
     "boosts": [],
     "recipes": [],
     "line": 303,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "fit",
     "name": "En forma",
     "nameEn": "Fit",
     "desc": "",
     "cost": 6,
     "boosts": [
      {
       "id": "Fitness",
       "name": "Estado físico",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 358,
     "file": "media/scripts/generated/characters/character_traits.txt"
    },
    {
     "id": "stout",
     "name": "Robusto",
     "nameEn": "Stout",
     "desc": "Empuje extra con armas cuerpo a cuerpo. Mayor peso transportable.",
     "cost": 6,
     "boosts": [
      {
       "id": "Strength",
       "name": "Fuerza",
       "level": 2
      }
     ],
     "recipes": [],
     "line": 910,
     "file": "media/scripts/generated/characters/character_traits.txt"
    }
   ],
   "zones": [],
   "community": [
    {
     "src": "pzwiki_occ",
     "text": "Tier C: máxima flexibilidad, pero sin equipo gratis. El motivo es el mismo para todo el tier, no específico de esta profesión."
    },
    {
     "src": "pzfans_builds",
     "text": "La propone como base de su configuración “Todoterreno”.",
     "build": "Todoterreno"
    }
   ],
   "file": "media/scripts/generated/characters/character_professions.txt",
   "line": 242
  }
 ]
};
