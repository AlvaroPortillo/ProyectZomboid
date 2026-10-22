/* Generado desde los scripts de Project Zomboid 42.21.0 (solo lectura).
   Cifras: media/scripts/generated/items/weapon.txt. Botín: media/lua/server/...
   Los campos tier, reason y community son valoraciones, no datos del juego. */
window.PZ_DATA = {
 "meta": {
  "game": "Project Zomboid",
  "version": "42.21.0",
  "revision": "4a0e9546ec",
  "versionSource": "C:/Users/<usuario>/Zomboid/version.txt (escrito por el juego al arrancar) y appmanifest_108600.acf sin rama beta",
  "consulted": "13/10/2026",
  "scriptsScanned": "media/scripts (todos los .txt)",
  "rangedFound": 22,
  "realFirearms": 20,
  "toys": 2,
  "rarityRule": "Suma de pesos máximos por fuente no militar y no aleatoria (tiendas, policía, casas, vehículos civiles y policiales). Se excluyen contenidos garantizados de un contenedor concreto (peso 100 o más). Común ≥ 150, poco común 50–149, rara 20–49, muy rara < 20. Es una aproximación propia: el peso es relativo dentro de cada lista y no tiene en cuenta cuántos contenedores de cada tipo hay en el mapa.",
  "map": {
   "url": "https://pzmap.org/",
   "version": "42.20",
   "checked": "13/10/2026",
   "note": "pzmap.org no se puede incrustar (X-Frame-Options: SAMEORIGIN). Se abre en su propia ventana."
  }
 },
 "sources": {
  "steam4215": {
   "title": "Lista de tiers de armas actual, b42.15 (en curso)",
   "titleOriginal": "Current guns tier list b42.15 (WIP)",
   "where": "Foro de Steam, discusiones generales de Project Zomboid. Autor: NotForMe. Publicado el 15 de marzo (la página no muestra el año).",
   "url": "https://steamcommunity.com/app/108600/discussions/0/800090354736053050/",
   "version": "42.15"
  },
  "pzfans4219": {
   "title": "Mejores armas de fuego en Project Zomboid, versión 42.19 (clasificación por situación)",
   "titleOriginal": "Best Firearms in Project Zomboid Build 42.19 (Situational Ranking)",
   "where": "pzfans.com, web de aficionados. La página no indica autor ni fecha.",
   "url": "https://pzfans.com/what-is-the-best-firearm-weapon-in-project-zomboid/",
   "version": "42.19"
  },
  "steamShotgun": {
   "title": "Las escopetas son malas en la B42, ¿por qué?",
   "titleOriginal": "Shotguns suck in B42, why?",
   "where": "Foro de Steam. Autor: kindertak, 7 de enero de 2025 (versión 42 inestable temprana).",
   "url": "https://steamcommunity.com/app/108600/discussions/0/592885762520778115",
   "version": "42 inestable (enero de 2025)"
  }
 },
 "hypotheses": [
  {
   "claim": "Datos mezclados de 41.21, 42.15 y 42.21.",
   "verdict": "Corregido",
   "detail": "Todas las cifras del panel salen de la 42.21.0 instalada. Las fuentes de la comunidad son de 42.15 y 42.19 y se muestran aparte, con su versión. Nada de 41.21 se usa."
  },
  {
   "claim": "La JS-2000 lleva 6 cartuchos (o 5).",
   "verdict": "5",
   "detail": "MaxAmmo = 5 en la JS-2000 y en su versión recortada (weapon.txt, líneas 11494 y 11579). El 6 solo aparece en ClipSize de la recortada, un campo heredado que no coincide con los cargadores reales: la M1911 tiene ClipSize 15 y su cargador lleva 7."
  },
  {
   "claim": "M14 frente a M1A.",
   "verdict": "Es la misma arma",
   "detail": "Objeto interno Base.AssaultRifle2. En inglés se llama “M1A Rifle” y su cargador “M1A Magazine”. La traducción española del juego aún dice “Fusil M14”, y el sprite, los sonidos y el id del cargador conservan el nombre M14."
  },
  {
   "claim": "El M16 aparece con tiers distintos.",
   "verdict": "Una sola arma, criterios distintos",
   "detail": "Solo existe Base.AssaultRifle. Las diferencias vienen de fuentes, versiones y criterios distintos. Aquí lleva un único tier, S, con su motivo."
  },
  {
   "claim": "“No exclusiva militar” junto a “militar muy rara”.",
   "verdict": "Las dos cosas son ciertas",
   "detail": "El M16 sale en armerías SWAT, coches SWAT, laboratorios de droga, refugios y la taquilla especial de la casa de empeños, así que no es exclusivo. Pero su peso fuera de zonas militares suma 17, frente a 30 en almacenes y vehículos militares, y los zombis militares lo llevan a la espalda con un 50 % de probabilidad."
  },
  {
   "claim": "Pesos de botín “2” frente a “10”.",
   "verdict": "Depende de la lista",
   "detail": "Ejemplo del M16: peso 20 y 10 (dos entradas) en ArmyStorageGuns, 2 en vehículos militares, 4 en DrugLabGuns y 1 en refugios. El peso solo compara objetos dentro de la misma lista; no es un porcentaje."
  },
  {
   "claim": "Citas que no respaldan lo afirmado.",
   "verdict": "Filtrado",
   "detail": "Se descartó el hilo de Steam «Guns Are Broken AF» («Las armas están rotísimas», septiembre de 2024) porque es anterior a la versión 42. No se usan hilos de mods ni de errores para el tier. Cada cita de la comunidad lleva al lado si coincide con la 42.21."
  }
 ],
 "zones": [
  {
   "room": "gunstore",
   "label": "Armerías",
   "count": 30
  },
  {
   "room": "hunting",
   "label": "Tiendas de caza",
   "count": 29
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
  },
  {
   "room": "policegunstorage",
   "label": "Armeros de comisaría",
   "count": 15
  },
  {
   "room": "pawnshop",
   "label": "Casas de empeños",
   "count": 11
  },
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
  },
  {
   "room": "toolstore",
   "label": "Ferreterías",
   "count": 60
  },
  {
   "room": "gasstore",
   "label": "Gasolineras",
   "count": 97
  },
  {
   "room": "mechanic",
   "label": "Talleres",
   "count": 85
  }
 ],
 "weapons": [
  {
   "id": "AssaultRifle",
   "name": "Fusil M16",
   "nameEn": "M16 Assault Rifle",
   "short": "M16",
   "category": "automatica",
   "tier": "S",
   "reason": "Única automática del juego: 30 balas y atraviesa hasta 2 objetivos. Pega: ruido 150 y fuera de zonas militares es muy rara.",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 30,
    "magazine": "Cargador M16",
    "magazineId": "Base.556Clip",
    "dmgMin": 1.0,
    "dmgMax": 1.6,
    "range": 30.0,
    "fireMode": "Automático o manual",
    "noise": 150,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 4.0,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 40,
    "recoil": 15,
    "jam": 1,
    "pierce": true,
    "maxHit": 2,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_AssaultRifle.png",
   "iconName": "Item_AssaultRifle",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13388
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13517,
     "contains": {
      "n": 20,
      "of": "Cartuchos 5.56mm",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "556Carton",
     "name": "Cartón de Munición 5.56",
     "icon": "icons/ammo/Item_Parcel_Medium_Military.png",
     "iconName": "Item_Parcel_Medium_Military",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13532,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos 5.56mm",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "556Clip",
     "name": "Cargador M16",
     "icon": "icons/ammo/Item_m16clip.png",
     "iconName": "Item_m16clip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13781,
     "capacity": 30
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 10549,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Muy rara",
    "score": 17.0,
    "stashScore": 10.0,
    "militaryScore": 30.0,
    "military": "No es exclusiva militar, pero fuera de zonas militares es muy rara.",
    "sources": [
     {
      "name": "SWATStorageGuns",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 48186,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PoliceSWATTruckBed",
      "w": 4.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 8189,
      "kind": "Vehículo policial"
     },
     {
      "name": "PoliceSWATSeatRear",
      "w": 4.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 8297,
      "kind": "Vehículo policial"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37303,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 19623,
      "kind": "Alijo o escondite"
     },
     {
      "name": "Bag_WeaponBag",
      "w": 2.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18869,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20843,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 1081,
      "kind": "Militar"
     },
     {
      "name": "ArmyLightTruckBed",
      "w": 2.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5741,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyLightSeatRear",
      "w": 2.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5918,
      "kind": "Vehículo militar"
     }
    ],
    "guaranteed": [
     {
      "name": "RifleCase4",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2836,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 4
   },
   "zombies": [
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 788
    },
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 804
    },
    {
     "def": "assaultRifleArmyOnBack",
     "chance": 50.0,
     "outfits": [
      "ArmyCamoDesert",
      "ArmyCamoGreen"
     ],
     "more": 0,
     "line": 819
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916
    },
    {
     "def": "gunOnBackBountyHunter",
     "chance": 30.0,
     "outfits": [
      "BountyHunter"
     ],
     "more": 0,
     "line": 932
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "armystorage",
     "label": "Almacén militar",
     "count": 22,
     "w": 20.0
    },
    {
     "room": "policeswat",
     "label": "Sala SWAT",
     "count": 1,
     "w": 8.0
    },
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 4.0
    },
    {
     "room": "drugshack",
     "label": "Chabola de droga",
     "count": 7,
     "w": 1.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 1.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A. Lo llama el mejor fusil de cargador: apunta más rápido y retrocede menos que el M14 (M1A en inglés), aunque hace menos daño.",
     "check": "Coincide con la 42.21: tiempo de apuntado 40 frente a 50, retroceso 15 frente a 20 y daño 1,0–1,6 frente a 1,2–2,0.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«El único fusil de combate totalmente automático».",
     "check": "Coincide: es la única con modo automático y manual (FireModePossibilities = Auto/Single).",
     "original": "only full-auto combat rifle."
    }
   ]
  },
  {
   "id": "AssaultRifle2",
   "name": "Fusil M14",
   "nameEn": "M1A Rifle",
   "short": "M14",
   "category": "rifle",
   "tier": "S",
   "reason": "El mejor fusil en cifras: daño 1,2–2,0, cargador de 20 y alcance 40. Pega: muy raro y ruido 170.",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 20,
    "magazine": "Cargador M14",
    "magazineId": "Base.M14Clip",
    "dmgMin": 1.2,
    "dmgMax": 2.0,
    "range": 40.0,
    "fireMode": "Manual",
    "noise": 170,
    "hitChance": 50,
    "crit": 30.0,
    "weight": 4.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 50,
    "recoil": 20,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": 20,
    "fake": false
   },
   "icon": "icons/Item_AssaultRifle2.png",
   "iconName": "Item_AssaultRifle2",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13375
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13487,
     "contains": {
      "n": 20,
      "of": "Cartuchos .308",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "308Carton",
     "name": "Cartón de Munición .308",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13502,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .308",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "M14Clip",
     "name": "Cargador M14",
     "icon": "icons/ammo/Item_m14clip.png",
     "iconName": "Item_m14clip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13811,
     "capacity": 20
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 10643,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Muy rara",
    "score": 14.5,
    "stashScore": 3.5,
    "militaryScore": 0.5,
    "military": "No es exclusiva militar, pero fuera de zonas militares es muy rara.",
    "sources": [
     {
      "name": "PawnShopGunsSpecial",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37304,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreRifles",
      "w": 2.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26354,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37255,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26266,
      "kind": "Tienda"
     },
     {
      "name": "PoliceSeatFront",
      "w": 1.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 3610,
      "kind": "Vehículo policial"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20794,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20911,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20844,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyLightTruckBed",
      "w": 0.1,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5742,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyLightSeatFront",
      "w": 0.1,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5823,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyLightSeatRear",
      "w": 0.1,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5919,
      "kind": "Vehículo militar"
     }
    ],
    "guaranteed": [
     {
      "name": "RifleCase3",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2812,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 11
   },
   "zombies": [
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 804
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 902
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 4.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 2.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 2.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 2.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 2.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 1.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A. Hace más daño que el M16 y recomienda guardar la munición de 7,62 para él.",
     "check": "Coincide: daño 1,2–2,0 frente a 1,0–1,6.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«El mejor conjunto de fusil de batalla: cargador de 20, daño 1,2–2,0, atraviesa, alcance 40».",
     "check": "Coincide con la 42.21 en las cuatro cifras.",
     "original": "best battle-rifle package: 20-round mag, 1.2–2.0 damage, pierce, range 40."
    }
   ]
  },
  {
   "id": "JS14_Rifle",
   "name": "Rifle JS-14",
   "nameEn": "JS-14 Rifle",
   "short": "JS-14",
   "category": "rifle",
   "tier": "A",
   "reason": "Cargador de 20 de 5,56 y atraviesa 2 objetivos, más fácil de encontrar que el M16. Pega: precisión base 45 y solo dispara en modo manual.",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 20,
    "magazine": "Cargador JS-14",
    "magazineId": "Base.JS14_Clip",
    "dmgMin": 1.0,
    "dmgMax": 1.6,
    "range": 30.0,
    "fireMode": "Manual",
    "noise": 150,
    "hitChance": 45,
    "crit": 20.0,
    "weight": 3.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 40,
    "recoil": 15,
    "jam": 2,
    "pierce": true,
    "maxHit": 2,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_JS14Rifle.png",
   "iconName": "Item_Firearm_JS14Rifle",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13388
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13517,
     "contains": {
      "n": 20,
      "of": "Cartuchos 5.56mm",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "556Carton",
     "name": "Cartón de Munición 5.56",
     "icon": "icons/ammo/Item_Parcel_Medium_Military.png",
     "iconName": "Item_Parcel_Medium_Military",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13532,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos 5.56mm",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "JS14_Clip",
     "name": "Cargador JS-14",
     "icon": "icons/ammo/Item_m16clip.png",
     "iconName": "Item_m16clip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13826,
     "capacity": 20
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19217,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 54.53,
    "stashScore": 42.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "PrisonStorageGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 39582,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "GunStoreRifles",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26356,
      "kind": "Tienda"
     },
     {
      "name": "GarageFirearms",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23058,
      "kind": "Casa o local"
     },
     {
      "name": "Hunter",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 27560,
      "kind": "Casa o local"
     },
     {
      "name": "PawnShopGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37258,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Late",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20915,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20848,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20798,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 19
   },
   "zombies": [
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 804
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "prisonstorage",
     "label": "Almacén de la prisión",
     "count": 4,
     "w": 10.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 8.0
    },
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 8.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 8.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 8.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 8.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A, aunque el autor discrepa: dice que es igual que el M16 con 10 balas menos, que se desgasta menos y que es más común.",
     "check": "Solo en parte en la 42.21: 20 frente a 30 balas y más común, sí. Pero los dos se desgastan igual (1 entre 200), y la JS-14 tiene precisión 45 frente a 50 y no dispara en automático.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Semiautomático de 5,56 que puede alcanzar a dos».",
     "check": "Coincide: alcanza hasta 2 objetivos (MaxHitcount = 2).",
     "original": "semi 5.56 that can hit two"
    }
   ]
  },
  {
   "id": "TrapperCarbine",
   "name": "Carabina de trampero",
   "nameEn": "Trapper Carbine",
   "short": "De trampero",
   "category": "carabina",
   "tier": "A",
   "reason": "El arma larga más silenciosa (radio 70) y usa el mismo cargador que la M1911. Pega: daño 1,0–1,4 y no atraviesa.",
   "stats": {
    "ammo": "Cartuchos .45 Auto",
    "ammoEn": ".45 ACP Round",
    "ammoId": "base:bullets_45",
    "capacity": 7,
    "magazine": "Cargador M1911",
    "magazineId": "Base.45Clip",
    "dmgMin": 1.0,
    "dmgMax": 1.4,
    "range": 20.0,
    "fireMode": "Manual",
    "noise": 70,
    "hitChance": 50,
    "crit": 22.0,
    "weight": 3.2,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 35,
    "recoil": 12,
    "jam": 2,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_TrapperCarbine.png",
   "iconName": "Item_Firearm_TrapperCarbine",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13450
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13664,
     "contains": {
      "n": 50,
      "of": "Cartuchos .45 Auto",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:20"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets45Carton",
     "name": "Cartón de balas .45 Auto",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13678,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .45 Auto",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "45Clip",
     "name": "Cargador M1911",
     "icon": "icons/ammo/Item_BerettaClip.png",
     "iconName": "Item_BerettaClip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13766,
     "capacity": 7
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19657,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Rara",
    "score": 30.31,
    "stashScore": 24.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "GunStoreRifles",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26359,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37320,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37270,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26275,
      "kind": "Tienda"
     },
     {
      "name": "PoliceEvidence",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38218,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 19632,
      "kind": "Alijo o escondite"
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20122,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20859,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 18
   },
   "zombies": [],
   "mapRooms": [
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 8.0
    },
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 8.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 8.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 8.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 8.0
    },
    {
     "room": "drugshack",
     "label": "Chabola de droga",
     "count": 7,
     "w": 4.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B. La llama la mejor arma nueva: recarga y apunta rápido, hace poco ruido y retrocede como una pistola. Añade que es la única nueva que no atraviesa.",
     "check": "Coincide en apuntado 35, ruido 70 y retroceso 12, igual que la Pistola M9. Falla en lo de la única: en la 42.21 la Carabina L92 tampoco atraviesa.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Destaca por el control del ruido: ruido 70».",
     "check": "Coincide: radio de ruido (SoundRadius) = 70.",
     "original": "standout for noise control: noise 70"
    }
   ]
  },
  {
   "id": "Pistol2",
   "name": "Pistola M1911",
   "nameEn": "M1911 Pistol",
   "short": "M1911",
   "category": "pistola",
   "tier": "A",
   "reason": "La pistola más equilibrada: daño 0,9–1,2 con radio de ruido 70. Pega: solo 7 balas.",
   "stats": {
    "ammo": "Cartuchos .45 Auto",
    "ammoEn": ".45 ACP Round",
    "ammoId": "base:bullets_45",
    "capacity": 7,
    "magazine": "Cargador M1911",
    "magazineId": "Base.45Clip",
    "dmgMin": 0.9,
    "dmgMax": 1.2,
    "range": 12.0,
    "fireMode": "Manual",
    "noise": 70,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 1.5,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 25,
    "recoil": 15,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": 15,
    "fake": false
   },
   "icon": "icons/Item_HandGun2.png",
   "iconName": "Item_HandGun2",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13450
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13664,
     "contains": {
      "n": 50,
      "of": "Cartuchos .45 Auto",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:20"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets45Carton",
     "name": "Cartón de balas .45 Auto",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13678,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .45 Auto",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "45Clip",
     "name": "Cargador M1911",
     "icon": "icons/ammo/Item_BerettaClip.png",
     "iconName": "Item_BerettaClip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13766,
     "capacity": 7
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11080,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 103.11,
    "stashScore": 110.0,
    "militaryScore": 18.0,
    "military": "No es exclusiva militar. También sale en 3 fuente(s) militares.",
    "sources": [
     {
      "name": "GunStorePistols",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26315,
      "kind": "Tienda"
     },
     {
      "name": "GarageFirearms",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23062,
      "kind": "Casa o local"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37313,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37264,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26260,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20804,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21350,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20854,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyLightTruckBed",
      "w": 6.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5782,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyLightSeatFront",
      "w": 6.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5880,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyGloveBox",
      "w": 6.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5710,
      "kind": "Vehículo militar"
     }
    ],
    "guaranteed": [
     {
      "name": "PistolCase2",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2218,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 20
   },
   "zombies": [
    {
     "def": "handgunHolsterShoulder",
     "chance": 50.0,
     "outfits": [
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 9,
     "line": 597
    },
    {
     "def": "handgunHolsterDetective",
     "chance": 50.0,
     "outfits": [
      "Agent",
      "Detective",
      "Mob",
      "MobCasual",
      "Police_SWAT"
     ],
     "more": 0,
     "line": 641
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685
    }
   ],
   "mapRooms": [
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 20.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 10.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "policegunstorage",
     "label": "Armero de comisaría",
     "count": 15,
     "w": 10.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Pega más fuerte con el .45 (0,9–1,2) y hace menos ruido (70)».",
     "check": "Coincide.",
     "original": "stronger .45 punch (0.9–1.2) and quieter (70)."
    }
   ]
  },
  {
   "id": "Pistol3",
   "name": "Pistola D-E",
   "nameEn": "B-F Pistol",
   "short": "D-E",
   "category": "pistola",
   "tier": "A",
   "reason": "Daño de Magnum (1,0–1,6) con cargador de 8. Pega: muy rara y ruido 120.",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 8,
    "magazine": "Cargador D-E",
    "magazineId": "Base.44Clip",
    "dmgMin": 1.0,
    "dmgMax": 1.6,
    "range": 17.0,
    "fireMode": "Manual",
    "noise": 120,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 2.0,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 25,
    "recoil": 17,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": 15,
    "fake": false
   },
   "icon": "icons/Item_HandGun.png",
   "iconName": "Item_HandGun",
   "iconPack": "media/texturepacks/UI.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13438
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13635,
     "contains": {
      "n": 20,
      "of": "Cartuchos .44 Magnum",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets44Carton",
     "name": "Cartón de balas .44 Magnum",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13649,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .44 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "44Clip",
     "name": "Cargador D-E",
     "icon": "icons/ammo/Item_BerettaClip.png",
     "iconName": "Item_BerettaClip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13751,
     "capacity": 8
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11164,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Muy rara",
    "score": 15.04,
    "stashScore": 98.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "PawnShopGunsSpecial",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37314,
      "kind": "Tienda"
     },
     {
      "name": "GunStorePistols",
      "w": 2.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26316,
      "kind": "Tienda"
     },
     {
      "name": "GarageFirearms",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23063,
      "kind": "Casa o local"
     },
     {
      "name": "GunStoreGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26261,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37265,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "DrugShackWeapons",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20118,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20922,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20855,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "PistolCase3",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2239,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 11
   },
   "zombies": [
    {
     "def": "handgunHolsterShoulder",
     "chance": 50.0,
     "outfits": [
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 9,
     "line": 597
    }
   ],
   "mapRooms": [
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 10.0
    },
    {
     "room": "drugshack",
     "label": "Chabola de droga",
     "count": 7,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 2.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 2.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 1.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Pistola de cargador del .44 que pega fuerte (1,0–1,6, ruido 120)».",
     "check": "Coincide.",
     "original": "hard-hitting .44 magazine pistol (1.0–1.6, noise 120)."
    }
   ]
  },
  {
   "id": "Shotgun",
   "name": "Escopeta JS-2000",
   "nameEn": "JS-2000 Shotgun",
   "short": "JS-2000",
   "category": "escopeta",
   "tier": "A",
   "reason": "9 perdigones, daño 1,5–2,2 y la escopeta más fácil de encontrar. Pega: radio de ruido 200.",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12g Round",
    "ammoId": "base:shotgun_shells",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 12.0,
    "fireMode": "Manual",
    "noise": 200,
    "hitChance": 65,
    "crit": 70.0,
    "weight": 4.0,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 2,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "spread": 1.0,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_PumpShotgun.png",
   "iconName": "Item_Firearm_PumpShotgun",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13474
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmoBox.png",
     "iconName": "Item_ShotgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13722,
     "contains": {
      "n": 25,
      "of": "Cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:68"
     }
    },
    {
     "role": "Cartón",
     "id": "ShotgunShellsCarton",
     "name": "Cartón de cartuchos de escopeta",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13736,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11494,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Común",
    "score": 327.16,
    "stashScore": 100.0,
    "militaryScore": 40.0,
    "military": "No es exclusiva militar. También sale en 5 fuente(s) militares.",
    "sources": [
     {
      "name": "GunStoreShotguns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26408,
      "kind": "Tienda"
     },
     {
      "name": "PoliceStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38614,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PrisonStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 39585,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "Bag_Police",
      "w": 20.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2284,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "RangerStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40650,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 19630,
      "kind": "Alijo o escondite"
     },
     {
      "name": "Bag_WeaponBag",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18901,
      "kind": "Alijo o escondite"
     },
     {
      "name": "DrugShackWeapons",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20120,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyLightSeatRear",
      "w": 8.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5973,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyHeavyTruckBed",
      "w": 8.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 6065,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyLightTruckBed",
      "w": 8.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5786,
      "kind": "Vehículo militar"
     }
    ],
    "guaranteed": [
     {
      "name": "Bag_ShotgunBag",
      "w": 200.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18613,
      "kind": "Otro"
     },
     {
      "name": "ShotgunCase1",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2921,
      "kind": "Maletín de arma"
     },
     {
      "name": "ShotgunCache2/ShotgunBox/junk",
      "w": 100.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 22030,
      "kind": "Alijo o escondite"
     }
    ],
    "sourceCount": 40
   },
   "zombies": [
    {
     "def": "shotgunPolice",
     "chance": 30.0,
     "outfits": [
      "Police",
      "PoliceState",
      "PoliceRiot",
      "Police_SWAT",
      "PrivateMilitia",
      "Ranger"
     ],
     "more": 1,
     "line": 774
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag",
     "chance": 50.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 1245
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 20.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 20.0
    },
    {
     "room": "garage_ranger",
     "label": "Garaje de guardabosques",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 20.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "policegunstorage",
     "label": "Armero de comisaría",
     "count": 15,
     "w": 20.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A, dentro de «escopetas sin estrangulador» (choke). En su recuento de botín es el arma que más encontró (62).",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«La mejor escopeta de corredera para todo: 5 cartuchos, daño 1,5–2,2, alcance 12».",
     "check": "Coincide.",
     "original": "best generalist pump: 5 shells, damage 1.5–2.2, range 12."
    },
    {
     "src": "steamShotgun",
     "text": "Debate sobre si la B42 debilitó las escopetas. Un usuario cita un mensaje fijado del Discord de la comunidad, no un anuncio oficial: «la escopeta es mucho más un remate seguro que una barredora de calles».",
     "check": null,
     "original": "the shotgun is much more a surefire finisher than a street sweeper"
    }
   ]
  },
  {
   "id": "JS3T_Shotgun",
   "name": "Escopeta táctica JS-3T",
   "nameEn": "JS-3T Tactical Shotgun",
   "short": "JS-3T",
   "category": "escopeta",
   "tier": "A",
   "reason": "Mismo daño que la JS-2000 con 7 cartuchos. Pega: rara y ruido 200.",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12g Round",
    "ammoId": "base:shotgun_shells",
    "capacity": 7,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 12.0,
    "fireMode": "Manual",
    "noise": 200,
    "hitChance": 65,
    "crit": 70.0,
    "weight": 4.5,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 28,
    "jam": 2,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "spread": 1.0,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_JS3T.png",
   "iconName": "Item_Firearm_JS3T",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13474
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmoBox.png",
     "iconName": "Item_ShotgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13722,
     "contains": {
      "n": 25,
      "of": "Cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:68"
     }
    },
    {
     "role": "Cartón",
     "id": "ShotgunShellsCarton",
     "name": "Cartón de cartuchos de escopeta",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13736,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19307,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Rara",
    "score": 35.0,
    "stashScore": 3.0,
    "militaryScore": 4.0,
    "military": "No es exclusiva militar. También sale en 1 fuente(s) militares.",
    "sources": [
     {
      "name": "SWATStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 48184,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "GunStoreShotguns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26409,
      "kind": "Tienda"
     },
     {
      "name": "Bag_Police",
      "w": 4.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2280,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PoliceStorageGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38613,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "GunStoreGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26270,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20799,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20916,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20849,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyStorageGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 1086,
      "kind": "Militar"
     }
    ],
    "guaranteed": [],
    "sourceCount": 7
   },
   "zombies": [
    {
     "def": "shotgunPolice",
     "chance": 30.0,
     "outfits": [
      "Police",
      "PoliceState",
      "PoliceRiot",
      "Police_SWAT",
      "PrivateMilitia",
      "Ranger"
     ],
     "more": 1,
     "line": 774
    },
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 788
    },
    {
     "def": "gunOnBackBountyHunter",
     "chance": 30.0,
     "outfits": [
      "BountyHunter"
     ],
     "more": 0,
     "line": 932
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "policeswat",
     "label": "Sala SWAT",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "armystorage",
     "label": "Almacén militar",
     "count": 22,
     "w": 4.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 4.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 4.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 4.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 4.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A, dentro de «escopetas sin estrangulador» (choke). Cree que alcanza a más de 6 zombis con puntería máxima, pero no pudo reproducirlo.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«El mismo rango de daño que la JS-2000, con 7 cartuchos».",
     "check": "Coincide.",
     "original": "same damage band as the JS-2000 with 7 shells"
    }
   ]
  },
  {
   "id": "Pistol",
   "name": "Pistola M9",
   "nameEn": "M9 Pistol",
   "short": "M9",
   "category": "pistola",
   "tier": "B",
   "reason": "15 balas y la pistola más común. Pega: daño bajo, 0,6–1,0.",
   "stats": {
    "ammo": "Cartuchos 9mm",
    "ammoEn": "9x19mm Round",
    "ammoId": "base:bullets_9mm",
    "capacity": 15,
    "magazine": "Cargador M9",
    "magazineId": "Base.9mmClip",
    "dmgMin": 0.6,
    "dmgMax": 1.0,
    "range": 15.0,
    "fireMode": "Manual",
    "noise": 100,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 1.5,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 25,
    "recoil": 12,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": 15,
    "fake": false
   },
   "icon": "icons/Item_HandGun3.png",
   "iconName": "Item_HandGun3",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13462
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13693,
     "contains": {
      "n": 50,
      "of": "Cartuchos 9mm",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:20"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets9mmCarton",
     "name": "Cartón de Balas 9mm",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13707,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos 9mm",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    },
    {
     "role": "Cargador",
     "id": "9mmClip",
     "name": "Cargador M9",
     "icon": "icons/ammo/Item_BerettaClip.png",
     "iconName": "Item_BerettaClip",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13796,
     "capacity": 15
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 10996,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Común",
    "score": 239.42,
    "stashScore": 134.0,
    "militaryScore": 38.0,
    "military": "No es exclusiva militar. También sale en 4 fuente(s) militares.",
    "sources": [
     {
      "name": "PoliceTools",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38728,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PoliceStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38605,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "SWATStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 48181,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "SecurityLockers",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 44508,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "Bag_Police",
      "w": 20.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2281,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "GunCache1/plankstash",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21309,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache2/Bag_DuffelBagTINT",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21454,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21349,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 1084,
      "kind": "Militar"
     },
     {
      "name": "ArmyLightSeatRear",
      "w": 6.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 5969,
      "kind": "Vehículo militar"
     },
     {
      "name": "ArmyHeavyTruckBed",
      "w": 6.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 6061,
      "kind": "Vehículo militar"
     }
    ],
    "guaranteed": [
     {
      "name": "PistolCase1",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2197,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 30
   },
   "zombies": [
    {
     "def": "handgunHolsterShoulder",
     "chance": 50.0,
     "outfits": [
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 9,
     "line": 597
    },
    {
     "def": "handgunHolsterPolice",
     "chance": 50.0,
     "outfits": [
      "Police",
      "PoliceState",
      "PoliceRiot",
      "PrisonGuard"
     ],
     "more": 0,
     "line": 615
    },
    {
     "def": "handgunHolsterDetective",
     "chance": 50.0,
     "outfits": [
      "Agent",
      "Detective",
      "Mob",
      "MobCasual",
      "Police_SWAT"
     ],
     "more": 0,
     "line": 641
    },
    {
     "def": "handgunHolsterArmy",
     "chance": 50.0,
     "outfits": [
      "ArmyCamoDesert",
      "ArmyCamoGreen",
      "ArmyInstructor",
      "ArmyServiceUniform"
     ],
     "more": 0,
     "line": 658
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685
    },
    {
     "def": "handgunHolsterSWAT",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 702
    },
    {
     "def": "handgunHolsterGhillie",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 717
    }
   ],
   "mapRooms": [
    {
     "room": "armystorage",
     "label": "Almacén militar",
     "count": 22,
     "w": 20.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 20.0
    },
    {
     "room": "policegunstorage",
     "label": "Armero de comisaría",
     "count": 15,
     "w": 20.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 20.0
    },
    {
     "room": "policeswat",
     "label": "Sala SWAT",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 20.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«La reina de la capacidad (15). Daño de solo 0,6–1,0; ruido 100».",
     "check": "Coincide.",
     "original": "capacity king (15). Damage only 0.6–1.0; noise 100."
    }
   ]
  },
  {
   "id": "Revolver",
   "name": "Revólver M625",
   "nameEn": "Patrol Revolver",
   "short": "M625",
   "category": "revolver",
   "tier": "B",
   "reason": "No se encasquilla y es común; su .357 sirve también para la L92. Pega: 6 balas y recarga lenta.",
   "stats": {
    "ammo": "Cartucho .357 Magnum",
    "ammoEn": ".357 Magnum Round",
    "ammoId": "base:bullets_357",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 0.95,
    "dmgMax": 1.4,
    "range": 12.0,
    "fireMode": "Manual",
    "noise": 100,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 1.5,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 25,
    "recoil": 16,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": 15,
    "fake": false
   },
   "icon": "icons/Item_Revolver.png",
   "iconName": "Item_Revolver",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets357",
     "name": "Cartucho .357 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13414
    },
    {
     "role": "Caja",
     "id": "Bullets357Box",
     "name": "Caja de cartuchos .357 Magnum",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13577,
     "contains": {
      "n": 50,
      "of": "Cartucho .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:20"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets357Carton",
     "name": "Cartón de cartuchos .357 Magnum",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13591,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11248,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Común",
    "score": 368.2,
    "stashScore": 76.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "RangerStorageGuns",
      "w": 50.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40646,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "AdventurerSeatFront",
      "w": 50.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 9082,
      "kind": "Vehículo civil"
     },
     {
      "name": "AdventurerGloveBox",
      "w": 50.0,
      "file": "media/lua/server/Vehicles/VehicleDistributions.lua",
      "line": 9044,
      "kind": "Vehículo civil"
     },
     {
      "name": "GunStorePistols",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26317,
      "kind": "Tienda"
     },
     {
      "name": "Bag_Police",
      "w": 20.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2282,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21354,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/plankstash",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21313,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache2/Bag_DuffelBagTINT",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21459,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "RevolverCase2",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2731,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 34
   },
   "zombies": [
    {
     "def": "handgunHolsterShoulder",
     "chance": 50.0,
     "outfits": [
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 9,
     "line": 597
    },
    {
     "def": "handgunHolsterDetective",
     "chance": 50.0,
     "outfits": [
      "Agent",
      "Detective",
      "Mob",
      "MobCasual",
      "Police_SWAT"
     ],
     "more": 0,
     "line": 641
    },
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 671
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685
    }
   ],
   "mapRooms": [
    {
     "room": "garage_ranger",
     "label": "Garaje de guardabosques",
     "count": 1,
     "w": 50.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 20.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 20.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "policegunstorage",
     "label": "Armero de comisaría",
     "count": 15,
     "w": 20.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 20.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier C, dentro de «revólveres». Los recomienda para puntería de 1 a 4.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Revólveres: probabilidad de encasquillarse 0».",
     "check": "Coincide: JamGunChance = 0.",
     "original": "Revolvers — jam chance 0."
    }
   ]
  },
  {
   "id": "Revolver_Long",
   "name": "Magnum",
   "nameEn": "Magnum",
   "short": "Magnum",
   "category": "revolver",
   "tier": "B",
   "reason": "Daño 1,0–1,6 y alcance 18 sin encasquillarse. Pega: ruido 120 y recarga cartucho a cartucho.",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.0,
    "dmgMax": 1.6,
    "range": 18.0,
    "fireMode": "Manual",
    "noise": 120,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 2.0,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 25,
    "recoil": 17,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": 15,
    "fake": false
   },
   "icon": "icons/Item_RevolverLong.png",
   "iconName": "Item_RevolverLong",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13438
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13635,
     "contains": {
      "n": 20,
      "of": "Cartuchos .44 Magnum",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets44Carton",
     "name": "Cartón de balas .44 Magnum",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13649,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .44 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11330,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 111.15,
    "stashScore": 55.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "HollowBook_Handgun",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 19693,
      "kind": "Otro"
     },
     {
      "name": "RangerStorageGuns",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40648,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PoliceStateTools",
      "w": 6.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38534,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PoliceStateOutfit",
      "w": 6.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38499,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "RangerOutfit",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40621,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "GunCache1/plankstash",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21314,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache2/Bag_DuffelBagTINT",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21460,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21355,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "junk",
      "w": 200.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 28857,
      "kind": "Otro"
     },
     {
      "name": "RevolverCase3",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2749,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 34
   },
   "zombies": [
    {
     "def": "handgunHolsterShoulder",
     "chance": 50.0,
     "outfits": [
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 9,
     "line": 597
    },
    {
     "def": "handgunHolsterDetective",
     "chance": 50.0,
     "outfits": [
      "Agent",
      "Detective",
      "Mob",
      "MobCasual",
      "Police_SWAT"
     ],
     "more": 0,
     "line": 641
    },
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 671
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685
    },
    {
     "def": "handgunHolsterSWAT",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 702
    },
    {
     "def": "handgunHolsterGhillie",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 717
    },
    {
     "def": "handgunHolsterShoulder_Hass",
     "chance": 50.0,
     "outfits": [
      "Judge_Matt_Hass"
     ],
     "more": 0,
     "line": 2251
    }
   ],
   "mapRooms": [
    {
     "room": "garage_ranger",
     "label": "Garaje de guardabosques",
     "count": 1,
     "w": 8.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 4.0
    },
    {
     "room": "policegunstorage",
     "label": "Armero de comisaría",
     "count": 15,
     "w": 4.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 4.0
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 4.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 2.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier C, dentro de «revólveres».",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«El Magnum iguala el daño de la Pistola D-E (B-F en inglés) a ritmo de revólver».",
     "check": "Coincide en daño: 1,0–1,6 las dos.",
     "original": "Magnum matches B-F damage at revolver speed."
    }
   ]
  },
  {
   "id": "HuntingRifle",
   "name": "Rifle MSR788",
   "nameEn": "MSR788 Rifle",
   "short": "MSR788",
   "category": "rifle",
   "tier": "B",
   "reason": "Daño 1,2–2,0, alcance 40 y común. Pega: 4 balas internas y apuntado lento (60).",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 4,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.2,
    "dmgMax": 2.0,
    "range": 40.0,
    "fireMode": "Manual",
    "noise": 170,
    "hitChance": 50,
    "crit": 30.0,
    "weight": 4.0,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 60,
    "recoil": 23,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_RifleHunting.png",
   "iconName": "Item_RifleHunting",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [
    "VarmintRifle"
   ],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13375
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13487,
     "contains": {
      "n": 20,
      "of": "Cartuchos .308",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "308Carton",
     "name": "Cartón de Munición .308",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13502,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .308",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 10906,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Común",
    "score": 228.16,
    "stashScore": 26.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "RangerStorageGuns",
      "w": 50.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40653,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PrisonStorageGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 39580,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "Hunter",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 27559,
      "kind": "Casa o local"
     },
     {
      "name": "GarageFirearms",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23057,
      "kind": "Casa o local"
     },
     {
      "name": "GunStoreGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26268,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "Bag_WeaponBag",
      "w": 4.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18887,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20847,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache2/Bag_DuffelBagTINT",
      "w": 4.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21452,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "RifleCase2",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2790,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 32
   },
   "zombies": [
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBackBag",
     "chance": 50.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 1245
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    }
   ],
   "mapRooms": [
    {
     "room": "garage_ranger",
     "label": "Garaje de guardabosques",
     "count": 1,
     "w": 50.0
    },
    {
     "room": "prisonstorage",
     "label": "Almacén de la prisión",
     "count": 4,
     "w": 20.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 10.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 10.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 10.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier C.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Cerrojo; atraviesa; no es “silencioso”».",
     "check": "Coincide: atraviesa y radio de ruido 170.",
     "original": "Bolt · pierce · not “quiet”"
    }
   ]
  },
  {
   "id": "MSR7T_Rifle",
   "name": "Rifle táctico MSR7T",
   "nameEn": "MSR7T Tactical Rifle",
   "short": "MSR7T",
   "category": "rifle",
   "tier": "B",
   "reason": "Crítico 35, el más alto entre rifles y carabinas. Pega: 4 balas internas, apuntado 65 y muy raro.",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 4,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.2,
    "dmgMax": 2.0,
    "range": 40.0,
    "fireMode": "Manual",
    "noise": 170,
    "hitChance": 50,
    "crit": 35.0,
    "weight": 4.5,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 65,
    "recoil": 21,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_MSRTRifle.png",
   "iconName": "Item_Firearm_MSRTRifle",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13375
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13487,
     "contains": {
      "n": 20,
      "of": "Cartuchos .308",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "308Carton",
     "name": "Cartón de Munición .308",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13502,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .308",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19566,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Muy rara",
    "score": 7.0,
    "stashScore": 12.0,
    "militaryScore": 4.0,
    "military": "No es exclusiva militar, pero fuera de zonas militares es muy rara.",
    "sources": [
     {
      "name": "SWATStorageGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 48187,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "PawnShopGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37262,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37311,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26273,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20852,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20802,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20919,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [
     {
      "name": "ArmyStorageGuns",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 1083,
      "kind": "Militar"
     }
    ],
    "guaranteed": [],
    "sourceCount": 4
   },
   "zombies": [
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 788
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 902
    }
   ],
   "mapRooms": [
    {
     "room": "armystorage",
     "label": "Almacén militar",
     "count": 22,
     "w": 4.0
    },
    {
     "room": "policeswat",
     "label": "Sala SWAT",
     "count": 1,
     "w": 4.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 1.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 1.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B. Lo considera el mejor de cerrojo por tener el crítico más alto de los fusiles.",
     "check": "Coincide: probabilidad de crítico 35, la máxima entre rifles y carabinas. Las escopetas llegan a 70.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Crítico alto (35)».",
     "check": "Coincide.",
     "original": "high crit (35)"
    }
   ]
  },
  {
   "id": "L94_Rifle",
   "name": "Rifle L94",
   "nameEn": "L94 Rifle",
   "short": "L94",
   "category": "rifle",
   "tier": "B",
   "reason": "Daño 1,2–2,0, atraviesa y apunta rápido (40). Pega: el .30-30 solo sirve para ella y carga 6.",
   "stats": {
    "ammo": "Cartucho .30-30",
    "ammoEn": ".30-30 Round",
    "ammoId": "base:bullets_3030",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.2,
    "dmgMax": 2.0,
    "range": 30.0,
    "fireMode": "Manual",
    "noise": 160,
    "hitChance": 50,
    "crit": 25.0,
    "weight": 3.5,
    "reload": "Palanca, carga interna",
    "reloadId": "leveraction",
    "aimTime": 40,
    "recoil": 20,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_L94Rifle.png",
   "iconName": "Item_Firearm_L94Rifle",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "3030Bullets",
     "name": "Cartucho .30-30",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13401
    },
    {
     "role": "Caja",
     "id": "3030Box",
     "name": "Caja de cartuchos .30-30",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13547,
     "contains": {
      "n": 20,
      "of": "Cartucho .30-30",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "3030Carton",
     "name": "Cartón de cartuchos .30-30",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13562,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .30-30",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19479,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 57.54,
    "stashScore": 12.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "PawnShopGunsSpecial",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37310,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37261,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26272,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreRifles",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26358,
      "kind": "Tienda"
     },
     {
      "name": "Hunter",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 27562,
      "kind": "Casa o local"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20801,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20918,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20851,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 18
   },
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 831
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 10.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 10.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier C. Dice que mata de un tiro a zombis de vida máxima y apunta algo más rápido que la Carabina L92.",
     "check": "Apuntado 40 frente a 50: coincide. Lo del tiro único no se puede comprobar en los scripts.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Opciones sólidas a media distancia cuando aparecen esos calibres».",
     "check": null,
     "original": "solid mid-range options when those calibers drop."
    }
   ]
  },
  {
   "id": "L92_Carbine",
   "name": "Carabina L92",
   "nameEn": "L92 Carbine",
   "short": "L92",
   "category": "carabina",
   "tier": "B",
   "reason": "10 balas de .357 y ruido moderado (120). Pega: daño 1,0–1,6 y no atraviesa.",
   "stats": {
    "ammo": "Cartucho .357 Magnum",
    "ammoEn": ".357 Magnum Round",
    "ammoId": "base:bullets_357",
    "capacity": 10,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.0,
    "dmgMax": 1.6,
    "range": 24.0,
    "fireMode": "Manual",
    "noise": 120,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 3.5,
    "reload": "Palanca, carga interna",
    "reloadId": "leveraction",
    "aimTime": 50,
    "recoil": 12,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_L9Carbine.png",
   "iconName": "Item_Firearm_L9Carbine",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets357",
     "name": "Cartucho .357 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13414
    },
    {
     "role": "Caja",
     "id": "Bullets357Box",
     "name": "Caja de cartuchos .357 Magnum",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13577,
     "contains": {
      "n": 50,
      "of": "Cartucho .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:20"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets357Carton",
     "name": "Cartón de cartuchos .357 Magnum",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13591,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19394,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 57.54,
    "stashScore": 12.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "GunStoreRifles",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26357,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37309,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37260,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26271,
      "kind": "Tienda"
     },
     {
      "name": "GarageFirearms",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23059,
      "kind": "Casa o local"
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20800,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20917,
      "kind": "Alijo o escondite"
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 4.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20850,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 18
   },
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 831
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    }
   ],
   "mapRooms": [
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 10.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 10.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B. Dice que no mata de un tiro a zombis de vida máxima sin crítico, ni con puntería máxima.",
     "check": "No se puede comprobar en los scripts.",
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Armas de palanca para .357 y .30-30».",
     "check": null,
     "original": "lever guns for .357 / .30-30."
    }
   ]
  },
  {
   "id": "DoubleBarrelShotgun",
   "name": "Escopeta de doble cañón",
   "nameEn": "Double Barrel Shotgun",
   "short": "Doble cañón",
   "category": "escopeta",
   "tier": "B",
   "reason": "Daño de escopeta, alcance 15 y nunca se encasquilla. Pega: 2 cartuchos.",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12g Round",
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15.0,
    "fireMode": "Manual",
    "noise": 200,
    "hitChance": 65,
    "crit": 70.0,
    "weight": 4.0,
    "reload": "Basculante, 2 cartuchos",
    "reloadId": "doublebarrelshotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "spread": 0.6,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_DoubleBarrelShotgun.png",
   "iconName": "Item_Firearm_DoubleBarrelShotgun",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13474
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmoBox.png",
     "iconName": "Item_ShotgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13722,
     "contains": {
      "n": 25,
      "of": "Cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:68"
     }
    },
    {
     "role": "Cartón",
     "id": "ShotgunShellsCarton",
     "name": "Cartón de cartuchos de escopeta",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13736,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 10736,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 87.54,
    "stashScore": 47.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "GunStoreShotguns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26407,
      "kind": "Tienda"
     },
     {
      "name": "GunStoreGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26267,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37256,
      "kind": "Tienda"
     },
     {
      "name": "PoliceEvidence",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38208,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "RangerOutfit",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40608,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "Bag_WeaponBag",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18880,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21343,
      "kind": "Alijo o escondite"
     },
     {
      "name": "ShotgunCache2/ShotgunBox",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 22017,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "Bag_ShotgunDblBag",
      "w": 200.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18641,
      "kind": "Otro"
     },
     {
      "name": "ShotgunCase2",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2941,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 18
   },
   "zombies": [
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag",
     "chance": 50.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 1245
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 20.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 20.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 20.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "evidenceroom",
     "label": "Sala de pruebas policial",
     "count": 5,
     "w": 8.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier A, dentro de «escopetas sin estrangulador» (choke).",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Solo 2 cartuchos, pero alcance 15 y probabilidad de encasquillarse 0».",
     "check": "Coincide.",
     "original": "only 2 shells, but range 15, jam chance 0"
    }
   ]
  },
  {
   "id": "ShotgunSawnoff",
   "name": "Escopeta recortada JS-2000",
   "nameEn": "Sawed-off JS-2000 Shotgun",
   "short": "JS-2000 recortada",
   "category": "escopeta",
   "tier": "B",
   "reason": "Precisión base 70 y dispersión 1,5: perdona la mala puntería. Pega: alcance 10.",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12g Round",
    "ammoId": "base:shotgun_shells",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.3,
    "dmgMax": 2.0,
    "range": 10.0,
    "fireMode": "Manual",
    "noise": 200,
    "hitChance": 70,
    "crit": 50.0,
    "weight": 3.0,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 35,
    "recoil": 30,
    "jam": 2,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "spread": 1.5,
    "legacyClipSize": 6,
    "fake": false
   },
   "icon": "icons/Item_Firearm_PumpShotgun_Sawn.png",
   "iconName": "Item_Firearm_PumpShotgun_Sawn",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13474
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmoBox.png",
     "iconName": "Item_ShotgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13722,
     "contains": {
      "n": 25,
      "of": "Cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:68"
     }
    },
    {
     "role": "Cartón",
     "id": "ShotgunShellsCarton",
     "name": "Cartón de cartuchos de escopeta",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13736,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11579,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Rara",
    "score": 38.0,
    "stashScore": 70.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "BarCounterWeapon",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 3290,
      "kind": "Casa o local"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37319,
      "kind": "Tienda"
     },
     {
      "name": "PoliceEvidence",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38217,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 19631,
      "kind": "Alijo o escondite"
     },
     {
      "name": "Bag_WeaponBag",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18902,
      "kind": "Alijo o escondite"
     },
     {
      "name": "SurvivorItems",
      "w": 10.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 3225,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "ShotgunCache1/Bag_DuffelBagTINT",
      "w": 200.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21991,
      "kind": "Alijo o escondite"
     },
     {
      "name": "Bag_ShotgunSawnoffBag",
      "w": 200.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18681,
      "kind": "Otro"
     }
    ],
    "sourceCount": 3
   },
   "zombies": [
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag",
     "chance": 50.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 1245
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 20.0
    },
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 20.0
    },
    {
     "room": "drugshack",
     "label": "Chabola de droga",
     "count": 7,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "evidenceroom",
     "label": "Sala de pruebas policial",
     "count": 5,
     "w": 8.0
    },
    {
     "room": "policearchive",
     "label": "Archivo policial",
     "count": 3,
     "w": 8.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B, dentro de «escopetas con estrangulador o recortadas».",
     "check": null,
     "original": null
    },
    {
     "src": "steamShotgun",
     "text": "Según el mensaje citado, las recortadas tienen «entre 1,5 y 2,0 veces la dispersión de proyectiles por defecto».",
     "check": "Coincide: dispersión 1,5 frente a 1,0 de la JS-2000.",
     "original": "1.5 to 2.0 times the default ProjectileSpread"
    }
   ]
  },
  {
   "id": "Revolver_Short",
   "name": "Revólver M36",
   "nameEn": "SN38 Revolver",
   "short": "M36",
   "category": "revolver",
   "tier": "C",
   "reason": "La más silenciosa (radio 60) y ligera. Pega: daño 0,5–0,8 y alcance 8.",
   "stats": {
    "ammo": "Cartuchos .38 Special",
    "ammoEn": ".38 Special Round",
    "ammoId": "base:bullets_38",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 0.5,
    "dmgMax": 0.8,
    "range": 8.0,
    "fireMode": "Manual",
    "noise": 60,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 1.2,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 25,
    "recoil": 11,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_RevolverShort.png",
   "iconName": "Item_RevolverShort",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets38",
     "name": "Cartuchos .38 Special",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13426
    },
    {
     "role": "Caja",
     "id": "Bullets38Box",
     "name": "Caja de cartuchos .38 Special",
     "icon": "icons/ammo/Item_HandgunAmmoBox.png",
     "iconName": "Item_HandgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13606,
     "contains": {
      "n": 50,
      "of": "Cartuchos .38 Special",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:20"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets38Carton",
     "name": "Cartón de balas .38 Special",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13620,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .38 Special",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11413,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Común",
    "score": 212.63,
    "stashScore": 165.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "HollowBook_Handgun",
      "w": 50.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 19690,
      "kind": "Otro"
     },
     {
      "name": "junk",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37801,
      "kind": "Otro"
     },
     {
      "name": "SecurityLockers",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 44511,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "HollowBook_Valuables",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 19813,
      "kind": "Otro"
     },
     {
      "name": "all/Outfit_Detective",
      "w": 10.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 1839,
      "kind": "Otro"
     }
    ],
    "stash": [
     {
      "name": "GunCache2/Bag_DuffelBagTINT",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21461,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21356,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/plankstash",
      "w": 20.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21315,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "RevolverCase1",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2713,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 32
   },
   "zombies": [
    {
     "def": "handgunHolsterShoulder",
     "chance": 50.0,
     "outfits": [
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 9,
     "line": 597
    },
    {
     "def": "handgunHolsterAnkle",
     "chance": 5.0,
     "outfits": [
      "Agent",
      "Bandit",
      "Bandit_Early",
      "Bandit_Mid",
      "Bandit_Late",
      "BankRobberSuit"
     ],
     "more": 16,
     "line": 628
    },
    {
     "def": "handgunHolsterDetective",
     "chance": 50.0,
     "outfits": [
      "Agent",
      "Detective",
      "Mob",
      "MobCasual",
      "Police_SWAT"
     ],
     "more": 0,
     "line": 641
    }
   ],
   "mapRooms": [
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 20.0
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 20.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 10.0
    },
    {
     "room": "drugshack",
     "label": "Chabola de droga",
     "count": 7,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "policegunstorage",
     "label": "Armero de comisaría",
     "count": 15,
     "w": 10.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier D, «revólver .38».",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«El Revólver M36 (SN38 en inglés) es la opción silenciosa para combatir (60), con poco daño».",
     "check": "Coincide: radio de ruido 60 y daño 0,5–0,8.",
     "original": "SN38 is the quiet combat option (60) with weak damage"
    }
   ]
  },
  {
   "id": "VarmintRifle",
   "name": "Rifle MSR700",
   "nameEn": "MSR700 Rifle",
   "short": "MSR700",
   "category": "rifle",
   "tier": "C",
   "reason": "Común y atraviesa. Pega: daño 1,0–1,6 con 5 internas; el MSR788, igual de común, pega 1,2–2,0.",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.0,
    "dmgMax": 1.6,
    "range": 30.0,
    "fireMode": "Manual",
    "noise": 150,
    "hitChance": 50,
    "crit": 20.0,
    "weight": 4.0,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 50,
    "recoil": 17,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_RifleHunting.png",
   "iconName": "Item_RifleHunting",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [
    "HuntingRifle"
   ],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13388
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308.png",
     "iconName": "Item_RifleAmmo308",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13517,
     "contains": {
      "n": 20,
      "of": "Cartuchos 5.56mm",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:44"
     }
    },
    {
     "role": "Cartón",
     "id": "556Carton",
     "name": "Cartón de Munición 5.56",
     "icon": "icons/ammo/Item_Parcel_Medium_Military.png",
     "iconName": "Item_Parcel_Medium_Military",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13532,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos 5.56mm",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 11663,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Común",
    "score": 189.2,
    "stashScore": 52.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "RangerStorageGuns",
      "w": 50.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 40655,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "Hunter",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 27565,
      "kind": "Casa o local"
     },
     {
      "name": "GarageFirearms",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23069,
      "kind": "Casa o local"
     },
     {
      "name": "GunStoreRifles",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 26360,
      "kind": "Tienda"
     },
     {
      "name": "PawnShopGuns",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37271,
      "kind": "Tienda"
     }
    ],
    "stash": [
     {
      "name": "Bag_WeaponBag",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18905,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache1/Bag_DuffelBagTINT",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21359,
      "kind": "Alijo o escondite"
     },
     {
      "name": "GunCache2/GunBox",
      "w": 8.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 21417,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "RifleCase1",
      "w": 200.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 2768,
      "kind": "Maletín de arma"
     }
    ],
    "sourceCount": 24
   },
   "zombies": [
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBackBag",
     "chance": 50.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 1245
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    }
   ],
   "mapRooms": [
    {
     "room": "garage_ranger",
     "label": "Garaje de guardabosques",
     "count": 1,
     "w": 50.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 10.0
    },
    {
     "room": "hunting",
     "label": "Tienda de caza",
     "count": 29,
     "w": 10.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "pawnshop",
     "label": "Casa de empeños",
     "count": 11,
     "w": 10.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier E, el último de su lista.",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Cerrojo; atraviesa; cargador interno».",
     "check": "Coincide.",
     "original": "Bolt · pierce · internal mag"
    }
   ]
  },
  {
   "id": "DoubleBarrelShotgunSawnoff",
   "name": "Escopeta recortada de doble cañón",
   "nameEn": "Sawed-off Double Barrel Shotgun",
   "short": "Doble cañón recortada",
   "category": "escopeta",
   "tier": "C",
   "reason": "La dispersión más ancha (2,0). Pega: 2 cartuchos y alcance 8.",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12g Round",
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.2,
    "dmgMax": 1.8,
    "range": 8.0,
    "fireMode": "Manual",
    "noise": 200,
    "hitChance": 70,
    "crit": 50.0,
    "weight": 3.0,
    "reload": "Basculante, 2 cartuchos",
    "reloadId": "doublebarrelshotgunsawn",
    "aimTime": 30,
    "recoil": 34,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "spread": 2.0,
    "legacyClipSize": null,
    "fake": false
   },
   "icon": "icons/Item_Firearm_DoubleBarrelShotgun_Sawn.png",
   "iconName": "Item_Firearm_DoubleBarrelShotgun_Sawn",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13474
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmoBox.png",
     "iconName": "Item_ShotgunAmmoBox",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13722,
     "contains": {
      "n": 25,
      "of": "Cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_ammunition.txt:68"
     }
    },
    {
     "role": "Cartón",
     "id": "ShotgunShellsCarton",
     "name": "Cartón de cartuchos de escopeta",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 13736,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos de escopeta",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 10822,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Rara",
    "score": 39.0,
    "stashScore": 67.0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "BarCounterWeapon",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 3289,
      "kind": "Casa o local"
     },
     {
      "name": "PawnShopGunsSpecial",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 37305,
      "kind": "Tienda"
     },
     {
      "name": "PoliceEvidence",
      "w": 8.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 38209,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "GarageFirearms",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 23056,
      "kind": "Casa o local"
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 19624,
      "kind": "Alijo o escondite"
     },
     {
      "name": "DrugShackWeapons",
      "w": 10.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 20114,
      "kind": "Alijo o escondite"
     },
     {
      "name": "SurvivorItems",
      "w": 8.0,
      "file": "media/lua/server/Items/Distribution_BagsAndContainers.lua",
      "line": 3220,
      "kind": "Alijo o escondite"
     }
    ],
    "militarySources": [],
    "guaranteed": [
     {
      "name": "Bag_ShotgunDblSawnoffBag",
      "w": 200.0,
      "file": "media/lua/server/Items/Distributions.lua",
      "line": 18661,
      "kind": "Otro"
     }
    ],
    "sourceCount": 4
   },
   "zombies": [
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 863
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140
    },
    {
     "def": "meleeInBackBag",
     "chance": 50.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04",
      "Survivalist05"
     ],
     "more": 0,
     "line": 1245
    },
    {
     "def": "meleeInBackBag_Mid",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Mid",
      "Survivalist02_Mid",
      "Survivalist03_Mid",
      "Survivalist04_Mid",
      "Survivalist05_Mid"
     ],
     "more": 0,
     "line": 1389
    },
    {
     "def": "meleeInBackBag_Late",
     "chance": 50.0,
     "outfits": [
      "Survivalist_Late",
      "Survivalist02_Late",
      "Survivalist03_Late",
      "Survivalist04_Late",
      "Survivalist05_Late"
     ],
     "more": 0,
     "line": 1457
    }
   ],
   "mapRooms": [
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 20.0
    },
    {
     "room": "druglab",
     "label": "Laboratorio de droga",
     "count": 5,
     "w": 20.0
    },
    {
     "room": "drugshack",
     "label": "Chabola de droga",
     "count": 7,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "evidenceroom",
     "label": "Sala de pruebas policial",
     "count": 5,
     "w": 8.0
    },
    {
     "room": "policearchive",
     "label": "Archivo policial",
     "count": 3,
     "w": 8.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier B, dentro de «escopetas con estrangulador o recortadas».",
     "check": null,
     "original": null
    },
    {
     "src": "pzfans4219",
     "text": "«Sigue siendo a dos manos; dispersión más amplia».",
     "check": "Coincide: requiere las dos manos y dispersión 2,0.",
     "original": "Still two-handed · wider spread"
    },
    {
     "src": "steamShotgun",
     "text": "El mismo mensaje sobre la mayor dispersión de las recortadas.",
     "check": "Coincide: 2,0 frente a 0,6 de la escopeta de doble cañón.",
     "original": null
    }
   ]
  },
  {
   "id": "Revolver_CapGun",
   "name": "Revolver de juguete",
   "nameEn": "Toy Cap Pistol",
   "short": "Revólver de juguete",
   "category": "juguete",
   "tier": null,
   "reason": "Juguete de fulminantes: daño 0 y etiqueta de arma falsa en el script.",
   "stats": {
    "ammo": "Cartucho de juguete",
    "ammoEn": "Capgun Cap",
    "ammoId": "base:cap_gun_cap",
    "capacity": 8,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 0.0,
    "dmgMax": 0.0,
    "range": 0.6,
    "fireMode": "Manual",
    "noise": 30,
    "hitChance": 0,
    "crit": 0.0,
    "weight": 0.5,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 25,
    "recoil": 11,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": true
   },
   "icon": "icons/Item_Pistol_Toy.png",
   "iconName": "Item_Pistol_Toy",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "CapGunCap",
     "name": "Cartucho de juguete",
     "icon": "icons/ammo/Item_SnapCap.png",
     "iconName": "Item_SnapCap",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 14503
    },
    {
     "role": "Caja",
     "id": "CapGunCapBox",
     "name": "Caja de cartuchos de juguete",
     "icon": "icons/ammo/Item_SnapCap_Box.png",
     "iconName": "Item_SnapCap_Box",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 14493,
     "contains": {
      "n": 100,
      "of": "Cartucho de juguete",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:221"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19052,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 73.0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "WildWestSheriffDesk",
      "w": 50.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 53153,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "WildWestSheriffLocker",
      "w": 20.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 53173,
      "kind": "Policía / guardas / prisión"
     },
     {
      "name": "BedroomDresserChild",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 4283,
      "kind": "Casa o local"
     },
     {
      "name": "WardrobeChild",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 51668,
      "kind": "Casa o local"
     },
     {
      "name": "BedroomSidetableChild",
      "w": 1.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 5002,
      "kind": "Casa o local"
     }
    ],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 5
   },
   "zombies": [
    {
     "def": "handgunHolsterWildWest",
     "chance": 50.0,
     "outfits": [
      "CostumeWildWestLawman",
      "CostumeWildWestOutlaw"
     ],
     "more": 0,
     "line": 732
    },
    {
     "def": "handgunHolsterLeftWildWest",
     "chance": 50.0,
     "outfits": [
      "CostumeWildWestLawman",
      "CostumeWildWestOutlaw"
     ],
     "more": 0,
     "line": 746
    }
   ],
   "mapRooms": [
    {
     "room": "ww_sherrif",
     "label": "Sheriff del Salvaje Oeste",
     "count": 1,
     "w": 50.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier C, dentro de «pistolas de fulminantes».",
     "check": null,
     "original": null
    }
   ]
  },
  {
   "id": "Rifle_CapGun",
   "name": "Rifle de juguete",
   "nameEn": "Toy Cap Rifle",
   "short": "Rifle de juguete",
   "category": "juguete",
   "tier": null,
   "reason": "Juguete de fulminantes: daño 0 y etiqueta de arma falsa en el script.",
   "stats": {
    "ammo": "Cartucho de juguete",
    "ammoEn": "Capgun Cap",
    "ammoId": "base:cap_gun_cap",
    "capacity": 8,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 0.0,
    "dmgMax": 0.0,
    "range": 0.6,
    "fireMode": "Manual",
    "noise": 30,
    "hitChance": 0,
    "crit": 0.0,
    "weight": 2.0,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 50,
    "recoil": 17,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "spread": null,
    "legacyClipSize": null,
    "fake": true
   },
   "icon": "icons/Item_Rifle_Toy.png",
   "iconName": "Item_Rifle_Toy",
   "iconPack": "media/texturepacks/UI2.pack",
   "iconShared": [],
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "CapGunCap",
     "name": "Cartucho de juguete",
     "icon": "icons/ammo/Item_SnapCap.png",
     "iconName": "Item_SnapCap",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 14503
    },
    {
     "role": "Caja",
     "id": "CapGunCapBox",
     "name": "Caja de cartuchos de juguete",
     "icon": "icons/ammo/Item_SnapCap_Box.png",
     "iconName": "Item_SnapCap_Box",
     "file": "media/scripts/generated/items/normal.txt",
     "line": 14493,
     "contains": {
      "n": 100,
      "of": "Cartucho de juguete",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:221"
     }
    }
   ],
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19132,
   "nameFile": "media/lua/shared/Translate/ES/ItemName.json",
   "rarity": {
    "level": "Poco común",
    "score": 50.0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No aparece en fuentes militares.",
    "sources": [
     {
      "name": "WildWestSheriffLocker",
      "w": 50.0,
      "file": "media/lua/server/Items/ProceduralDistributions.lua",
      "line": 53175,
      "kind": "Policía / guardas / prisión"
     }
    ],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 1
   },
   "zombies": [
    {
     "def": "rifleWildWest",
     "chance": 30.0,
     "outfits": [
      "CostumeWildWestLawman",
      "CostumeWildWestOutlaw"
     ],
     "more": 0,
     "line": 760
    }
   ],
   "mapRooms": [
    {
     "room": "ww_sherrif",
     "label": "Sheriff del Salvaje Oeste",
     "count": 1,
     "w": 50.0
    }
   ],
   "community": [
    {
     "src": "steam4215",
     "text": "Tier C, dentro de «pistolas de fulminantes».",
     "check": null,
     "original": null
    }
   ]
  }
 ]
};
