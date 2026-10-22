/* Generado por herramientas/generar_firearms.py desde Project Zomboid 42.21.0 y el mod Firearms B42 42-5.6.0 (solo lectura).
   Los campos tier, reason y short son valoración propia (herramientas/firearms_valoracion.json), no datos del juego. */
window.PZ_MODS = {
 "meta": {
  "game": "Project Zomboid",
  "version": "42.21.0",
  "consulted": "15/10/2026",
  "mod": {
   "name": "Firearms B42",
   "id": "firearmmod",
   "workshop": "2256623447",
   "version": "42-5.6.0",
   "folder": "Firearms/42.16",
   "versionMin": "42.16.0",
   "author": "Hyzo",
   "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=2256623447"
  },
  "variants": [
   {
    "folder": "Firearms/42.16",
    "name": "Firearms B42",
    "id": "firearmmod",
    "version": "42-5.6.0",
    "incompatible": "\\firearmmodbeta,\\firearmmodvanilla"
   },
   {
    "folder": "FirearmsBETA/42.16",
    "name": "Firearms B42 Beta",
    "id": "firearmmodbeta",
    "version": "42-5.6.0",
    "incompatible": "\\firearmmod,\\firearmmodvanilla,\\B42RainsFirearmsAndGunParts"
   },
   {
    "folder": "FirearmsVanilla/42.16",
    "name": "Firearms B42 - Models Only",
    "id": "firearmmodvanilla",
    "version": "42-1.0.1",
    "incompatible": "\\firearmmod,\\firearmmodbeta"
   }
  ],
  "counts": {
   "total": 51,
   "nueva": 31,
   "cambiada": 19,
   "vanilla": 1,
   "ammo": 13,
   "ammoMod": 5
  },
  "sameStatsBeta": true
 },
 "weapons": [
  {
   "id": "AKM",
   "origin": "nueva",
   "name": "AKM",
   "nameReal": "AKM",
   "nameVanilla": null,
   "category": "automatica",
   "stats": {
    "ammo": "7.62x39mm Round",
    "ammoEn": "7.62x39mm Round",
    "ammoId": "firearms:bullets_762x39",
    "capacity": 30,
    "magazine": "AKM Magazine",
    "magazineId": "Base.AKM_Mag",
    "dmgMin": 1.25,
    "dmgMax": 2.75,
    "range": 25,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 3.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 30,
    "recoil": 25,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 350,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_AKM.png",
   "iconName": "Item_AKM",
   "iconFrom": "Firearms/common/media/textures/Item_AKM.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_AssaultRifles.txt",
   "line": 249,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "762x39Bullets",
     "name": "7.62x39mm Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 210
    },
    {
     "role": "Caja",
     "id": "762x39Box",
     "name": "Box of 7.62x39mm Rounds",
     "icon": "icons/firearms/Item_762x39BulletsBox.png",
     "iconName": "Item_762x39BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 496,
     "contains": {
      "n": 20,
      "of": "7.62x39mm Round",
      "ofId": "762x39Bullets",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:30"
     }
    },
    {
     "role": "Cartón",
     "id": "762x39BulletsCarton",
     "name": "Carton of 7.62x39mm Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 224,
     "contains": {
      "n": 12,
      "of": "Box of 7.62x39mm Rounds",
      "ofId": "762x39Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    },
    {
     "role": "Cargador",
     "id": "AKM_Mag",
     "name": "AKM Magazine",
     "icon": "icons/firearms/Item_AKM_Mag.png",
     "iconName": "Item_AKM_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 186,
     "capacity": 30
    }
   ],
   "ammoBoxField": "762x39Box",
   "rarity": {
    "level": "Muy rara",
    "score": 5.0,
    "stashScore": 16.0,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 5.0
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnAKM",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "Automática de 30 balas con daño 1,25–2,75 y la que menos se encasquilla (1). Pega: su 7,62×39 es la munición más escasa del mod.",
   "short": "AKM"
  },
  {
   "id": "AssaultRifle",
   "origin": "cambiada",
   "name": "Fusil M16",
   "nameReal": "M16A1",
   "nameVanilla": "Fusil M16",
   "category": "automatica",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 30,
    "magazine": "Cargador M16",
    "magazineId": "Base.556Clip",
    "dmgMin": 1,
    "dmgMax": 2.75,
    "range": 25,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 3.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 30,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_M16.png",
   "iconName": "Item_M16",
   "iconFrom": "Firearms/common/media/textures/Item_M16.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_AssaultRifles.txt",
   "line": 6,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 196
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/firearms/Item_556BulletsBox.png",
     "iconName": "Item_556BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 464,
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
     "icon": "icons/firearms/Item_556_Stanag_Mag.png",
     "iconName": "Item_556_Stanag_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 171,
     "capacity": 30
    }
   ],
   "ammoBoxField": "556Box",
   "vanilla": {
    "ammoId": "base:bullets_556",
    "capacity": 30,
    "dmgMin": 1,
    "dmgMax": 1.6,
    "range": 30,
    "noise": 150,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 40,
    "recoil": 15,
    "jam": 1,
    "pierce": true,
    "maxHit": 2,
    "weight": 4,
    "fireMode": "Automático o manual",
    "ammo": "Cartuchos 5.56mm"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 10549,
   "changes": [
    "dmgMax",
    "range",
    "noise",
    "aimTime",
    "recoil",
    "jam",
    "maxHit",
    "weight"
   ],
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
    "sourceCount": 4,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 788,
     "by": "juego"
    },
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 804,
     "by": "juego"
    },
    {
     "def": "assaultRifleArmyOnBack",
     "chance": 50.0,
     "outfits": [
      "ArmyCamoDesert",
      "ArmyCamoGreen"
     ],
     "more": 0,
     "line": 819,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916,
     "by": "juego"
    },
    {
     "def": "gunOnBackBountyHunter",
     "chance": 30.0,
     "outfits": [
      "BountyHunter"
     ],
     "more": 0,
     "line": 932,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "S",
   "reason": "Automática de 30 balas de 5,56, la munición de fusil más fácil de encontrar, y los zombis militares la llevan a menudo. Pega: muy rara fuera de zonas militares.",
   "short": "M16A1"
  },
  {
   "id": "AssaultRifle2",
   "origin": "cambiada",
   "name": "Fusil M14",
   "nameReal": "M14",
   "nameVanilla": "Fusil M14",
   "category": "rifle",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 20,
    "magazine": "Cargador M14",
    "magazineId": "Base.M14Clip",
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 35,
    "fireMode": "Manual",
    "auto": false,
    "noise": 110,
    "hitChance": 45,
    "crit": 30,
    "weight": 4,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 25,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/Item_AssaultRifle2.png",
   "iconName": "Item_AssaultRifle2",
   "iconFrom": "panel vanilla (UI.pack / UI2.pack)",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 710,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 201,
     "capacity": 20
    }
   ],
   "ammoBoxField": "308Box",
   "vanilla": {
    "ammoId": "base:bullets_308",
    "capacity": 20,
    "dmgMin": 1.2,
    "dmgMax": 2,
    "range": 40,
    "noise": 170,
    "hitChance": 50,
    "crit": 30,
    "aimTime": 50,
    "recoil": 20,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "weight": 4.5,
    "fireMode": "Manual",
    "ammo": "Cartuchos .308"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 10643,
   "changes": [
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "aimTime",
    "recoil",
    "jam",
    "weight"
   ],
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
    "sourceCount": 11,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 804,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 902,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "S",
   "reason": "El mejor fusil semiautomático: daño 1,25–3, cargador de 20 y alcance 35. Pega: muy raro y se encasquilla más que las automáticas (5).",
   "short": "M14"
  },
  {
   "id": "ColtAce",
   "origin": "nueva",
   "name": "Colt Ace",
   "nameReal": "Colt Ace",
   "nameVanilla": null,
   "category": "pistola",
   "stats": {
    "ammo": ".22 LR Round",
    "ammoEn": ".22 LR Round",
    "ammoId": "firearms:bullets_22",
    "capacity": 10,
    "magazine": "Colt Ace Magazine",
    "magazineId": "Base.22Clip",
    "dmgMin": 0.55,
    "dmgMax": 1.5,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.4,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 40,
    "recoil": 15,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_M1911.png",
   "iconName": "Item_M1911",
   "iconFrom": "Firearms/common/media/textures/Item_M1911.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Handguns.txt",
   "line": 584,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets22",
     "name": ".22 LR Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "RifleAmmo223loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 241
    },
    {
     "role": "Caja",
     "id": "Bullets22Box",
     "name": "Box of .22 LR Rounds",
     "icon": "icons/firearms/Item_Bullets22Box.png",
     "iconName": "Item_Bullets22Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 512,
     "contains": {
      "n": 50,
      "of": ".22 LR Round",
      "ofId": "Bullets22",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets22Carton",
     "name": "Carton of .22 LR Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 255,
     "contains": {
      "n": 12,
      "of": "Box of .22 LR Rounds",
      "ofId": "Bullets22Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    },
    {
     "role": "Cargador",
     "id": "22Clip",
     "name": "Colt Ace Magazine",
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 6,
     "capacity": 10
    }
   ],
   "ammoBoxField": "Bullets22Box",
   "rarity": {
    "level": "Muy rara",
    "score": 2.1,
    "stashScore": 5.25,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "GunStorePistols",
      "w": 2.1,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 1.4,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     },
     {
      "name": "DrugShackWeapons",
      "w": 1.4,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     },
     {
      "name": "SurvivorBag",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "SurvivorBag_Late",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Early",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Mid",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Late",
      "w": 0.35,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 2.1
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 2.1
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnColtAce",
   "sandboxDefault": true,
   "tier": "C",
   "reason": "Cargador de 10 de .22. Pega: daño 0,55–1,5 y el mismo ruido (100) que una de 9 mm.",
   "short": "Colt Ace"
  },
  {
   "id": "ColtAnaconda",
   "origin": "nueva",
   "name": "Colt Anaconda",
   "nameReal": "Colt Anaconda",
   "nameVanilla": null,
   "category": "revolver",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 2.5,
    "range": 16,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 2,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_ColtAnaconda.png",
   "iconName": "Item_ColtAnaconda",
   "iconFrom": "Firearms/common/media/textures/Item_ColtAnaconda.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 596,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 64
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 352,
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
   "ammoBoxField": "Bullets44Box",
   "rarity": {
    "level": "Solo zombis",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale en contenedores: solo la llevan encima algunos zombis.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 102,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 102,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "zombis"
   ],
   "sandbox": "SpawnAnaconda",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "Daño 1,25–2,5 de .44 y alcance 16. Pega: no sale en contenedores; solo la llevan zombis de sheriff y guardabosques.",
   "short": "Anaconda"
  },
  {
   "id": "ColtDelta",
   "origin": "nueva",
   "name": "Colt Delta",
   "nameReal": "Colt Delta",
   "nameVanilla": null,
   "category": "pistola",
   "stats": {
    "ammo": "10mm Auto Round",
    "ammoEn": "10mm Auto Round",
    "ammoId": "firearms:bullets_10mm",
    "capacity": 8,
    "magazine": "Colt Delta Elite Magazine",
    "magazineId": "Base.DeltaClip",
    "dmgMin": 0.75,
    "dmgMax": 2.25,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 45,
    "crit": 20,
    "weight": 1.4,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 40,
    "recoil": 15,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 7,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_M1911_Silver.png",
   "iconName": "Item_M1911_Silver",
   "iconFrom": "Firearms/common/media/textures/Item_M1911_Silver.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Handguns.txt",
   "line": 467,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets10mm",
     "name": "10mm Auto Round",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 19
    },
    {
     "role": "Caja",
     "id": "Bullets10mmBox",
     "name": "Box of 10mm Auto Rounds",
     "icon": "icons/firearms/Item_Bullets38Box.png",
     "iconName": "Item_Bullets38Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 320,
     "contains": {
      "n": 50,
      "of": "10mm Auto Round",
      "ofId": "Bullets10mm",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets10mmCarton",
     "name": "Carton of 10mm Auto Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 33,
     "contains": {
      "n": 12,
      "of": "Box of 10mm Auto Rounds",
      "ofId": "Bullets10mmBox",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    },
    {
     "role": "Cargador",
     "id": "DeltaClip",
     "name": "Colt Delta Elite Magazine",
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 51,
     "capacity": 8
    }
   ],
   "ammoBoxField": "Bullets10mmBox",
   "rarity": {
    "level": "Muy rara",
    "score": 0.9,
    "stashScore": 2.25,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "GunStorePistols",
      "w": 0.9,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     }
    ],
    "stash": [
     {
      "name": "DrugLabGuns",
      "w": 0.6,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     },
     {
      "name": "DrugShackWeapons",
      "w": 0.6,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     },
     {
      "name": "SurvivorBag",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "SurvivorBag_Late",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Early",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Mid",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Late",
      "w": 0.15,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 0.9
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 0.9
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnColtDelta",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "Daño de .45 con 8 balas. Pega: 10 mm del mod, escasa, y pistola muy rara.",
   "short": "Colt Delta"
  },
  {
   "id": "ColtPeacemaker",
   "origin": "nueva",
   "name": "Colt Single Action Army",
   "nameReal": "Colt Single Action Army",
   "nameVanilla": null,
   "category": "revolver",
   "stats": {
    "ammo": ".44-40 WCF Round",
    "ammoEn": ".44-40 WCF Round",
    "ammoId": "firearms:bullets_44_40",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 2.5,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.8,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_ColtPeacemaker.png",
   "iconName": "Item_ColtPeacemaker",
   "iconFrom": "Firearms/common/media/textures/Item_ColtPeacemaker.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 714,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets4440",
     "name": ".44-40 WCF Round",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 78
    },
    {
     "role": "Caja",
     "id": "Bullets4440Box",
     "name": "Box of .44-40 WCF Rounds",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 368,
     "contains": {
      "n": 50,
      "of": ".44-40 WCF Round",
      "ofId": "Bullets4440",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets4440Carton",
     "name": "Carton of .44-40 WCF Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 92,
     "contains": {
      "n": 12,
      "of": "Box of .44-40 WCF Rounds",
      "ofId": "Bullets4440Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "ammoBoxField": "Bullets4440Box",
   "rarity": {
    "level": "Muy rara",
    "score": 18.0,
    "stashScore": 23.0,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "PawnShopGunsSpecial",
      "w": 8.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 226
     },
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 226
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 3,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 8.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 5.0
    }
   ],
   "zombies": [
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 102,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 102,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnColtPeacemaker",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "Daño 1,25–2,5 sin encasquillarse. Pega: su .44-40 es munición del mod y escasea.",
   "short": "Peacemaker"
  },
  {
   "id": "ColtPython",
   "origin": "nueva",
   "name": "Colt Python",
   "nameReal": "Colt Python",
   "nameVanilla": null,
   "category": "revolver",
   "stats": {
    "ammo": "Cartucho .357 Magnum",
    "ammoEn": ".357 Round",
    "ammoId": "base:bullets_357",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1,
    "dmgMax": 2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 80,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.7,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_ColtPython.png",
   "iconName": "Item_ColtPython",
   "iconFrom": "Firearms/common/media/textures/Item_ColtPython.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 360,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets357",
     "name": "Cartucho .357 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 123
    },
    {
     "role": "Caja",
     "id": "Bullets357Box",
     "name": "Caja de cartuchos .357 Magnum",
     "icon": "icons/firearms/Item_Bullets357Box.png",
     "iconName": "Item_Bullets357Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 400,
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
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 137,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "ammoBoxField": "Bullets357Box",
   "rarity": {
    "level": "Solo zombis",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale en contenedores: solo la llevan encima algunos zombis.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 102,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 102,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "zombis"
   ],
   "sandbox": "SpawnPython",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "El revólver más silencioso de .357 (radio 80). Pega: solo la llevan zombis de sheriff y guardabosques.",
   "short": "Python"
  },
  {
   "id": "ColtPythonHunter",
   "origin": "nueva",
   "name": "Colt Python Hunter",
   "nameReal": "Colt Python Hunter",
   "nameVanilla": null,
   "category": "revolver",
   "stats": {
    "ammo": "Cartucho .357 Magnum",
    "ammoEn": ".357 Round",
    "ammoId": "base:bullets_357",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1,
    "dmgMax": 2,
    "range": 16,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 2,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 40,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_ColtPythonHunter.png",
   "iconName": "Item_ColtPythonHunter",
   "iconFrom": "Firearms/common/media/textures/Item_ColtPythonHunter.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 478,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets357",
     "name": "Cartucho .357 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 123
    },
    {
     "role": "Caja",
     "id": "Bullets357Box",
     "name": "Caja de cartuchos .357 Magnum",
     "icon": "icons/firearms/Item_Bullets357Box.png",
     "iconName": "Item_Bullets357Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 400,
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
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 137,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "ammoBoxField": "Bullets357Box",
   "rarity": {
    "level": "Inalcanzable",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "Ni botín, ni zombis, ni receta: con el mod tal cual no se puede conseguir (solo con trucos o modo depuración).",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "obtain": [],
   "sandbox": "SpawnPython",
   "sandboxDefault": true,
   "tier": null,
   "reason": "Python con alcance 16. El mod la define pero no la reparte en ningún sitio.",
   "short": "Python Hunter"
  },
  {
   "id": "ColtSingleAction22",
   "origin": "nueva",
   "name": "Colt Single Action Frontier Scout",
   "nameReal": "Colt Single Action Frontier Scout",
   "nameVanilla": null,
   "category": "revolver",
   "stats": {
    "ammo": ".22 LR Round",
    "ammoEn": ".22 LR Round",
    "ammoId": "firearms:bullets_22",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 0.75,
    "dmgMax": 1.5,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 55,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.4,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 1,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_CSAFS.png",
   "iconName": "Item_CSAFS",
   "iconFrom": "Firearms/common/media/textures/Item_CSAFS.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 832,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets22",
     "name": ".22 LR Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "RifleAmmo223loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 241
    },
    {
     "role": "Caja",
     "id": "Bullets22Box",
     "name": "Box of .22 LR Rounds",
     "icon": "icons/firearms/Item_Bullets22Box.png",
     "iconName": "Item_Bullets22Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 512,
     "contains": {
      "n": 50,
      "of": ".22 LR Round",
      "ofId": "Bullets22",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets22Carton",
     "name": "Carton of .22 LR Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 255,
     "contains": {
      "n": 12,
      "of": "Box of .22 LR Rounds",
      "ofId": "Bullets22Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "ammoBoxField": "Bullets22Box",
   "rarity": {
    "level": "Muy rara",
    "score": 18.0,
    "stashScore": 23.0,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "PawnShopGunsSpecial",
      "w": 8.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 226
     },
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 226
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 3,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 8.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 5.0
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnColtScout",
   "sandboxDefault": null,
   "tier": "C",
   "reason": "El arma más silenciosa del juego (radio 55). Pega: daño 0,75–1,5 y 6 balas cartucho a cartucho.",
   "short": "Frontier Scout"
  },
  {
   "id": "DoubleBarrelShotgun",
   "origin": "cambiada",
   "name": "Escopeta de doble cañón",
   "nameReal": "Rossi Overland Coach Gun",
   "nameVanilla": "Escopeta de doble cañón",
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Basculante, 2 cartuchos",
    "reloadId": "doublebarrelshotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_DoubleBarrel.png",
   "iconName": "Item_DoubleBarrel",
   "iconFrom": "Firearms/common/media/textures/Item_DoubleBarrel.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 6,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "vanilla": {
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "weight": 4,
    "fireMode": "Manual",
    "ammo": "Cartuchos de escopeta"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 10736,
   "changes": [],
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
    "sourceCount": 18,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1245,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "C",
   "reason": "Nunca se encasquilla y es poco común. Pega: 2 cartuchos con el ruido de cualquier escopeta.",
   "short": "Coach Gun"
  },
  {
   "id": "DoubleBarrelShotgunSawnoff",
   "origin": "cambiada",
   "name": "Escopeta recortada de doble cañón",
   "nameReal": "Sawed-off Rossi Overland Coach Gun",
   "nameVanilla": "Escopeta recortada de doble cañón",
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 3,
    "reload": "Basculante, 2 cartuchos",
    "reloadId": "doublebarrelshotgunsawn",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_DoubleBarrel.png",
   "iconName": "Item_DoubleBarrel",
   "iconFrom": "Firearms/common/media/textures/Item_DoubleBarrel.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 124,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "vanilla": {
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "dmgMin": 1.2,
    "dmgMax": 1.8,
    "range": 8,
    "noise": 200,
    "hitChance": 70,
    "crit": 50,
    "aimTime": 30,
    "recoil": 34,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "weight": 3,
    "fireMode": "Manual",
    "ammo": "Cartuchos de escopeta"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 10822,
   "changes": [
    "dmgMin",
    "dmgMax",
    "range",
    "hitChance",
    "crit",
    "aimTime",
    "recoil"
   ],
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
    "sourceCount": 4,
    "by": "juego"
   },
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1245,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "C",
   "reason": "Ligera (3) y sin encasquillarse. Pega: 2 cartuchos.",
   "short": "Coach Gun recortada"
  },
  {
   "id": "DoubleBarrelShotgunSawnoffStock",
   "origin": "nueva",
   "name": "Sawed-off Double Barrel Shotgun",
   "nameReal": "Sawed-off Double Barrel Shotgun",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 2,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 2,
    "reload": "Basculante, 2 cartuchos",
    "reloadId": "doublebarrelshotgunsawn",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_DoubleBarrel.png",
   "iconName": "Item_DoubleBarrel",
   "iconFrom": "Firearms/common/media/textures/Item_DoubleBarrel.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 241,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Inalcanzable",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "Ni botín, ni zombis, ni receta: con el mod tal cual no se puede conseguir (solo con trucos o modo depuración).",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "obtain": [],
   "sandbox": null,
   "tier": null,
   "reason": "Variante de 2 kg que cabe en la funda. El mod la define pero no la reparte ni tiene receta.",
   "short": "Coach Gun recortada con culata"
  },
  {
   "id": "FN_FAL",
   "origin": "nueva",
   "name": "FN Fal",
   "nameReal": "FN Fal",
   "nameVanilla": null,
   "category": "automatica",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 20,
    "magazine": "FN FAL Magazine",
    "magazineId": "Base.FN_FAL_Mag",
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 30,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 3.7,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 30,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_FN_FAL.png",
   "iconName": "Item_FN_FAL",
   "iconFrom": "Firearms/common/media/textures/Item_FN_FAL.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_AssaultRifles.txt",
   "line": 381,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
     "id": "FN_FAL_Mag",
     "name": "FN FAL Magazine",
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 246,
     "capacity": 20
    }
   ],
   "ammoBoxField": "308Box",
   "rarity": {
    "level": "Inalcanzable",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "Ni botín, ni zombis, ni receta: con el mod tal cual no se puede conseguir (solo con trucos o modo depuración).",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "obtain": [],
   "sandbox": "SpawnFNFal",
   "sandboxDefault": true,
   "tier": null,
   "reason": "Sería de tier S (como la G3), pero el mod la reparte con el nombre mal escrito (Base.FN_Fal) y no sale en ningún sitio.",
   "short": "FN FAL"
  },
  {
   "id": "G3",
   "origin": "nueva",
   "name": "H&K G3",
   "nameReal": "H&K G3",
   "nameVanilla": null,
   "category": "automatica",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 20,
    "magazine": "H&K G3 Magazine",
    "magazineId": "Base.G3_Mag",
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 30,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 3.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 30,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_FN_FAL.png",
   "iconName": "Item_FN_FAL",
   "iconFrom": "Firearms/common/media/textures/Item_FN_FAL.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_AssaultRifles.txt",
   "line": 505,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
     "id": "G3_Mag",
     "name": "H&K G3 Magazine",
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 261,
     "capacity": 20
    }
   ],
   "ammoBoxField": "308Box",
   "rarity": {
    "level": "Muy rara",
    "score": 5.0,
    "stashScore": 40.0,
    "militaryScore": 753.0,
    "military": "Sale sobre todo en zonas militares.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 10.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 7.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 158
     },
     {
      "name": "DrugShackWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugLabGuns",
      "w": 1.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 158
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     },
     {
      "name": "BanditBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 299
     }
    ],
    "militarySources": [
     {
      "name": "ArmyStorageGuns",
      "w": 750.0,
      "kind": "Militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 158
     },
     {
      "name": "LockerArmyBedroom",
      "w": 3.0,
      "kind": "Militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 158
     }
    ],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "armystorage",
     "label": "Almacén militar",
     "count": 22,
     "w": 750.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 5.0
    }
   ],
   "zombies": [
    {
     "def": "assaultRifleArmyOnBack",
     "chance": 50.0,
     "outfits": [
      "ArmyCamoDesert",
      "ArmyCamoGreen"
     ],
     "more": 0,
     "line": 142,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 142,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnG3",
   "sandboxDefault": true,
   "tier": "S",
   "reason": "Automática de .308 con daño 1,25–3 y cargador de 20. El mod la mete en los almacenes del ejército con peso 750: en una base militar es casi segura. Pega: fuera de ahí, muy rara.",
   "short": "G3"
  },
  {
   "id": "Glock17",
   "origin": "nueva",
   "name": "Glock 17",
   "nameReal": "Glock 17",
   "nameVanilla": null,
   "category": "pistola",
   "stats": {
    "ammo": "Cartuchos 9mm",
    "ammoEn": "9x19mm Parabellum Round",
    "ammoId": "base:bullets_9mm",
    "capacity": 17,
    "magazine": "Glock 17 Magazine",
    "magazineId": "Base.Glock17Mag",
    "dmgMin": 0.65,
    "dmgMax": 2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.3,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 35,
    "recoil": 15,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Glock17.png",
   "iconName": "Item_Glock17",
   "iconFrom": "Firearms/common/media/textures/Item_Glock17.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Handguns.txt",
   "line": 349,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 5
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/firearms/Item_Bullets9mmBox.png",
     "iconName": "Item_Bullets9mmBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 304,
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
     "id": "Glock17Mag",
     "name": "Glock 17 Magazine",
     "icon": "icons/firearms/Item_Glock_Mag.png",
     "iconName": "Item_Glock_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 81,
     "capacity": 17
    }
   ],
   "ammoBoxField": "Bullets9mmBox",
   "rarity": {
    "level": "Rara",
    "score": 26.0,
    "stashScore": 51.0,
    "militaryScore": 1.0,
    "military": "No es exclusiva militar.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 10.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "PoliceStorageGuns",
      "w": 6.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "GunStorePistols",
      "w": 6.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     },
     {
      "name": "PrisonGuardLockers",
      "w": 3.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "Bag_Police",
      "w": 1.0,
      "kind": "Bolsa de policía",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 286
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.001,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 12.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 12.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 12.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugLabGuns",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 134
     },
     {
      "name": "BanditBag_Late",
      "w": 3.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 286
     },
     {
      "name": "SurvivorBag_Late",
      "w": 3.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 286
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 255
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.0,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 6.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 6.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 6.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 6.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 6.0
    }
   ],
   "zombies": [
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
     "line": 96,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 96,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 96,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "handgunHolsterSWAT",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 96,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnGlock17",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "17 balas de 9 mm y la pistola más ligera (1,3). Pega: rara y precisión base 35.",
   "short": "Glock 17"
  },
  {
   "id": "HuntingRifle",
   "origin": "cambiada",
   "name": "Rifle MSR788",
   "nameReal": "Remington Model 788",
   "nameVanilla": "Rifle MSR788",
   "category": "rifle",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 3,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 30,
    "fireMode": "Manual",
    "auto": false,
    "noise": 110,
    "hitChance": 55,
    "crit": 30,
    "weight": 4,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 20,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Model788.png",
   "iconName": "Item_Model788",
   "iconFrom": "Firearms/common/media/textures/Item_Model788.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 124,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
   "ammoBoxField": "308Box",
   "vanilla": {
    "ammoId": "base:bullets_308",
    "capacity": 4,
    "dmgMin": 1.2,
    "dmgMax": 2,
    "range": 40,
    "noise": 170,
    "hitChance": 50,
    "crit": 30,
    "aimTime": 60,
    "recoil": 23,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "weight": 4,
    "fireMode": "Manual",
    "ammo": "Cartuchos .308"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 10906,
   "changes": [
    "capacity",
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "aimTime",
    "recoil",
    "jam"
   ],
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
    "sourceCount": 32,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
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
     "line": 1245,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Daño 1,25–3, alcance 30 y común. Pega: con el mod solo carga 3 balas.",
   "short": "Remington 788"
  },
  {
   "id": "HuntingRifle_Sawn",
   "origin": "nueva",
   "name": "Sawed-off Remington Model 788",
   "nameReal": "Sawed-off Remington Model 788",
   "nameVanilla": null,
   "category": "rifle",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 10,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 17,
    "fireMode": "Manual",
    "auto": false,
    "noise": 120,
    "hitChance": 35,
    "crit": 30,
    "weight": 4,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 40,
    "recoil": 55,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 15,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Model788_Sawn.png",
   "iconName": "Item_Model788_Sawn",
   "iconFrom": "Firearms/common/media/textures/Item_Model788_Sawn.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 241,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
   "ammoBoxField": "308Box",
   "rarity": {
    "level": "Se fabrica",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale como botín: se fabrica recortando Rifle MSR788 con una sierra.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "sawnFrom": {
    "from": "HuntingRifle",
    "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Sawn.txt:6",
    "name": "Rifle MSR788"
   },
   "obtain": [
    "recortar"
   ],
   "sandbox": null,
   "tier": "C",
   "reason": "Cabe en la funda. Pega: alcance 17, precisión 35, retroceso 55 y más ruido (120) que el rifle entero.",
   "short": "788 recortado"
  },
  {
   "id": "JS14_Rifle",
   "origin": "cambiada",
   "name": "Rifle JS-14",
   "nameReal": "Ruger Mini-14",
   "nameVanilla": "Rifle JS-14",
   "category": "rifle",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 20,
    "magazine": "Cargador JS-14",
    "magazineId": "Base.JS14_Clip",
    "dmgMin": 1,
    "dmgMax": 2.75,
    "range": 35,
    "fireMode": "Manual",
    "auto": false,
    "noise": 110,
    "hitChance": 40,
    "crit": 30,
    "weight": 3.6,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 25,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/Item_AssaultRifle2.png",
   "iconName": "Item_AssaultRifle2",
   "iconFrom": "panel vanilla (UI.pack / UI2.pack)",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 828,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 196
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/firearms/Item_556BulletsBox.png",
     "iconName": "Item_556BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 464,
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
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 216,
     "capacity": 20
    }
   ],
   "ammoBoxField": "223Box",
   "vanilla": {
    "ammoId": "base:bullets_556",
    "capacity": 20,
    "dmgMin": 1,
    "dmgMax": 1.6,
    "range": 30,
    "noise": 150,
    "hitChance": 45,
    "crit": 20,
    "aimTime": 40,
    "recoil": 15,
    "jam": 2,
    "pierce": true,
    "maxHit": 2,
    "weight": 3.5,
    "fireMode": "Manual",
    "ammo": "Cartuchos 5.56mm"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 19217,
   "changes": [
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "crit",
    "recoil",
    "jam",
    "maxHit",
    "weight"
   ],
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
    "sourceCount": 19,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 804,
     "by": "juego"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "ammoBoxMismatch": {
    "box": "223Box",
    "boxName": "223Box",
    "holds": null
   },
   "tier": "S",
   "reason": "Cargador de 20 de 5,56, alcance 35 y poco común: el fusil bueno que sí vas a encontrar. Pega: precisión base 40.",
   "short": "Mini-14"
  },
  {
   "id": "JS3T_Shotgun",
   "origin": "cambiada",
   "name": "Escopeta táctica JS-3T",
   "nameReal": "Ithaca 37",
   "nameVanilla": "Escopeta táctica JS-3T",
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg500.png",
   "iconName": "Item_Mossberg500",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg500.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 1181,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "vanilla": {
    "ammoId": "base:shotgun_shells",
    "capacity": 7,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 12,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "aimTime": 40,
    "recoil": 28,
    "jam": 2,
    "pierce": false,
    "maxHit": 9,
    "weight": 4.5,
    "fireMode": "Manual",
    "ammo": "Cartuchos de escopeta"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 19307,
   "changes": [
    "capacity",
    "range",
    "recoil",
    "jam",
    "weight"
   ],
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
    "sourceCount": 7,
    "by": "juego"
   },
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
     "line": 774,
     "by": "juego"
    },
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 788,
     "by": "juego"
    },
    {
     "def": "gunOnBackBountyHunter",
     "chance": 30.0,
     "outfits": [
      "BountyHunter"
     ],
     "more": 0,
     "line": 932,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Daño de escopeta y la llevan zombis de policía. Pega: 5 cartuchos.",
   "short": "Ithaca 37"
  },
  {
   "id": "JS3T_Shotgun_Sawnoff",
   "origin": "nueva",
   "name": "Sawed-off M37",
   "nameReal": "Sawed-off M37",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 3.5,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Mossberg500_Sawn.png",
   "iconName": "Item_Mossberg500_Sawn",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg500_Sawn.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 1299,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Se fabrica",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale como botín: se fabrica recortando Escopeta táctica JS-3T con una sierra.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "sawnFrom": {
    "from": "JS3T_Shotgun",
    "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Sawn.txt:30",
    "name": "Escopeta táctica JS-3T"
   },
   "obtain": [
    "recortar"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Mismas cifras que la entera y en la funda. Pega: 5 cartuchos y solo se fabrica.",
   "short": "Ithaca 37 recortada"
  },
  {
   "id": "L92_Carbine",
   "origin": "cambiada",
   "name": "Carabina L92",
   "nameReal": "Marlin Model 1894",
   "nameVanilla": "Carabina L92",
   "category": "carabina",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 10,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 2.5,
    "range": 25,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 40,
    "crit": 20,
    "weight": 3.5,
    "reload": "Palanca, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 20,
    "recoil": 15,
    "jam": 3,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Winchester94.png",
   "iconName": "Item_Winchester94",
   "iconFrom": "Firearms/common/media/textures/Item_Winchester94.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_LeverActionRifles.txt",
   "line": 6,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 64
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 352,
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
   "ammoBoxField": "Bullets44Box",
   "vanilla": {
    "ammoId": "base:bullets_357",
    "capacity": 10,
    "dmgMin": 1,
    "dmgMax": 1.6,
    "range": 24,
    "noise": 120,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 50,
    "recoil": 12,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "weight": 3.5,
    "fireMode": "Manual",
    "ammo": "Cartucho .357 Magnum"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 19394,
   "changes": [
    "ammoId",
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "aimTime",
    "recoil",
    "jam",
    "pierce"
   ],
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
    "sourceCount": 18,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 831,
     "by": "juego"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "10 balas de .44 Magnum, el apuntado más rápido (20), retroceso 15 y atraviesa. Pega: alcance 25.",
   "short": "Marlin 1894"
  },
  {
   "id": "L92_Carbine_Sawn",
   "origin": "nueva",
   "name": "Sawed-off Marlin Model 1894",
   "nameReal": "Sawed-off Marlin Model 1894",
   "nameVanilla": null,
   "category": "carabina",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 5,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 2.5,
    "range": 25,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 40,
    "crit": 20,
    "weight": 3.5,
    "reload": "Palanca, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 20,
    "recoil": 15,
    "jam": 3,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Winchester94.png",
   "iconName": "Item_Winchester94",
   "iconFrom": "Firearms/common/media/textures/Item_Winchester94.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_LeverActionRifles.txt",
   "line": 135,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 64
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 352,
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
   "ammoBoxField": "Bullets44Box",
   "rarity": {
    "level": "Se fabrica",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale como botín: se fabrica recortando Carabina L92 con una sierra.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "sawnFrom": {
    "from": "L92_Carbine",
    "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Sawn.txt:6",
    "name": "Carabina L92"
   },
   "obtain": [
    "recortar"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Las mismas cifras que el Marlin y cabe en la funda. Pega: solo 5 balas.",
   "short": "Marlin recortado"
  },
  {
   "id": "L94_Rifle",
   "origin": "cambiada",
   "name": "Rifle L94",
   "nameReal": "Ruger M77/22",
   "nameVanilla": "Rifle L94",
   "category": "rifle",
   "stats": {
    "ammo": ".22 LR Round",
    "ammoEn": ".22 LR Round",
    "ammoId": "firearms:bullets_22",
    "capacity": 10,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 0.55,
    "dmgMax": 1.5,
    "range": 30,
    "fireMode": "Manual",
    "auto": false,
    "noise": 60,
    "hitChance": 55,
    "crit": 30,
    "weight": 4,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 40,
    "recoil": 25,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 20,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Model788.png",
   "iconName": "Item_Model788",
   "iconFrom": "Firearms/common/media/textures/Item_Model788.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 358,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets22",
     "name": ".22 LR Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "RifleAmmo223loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 241
    },
    {
     "role": "Caja",
     "id": "Bullets22Box",
     "name": "Box of .22 LR Rounds",
     "icon": "icons/firearms/Item_Bullets22Box.png",
     "iconName": "Item_Bullets22Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 512,
     "contains": {
      "n": 50,
      "of": ".22 LR Round",
      "ofId": "Bullets22",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets22Carton",
     "name": "Carton of .22 LR Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 255,
     "contains": {
      "n": 12,
      "of": "Box of .22 LR Rounds",
      "ofId": "Bullets22Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "ammoBoxField": "Bullets22Box",
   "vanilla": {
    "ammoId": "base:bullets_3030",
    "capacity": 6,
    "dmgMin": 1.2,
    "dmgMax": 2,
    "range": 30,
    "noise": 160,
    "hitChance": 50,
    "crit": 25,
    "aimTime": 40,
    "recoil": 20,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "weight": 3.5,
    "fireMode": "Manual",
    "ammo": "Cartucho .30-30"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 19479,
   "changes": [
    "ammoId",
    "capacity",
    "dmgMin",
    "dmgMax",
    "noise",
    "hitChance",
    "crit",
    "recoil",
    "jam",
    "pierce",
    "weight"
   ],
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
    "sourceCount": 18,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 831,
     "by": "juego"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Rifle de .22 muy silencioso (radio 60) con alcance 30 y 10 balas: para limpiar sin atraer a la horda. Pega: daño 0,55–1,5.",
   "short": "Ruger 77/22"
  },
  {
   "id": "LAW12",
   "origin": "nueva",
   "name": "Franchi LAW-12",
   "nameReal": "Franchi LAW-12",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 8,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg500Plastic.png",
   "iconName": "Item_Mossberg500Plastic",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg500Plastic.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 1534,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Rara",
    "score": 22.5,
    "stashScore": 38.9,
    "militaryScore": 1.1,
    "military": "No es exclusiva militar.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 10.5,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "PoliceStorageGuns",
      "w": 7.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "PrisonGuardLockers",
      "w": 3.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "GunStoreShotguns",
      "w": 1.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "BarCounterWeapon",
      "w": 0.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GarageFirearms",
      "w": 0.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 13.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 12.9,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 8.9,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.2,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Late",
      "w": 1.2,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 0.7,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "DrugLabGuns",
      "w": 0.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SurvivorBag",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Early",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Mid",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.1,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.5
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 7.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 7.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 7.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 1.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 1.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 1.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 0.5
    }
   ],
   "zombies": [
    {
     "def": "shotgunPolice",
     "chance": 30.0,
     "outfits": [
      "Police",
      "PoliceState",
      "PoliceRiot",
      "Police_SWAT"
     ],
     "more": 3,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04"
     ],
     "more": 1,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "8 cartuchos y la llevan zombis de policía. Pega: rara y ruido 200.",
   "short": "LAW-12"
  },
  {
   "id": "M1Garand",
   "origin": "nueva",
   "name": "M1 Garand",
   "nameReal": "M1 Garand",
   "nameVanilla": null,
   "category": "rifle",
   "stats": {
    "ammo": ".30-06 Round",
    "ammoEn": ".30-06 Round",
    "ammoId": "firearms:bullets_30_06",
    "capacity": 8,
    "magazine": "M1 Garand Clip",
    "magazineId": "Base.M1GarandClip",
    "dmgMin": 1.25,
    "dmgMax": 3.25,
    "range": 25,
    "fireMode": "Manual",
    "auto": false,
    "noise": 110,
    "hitChance": 45,
    "crit": 30,
    "weight": 4,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 35,
    "recoil": 35,
    "jam": 15,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 30,
    "conditionMax": 10,
    "conditionOneIn": 150,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_M1Garand.png",
   "iconName": "Item_M1Garand",
   "iconFrom": "Firearms/common/media/textures/Item_M1Garand.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 945,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets3006",
     "name": ".30-06 Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 272
    },
    {
     "role": "Caja",
     "id": "Bullets3006Box",
     "name": "Box of .30-06 Rounds",
     "icon": "icons/firearms/Item_Bullets3006Box.png",
     "iconName": "Item_Bullets3006Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 528,
     "contains": {
      "n": 20,
      "of": ".30-06 Round",
      "ofId": "Bullets3006",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:30"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets3006Carton",
     "name": "Carton of .30-06 Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 286,
     "contains": {
      "n": 12,
      "of": "Box of .30-06 Rounds",
      "ofId": "Bullets3006Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    },
    {
     "role": "Cargador",
     "id": "M1GarandClip",
     "name": "M1 Garand Clip",
     "icon": "icons/firearms/Item_M1Clip.png",
     "iconName": "Item_M1Clip",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 276,
     "capacity": 8
    }
   ],
   "ammoBoxField": "Bullets3006Box",
   "rarity": {
    "level": "Muy rara",
    "score": 18.0,
    "stashScore": 23.0,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "PawnShopGunsSpecial",
      "w": 8.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 226
     },
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 226
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.001,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     },
     {
      "name": "BanditBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 342
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 4,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 8.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 5.0
    }
   ],
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04"
     ],
     "more": 1,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnM1Garand",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "El daño máximo más alto (3,25) con peine de 8. Pega: se encasquilla mucho (15) y su .30-06 es munición del mod.",
   "short": "M1 Garand"
  },
  {
   "id": "M4",
   "origin": "nueva",
   "name": "M4",
   "nameReal": "M4",
   "nameVanilla": null,
   "category": "automatica",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 30,
    "magazine": "Cargador M16",
    "magazineId": "Base.556Clip",
    "dmgMin": 1,
    "dmgMax": 2.75,
    "range": 25,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 3.3,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 30,
    "recoil": 50,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_M16.png",
   "iconName": "Item_M16",
   "iconFrom": "Firearms/common/media/textures/Item_M16.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_AssaultRifles.txt",
   "line": 629,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 196
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/firearms/Item_556BulletsBox.png",
     "iconName": "Item_556BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 464,
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
     "icon": "icons/firearms/Item_556_Stanag_Mag.png",
     "iconName": "Item_556_Stanag_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 171,
     "capacity": 30
    }
   ],
   "ammoBoxField": "556Box",
   "rarity": {
    "level": "Muy rara",
    "score": 5.0,
    "stashScore": 18.0,
    "militaryScore": 1.0,
    "military": "Sale sobre todo en zonas militares.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BanditBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.0,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 5.0
    }
   ],
   "zombies": [
    {
     "def": "assaultRifleArmyOnBack",
     "chance": 50.0,
     "outfits": [
      "ArmyCamoDesert",
      "ArmyCamoGreen"
     ],
     "more": 0,
     "line": 142,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 142,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnM4",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "Mismas cifras que el M16 y algo más ligera (3,3). Pega: retroceso 50, el doble que el M16, así que dispara más despacio.",
   "short": "M4"
  },
  {
   "id": "M60",
   "origin": "nueva",
   "name": "M60",
   "nameReal": "M60",
   "nameVanilla": null,
   "category": "automatica",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 100,
    "magazine": "M60 Magazine",
    "magazineId": "Base.M60Mag",
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 30,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 6,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 30,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_M60.png",
   "iconName": "Item_M60",
   "iconFrom": "Firearms/common/media/textures/Item_M60.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_AssaultRifles.txt",
   "line": 128,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
     "id": "M60Mag",
     "name": "M60 Magazine",
     "icon": "icons/firearms/Item_M60Mag.png",
     "iconName": "Item_M60Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 231,
     "capacity": 100
    }
   ],
   "ammoBoxField": "308Box",
   "rarity": {
    "level": "Muy rara",
    "score": 1.25,
    "stashScore": 4.5,
    "militaryScore": 0.25,
    "military": "Sale sobre todo en zonas militares.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 1.25,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 1.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 1.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 1.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BanditBag_Late",
      "w": 0.25,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     },
     {
      "name": "SurvivorBag_Late",
      "w": 0.25,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 0.25,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 1.25
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnM60",
   "sandboxDefault": true,
   "tier": "S",
   "reason": "Cinta de 100 balas de .308, automática y daño 1,25–3: no hay nada con más fuego. Pega: pesa 6 y es de las más raras del mod.",
   "short": "M60"
  },
  {
   "id": "MP5",
   "origin": "nueva",
   "name": "MP5A1",
   "nameReal": "MP5A1",
   "nameVanilla": null,
   "category": "subfusil",
   "stats": {
    "ammo": "Cartuchos 9mm",
    "ammoEn": "9x19mm Parabellum Round",
    "ammoId": "base:bullets_9mm",
    "capacity": 30,
    "magazine": "MP5 Magazine",
    "magazineId": "Base.MP5Mag",
    "dmgMin": 0.65,
    "dmgMax": 2.25,
    "range": 18,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 40,
    "crit": 20,
    "weight": 2.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 25,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_MP5.png",
   "iconName": "Item_MP5",
   "iconFrom": "Firearms/common/media/textures/Item_MP5.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_SMGs.txt",
   "line": 4,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 5
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/firearms/Item_Bullets9mmBox.png",
     "iconName": "Item_Bullets9mmBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 304,
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
     "id": "MP5Mag",
     "name": "MP5 Magazine",
     "icon": "icons/firearms/Item_Mp5_Mag.png",
     "iconName": "Item_Mp5_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 96,
     "capacity": 30
    }
   ],
   "ammoBoxField": "Bullets9mmBox",
   "rarity": {
    "level": "Muy rara",
    "score": 14.25,
    "stashScore": 25.5,
    "militaryScore": 0.75,
    "military": "Sale sobre todo en zonas militares.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 7.5,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "PoliceStorageGuns",
      "w": 4.5,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "PrisonGuardLockers",
      "w": 2.25,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.001,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BanditBag_Late",
      "w": 0.75,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     },
     {
      "name": "SurvivorBag_Late",
      "w": 0.75,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 0.75,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 4,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 7.5
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 4.5
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 4.5
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 4.5
    }
   ],
   "zombies": [
    {
     "def": "shotgunPolice",
     "chance": 30.0,
     "outfits": [
      "Police",
      "PoliceState",
      "PoliceRiot",
      "Police_SWAT"
     ],
     "more": 3,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04"
     ],
     "more": 1,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnMP5",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "Subfusil automático de 30 balas de 9 mm, la munición más fácil de encontrar, y apuntado rápido (25). Pega: alcance 18 y muy raro.",
   "short": "MP5A1"
  },
  {
   "id": "MP510",
   "origin": "nueva",
   "name": "MP5/10",
   "nameReal": "MP5/10",
   "nameVanilla": null,
   "category": "subfusil",
   "stats": {
    "ammo": "10mm Auto Round",
    "ammoEn": "10mm Auto Round",
    "ammoId": "firearms:bullets_10mm",
    "capacity": 30,
    "magazine": "MP5/10 Magazine",
    "magazineId": "Base.MP510Mag",
    "dmgMin": 0.65,
    "dmgMax": 2.25,
    "range": 18,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 40,
    "crit": 20,
    "weight": 2.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 25,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_MP5.png",
   "iconName": "Item_MP5",
   "iconFrom": "Firearms/common/media/textures/Item_MP5.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_SMGs.txt",
   "line": 241,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets10mm",
     "name": "10mm Auto Round",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 19
    },
    {
     "role": "Caja",
     "id": "Bullets10mmBox",
     "name": "Box of 10mm Auto Rounds",
     "icon": "icons/firearms/Item_Bullets38Box.png",
     "iconName": "Item_Bullets38Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 320,
     "contains": {
      "n": 50,
      "of": "10mm Auto Round",
      "ofId": "Bullets10mm",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets10mmCarton",
     "name": "Carton of 10mm Auto Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 33,
     "contains": {
      "n": 12,
      "of": "Box of 10mm Auto Rounds",
      "ofId": "Bullets10mmBox",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    },
    {
     "role": "Cargador",
     "id": "MP510Mag",
     "name": "MP5/10 Magazine",
     "icon": "icons/firearms/Item_Mp5_Mag.png",
     "iconName": "Item_Mp5_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 111,
     "capacity": 30
    }
   ],
   "ammoBoxField": "Bullets10mmBox",
   "rarity": {
    "level": "Muy rara",
    "score": 7.0,
    "stashScore": 8.0,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "PoliceStorageGuns",
      "w": 3.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "GunStoreGuns",
      "w": 2.5,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "PrisonGuardLockers",
      "w": 1.5,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 3.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 3.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 2.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 3,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 3.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 3.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 3.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 2.5
    }
   ],
   "zombies": [
    {
     "def": "shotgunPolice",
     "chance": 30.0,
     "outfits": [
      "Police",
      "PoliceState",
      "PoliceRiot",
      "Police_SWAT"
     ],
     "more": 3,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "assaultRifleOnBack",
     "chance": 20.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04"
     ],
     "more": 1,
     "line": 114,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnMP510",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "Un MP5 que dispara 10 mm. Pega: el 10 mm es munición del mod y escasea; con 9 mm tienes el MP5.",
   "short": "MP5/10"
  },
  {
   "id": "MP5SD",
   "origin": "nueva",
   "name": "MP5SD",
   "nameReal": "MP5SD",
   "nameVanilla": null,
   "category": "subfusil",
   "stats": {
    "ammo": "Cartuchos 9mm",
    "ammoEn": "9x19mm Parabellum Round",
    "ammoId": "base:bullets_9mm",
    "capacity": 30,
    "magazine": "MP5 Magazine",
    "magazineId": "Base.MP5Mag",
    "dmgMin": 0.65,
    "dmgMax": 2.25,
    "range": 18,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 40,
    "crit": 20,
    "weight": 2.5,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 25,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_MP5SD.png",
   "iconName": "Item_MP5SD",
   "iconFrom": "Firearms/common/media/textures/Item_MP5SD.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_SMGs.txt",
   "line": 124,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 5
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/firearms/Item_Bullets9mmBox.png",
     "iconName": "Item_Bullets9mmBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 304,
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
     "id": "MP5Mag",
     "name": "MP5 Magazine",
     "icon": "icons/firearms/Item_Mp5_Mag.png",
     "iconName": "Item_Mp5_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 96,
     "capacity": 30
    }
   ],
   "ammoBoxField": "Bullets9mmBox",
   "rarity": {
    "level": "Muy rara",
    "score": 0.75,
    "stashScore": 0.98,
    "militaryScore": 0.01,
    "military": "Sale sobre todo en zonas militares.",
    "sources": [
     {
      "name": "PoliceStorageGuns",
      "w": 0.3,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "GunStoreGuns",
      "w": 0.3,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "PrisonGuardLockers",
      "w": 0.15,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 0.36,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 0.36,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 0.24,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BanditBag_Late",
      "w": 0.01,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     },
     {
      "name": "SurvivorBag_Late",
      "w": 0.01,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 0.01,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 3,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 0.3
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 0.3
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 0.3
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 0.3
    }
   ],
   "zombies": [
    {
     "def": "assaultRifleArmyOnBack",
     "chance": 50.0,
     "outfits": [
      "ArmyCamoDesert",
      "ArmyCamoGreen"
     ],
     "more": 0,
     "line": 142,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 142,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnMP5SD",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "Las mismas cifras que el MP5. Ojo: pese a ser la versión silenciada, en el script hace el mismo ruido (radio 100). Pega: la más rara de todas las armas con botín.",
   "short": "MP5SD"
  },
  {
   "id": "MSR7T_Rifle",
   "origin": "cambiada",
   "name": "Rifle táctico MSR7T",
   "nameReal": "M24",
   "nameVanilla": "Rifle táctico MSR7T",
   "category": "rifle",
   "stats": {
    "ammo": "Cartuchos .308",
    "ammoEn": "7.62x51mm Round",
    "ammoId": "base:bullets_308",
    "capacity": 10,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 3,
    "range": 40,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 50,
    "crit": 30,
    "weight": 4,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 25,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Model700.png",
   "iconName": "Item_Model700",
   "iconFrom": "Firearms/common/media/textures/Item_Model700.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 593,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
   "ammoBoxField": "308Box",
   "vanilla": {
    "ammoId": "base:bullets_308",
    "capacity": 4,
    "dmgMin": 1.2,
    "dmgMax": 2,
    "range": 40,
    "noise": 170,
    "hitChance": 50,
    "crit": 35,
    "aimTime": 65,
    "recoil": 21,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "weight": 4.5,
    "fireMode": "Manual",
    "ammo": "Cartuchos .308"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 19566,
   "changes": [
    "capacity",
    "dmgMin",
    "dmgMax",
    "noise",
    "crit",
    "aimTime",
    "recoil",
    "jam",
    "weight"
   ],
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
    "sourceCount": 4,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackSWAT",
     "chance": 30.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 788,
     "by": "juego"
    },
    {
     "def": "rifleOnBackGhillie",
     "chance": 30.0,
     "outfits": [
      "Ghillie"
     ],
     "more": 0,
     "line": 902,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "El alcance más largo del juego (40) con 10 balas de .308. Pega: muy rara.",
   "short": "M24"
  },
  {
   "id": "Mac10",
   "origin": "nueva",
   "name": "Ingram MAC 10",
   "nameReal": "Ingram MAC 10",
   "nameVanilla": null,
   "category": "subfusil",
   "stats": {
    "ammo": "Cartuchos .45 Auto",
    "ammoEn": ".45 ACP Round",
    "ammoId": "base:bullets_45",
    "capacity": 30,
    "magazine": "MAC 10 Magazine",
    "magazineId": "Base.MAC10Mag",
    "dmgMin": 0.75,
    "dmgMax": 2.25,
    "range": 15,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 3,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 25,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Mac10.png",
   "iconName": "Item_Mac10",
   "iconFrom": "Firearms/common/media/textures/Item_Mac10.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_SMGs.txt",
   "line": 479,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 50
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/firearms/Item_Bullets45Box.png",
     "iconName": "Item_Bullets45Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 336,
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
     "id": "MAC10Mag",
     "name": "MAC 10 Magazine",
     "icon": "icons/firearms/Item_UZIMag.png",
     "iconName": "Item_UZIMag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 141,
     "capacity": 30
    }
   ],
   "ammoBoxField": "Bullets45Box",
   "rarity": {
    "level": "Solo zombis",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale en contenedores: solo la llevan encima algunos zombis.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04"
     ],
     "more": 1,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "zombis"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Automática de 30 balas de .45 que cabe en la funda. Pega: no sale en contenedores, solo la llevan algunos zombis, y precisión base 35.",
   "short": "MAC-10"
  },
  {
   "id": "Mossberg500",
   "origin": "nueva",
   "name": "Mossberg 590",
   "nameReal": "Mossberg 590",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg_Plastic.png",
   "iconName": "Item_Mossberg_Plastic",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Plastic.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 592,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Rara",
    "score": 35.01,
    "stashScore": 49.0,
    "militaryScore": 1.0,
    "military": "No es exclusiva militar.",
    "sources": [
     {
      "name": "PoliceStorageGuns",
      "w": 10.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreShotguns",
      "w": 10.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GarageFirearms",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.005,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 10.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 7.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "DrugLabGuns",
      "w": 5.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SurvivorBag_Late",
      "w": 2.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Late",
      "w": 2.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.0,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 10.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 10.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 10.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 10.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 5.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 5.0
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnMossberg500",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "Igual que la Mossberg 500 pero bastante más rara.",
   "short": "Mossberg 590"
  },
  {
   "id": "Mossberg500Tactical",
   "origin": "nueva",
   "name": "Mossberg 590A1 Tactical",
   "nameReal": "Mossberg 590A1 Tactical",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 8,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 3.5,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg_Tactical.png",
   "iconName": "Item_Mossberg_Tactical",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Tactical.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 710,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Muy rara",
    "score": 3.5,
    "stashScore": 4.9,
    "militaryScore": 0.1,
    "military": "Sale sobre todo en zonas militares.",
    "sources": [
     {
      "name": "PoliceStorageGuns",
      "w": 1.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreShotguns",
      "w": 1.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreGuns",
      "w": 0.5,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 0.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GarageFirearms",
      "w": 0.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.001,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 1.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 0.9,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 0.9,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 0.7,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "DrugLabGuns",
      "w": 0.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SurvivorBag_Late",
      "w": 0.2,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Late",
      "w": 0.2,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Early",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Mid",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 0.1,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 1.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 1.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 1.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 1.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 1.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 1.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 0.5
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 0.5
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnMossberg500Tactical",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "8 cartuchos y más ligera (3,5). Pega: muy rara.",
   "short": "Mossberg 590A1"
  },
  {
   "id": "Pistol",
   "origin": "cambiada",
   "name": "Pistola M9",
   "nameReal": "Beretta 92FS",
   "nameVanilla": "Pistola M9",
   "category": "pistola",
   "stats": {
    "ammo": "Cartuchos 9mm",
    "ammoEn": "9x19mm Parabellum Round",
    "ammoId": "base:bullets_9mm",
    "capacity": 15,
    "magazine": "Cargador M9",
    "magazineId": "Base.9mmClip",
    "dmgMin": 0.65,
    "dmgMax": 2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 40,
    "crit": 20,
    "weight": 1.4,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 40,
    "recoil": 15,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_M9.png",
   "iconName": "Item_M9",
   "iconFrom": "Firearms/common/media/textures/Item_M9.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Handguns.txt",
   "line": 6,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 5
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/firearms/Item_Bullets9mmBox.png",
     "iconName": "Item_Bullets9mmBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 304,
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
     "icon": "icons/firearms/Item_9mm_Mag.png",
     "iconName": "Item_9mm_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 21,
     "capacity": 15
    }
   ],
   "ammoBoxField": "Bullets9mmBox",
   "vanilla": {
    "ammoId": "base:bullets_9mm",
    "capacity": 15,
    "dmgMin": 0.6,
    "dmgMax": 1,
    "range": 15,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 25,
    "recoil": 12,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "weight": 1.5,
    "fireMode": "Manual",
    "ammo": "Cartuchos 9mm"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 10996,
   "changes": [
    "dmgMin",
    "dmgMax",
    "hitChance",
    "aimTime",
    "recoil",
    "jam",
    "weight"
   ],
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
    "sourceCount": 30,
    "by": "juego"
   },
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
     "line": 597,
     "by": "juego"
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
     "line": 615,
     "by": "juego"
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
     "line": 641,
     "by": "juego"
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
     "line": 658,
     "by": "juego"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685,
     "by": "juego"
    },
    {
     "def": "handgunHolsterSWAT",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 702,
     "by": "juego"
    },
    {
     "def": "handgunHolsterGhillie",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 717,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "15 balas de 9 mm y la pistola más común. Pega: daño 0,65–2.",
   "short": "Beretta 92FS"
  },
  {
   "id": "Pistol2",
   "origin": "cambiada",
   "name": "Pistola M1911",
   "nameReal": "Colt M1911A1",
   "nameVanilla": "Pistola M1911",
   "category": "pistola",
   "stats": {
    "ammo": "Cartuchos .45 Auto",
    "ammoEn": ".45 ACP Round",
    "ammoId": "base:bullets_45",
    "capacity": 7,
    "magazine": "Cargador M1911",
    "magazineId": "Base.45Clip",
    "dmgMin": 0.75,
    "dmgMax": 2.25,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 45,
    "crit": 20,
    "weight": 1.4,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 40,
    "recoil": 15,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 7,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_M1911.png",
   "iconName": "Item_M1911",
   "iconFrom": "Firearms/common/media/textures/Item_M1911.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Handguns.txt",
   "line": 113,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 50
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/firearms/Item_Bullets45Box.png",
     "iconName": "Item_Bullets45Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 336,
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
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 36,
     "capacity": 7
    }
   ],
   "ammoBoxField": "Bullets45Box",
   "vanilla": {
    "ammoId": "base:bullets_45",
    "capacity": 7,
    "dmgMin": 0.9,
    "dmgMax": 1.2,
    "range": 12,
    "noise": 70,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 25,
    "recoil": 15,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "weight": 1.5,
    "fireMode": "Manual",
    "ammo": "Cartuchos .45 Auto"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11080,
   "changes": [
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "aimTime",
    "jam",
    "weight"
   ],
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
    "sourceCount": 20,
    "by": "juego"
   },
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
     "line": 597,
     "by": "juego"
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
     "line": 641,
     "by": "juego"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Más daño (0,75–2,25) y precisión (45) que las de 9 mm. Pega: solo 7 balas.",
   "short": "M1911A1"
  },
  {
   "id": "Pistol3",
   "origin": "cambiada",
   "name": "Pistola D-E",
   "nameReal": "Desert Eagle",
   "nameVanilla": "Pistola D-E",
   "category": "pistola",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 8,
    "magazine": "Cargador D-E",
    "magazineId": "Base.44Clip",
    "dmgMin": 0.9,
    "dmgMax": 2.5,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "weight": 2,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 15,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_DEagle.png",
   "iconName": "Item_DEagle",
   "iconFrom": "Firearms/common/media/textures/Item_DEagle.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Handguns.txt",
   "line": 231,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 64
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 352,
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
     "icon": "icons/firearms/Item_44_Mag.png",
     "iconName": "Item_44_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 66,
     "capacity": 8
    }
   ],
   "ammoBoxField": "Bullets44Box",
   "vanilla": {
    "ammoId": "base:bullets_44",
    "capacity": 8,
    "dmgMin": 1,
    "dmgMax": 1.6,
    "range": 17,
    "noise": 120,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 25,
    "recoil": 17,
    "jam": 1,
    "pierce": false,
    "maxHit": 1,
    "weight": 2,
    "fireMode": "Manual",
    "ammo": "Cartuchos .44 Magnum"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11164,
   "changes": [
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "aimTime",
    "recoil",
    "jam"
   ],
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
    "sourceCount": 11,
    "by": "juego"
   },
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
     "line": 597,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "La pistola que más pega (0,9–2,5) y la más precisa (50), con 8 balas de .44. Pega: muy rara y retroceso 40.",
   "short": "Desert Eagle"
  },
  {
   "id": "Remington870",
   "origin": "nueva",
   "name": "Remington 870",
   "nameReal": "Remington 870",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg_Plastic.png",
   "iconName": "Item_Mossberg_Plastic",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Plastic.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 829,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Rara",
    "score": 35.01,
    "stashScore": 49.0,
    "militaryScore": 1.0,
    "military": "No es exclusiva militar.",
    "sources": [
     {
      "name": "PoliceStorageGuns",
      "w": 10.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreShotguns",
      "w": 10.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GarageFirearms",
      "w": 5.0,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.005,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 10.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 9.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 7.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "DrugLabGuns",
      "w": 5.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SurvivorBag_Late",
      "w": 2.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Late",
      "w": 2.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Early",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.0,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 10.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 10.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 10.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 10.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 10.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 10.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 5.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 5.0
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnRemington870",
   "sandboxDefault": true,
   "tier": "B",
   "reason": "Igual que la de madera, pero no se puede recortar.",
   "short": "Remington 870 (sintética)"
  },
  {
   "id": "Remington870Sawnoff",
   "origin": "nueva",
   "name": "Sawed-off Remington 870",
   "nameReal": "Sawed-off Remington 870",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 3.5,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Mossberg_Wood_Sawed.png",
   "iconName": "Item_Mossberg_Wood_Sawed",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Wood_Sawed.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 1065,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Se fabrica",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "No sale como botín: se fabrica recortando Remington 870 con una sierra.",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "sawnFrom": {
    "from": "Remington870Wood",
    "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Sawn.txt:30",
    "name": "Remington 870"
   },
   "obtain": [
    "recortar"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Mismas cifras que la entera, más ligera y en la funda. Pega: solo se fabrica recortando la 870 de madera.",
   "short": "870 recortada"
  },
  {
   "id": "Remington870Wood",
   "origin": "nueva",
   "name": "Remington 870",
   "nameReal": "Remington 870",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg_Wood.png",
   "iconName": "Item_Mossberg_Wood",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Wood.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 947,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Poco común",
    "score": 52.51,
    "stashScore": 73.5,
    "militaryScore": 1.5,
    "military": "No es exclusiva militar.",
    "sources": [
     {
      "name": "PoliceStorageGuns",
      "w": 15.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreShotguns",
      "w": 15.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GunStoreGuns",
      "w": 7.5,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "BarCounterWeapon",
      "w": 7.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GarageFirearms",
      "w": 7.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SchoolLockersBad",
      "w": 0.007,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 203
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 15.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 13.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 13.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 10.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "DrugLabGuns",
      "w": 7.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SurvivorBag_Late",
      "w": 3.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Late",
      "w": 3.0,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag",
      "w": 1.5,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 1.5,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag",
      "w": 1.5,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Early",
      "w": 1.5,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Mid",
      "w": 1.5,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.5,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 15.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 15.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 15.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 15.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 15.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 15.0
    },
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 7.5
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 7.5
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "6 cartuchos y poco común. Pega: ninguna ventaja sobre la Mossberg 500, que es más fácil de encontrar.",
   "short": "Remington 870"
  },
  {
   "id": "Revolver",
   "origin": "cambiada",
   "name": "Revólver M625",
   "nameReal": "S&W M625",
   "nameVanilla": "Revólver M625",
   "category": "revolver",
   "stats": {
    "ammo": "Cartuchos .45 Auto",
    "ammoEn": ".45 ACP Round",
    "ammoId": "base:bullets_45",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1,
    "dmgMax": 2.25,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.4,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/Item_Revolver.png",
   "iconName": "Item_Revolver",
   "iconFrom": "panel vanilla (UI.pack / UI2.pack)",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 6,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 50
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/firearms/Item_Bullets45Box.png",
     "iconName": "Item_Bullets45Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 336,
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
    }
   ],
   "ammoBoxField": "Bullets45Box",
   "vanilla": {
    "ammoId": "base:bullets_357",
    "capacity": 6,
    "dmgMin": 0.95,
    "dmgMax": 1.4,
    "range": 12,
    "noise": 100,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 25,
    "recoil": 16,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "weight": 1.5,
    "fireMode": "Manual",
    "ammo": "Cartucho .357 Magnum"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11248,
   "changes": [
    "ammoId",
    "dmgMin",
    "dmgMax",
    "range",
    "hitChance",
    "aimTime",
    "recoil",
    "weight"
   ],
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
    "sourceCount": 34,
    "by": "juego"
   },
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
     "line": 597,
     "by": "juego"
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
     "line": 641,
     "by": "juego"
    },
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 671,
     "by": "juego"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "Común y no se encasquilla. Ojo: con el mod dispara .45 Auto, no .357 como en el juego base. Pega: 6 balas.",
   "short": "S&W M625"
  },
  {
   "id": "Revolver_Long",
   "origin": "cambiada",
   "name": "Magnum",
   "nameReal": "S&W M29",
   "nameVanilla": "Magnum",
   "category": "revolver",
   "stats": {
    "ammo": "Cartuchos .44 Magnum",
    "ammoEn": ".44 Magnum Round",
    "ammoId": "base:bullets_44",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.25,
    "dmgMax": 2.5,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 1.7,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 5,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_SW29.png",
   "iconName": "Item_SW29",
   "iconFrom": "Firearms/common/media/textures/Item_SW29.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 124,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 64
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 352,
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
   "ammoBoxField": "Bullets44Box",
   "vanilla": {
    "ammoId": "base:bullets_44",
    "capacity": 6,
    "dmgMin": 1,
    "dmgMax": 1.6,
    "range": 18,
    "noise": 120,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 25,
    "recoil": 17,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "weight": 2,
    "fireMode": "Manual",
    "ammo": "Cartuchos .44 Magnum"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11330,
   "changes": [
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "aimTime",
    "recoil",
    "weight"
   ],
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
    "sourceCount": 34,
    "by": "juego"
   },
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
     "line": 597,
     "by": "juego"
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
     "line": 641,
     "by": "juego"
    },
    {
     "def": "handgunHolsterRanger",
     "chance": 50.0,
     "outfits": [
      "Hunter",
      "Ranger"
     ],
     "more": 0,
     "line": 671,
     "by": "juego"
    },
    {
     "def": "handgunHolsterSheriff",
     "chance": 50.0,
     "outfits": [
      "Sheriff_Deputy"
     ],
     "more": 0,
     "line": 685,
     "by": "juego"
    },
    {
     "def": "handgunHolsterSWAT",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 702,
     "by": "juego"
    },
    {
     "def": "handgunHolsterGhillie",
     "chance": 50.0,
     "outfits": [
      "Police_SWAT"
     ],
     "more": 0,
     "line": 717,
     "by": "juego"
    },
    {
     "def": "handgunHolsterShoulder_Hass",
     "chance": 50.0,
     "outfits": [
      "Judge_Matt_Hass"
     ],
     "more": 0,
     "line": 2251,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "Daño 1,25–2,5, no se encasquilla nunca y es poco común. Pega: 6 balas, cartucho a cartucho.",
   "short": "S&W M29"
  },
  {
   "id": "Revolver_Short",
   "origin": "cambiada",
   "name": "Revólver M36",
   "nameReal": "S&W M36",
   "nameVanilla": "Revólver M36",
   "category": "revolver",
   "stats": {
    "ammo": "Cartuchos .38 Special",
    "ammoEn": ".38 Special Round",
    "ammoId": "base:bullets_38",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1,
    "dmgMax": 2,
    "range": 12,
    "fireMode": "Manual",
    "auto": false,
    "noise": 70,
    "hitChance": 30,
    "crit": 20,
    "weight": 1,
    "reload": "Tambor, cartucho a cartucho",
    "reloadId": "revolver",
    "aimTime": 40,
    "recoil": 35,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 2,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "HolsterSmall"
   },
   "icon": "icons/Item_RevolverShort.png",
   "iconName": "Item_RevolverShort",
   "iconFrom": "panel vanilla (UI.pack / UI2.pack)",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Revolvers.txt",
   "line": 242,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets38",
     "name": "Cartuchos .38 Special",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 109
    },
    {
     "role": "Caja",
     "id": "Bullets38Box",
     "name": "Caja de cartuchos .38 Special",
     "icon": "icons/firearms/Item_Bullets38Box.png",
     "iconName": "Item_Bullets38Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 384,
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
   "ammoBoxField": "Bullets38Box",
   "vanilla": {
    "ammoId": "base:bullets_38",
    "capacity": 5,
    "dmgMin": 0.5,
    "dmgMax": 0.8,
    "range": 8,
    "noise": 60,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 25,
    "recoil": 11,
    "jam": 0,
    "pierce": false,
    "maxHit": 1,
    "weight": 1.2,
    "fireMode": "Manual",
    "ammo": "Cartuchos .38 Special"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11413,
   "changes": [
    "capacity",
    "dmgMin",
    "dmgMax",
    "range",
    "noise",
    "hitChance",
    "aimTime",
    "recoil",
    "weight"
   ],
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
    "sourceCount": 32,
    "by": "juego"
   },
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
     "line": 597,
     "by": "juego"
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
     "line": 628,
     "by": "juego"
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
     "line": 641,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "C",
   "reason": "Ligero (1) y silencioso (70). Pega: alcance 12 y precisión 30, la más baja.",
   "short": "S&W M36"
  },
  {
   "id": "SKS",
   "origin": "nueva",
   "name": "SKS",
   "nameReal": "SKS",
   "nameVanilla": null,
   "category": "rifle",
   "stats": {
    "ammo": "7.62x39mm Round",
    "ammoEn": "7.62x39mm Round",
    "ammoId": "firearms:bullets_762x39",
    "capacity": 10,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.75,
    "dmgMax": 2.75,
    "range": 25,
    "fireMode": "Manual",
    "auto": false,
    "noise": 110,
    "hitChance": 45,
    "crit": 30,
    "weight": 4,
    "reload": "Cerrojo, carga interna",
    "reloadId": "boltactionnomag",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 8,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_SKS.png",
   "iconName": "Item_SKS",
   "iconFrom": "Firearms/common/media/textures/Item_SKS.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 475,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "762x39Bullets",
     "name": "7.62x39mm Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 210
    },
    {
     "role": "Caja",
     "id": "762x39Box",
     "name": "Box of 7.62x39mm Rounds",
     "icon": "icons/firearms/Item_762x39BulletsBox.png",
     "iconName": "Item_762x39BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 496,
     "contains": {
      "n": 20,
      "of": "7.62x39mm Round",
      "ofId": "762x39Bullets",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:30"
     }
    },
    {
     "role": "Cartón",
     "id": "762x39BulletsCarton",
     "name": "Carton of 7.62x39mm Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 224,
     "contains": {
      "n": 12,
      "of": "Box of 7.62x39mm Rounds",
      "ofId": "762x39Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "ammoBoxField": "762x39Box",
   "rarity": {
    "level": "Muy rara",
    "score": 5.0,
    "stashScore": 16.0,
    "militaryScore": 0,
    "military": "Sin fuentes militares.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 5.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons_Mid",
      "w": 6.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 4.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     }
    ],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 1,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 5.0
    }
   ],
   "zombies": [
    {
     "def": "gunOnBackMisc",
     "chance": 30.0,
     "outfits": [
      "PlonkiesGuy"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackBagSurvivalist",
     "chance": 30.0,
     "outfits": [
      "Survivalist",
      "Survivalist02",
      "Survivalist03",
      "Survivalist04"
     ],
     "more": 1,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 124,
     "by": "mod",
     "file": "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": "SpawnSKS",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "El daño mínimo más alto de todas las armas (1,75) con 10 balas. Pega: muy rara y su 7,62×39 escasea.",
   "short": "SKS"
  },
  {
   "id": "SPAS12",
   "origin": "nueva",
   "name": "Franchi SPAS-12",
   "nameReal": "Franchi SPAS-12",
   "nameVanilla": null,
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 8,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_SPAS-12.png",
   "iconName": "Item_SPAS-12",
   "iconFrom": "Firearms/common/media/textures/Item_SPAS-12.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 1415,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "rarity": {
    "level": "Rara",
    "score": 22.5,
    "stashScore": 38.9,
    "militaryScore": 1.1,
    "military": "No es exclusiva militar.",
    "sources": [
     {
      "name": "GunStoreGuns",
      "w": 10.5,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "PoliceStorageGuns",
      "w": 7.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "PrisonGuardLockers",
      "w": 3.0,
      "kind": "Policía / guardas / prisión",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 198
     },
     {
      "name": "GunStoreShotguns",
      "w": 1.0,
      "kind": "Tienda",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "BarCounterWeapon",
      "w": 0.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "GarageFirearms",
      "w": 0.5,
      "kind": "Casa o local",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     }
    ],
    "stash": [
     {
      "name": "FirearmWeapons_Mid",
      "w": 13.0,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "FirearmWeapons",
      "w": 12.9,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "DrugShackWeapons",
      "w": 8.9,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 127
     },
     {
      "name": "SurvivorBag_Late",
      "w": 1.2,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Late",
      "w": 1.2,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "FirearmWeapons_Late",
      "w": 0.7,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "DrugLabGuns",
      "w": 0.5,
      "kind": "Alijo o escondite",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 168
     },
     {
      "name": "SurvivorBag",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "SurvivorBag_Mid",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Early",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     },
     {
      "name": "BanditBag_Mid",
      "w": 0.1,
      "kind": "Mochila de superviviente o bandido",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 246
     }
    ],
    "militarySources": [
     {
      "name": "ALICEpack_Army",
      "w": 1.1,
      "kind": "Mochila militar",
      "file": "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
      "line": 304
     }
    ],
    "guaranteed": [],
    "sourceCount": 6,
    "by": "mod"
   },
   "mapRooms": [
    {
     "room": "pawnshopoffice",
     "label": "Oficina de casa de empeños",
     "count": 1,
     "w": 10.5
    },
    {
     "room": "security",
     "label": "Puesto de seguridad",
     "count": 121,
     "w": 7.0
    },
    {
     "room": "policestorage",
     "label": "Almacén de comisaría",
     "count": 2,
     "w": 7.0
    },
    {
     "room": "captainoffice",
     "label": "Despacho del capitán",
     "count": 2,
     "w": 7.0
    },
    {
     "room": "outdoorsupply",
     "label": "Tienda de exterior",
     "count": 1,
     "w": 1.0
    },
    {
     "room": "gunstore",
     "label": "Armería",
     "count": 30,
     "w": 1.0
    },
    {
     "room": "armysurplus",
     "label": "Excedentes militares",
     "count": 9,
     "w": 1.0
    },
    {
     "room": "bar",
     "label": "Bar",
     "count": 149,
     "w": 0.5
    }
   ],
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": "SpawnSPAS12",
   "sandboxDefault": true,
   "tier": "A",
   "reason": "8 cartuchos, de lo más alto entre escopetas. Pega: rara y ruido 200.",
   "short": "SPAS-12"
  },
  {
   "id": "Shotgun",
   "origin": "cambiada",
   "name": "Escopeta JS-2000",
   "nameReal": "Mossberg 500",
   "nameVanilla": "Escopeta JS-2000",
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 4,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Mossberg_Wood.png",
   "iconName": "Item_Mossberg_Wood",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Wood.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 358,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "vanilla": {
    "ammoId": "base:shotgun_shells",
    "capacity": 5,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 12,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "aimTime": 40,
    "recoil": 30,
    "jam": 2,
    "pierce": false,
    "maxHit": 9,
    "weight": 4,
    "fireMode": "Manual",
    "ammo": "Cartuchos de escopeta"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11494,
   "changes": [
    "capacity",
    "range",
    "jam"
   ],
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
    "sourceCount": 40,
    "by": "juego"
   },
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
     "line": 774,
     "by": "juego"
    },
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1245,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "La escopeta más común, 6 cartuchos y alcance 15 (el mod lo sube desde 12). Pega: radio de ruido 200, como todas.",
   "short": "Mossberg 500"
  },
  {
   "id": "ShotgunSawnoff",
   "origin": "cambiada",
   "name": "Escopeta recortada JS-2000",
   "nameReal": "Sawed-off Mossberg 500",
   "nameVanilla": "Escopeta recortada JS-2000",
   "category": "escopeta",
   "stats": {
    "ammo": "Cartuchos de escopeta",
    "ammoEn": "12ga Shotgun Shell",
    "ammoId": "base:shotgun_shells",
    "capacity": 6,
    "magazine": null,
    "magazineId": null,
    "dmgMin": 1.5,
    "dmgMax": 2.2,
    "range": 15,
    "fireMode": "Manual",
    "auto": false,
    "noise": 200,
    "hitChance": 65,
    "crit": 70,
    "weight": 3.5,
    "reload": "Tubo, cartucho a cartucho",
    "reloadId": "shotgun",
    "aimTime": 40,
    "recoil": 30,
    "jam": 0,
    "pierce": false,
    "maxHit": 9,
    "pellets": 9,
    "stopPower": 40,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_Mossberg_Wood_Sawed.png",
   "iconName": "Item_Mossberg_Wood_Sawed",
   "iconFrom": "Firearms/common/media/textures/Item_Mossberg_Wood_Sawed.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Shotguns.txt",
   "line": 476,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "ammoBoxField": "ShotgunShellsBox",
   "vanilla": {
    "ammoId": "base:shotgun_shells",
    "capacity": 5,
    "dmgMin": 1.3,
    "dmgMax": 2,
    "range": 10,
    "noise": 200,
    "hitChance": 70,
    "crit": 50,
    "aimTime": 35,
    "recoil": 30,
    "jam": 2,
    "pierce": false,
    "maxHit": 9,
    "weight": 3,
    "fireMode": "Manual",
    "ammo": "Cartuchos de escopeta"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11579,
   "changes": [
    "capacity",
    "dmgMin",
    "dmgMax",
    "range",
    "hitChance",
    "crit",
    "aimTime",
    "jam",
    "weight"
   ],
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
    "sourceCount": 3,
    "by": "juego"
   },
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
     "line": 863,
     "by": "juego"
    },
    {
     "def": "gunOnBackCrime",
     "chance": 30.0,
     "outfits": [
      "BankRobber",
      "BankRobberSuit"
     ],
     "more": 0,
     "line": 916,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Late",
     "chance": 50.0,
     "outfits": [
      "ArmorTest_Gladiator",
      "Bandit_Late"
     ],
     "more": 0,
     "line": 1140,
     "by": "juego"
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
     "line": 1245,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
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
     "line": 1457,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "tier": "A",
   "reason": "En el mod tiene las mismas cifras que la entera, pesa menos (3,5) y va en la funda. Pega: rara como botín; puedes fabricarla recortando la entera.",
   "short": "Mossberg 500 recortada"
  },
  {
   "id": "TrapperCarbine",
   "origin": "vanilla",
   "name": "Carabina de trampero",
   "nameReal": "TrapperCarbine",
   "nameVanilla": "Carabina de trampero",
   "category": "carabina",
   "stats": {
    "ammo": "Cartuchos .45 Auto",
    "ammoEn": ".45 ACP Round",
    "ammoId": "base:bullets_45",
    "capacity": 7,
    "magazine": "Cargador M1911",
    "magazineId": "Base.45Clip",
    "dmgMin": 1,
    "dmgMax": 1.4,
    "range": 20,
    "fireMode": "Manual",
    "auto": false,
    "noise": 70,
    "hitChance": 50,
    "crit": 22,
    "weight": 3.2,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 35,
    "recoil": 12,
    "jam": 2,
    "pierce": false,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 8,
    "conditionMax": 10,
    "conditionOneIn": 180,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/Item_Firearm_TrapperCarbine.png",
   "iconName": "Item_Firearm_TrapperCarbine",
   "iconFrom": "panel vanilla (UI.pack / UI2.pack)",
   "file": "media/scripts/generated/items/weapon.txt",
   "line": 19657,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 50
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/firearms/Item_Bullets45Box.png",
     "iconName": "Item_Bullets45Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 336,
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
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 36,
     "capacity": 7
    }
   ],
   "ammoBoxField": "Bullets45Box",
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
    "sourceCount": 18,
    "by": "juego"
   },
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
   "zombies": [],
   "obtain": [
    "botin"
   ],
   "sandbox": null,
   "tier": "B",
   "reason": "El mod no la toca: sigue siendo de las armas largas más silenciosas (radio 70). Pega: daño 1–1,4, muy por debajo de las del mod.",
   "short": "De trampero"
  },
  {
   "id": "UZI",
   "origin": "nueva",
   "name": "UZI Carbine",
   "nameReal": "UZI Carbine",
   "nameVanilla": null,
   "category": "subfusil",
   "stats": {
    "ammo": "Cartuchos 9mm",
    "ammoEn": "9x19mm Parabellum Round",
    "ammoId": "base:bullets_9mm",
    "capacity": 20,
    "magazine": "UZI Carbine Magazine",
    "magazineId": "Base.UZIMag",
    "dmgMin": 0.65,
    "dmgMax": 2,
    "range": 16,
    "fireMode": "Automático o manual",
    "auto": true,
    "noise": 100,
    "hitChance": 35,
    "crit": 20,
    "weight": 3.5,
    "reload": "Cargador extraíble",
    "reloadId": "handgun",
    "aimTime": 25,
    "recoil": 25,
    "jam": 2,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 3,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": false,
    "holster": "Holster"
   },
   "icon": "icons/firearms/Item_UZI.png",
   "iconName": "Item_UZI",
   "iconFrom": "Firearms/common/media/textures/Item_UZI.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_SMGs.txt",
   "line": 359,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 5
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/firearms/Item_Bullets9mmBox.png",
     "iconName": "Item_Bullets9mmBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 304,
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
     "id": "UZIMag",
     "name": "UZI Carbine Magazine",
     "icon": "icons/firearms/Item_UZIMag.png",
     "iconName": "Item_UZIMag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 126,
     "capacity": 20
    }
   ],
   "ammoBoxField": "Bullets9mmBox",
   "rarity": {
    "level": "Inalcanzable",
    "score": 0,
    "stashScore": 0,
    "militaryScore": 0,
    "military": "Ni botín, ni zombis, ni receta: con el mod tal cual no se puede conseguir (solo con trucos o modo depuración).",
    "sources": [],
    "stash": [],
    "militarySources": [],
    "guaranteed": [],
    "sourceCount": 0,
    "by": "mod"
   },
   "mapRooms": [],
   "zombies": [],
   "obtain": [],
   "sandbox": "SpawnUZI",
   "sandboxDefault": true,
   "tier": null,
   "reason": "Subfusil de 20 balas de 9 mm. No sale como botín y el mod la da a los zombis con el nombre mal escrito (Base.Uzi): no se consigue.",
   "short": "UZI"
  },
  {
   "id": "VarmintRifle",
   "origin": "cambiada",
   "name": "Rifle MSR700",
   "nameReal": "Remington Model 700",
   "nameVanilla": "Rifle MSR700",
   "category": "rifle",
   "stats": {
    "ammo": "Cartuchos 5.56mm",
    "ammoEn": "5.56x45mm Round",
    "ammoId": "base:bullets_556",
    "capacity": 10,
    "magazine": "Cargador MSR700",
    "magazineId": "Base.223Clip",
    "dmgMin": 1,
    "dmgMax": 2.75,
    "range": 30,
    "fireMode": "Manual",
    "auto": false,
    "noise": 100,
    "hitChance": 55,
    "crit": 30,
    "weight": 4,
    "reload": "Cargador extraíble",
    "reloadId": "boltaction",
    "aimTime": 40,
    "recoil": 40,
    "jam": 5,
    "pierce": true,
    "maxHit": 1,
    "pellets": 1,
    "stopPower": 15,
    "conditionMax": 10,
    "conditionOneIn": 200,
    "twoHands": true,
    "holster": "Rifle"
   },
   "icon": "icons/firearms/Item_Model700.png",
   "iconName": "Item_Model700",
   "iconFrom": "Firearms/common/media/textures/Item_Model700.png",
   "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
   "line": 6,
   "ammoItems": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 196
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/firearms/Item_556BulletsBox.png",
     "iconName": "Item_556BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 464,
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
     "id": "223Clip",
     "name": "Cargador MSR700",
     "icon": "icons/firearms/Item_308_Mag.png",
     "iconName": "Item_308_Mag",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Magazines.txt",
     "line": 156,
     "capacity": 10
    }
   ],
   "ammoBoxField": "223Box",
   "vanilla": {
    "ammoId": "base:bullets_556",
    "capacity": 5,
    "dmgMin": 1,
    "dmgMax": 1.6,
    "range": 30,
    "noise": 150,
    "hitChance": 50,
    "crit": 20,
    "aimTime": 50,
    "recoil": 17,
    "jam": 1,
    "pierce": true,
    "maxHit": 1,
    "weight": 4,
    "fireMode": "Manual",
    "ammo": "Cartuchos 5.56mm"
   },
   "vanillaFile": "media/scripts/generated/items/weapon.txt",
   "vanillaLine": 11663,
   "changes": [
    "capacity",
    "dmgMax",
    "noise",
    "hitChance",
    "crit",
    "aimTime",
    "recoil",
    "jam"
   ],
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
    "sourceCount": 24,
    "by": "juego"
   },
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
   "zombies": [
    {
     "def": "gunOnBackHunter",
     "chance": 30.0,
     "outfits": [
      "Hunter"
     ],
     "more": 0,
     "line": 845,
     "by": "juego"
    },
    {
     "def": "huntingRifleOnBack",
     "chance": 30.0,
     "outfits": [
      "PrivateMilitia"
     ],
     "more": 0,
     "line": 885,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Bandit",
     "chance": 50.0,
     "outfits": [
      "Bandit"
     ],
     "more": 0,
     "line": 995,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Early",
     "chance": 50.0,
     "outfits": [
      "Bandit_Early"
     ],
     "more": 0,
     "line": 1025,
     "by": "juego"
    },
    {
     "def": "meleeInBack_Mid",
     "chance": 50.0,
     "outfits": [
      "Bandit_Mid"
     ],
     "more": 0,
     "line": 1071,
     "by": "juego"
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
     "line": 1245,
     "by": "juego"
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
     "line": 1389,
     "by": "juego"
    }
   ],
   "obtain": [
    "botin",
    "zombis"
   ],
   "sandbox": null,
   "ammoBoxMismatch": {
    "box": "223Box",
    "boxName": "223Box",
    "holds": null
   },
   "tier": "A",
   "reason": "Común, 10 balas de 5,56 y alcance 30. Con el mod pasa de ser el peor rifle a uno muy útil. Pega: daño 1–2,75, algo menos que los de .308.",
   "short": "Remington 700"
  }
 ],
 "ammo": [
  {
   "id": "base:bullets_308",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "308Bullets",
   "name": "Cartuchos .308",
   "nameReal": "7.62x51mm Round",
   "items": [
    {
     "role": "Suelta",
     "id": "308Bullets",
     "name": "Cartuchos .308",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 182
    },
    {
     "role": "Caja",
     "id": "308Box",
     "name": "Caja de cartuchos .308",
     "icon": "icons/firearms/Item_308BulletsBox.png",
     "iconName": "Item_308BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 448,
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
   "weapons": [
    "AssaultRifle2",
    "FN_FAL",
    "G3",
    "HuntingRifle",
    "HuntingRifle_Sawn",
    "M60",
    "MSR7T_Rifle"
   ],
   "mags": [
    "FN_FAL_Mag",
    "G3_Mag",
    "M14Clip",
    "M60Mag"
   ],
   "magItems": [
    {
     "id": "FN_FAL_Mag",
     "name": "FN FAL Magazine",
     "capacity": 20,
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "weapons": [
      "FN_FAL"
     ]
    },
    {
     "id": "G3_Mag",
     "name": "H&K G3 Magazine",
     "capacity": 20,
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "weapons": [
      "G3"
     ]
    },
    {
     "id": "M14Clip",
     "name": "Cargador M14",
     "capacity": 20,
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "weapons": [
      "AssaultRifle2"
     ]
    },
    {
     "id": "M60Mag",
     "name": "M60 Magazine",
     "capacity": 100,
     "icon": "icons/firearms/Item_M60Mag.png",
     "iconName": "Item_M60Mag",
     "weapons": [
      "M60"
     ]
    }
   ],
   "modLoot": []
  },
  {
   "id": "base:bullets_357",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "Bullets357",
   "name": "Cartucho .357 Magnum",
   "nameReal": ".357 Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets357",
     "name": "Cartucho .357 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 123
    },
    {
     "role": "Caja",
     "id": "Bullets357Box",
     "name": "Caja de cartuchos .357 Magnum",
     "icon": "icons/firearms/Item_Bullets357Box.png",
     "iconName": "Item_Bullets357Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 400,
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
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 137,
     "contains": {
      "n": 12,
      "of": "Caja de cartuchos .357 Magnum",
      "src": "media/scripts/generated/recipes/recipes_packing.txt:244"
     }
    }
   ],
   "weapons": [
    "ColtPython",
    "ColtPythonHunter"
   ],
   "mags": [],
   "magItems": [],
   "modLoot": []
  },
  {
   "id": "base:bullets_38",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "Bullets38",
   "name": "Cartuchos .38 Special",
   "nameReal": ".38 Special Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets38",
     "name": "Cartuchos .38 Special",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 109
    },
    {
     "role": "Caja",
     "id": "Bullets38Box",
     "name": "Caja de cartuchos .38 Special",
     "icon": "icons/firearms/Item_Bullets38Box.png",
     "iconName": "Item_Bullets38Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 384,
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
   "weapons": [
    "Revolver_Short"
   ],
   "mags": [],
   "magItems": [],
   "modLoot": []
  },
  {
   "id": "base:bullets_44",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "Bullets44",
   "name": "Cartuchos .44 Magnum",
   "nameReal": ".44 Magnum Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets44",
     "name": "Cartuchos .44 Magnum",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 64
    },
    {
     "role": "Caja",
     "id": "Bullets44Box",
     "name": "Caja de cartuchos .44 Magnum",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 352,
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
   "weapons": [
    "ColtAnaconda",
    "L92_Carbine",
    "L92_Carbine_Sawn",
    "Pistol3",
    "Revolver_Long"
   ],
   "mags": [
    "44Clip"
   ],
   "magItems": [
    {
     "id": "44Clip",
     "name": "Cargador D-E",
     "capacity": 8,
     "icon": "icons/firearms/Item_44_Mag.png",
     "iconName": "Item_44_Mag",
     "weapons": [
      "Pistol3"
     ]
    }
   ],
   "modLoot": []
  },
  {
   "id": "base:bullets_45",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "Bullets45",
   "name": "Cartuchos .45 Auto",
   "nameReal": ".45 ACP Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets45",
     "name": "Cartuchos .45 Auto",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 50
    },
    {
     "role": "Caja",
     "id": "Bullets45Box",
     "name": "Caja de cartuchos .45 Auto",
     "icon": "icons/firearms/Item_Bullets45Box.png",
     "iconName": "Item_Bullets45Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 336,
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
    }
   ],
   "weapons": [
    "Mac10",
    "Pistol2",
    "Revolver",
    "TrapperCarbine"
   ],
   "mags": [
    "45Clip",
    "MAC10Mag"
   ],
   "magItems": [
    {
     "id": "45Clip",
     "name": "Cargador M1911",
     "capacity": 7,
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "weapons": [
      "Pistol2",
      "TrapperCarbine"
     ]
    },
    {
     "id": "MAC10Mag",
     "name": "MAC 10 Magazine",
     "capacity": 30,
     "icon": "icons/firearms/Item_UZIMag.png",
     "iconName": "Item_UZIMag",
     "weapons": [
      "Mac10"
     ]
    }
   ],
   "modLoot": []
  },
  {
   "id": "base:bullets_556",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "556Bullets",
   "name": "Cartuchos 5.56mm",
   "nameReal": "5.56x45mm Round",
   "items": [
    {
     "role": "Suelta",
     "id": "556Bullets",
     "name": "Cartuchos 5.56mm",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 196
    },
    {
     "role": "Caja",
     "id": "556Box",
     "name": "Caja de cartuchos 5.56mm",
     "icon": "icons/firearms/Item_556BulletsBox.png",
     "iconName": "Item_556BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 464,
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
   "weapons": [
    "AssaultRifle",
    "JS14_Rifle",
    "M4",
    "VarmintRifle"
   ],
   "mags": [
    "223Clip",
    "556Clip",
    "JS14_Clip"
   ],
   "magItems": [
    {
     "id": "223Clip",
     "name": "Cargador MSR700",
     "capacity": 10,
     "icon": "icons/firearms/Item_308_Mag.png",
     "iconName": "Item_308_Mag",
     "weapons": [
      "VarmintRifle"
     ]
    },
    {
     "id": "556Clip",
     "name": "Cargador M16",
     "capacity": 30,
     "icon": "icons/firearms/Item_556_Stanag_Mag.png",
     "iconName": "Item_556_Stanag_Mag",
     "weapons": [
      "AssaultRifle",
      "M4"
     ]
    },
    {
     "id": "JS14_Clip",
     "name": "Cargador JS-14",
     "capacity": 20,
     "icon": "icons/firearms/Item_308_Mag2.png",
     "iconName": "Item_308_Mag2",
     "weapons": [
      "JS14_Rifle"
     ]
    }
   ],
   "modLoot": []
  },
  {
   "id": "base:bullets_9mm",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "Bullets9mm",
   "name": "Cartuchos 9mm",
   "nameReal": "9x19mm Parabellum Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets9mm",
     "name": "Cartuchos 9mm",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 5
    },
    {
     "role": "Caja",
     "id": "Bullets9mmBox",
     "name": "Caja de cartuchos 9mm",
     "icon": "icons/firearms/Item_Bullets9mmBox.png",
     "iconName": "Item_Bullets9mmBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 304,
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
    }
   ],
   "weapons": [
    "Glock17",
    "MP5",
    "MP5SD",
    "Pistol",
    "UZI"
   ],
   "mags": [
    "9mmClip",
    "Glock17Mag",
    "MP5Mag",
    "UZIMag"
   ],
   "magItems": [
    {
     "id": "9mmClip",
     "name": "Cargador M9",
     "capacity": 15,
     "icon": "icons/firearms/Item_9mm_Mag.png",
     "iconName": "Item_9mm_Mag",
     "weapons": [
      "Pistol"
     ]
    },
    {
     "id": "Glock17Mag",
     "name": "Glock 17 Magazine",
     "capacity": 17,
     "icon": "icons/firearms/Item_Glock_Mag.png",
     "iconName": "Item_Glock_Mag",
     "weapons": [
      "Glock17"
     ]
    },
    {
     "id": "MP5Mag",
     "name": "MP5 Magazine",
     "capacity": 30,
     "icon": "icons/firearms/Item_Mp5_Mag.png",
     "iconName": "Item_Mp5_Mag",
     "weapons": [
      "MP5",
      "MP5SD"
     ]
    },
    {
     "id": "UZIMag",
     "name": "UZI Carbine Magazine",
     "capacity": 20,
     "icon": "icons/firearms/Item_UZIMag.png",
     "iconName": "Item_UZIMag",
     "weapons": [
      "UZI"
     ]
    }
   ],
   "modLoot": []
  },
  {
   "id": "base:shotgun_shells",
   "origin": "juego",
   "registry": "projectzomboid.jar (zombie/scripting/objects/AmmoType)",
   "loose": "ShotgunShells",
   "name": "Cartuchos de escopeta",
   "nameReal": "12ga Shotgun Shell",
   "items": [
    {
     "role": "Suelta",
     "id": "ShotgunShells",
     "name": "Cartuchos de escopeta",
     "icon": "icons/ammo/Item_ShotgunAmmo.png",
     "iconName": "Item_ShotgunAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 154
    },
    {
     "role": "Caja",
     "id": "ShotgunShellsBox",
     "name": "Caja de cartuchos de escopeta",
     "icon": "icons/firearms/Item_ShotgunShellsBox.png",
     "iconName": "Item_ShotgunShellsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 416,
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
   "weapons": [
    "DoubleBarrelShotgun",
    "DoubleBarrelShotgunSawnoff",
    "DoubleBarrelShotgunSawnoffStock",
    "JS3T_Shotgun",
    "JS3T_Shotgun_Sawnoff",
    "LAW12",
    "Mossberg500",
    "Mossberg500Tactical",
    "Remington870",
    "Remington870Sawnoff",
    "Remington870Wood",
    "SPAS12",
    "Shotgun",
    "ShotgunSawnoff"
   ],
   "mags": [],
   "magItems": [],
   "modLoot": []
  },
  {
   "id": "firearms:bullets_10mm",
   "origin": "mod",
   "registry": "Firearms/42.16/media/registries.lua:2",
   "loose": "Bullets10mm",
   "name": "10mm Auto Round",
   "nameReal": "10mm Auto Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets10mm",
     "name": "10mm Auto Round",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 19
    },
    {
     "role": "Caja",
     "id": "Bullets10mmBox",
     "name": "Box of 10mm Auto Rounds",
     "icon": "icons/firearms/Item_Bullets38Box.png",
     "iconName": "Item_Bullets38Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 320,
     "contains": {
      "n": 50,
      "of": "10mm Auto Round",
      "ofId": "Bullets10mm",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets10mmCarton",
     "name": "Carton of 10mm Auto Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 33,
     "contains": {
      "n": 12,
      "of": "Box of 10mm Auto Rounds",
      "ofId": "Bullets10mmBox",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "weapons": [
    "ColtDelta",
    "MP510"
   ],
   "mags": [
    "DeltaClip",
    "MP510Mag"
   ],
   "magItems": [
    {
     "id": "DeltaClip",
     "name": "Colt Delta Elite Magazine",
     "capacity": 8,
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "weapons": [
      "ColtDelta"
     ]
    },
    {
     "id": "MP510Mag",
     "name": "MP5/10 Magazine",
     "capacity": 30,
     "icon": "icons/firearms/Item_Mp5_Mag.png",
     "iconName": "Item_Mp5_Mag",
     "weapons": [
      "MP510"
     ]
    }
   ],
   "modLoot": [
    {
     "item": "Bullets10mmBox",
     "name": "Box of 10mm Auto Rounds",
     "top": [
      [
       "ArmyStorageAmmunition",
       4.0
      ],
      [
       "PoliceStorageAmmunition",
       3.5
      ],
      [
       "ArmyStorageGuns",
       2.5
      ],
      [
       "FirearmWeapons",
       2.5
      ],
      [
       "FirearmWeapons_Mid",
       2.5
      ],
      [
       "ArmySurplusAmmoBoxes",
       2.5
      ]
     ]
    },
    {
     "item": "Bullets10mmCarton",
     "name": "Carton of 10mm Auto Rounds",
     "top": [
      [
       "FirearmWeapons_Mid",
       8.0
      ],
      [
       "HuntingLockers",
       0.5
      ],
      [
       "GunStoreAmmunition",
       0.4
      ]
     ]
    }
   ]
  },
  {
   "id": "firearms:bullets_22",
   "origin": "mod",
   "registry": "Firearms/42.16/media/registries.lua:1",
   "loose": "Bullets22",
   "name": ".22 LR Round",
   "nameReal": ".22 LR Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets22",
     "name": ".22 LR Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "RifleAmmo223loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 241
    },
    {
     "role": "Caja",
     "id": "Bullets22Box",
     "name": "Box of .22 LR Rounds",
     "icon": "icons/firearms/Item_Bullets22Box.png",
     "iconName": "Item_Bullets22Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 512,
     "contains": {
      "n": 50,
      "of": ".22 LR Round",
      "ofId": "Bullets22",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets22Carton",
     "name": "Carton of .22 LR Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 255,
     "contains": {
      "n": 12,
      "of": "Box of .22 LR Rounds",
      "ofId": "Bullets22Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "weapons": [
    "ColtAce",
    "ColtSingleAction22",
    "L94_Rifle"
   ],
   "mags": [
    "22Clip"
   ],
   "magItems": [
    {
     "id": "22Clip",
     "name": "Colt Ace Magazine",
     "capacity": 10,
     "icon": "icons/firearms/Item_45_Mag.png",
     "iconName": "Item_45_Mag",
     "weapons": [
      "ColtAce"
     ]
    }
   ],
   "modLoot": [
    {
     "item": "Bullets22Box",
     "name": "Box of .22 LR Rounds",
     "top": [
      [
       "ArmyStorageAmmunition",
       16.0
      ],
      [
       "PoliceStorageAmmunition",
       14.0
      ],
      [
       "ArmyStorageGuns",
       10.0
      ],
      [
       "FirearmWeapons",
       10.0
      ],
      [
       "FirearmWeapons_Mid",
       10.0
      ],
      [
       "ArmySurplusAmmoBoxes",
       10.0
      ]
     ]
    },
    {
     "item": "Bullets22Carton",
     "name": "Carton of .22 LR Rounds",
     "top": [
      [
       "FirearmWeapons_Mid",
       8.0
      ],
      [
       "HuntingLockers",
       0.5
      ],
      [
       "GunStoreAmmunition",
       0.4
      ]
     ]
    }
   ]
  },
  {
   "id": "firearms:bullets_30_06",
   "origin": "mod",
   "registry": "Firearms/42.16/media/registries.lua:4",
   "loose": "Bullets3006",
   "name": ".30-06 Round",
   "nameReal": ".30-06 Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets3006",
     "name": ".30-06 Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 272
    },
    {
     "role": "Caja",
     "id": "Bullets3006Box",
     "name": "Box of .30-06 Rounds",
     "icon": "icons/firearms/Item_Bullets3006Box.png",
     "iconName": "Item_Bullets3006Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 528,
     "contains": {
      "n": 20,
      "of": ".30-06 Round",
      "ofId": "Bullets3006",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:30"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets3006Carton",
     "name": "Carton of .30-06 Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 286,
     "contains": {
      "n": 12,
      "of": "Box of .30-06 Rounds",
      "ofId": "Bullets3006Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "weapons": [
    "M1Garand"
   ],
   "mags": [
    "M1GarandClip"
   ],
   "magItems": [
    {
     "id": "M1GarandClip",
     "name": "M1 Garand Clip",
     "capacity": 8,
     "icon": "icons/firearms/Item_M1Clip.png",
     "iconName": "Item_M1Clip",
     "weapons": [
      "M1Garand"
     ]
    }
   ],
   "modLoot": [
    {
     "item": "Bullets3006Box",
     "name": "Box of .30-06 Rounds",
     "top": [
      [
       "ArmyStorageAmmunition",
       4.0
      ],
      [
       "PoliceStorageAmmunition",
       3.5
      ],
      [
       "ArmyStorageGuns",
       2.5
      ],
      [
       "FirearmWeapons",
       2.5
      ],
      [
       "FirearmWeapons_Mid",
       2.5
      ],
      [
       "ArmySurplusAmmoBoxes",
       2.5
      ]
     ]
    },
    {
     "item": "Bullets3006Carton",
     "name": "Carton of .30-06 Rounds",
     "top": [
      [
       "FirearmWeapons_Mid",
       8.0
      ],
      [
       "HuntingLockers",
       0.5
      ],
      [
       "GunStoreAmmunition",
       0.4
      ]
     ]
    }
   ]
  },
  {
   "id": "firearms:bullets_44_40",
   "origin": "mod",
   "registry": "Firearms/42.16/media/registries.lua:5",
   "loose": "Bullets4440",
   "name": ".44-40 WCF Round",
   "nameReal": ".44-40 WCF Round",
   "items": [
    {
     "role": "Suelta",
     "id": "Bullets4440",
     "name": ".44-40 WCF Round",
     "icon": "icons/ammo/Item_PistolAmmo.png",
     "iconName": "Item_PistolAmmo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 78
    },
    {
     "role": "Caja",
     "id": "Bullets4440Box",
     "name": "Box of .44-40 WCF Rounds",
     "icon": "icons/firearms/Item_Bullets44Box.png",
     "iconName": "Item_Bullets44Box",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 368,
     "contains": {
      "n": 50,
      "of": ".44-40 WCF Round",
      "ofId": "Bullets4440",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:6"
     }
    },
    {
     "role": "Cartón",
     "id": "Bullets4440Carton",
     "name": "Carton of .44-40 WCF Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 92,
     "contains": {
      "n": 12,
      "of": "Box of .44-40 WCF Rounds",
      "ofId": "Bullets4440Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "weapons": [
    "ColtPeacemaker"
   ],
   "mags": [],
   "magItems": [],
   "modLoot": [
    {
     "item": "Bullets4440Box",
     "name": "Box of .44-40 WCF Rounds",
     "top": [
      [
       "ArmyStorageAmmunition",
       6.0
      ],
      [
       "PoliceStorageAmmunition",
       5.25
      ],
      [
       "ArmyStorageGuns",
       3.75
      ],
      [
       "FirearmWeapons",
       3.75
      ],
      [
       "FirearmWeapons_Mid",
       3.75
      ],
      [
       "ArmySurplusAmmoBoxes",
       3.75
      ]
     ]
    },
    {
     "item": "Bullets4440Carton",
     "name": "Carton of .44-40 WCF Rounds",
     "top": [
      [
       "FirearmWeapons_Mid",
       8.0
      ],
      [
       "HuntingLockers",
       0.5
      ],
      [
       "GunStoreAmmunition",
       0.4
      ]
     ]
    }
   ]
  },
  {
   "id": "firearms:bullets_762x39",
   "origin": "mod",
   "registry": "Firearms/42.16/media/registries.lua:3",
   "loose": "762x39Bullets",
   "name": "7.62x39mm Round",
   "nameReal": "7.62x39mm Round",
   "items": [
    {
     "role": "Suelta",
     "id": "762x39Bullets",
     "name": "7.62x39mm Round",
     "icon": "icons/ammo/Item_RifleAmmo308loose.png",
     "iconName": "Item_RifleAmmo308loose",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 210
    },
    {
     "role": "Caja",
     "id": "762x39Box",
     "name": "Box of 7.62x39mm Rounds",
     "icon": "icons/firearms/Item_762x39BulletsBox.png",
     "iconName": "Item_762x39BulletsBox",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 496,
     "contains": {
      "n": 20,
      "of": "7.62x39mm Round",
      "ofId": "762x39Bullets",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:30"
     }
    },
    {
     "role": "Cartón",
     "id": "762x39BulletsCarton",
     "name": "Carton of 7.62x39mm Rounds",
     "icon": "icons/ammo/Item_Parcel_Medium_Ammo.png",
     "iconName": "Item_Parcel_Medium_Ammo",
     "file": "Firearms/42.16/media/scripts/Items/Firearms_Items_Ammo.txt",
     "line": 224,
     "contains": {
      "n": 12,
      "of": "Box of 7.62x39mm Rounds",
      "ofId": "762x39Box",
      "src": "Firearms/42.16/media/scripts/Recipes/Firearms_Recipes_Ammunition.txt:77"
     }
    }
   ],
   "weapons": [
    "AKM",
    "SKS"
   ],
   "mags": [
    "AKM_Mag"
   ],
   "magItems": [
    {
     "id": "AKM_Mag",
     "name": "AKM Magazine",
     "capacity": 30,
     "icon": "icons/firearms/Item_AKM_Mag.png",
     "iconName": "Item_AKM_Mag",
     "weapons": [
      "AKM"
     ]
    }
   ],
   "modLoot": [
    {
     "item": "762x39Box",
     "name": "Box of 7.62x39mm Rounds",
     "top": [
      [
       "FirearmWeapons",
       11.0
      ],
      [
       "FirearmWeapons_Mid",
       11.0
      ],
      [
       "GunStoreGuns",
       8.75
      ],
      [
       "DrugShackWeapons",
       7.0
      ],
      [
       "ArmyStorageAmmunition",
       0.8
      ],
      [
       "PoliceStorageAmmunition",
       0.7
      ]
     ]
    }
   ]
  }
 ],
 "findings": [
  {
   "claim": "El mod añade «Base.AK47» a los zombis.",
   "verdict": "No existe",
   "detail": "Ningún script del juego ni del mod define ese objeto. El juego no lo encuentra, así que esa entrada no hace nada.",
   "where": [
    [
     "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua",
     124
    ]
   ]
  },
  {
   "claim": "El mod añade «Base.Ammostock» como botín.",
   "verdict": "Nombre mal escrito",
   "detail": "El objeto real se llama Base.AmmoStock. El juego no lo encuentra, así que esa entrada no hace nada.",
   "where": [
    [
     "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
     348
    ]
   ]
  },
  {
   "claim": "El mod añade «Base.FN_Fal» como botín.",
   "verdict": "Nombre mal escrito",
   "detail": "El objeto real se llama Base.FN_FAL. El juego no lo encuentra, así que esa entrada no hace nada: FN Fal no aparece por esa vía.",
   "where": [
    [
     "Firearms/42.16/media/lua/server/Items/Firearms_Procedural.lua",
     299
    ]
   ]
  },
  {
   "claim": "El mod añade «Base.Uzi» a los zombis.",
   "verdict": "Nombre mal escrito",
   "detail": "El objeto real se llama Base.UZI. El juego no lo encuentra, así que esa entrada no hace nada: UZI Carbine no aparece por esa vía.",
   "where": [
    [
     "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua",
     124
    ]
   ]
  },
  {
   "claim": "El mod consulta SandboxVars.Firearms.SpawnAK47.",
   "verdict": "No existe",
   "detail": "Esa opción no está en sandbox-options.txt del mod, así que vale nil y ese bloque nunca se ejecuta.",
   "where": [
    [
     "Firearms/42.16/media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua",
     124
    ]
   ]
  },
  {
   "claim": "Ruger Mini-14: su caja de munición asociada es «223Box».",
   "verdict": "No encaja",
   "detail": "El arma dispara Cartuchos 5.56mm, pero el campo AmmoBox apunta a Base.223Box, que no existe. Las cajas que sirven son las de Cartuchos 5.56mm.",
   "where": [
    [
     "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
     828
    ]
   ]
  },
  {
   "claim": "Remington Model 700: su caja de munición asociada es «223Box».",
   "verdict": "No encaja",
   "detail": "El arma dispara Cartuchos 5.56mm, pero el campo AmmoBox apunta a Base.223Box, que no existe. Las cajas que sirven son las de Cartuchos 5.56mm.",
   "where": [
    [
     "Firearms/42.16/media/scripts/Items/Firearms_Items_Rifles.txt",
     6
    ]
   ]
  }
 ]
};
