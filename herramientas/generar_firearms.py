"""Genera web/firearms-data.js: armas y munición de Project Zomboid con el mod Firearms B42.

Uso (desde la raíz del proyecto):
    python herramientas/generar_firearms.py

Lee en solo lectura el juego instalado, el mod del Steam Workshop y web/data.js (nombres en
español y rareza de las armas vanilla). Copia los iconos del mod a web/icons/firearms/.
Los campos tier, reason y short salen de herramientas/firearms_valoracion.json, que es
valoración propia y se edita a mano.
"""
import json
import re
import shutil
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from pzscript import num, parse_dir, parse_items, truthy  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / 'web'
STEAM = Path('C:/Program Files (x86)/Steam/steamapps')
GAME = STEAM / 'common/ProjectZomboid'
WORKSHOP_ID = '2256623447'
MODS = STEAM / 'workshop/content/108600' / WORKSHOP_ID / 'mods'
MOD = MODS / 'Firearms'
OUT_ICONS = WEB / 'icons/firearms'


def rel_game(p):
    return Path(p).relative_to(GAME).as_posix()


def rel_mod(p):
    return 'Firearms/' + Path(p).relative_to(MOD).as_posix()


# ---------- Versión del juego y carpeta del mod que carga ----------
def game_version():
    t = (Path.home() / 'Zomboid/version.txt').read_text(encoding='utf-8', errors='replace')
    m = re.search(r'(\d+\.\d+\.\d+)', t)
    return m.group(1) if m else '?'


def vtuple(s):
    return tuple(int(x) for x in re.findall(r'\d+', s))


def mod_info(folder):
    info = {}
    for line in (folder / 'mod.info').read_text(encoding='utf-8', errors='replace').splitlines():
        if '=' in line:
            k, v = line.split('=', 1)
            info.setdefault(k.strip(), v.strip())
    return info


def pick_version_folder(mod_dir, gv):
    # El juego carga la carpeta de versión más alta que no supere la suya, más «common»
    cands = [d for d in mod_dir.iterdir() if d.is_dir() and re.fullmatch(r'\d+(\.\d+)*', d.name)]
    ok = [d for d in cands if vtuple(d.name) <= vtuple(gv)]
    return max(ok, key=lambda d: vtuple(d.name))


GV = game_version()
VDIR = pick_version_folder(MOD, GV)
INFO = mod_info(VDIR)
VARIANTS = []
for sub in ('Firearms', 'FirearmsBETA', 'FirearmsVanilla'):
    d = pick_version_folder(MODS / sub, GV)
    i = mod_info(d)
    VARIANTS.append({'folder': f'{sub}/{d.name}', 'name': i.get('name'), 'id': i.get('id'),
                     'version': i.get('modversion'), 'incompatible': i.get('incompatible', '')})

# ---------- Scripts ----------
van = parse_dir(GAME / 'media/scripts', GAME)
mod = parse_dir(VDIR / 'media/scripts', MOD)
for _v in mod.values():
    _v['_file'] = 'Firearms/' + _v['_file']
items = {**van, **mod}  # el mod se carga después: sus definiciones sustituyen a las vanilla
is_gun = lambda v: truthy(v.get('ranged'))
van_guns = {k for k, v in van.items() if is_gun(v)}
mod_guns = {k for k, v in mod.items() if is_gun(v)}

# Datos del panel vanilla (nombres en español, rareza, zombis)
_s = (WEB / 'data.js').read_text(encoding='utf-8')
VDATA = json.loads(_s[_s.index('{'):_s.rstrip().rstrip(';').rindex('}') + 1])
VW = {w['id']: w for w in VDATA['weapons']}

es_names = json.loads((GAME / 'media/lua/shared/Translate/ES/ItemName.json').read_text(encoding='utf-8', errors='replace'))
mod_en = json.loads((VDIR / 'media/lua/shared/Translate/EN/ItemName.json').read_text(encoding='utf-8', errors='replace'))


def first(v):
    return v[-1] if isinstance(v, list) else v


def game_name(iid):
    """Nombre que verás en una partida en español: traducción vanilla si existe; si no, el inglés del mod."""
    return es_names.get('Base.' + iid) or mod_en.get('Base.' + iid) or first(items.get(iid, {}).get('displayname')) or iid


def real_name(iid):
    return mod_en.get('Base.' + iid) or first(items.get(iid, {}).get('displayname')) or iid


# ---------- Munición ----------
# Registro de tipos: los vanilla están en projectzomboid.jar (AmmoType.class); se toman del panel vanilla.
AMMO_ITEM = {}
for w in VDATA['weapons']:
    loose = next((a for a in w['ammoItems'] if a['role'] == 'Suelta'), None)
    if loose:
        AMMO_ITEM[w['stats']['ammoId']] = loose['id']
for m in re.finditer(r'AmmoType\.register\("([^"]+)",\s*"Base\.([^"]+)"\)', (VDIR / 'media/registries.lua').read_text(encoding='utf-8')):
    AMMO_ITEM[m.group(1)] = m.group(2)
REG_LINE = {m.group(1): (VDIR / 'media/registries.lua').read_text(encoding='utf-8')[:m.start()].count('\n') + 1
            for m in re.finditer(r'AmmoType\.register\("([^"]+)"', (VDIR / 'media/registries.lua').read_text(encoding='utf-8'))}


def parse_recipes(folder, relf):
    """Recetas de abrir cajas y cartones: {contenedor: (n, contenido, 'fichero:línea')}."""
    out = {}
    for f in sorted(Path(folder).rglob('*.txt')):
        text = f.read_text(encoding='utf-8', errors='replace')
        for m in re.finditer(r'craftRecipe\s+(\w+)\s*\{', text):
            start = m.end()
            depth, i = 1, start
            while depth and i < len(text):
                depth += {'{': 1, '}': -1}.get(text[i], 0)
                i += 1
            body = text[start:i]
            line = text[:m.start()].count('\n') + 1
            if 'open' not in m.group(1).lower():
                continue
            outm = re.search(r'outputs\s*\{[^}]*?item\s+(\d+)\s+mapper:(\w+)', body)
            if not outm:
                continue
            n, mapper = int(outm.group(1)), outm.group(2)
            mp = re.search(r'itemMapper\s+' + mapper + r'\s*\{([^}]*)\}', body)
            if not mp:
                continue
            for a, b in re.findall(r'Base\.([\w\.]+)\s*=\s*Base\.([\w\.]+)', mp.group(1)):
                out.setdefault(b, (n, a, f'{relf(f)}:{line}'))
    return out


REC = parse_recipes(VDIR / 'media/scripts/Recipes', rel_mod)
VAN_CONTAINS = {}
for w in VDATA['weapons']:
    for a in w['ammoItems']:
        if a.get('contains'):
            VAN_CONTAINS[a['id']] = a['contains']


def contains(box):
    if box in VAN_CONTAINS:
        return VAN_CONTAINS[box]
    if box in REC:
        n, of, src = REC[box]
        return {'n': n, 'of': game_name(of), 'ofId': of, 'src': src}
    return None


def boxes_of(loose):
    """Caja y cartón que acaban dando esta munición suelta."""
    box = next((b for b, c in {**{k: v for k, v in VAN_CONTAINS.items()}, **{k: {'ofId': v[1]} for k, v in REC.items()}}.items()
                if (c.get('ofId') == loose) or (c.get('of') and b in VAN_CONTAINS and VAN_CONTAINS[b].get('of') == game_name(loose))), None)
    carton = None
    if box:
        carton = next((b for b, c in REC.items() if c[1] == box), None)
        if not carton:
            carton = next((b for b, c in VAN_CONTAINS.items() if c.get('of') == game_name(box)), None)
    return box, carton


# ---------- Iconos ----------
OUT_ICONS.mkdir(parents=True, exist_ok=True)
MOD_TEX = MOD / 'common/media/textures'
VAN_ICON_FILES = {p.name: p for p in list((WEB / 'icons').glob('*.png')) + list((WEB / 'icons/ammo').glob('*.png'))}


def icon_for(iid):
    v = items.get(iid, {})
    names = []
    for key in ('iconsfortexture', 'icon'):
        val = first(v.get(key))
        if val and val != 'None':
            names += [x.strip() for x in val.split(';') if x.strip()]
    for n in names:
        fn = f'Item_{n}.png'
        src = MOD_TEX / fn
        if iid in mod and src.exists():
            dst = OUT_ICONS / fn
            if not dst.exists() or dst.read_bytes() != src.read_bytes():
                shutil.copyfile(src, dst)
            return {'icon': f'icons/firearms/{fn}', 'iconName': f'Item_{n}', 'iconFrom': rel_mod(src)}
        if fn in VAN_ICON_FILES:
            p = VAN_ICON_FILES[fn]
            return {'icon': p.relative_to(WEB).as_posix(), 'iconName': f'Item_{n}', 'iconFrom': 'panel vanilla (UI.pack / UI2.pack)'}
    if iid in VW:
        return {'icon': VW[iid]['icon'], 'iconName': VW[iid]['iconName'], 'iconFrom': VW[iid]['iconPack']}
    for w in VDATA['weapons']:
        for a in w['ammoItems']:
            if a['id'] == iid and a.get('icon'):
                return {'icon': a['icon'], 'iconName': a['iconName'], 'iconFrom': 'panel vanilla (UI.pack / UI2.pack)'}
    # Munición suelta sin dibujo propio: el genérico del juego según sea de pistola o de rifle
    if 'ammo' in str(v.get('tags', '')).lower() and 'box' not in iid.lower() and 'carton' not in iid.lower():
        fn = 'Item_PistolAmmo.png' if 'pistol' in str(first(v.get('icon'))).lower() else 'Item_RifleAmmo308loose.png'
        return {'icon': f'icons/ammo/{fn}', 'iconName': names[0] if names else None, 'iconFrom': 'dibujo genérico del juego (el del mod no está en su carpeta de texturas)'}
    return {'icon': None, 'iconName': names[0] if names else None, 'iconFrom': None}


# ---------- Botín del mod ----------
PROC_F = VDIR / 'media/lua/server/Items/Firearms_Procedural.lua'
proc = PROC_F.read_text(encoding='utf-8', errors='replace')
PROC_REL = rel_mod(PROC_F)
tables = {}
for m in re.finditer(r'local\s+(\w+)\s*=\s*\{(.*?)\n\}', proc, re.S):
    pairs = re.findall(r'"([^"]+)"\s*,\s*([\d\.]+)', m.group(2))
    tables[m.group(1)] = {'pairs': [(a, float(b)) for a, b in pairs], 'line': proc[:m.start()].count('\n') + 1}
spawn_cond = dict(re.findall(r'\["Base\.(\w+)"\]\s*=\s*function\(\)\s*return\s+SandboxVars\.Firearms\.(\w+)', proc))
bags_lists = {m.group(1): re.findall(r'"(\w+)"', m.group(2)) for m in re.finditer(r'local\s+(\w+Bags)\s*=\s*\{(.*?)\}', proc, re.S)}

loot = {}       # id -> [ {name, w, kind, file, line, group} ]
dead_refs = {}  # nombre mal escrito -> líneas


def item_exists(name):
    return name.split('.', 1)[-1] in items


for m in re.finditer(r'addItemsToAll\((\w+),\s*(\w+)\)', proc):
    dist, lst = tables.get(m.group(1)), tables.get(m.group(2))
    if not dist or not lst:
        continue
    for it, mult in lst['pairs']:
        iid = it.split('.', 1)[-1]
        if not item_exists(it):
            dead_refs.setdefault(it, set()).add((PROC_REL, lst['line']))
            continue
        for cont, base in dist['pairs']:
            loot.setdefault(iid, []).append({'name': cont, 'w': round(base * mult, 3), 'line': dist['line'], 'via': m.group(2)})
for m in re.finditer(r'addItemsToBags\((\w+),\s*(\w+)\)', proc):
    lst = tables.get(m.group(2))
    for bag in bags_lists.get(m.group(1), []):
        for it, mult in lst['pairs']:
            iid = it.split('.', 1)[-1]
            if not item_exists(it):
                dead_refs.setdefault(it, set()).add((PROC_REL, lst['line']))
                continue
            loot.setdefault(iid, []).append({'name': bag, 'w': mult, 'line': lst['line'], 'via': m.group(2), 'bag': True})

# Clasificación de contenedores con la misma regla que el panel vanilla
KIND = {}
for w in VDATA['weapons']:
    r = w['rarity']
    for grp in ('sources', 'stash', 'militarySources', 'guaranteed'):
        for x in r[grp]:
            KIND[x['name']] = (grp, x['kind'])


def classify(name):
    if name in KIND:
        return KIND[name]
    if re.search(r'Army|Military', name):
        return 'militarySources', 'Militar'
    if re.search(r'Police|Prison', name):
        return 'sources', 'Policía / guardas / prisión'
    if re.search(r'GunStore|Pawn|Hunting|Store', name):
        return 'sources', 'Tienda'
    if re.search(r'Drug|FirearmWeapons', name):
        return 'stash', 'Alijo o escondite'
    if re.search(r'School|Locker', name):
        return 'sources', 'Casa o local'
    return 'sources', 'Otro'


def classify_bag(name):
    if 'ALICE' in name or 'Army' in name:
        return 'militarySources', 'Mochila militar'
    if 'Police' in name:
        return 'sources', 'Bolsa de policía'
    return 'stash', 'Mochila de superviviente o bandido'


# Habitaciones del mapa por contenedor (Distributions.lua) para «Dónde buscar»
DIST_F = GAME / 'media/lua/server/Items/Distributions.lua'
room_of = {}
cur_room = None
for line in DIST_F.read_text(encoding='utf-8', errors='replace').splitlines():
    m = re.match(r'^\t(\w+)\s*=\s*\{', line)
    if m:
        cur_room = m.group(1)
    m = re.search(r'name="(\w+)"', line)
    if m and cur_room:
        room_of.setdefault(m.group(1), set()).add(cur_room)
ROOMS = {}
for w in VDATA['weapons']:
    for r in w.get('mapRooms', []):
        ROOMS[r['room']] = {'label': r['label'], 'count': r['count']}
for z in VDATA.get('zones', []):
    ROOMS.setdefault(z['room'], {'label': z['label'], 'count': z['count']})


def rarity_for(iid):
    rows = loot.get(iid, [])
    agg = {}
    for r in rows:
        grp, kind = classify_bag(r['name']) if r.get('bag') else classify(r['name'])
        key = (r['name'], grp)
        a = agg.setdefault(key, {'name': r['name'], 'w': 0, 'kind': kind, 'file': PROC_REL, 'line': r['line'], 'grp': grp})
        a['w'] = round(a['w'] + r['w'], 3)
    groups = {'sources': [], 'stash': [], 'militarySources': [], 'guaranteed': []}
    for a in agg.values():
        groups[a.pop('grp')].append(a)
    for g in groups.values():
        g.sort(key=lambda x: -x['w'])
    score = round(sum(x['w'] for x in groups['sources']), 2)
    level = 'Común' if score >= 150 else 'Poco común' if score >= 50 else 'Rara' if score >= 20 else 'Muy rara'
    mil = round(sum(x['w'] for x in groups['militarySources']), 2)
    stash = round(sum(x['w'] for x in groups['stash']), 2)
    if not rows:
        level, note = 'No aparece', 'El mod no la añade a ningún contenedor de botín: solo se consigue de otra forma (o no se consigue).'
    elif mil and score < 20:
        note = 'Sale sobre todo en zonas militares.'
    else:
        note = 'No es exclusiva militar.' if mil else 'Sin fuentes militares.'
    rooms = {}
    for x in groups['sources'] + groups['militarySources']:
        for room in room_of.get(x['name'], ()):
            if room in ROOMS:
                rooms[room] = max(rooms.get(room, 0), x['w'])
    map_rooms = [{'room': k, **ROOMS[k], 'w': v} for k, v in sorted(rooms.items(), key=lambda kv: -kv[1])]
    return {
        'level': level, 'score': score, 'stashScore': stash, 'militaryScore': mil, 'military': note,
        **groups, 'sourceCount': len(groups['sources']),
    }, map_rooms


# Zombis: definiciones vanilla + lo que añade el mod
AWD_F = GAME / 'media/lua/shared/Definitions/AttachedWeaponDefinitions.lua'
awd_text = AWD_F.read_text(encoding='utf-8', errors='replace')
AWD = {}
for m in re.finditer(r'^AttachedWeaponDefinitions\.(\w+)\s*=\s*\{(.*?)^\}', awd_text, re.S | re.M):
    body = m.group(2)
    ch = re.search(r'chance\s*=\s*([\d\.]+)', body)
    outfits = re.search(r'outfit\s*=\s*\{([^}]*)\}', body)
    weapons = re.search(r'weapons\s*=\s*\{([^}]*)\}', body)
    AWD[m.group(1)] = {
        'chance': float(ch.group(1)) if ch else None,
        'outfits': re.findall(r'"([^"]+)"', outfits.group(1)) if outfits else [],
        'weapons': re.findall(r'"Base\.(\w+)"', weapons.group(1)) if weapons else [],
        'line': awd_text[:m.start()].count('\n') + 1,
    }
ZD_F = VDIR / 'media/lua/shared/Definitions/Firearms_AttachedWeaponsDef.lua'
zd = ZD_F.read_text(encoding='utf-8', errors='replace')
sandbox_text = (VDIR / 'media/sandbox-options.txt').read_text(encoding='utf-8', errors='replace')
SANDBOX = {m.group(1): m.group(2) == 'true' for m in re.finditer(r'option Firearms\.(\w+)\s*\{[^}]*?default\s*=\s*(true|false)', sandbox_text, re.S)}
zlists = {m.group(1): re.findall(r'"(\w+)"', m.group(2)) for m in re.finditer(r'local\s+(\w+)\s*=\s*\{(.*?)\}', zd, re.S)}
# Lua: la segunda definición de una tabla local con el mismo nombre sustituye a la primera
zombie_add = {}
for m in re.finditer(r'for i = 1, #(\w+), 1 do(.*?)\nend', zd, re.S):
    defs = zlists.get(m.group(1), [])
    for cond, body in re.findall(r'if (\w+) then(.*?)end', m.group(2), re.S):
        sb = cond[0].upper() + cond[1:]
        enabled = SANDBOX.get(sb.replace('Spawn', 'Spawn'), False) if sb in SANDBOX else False
        for it in re.findall(r'"Base\.(\w+)"', body):
            for d in defs:
                zombie_add.setdefault(it, []).append({'def': d, 'cond': sb, 'enabled': enabled, 'line': zd[:m.start()].count('\n') + 1})
        if not (sb in SANDBOX):
            dead_refs.setdefault(f'SandboxVars.Firearms.{sb}', set()).add((rel_mod(ZD_F), zd[:m.start()].count('\n') + 1))
for it in zombie_add:
    if it not in items:
        dead_refs.setdefault('Base.' + it, set()).update((rel_mod(ZD_F), z['line']) for z in zombie_add[it])


def zombies_for(iid):
    out = []
    if iid in VW:
        out += [{**z, 'by': 'juego'} for z in VW[iid]['zombies']]
    for z in zombie_add.get(iid, []):
        if not z['enabled']:
            continue
        d = AWD.get(z['def'])
        if not d:
            continue
        out.append({'def': z['def'], 'chance': d['chance'], 'outfits': d['outfits'][:4], 'more': max(0, len(d['outfits']) - 4),
                    'line': z['line'], 'by': 'mod', 'file': rel_mod(ZD_F)})
    return out


# Armas que se fabrican recortando otra con una sierra
SAWN = {}
for f in sorted((VDIR / 'media/scripts/Recipes').glob('*.txt')):
    t = f.read_text(encoding='utf-8', errors='replace')
    for m in re.finditer(r'craftRecipe\s+(\w*Saw\w*)\s*\{(.*?)\n\t\}', t, re.S):
        for out_id, in_id in re.findall(r'Base\.(\w+)\s*=\s*Base\.(\w+)', m.group(2)):
            SAWN[out_id] = {'from': in_id, 'src': f'{rel_mod(f)}:{t[:m.start()].count(chr(10)) + 1}'}


def obtain_for(w):
    ways = []
    r = w['rarity']
    if r['sources'] or r['stash'] or r['militarySources'] or r.get('guaranteed'):
        ways.append('botin')
    if w['zombies']:
        ways.append('zombis')
    if w['id'] in SAWN:
        ways.append('recortar')
    return ways


# ---------- Armas ----------
CAT_BY_FILE = {
    'Firearms_Items_Handguns.txt': 'pistola', 'Firearms_Items_Revolvers.txt': 'revolver',
    'Firearms_Items_SMGs.txt': 'subfusil', 'Firearms_Items_AssaultRifles.txt': 'automatica',
    'Firearms_Items_Rifles.txt': 'rifle', 'Firearms_Items_LeverActionRifles.txt': 'carabina',
    'Firearms_Items_Shotguns.txt': 'escopeta',
}
RELOAD = {
    'handgun': 'Cargador extraíble', 'boltaction': 'Cargador extraíble', 'boltactionnomag': 'Cerrojo, carga interna',
    'revolver': 'Tambor, cartucho a cartucho', 'shotgun': 'Tubo, cartucho a cartucho',
    'doublebarrelshotgun': 'Basculante, 2 cartuchos', 'doublebarrelshotgunsawn': 'Basculante, 2 cartuchos',
    'leveraction': 'Palanca, carga interna',
}


def stats_of(v, cat):
    ammo_id = first(v.get('ammotype'))
    mag = (first(v.get('magazinetype')) or '').replace('Base.', '')
    mag = None if mag in ('', 'None') else mag
    reload_id = first(v.get('weaponreloadtype'))
    reload = RELOAD.get(reload_id, reload_id)
    if cat == 'carabina' and reload_id == 'boltactionnomag':
        reload = 'Palanca, carga interna'
    loose = AMMO_ITEM.get(ammo_id)
    return {
        'ammo': game_name(loose) if loose else ammo_id, 'ammoEn': real_name(loose) if loose else None, 'ammoId': ammo_id,
        'capacity': num(v.get('maxammo')), 'magazine': game_name(mag) if mag else None, 'magazineId': f'Base.{mag}' if mag else None,
        'dmgMin': num(v.get('mindamage')), 'dmgMax': num(v.get('maxdamage')), 'range': num(v.get('maxrange')),
        'fireMode': 'Automático o manual' if 'auto' in str(first(v.get('firemodepossibilities')) or '').lower() else 'Manual',
        'auto': 'auto' in str(first(v.get('firemodepossibilities')) or '').lower(),
        'noise': num(v.get('soundradius')), 'hitChance': num(v.get('hitchance')), 'crit': num(v.get('criticalchance')),
        'weight': num(v.get('weight')), 'reload': reload, 'reloadId': reload_id, 'aimTime': num(v.get('aimingtime')),
        'recoil': num(v.get('recoildelay')), 'jam': num(v.get('jamgunchance')), 'pierce': truthy(v.get('piercingbullets')),
        'maxHit': num(v.get('maxhitcount')), 'pellets': num(v.get('projectilecount'), 1), 'stopPower': num(v.get('stoppower')),
        'conditionMax': num(v.get('conditionmax')), 'conditionOneIn': num(v.get('conditionlowerchanceonein')),
        'twoHands': truthy(v.get('twohandweapon')), 'holster': first(v.get('attachmenttype')),
    }


COMPARE = ['ammoId', 'capacity', 'dmgMin', 'dmgMax', 'range', 'noise', 'hitChance', 'crit', 'aimTime', 'recoil', 'jam', 'pierce', 'maxHit', 'weight', 'fireMode']


def ammo_items(st, ammo_box_field):
    out = []
    loose = AMMO_ITEM.get(st['ammoId'])
    if loose:
        box, carton = boxes_of(loose)
        for role, iid in (('Suelta', loose), ('Caja', box), ('Cartón', carton)):
            if not iid:
                continue
            v = items.get(iid, {})
            e = {'role': role, 'id': iid, 'name': game_name(iid), **{k: v2 for k, v2 in icon_for(iid).items() if k in ('icon', 'iconName')},
                 'file': v.get('_file'), 'line': v.get('_line')}
            c = contains(iid) if role != 'Suelta' else None
            if c:
                e['contains'] = c
            out.append(e)
    if st['magazineId']:
        mid = st['magazineId'].replace('Base.', '')
        v = items.get(mid, {})
        out.append({'role': 'Cargador', 'id': mid, 'name': game_name(mid), **{k: v2 for k, v2 in icon_for(mid).items() if k in ('icon', 'iconName')},
                    'file': v.get('_file'), 'line': v.get('_line'), 'capacity': num(v.get('maxammo'))})
    return out


val_path = Path(__file__).parent / 'firearms_valoracion.json'
VAL = json.loads(val_path.read_text(encoding='utf-8')) if val_path.exists() else {}

weapons = []
notes = []
for iid in sorted(van_guns | mod_guns):
    v = items[iid]
    if iid in VW and VW[iid]['category'] == 'juguete':
        continue
    origin = 'nueva' if iid not in van_guns else ('cambiada' if iid in mod_guns else 'vanilla')
    cat = CAT_BY_FILE.get(Path(v['_file']).name) or (VW[iid]['category'] if iid in VW else 'rifle')
    st = stats_of(v, cat)
    w = {
        'id': iid, 'origin': origin, 'name': game_name(iid), 'nameReal': real_name(iid),
        'nameVanilla': VW[iid]['name'] if iid in VW else None, 'category': cat,
        'stats': st, **icon_for(iid), 'file': v['_file'], 'line': v['_line'],
        'ammoItems': ammo_items(st, first(v.get('ammobox'))),
        'ammoBoxField': (first(v.get('ammobox')) or '').replace('Base.', '') or None,
    }
    if origin == 'cambiada':
        vs = stats_of(van[iid], VW[iid]['category'] if iid in VW else cat)
        vs['ammo'] = VW[iid]['stats']['ammo'] if iid in VW else vs['ammo']
        w['vanilla'] = {k: vs[k] for k in COMPARE}
        w['vanilla']['ammo'] = vs['ammo']
        w['vanillaFile'], w['vanillaLine'] = van[iid]['_file'], van[iid]['_line']
        w['changes'] = [k for k in COMPARE if vs[k] != st[k]]
    if iid in VW:
        w['rarity'], w['mapRooms'] = VW[iid]['rarity'], VW[iid].get('mapRooms', [])
        w['rarity']['by'] = 'juego'
    else:
        w['rarity'], w['mapRooms'] = rarity_for(iid)
        w['rarity']['by'] = 'mod'
    w['zombies'] = zombies_for(iid)
    if iid in SAWN:
        w['sawnFrom'] = {**SAWN[iid], 'name': game_name(SAWN[iid]['from'])}
    w['obtain'] = obtain_for(w)
    if w['rarity']['level'] == 'No aparece':
        w['rarity']['level'] = 'Se fabrica' if 'recortar' in w['obtain'] else 'Solo zombis' if 'zombis' in w['obtain'] else 'Inalcanzable'
        w['rarity']['military'] = {
            'Se fabrica': f'No sale como botín: se fabrica recortando {w.get("sawnFrom", {}).get("name", "otra arma")} con una sierra.',
            'Solo zombis': 'No sale en contenedores: solo la llevan encima algunos zombis.',
            'Inalcanzable': 'Ni botín, ni zombis, ni receta: con el mod tal cual no se puede conseguir (solo con trucos o modo depuración).',
        }[w['rarity']['level']]
    w['sandbox'] = spawn_cond.get(iid)
    if w['sandbox']:
        w['sandboxDefault'] = SANDBOX.get(w['sandbox'])
    # La caja asociada al arma (AmmoBox) debería contener su munición
    if w['ammoBoxField']:
        c = contains(w['ammoBoxField'])
        loose = AMMO_ITEM.get(st['ammoId'])
        if c and c.get('ofId', None) not in (None, loose) and c.get('of') != game_name(loose):
            w['ammoBoxMismatch'] = {'box': w['ammoBoxField'], 'boxName': game_name(w['ammoBoxField']), 'holds': c.get('of')}
        elif not c and w['ammoBoxField'] not in items:
            w['ammoBoxMismatch'] = {'box': w['ammoBoxField'], 'boxName': w['ammoBoxField'], 'holds': None}
    val = VAL.get(iid, {})
    w['tier'] = val.get('tier')
    w['reason'] = val.get('reason', '')
    w['short'] = val.get('short') or w['nameReal']
    weapons.append(w)

# ---------- Catálogo de munición ----------
ammo = []
for aid in sorted({w['stats']['ammoId'] for w in weapons if w['stats']['ammoId']}):
    loose = AMMO_ITEM.get(aid)
    users = [w for w in weapons if w['stats']['ammoId'] == aid]
    box, carton = boxes_of(loose) if loose else (None, None)
    entry = {
        'id': aid, 'origin': 'mod' if aid.startswith('firearms:') else 'juego',
        'registry': f"{rel_mod(VDIR / 'media/registries.lua')}:{REG_LINE[aid]}" if aid in REG_LINE else 'projectzomboid.jar (zombie/scripting/objects/AmmoType)',
        'loose': loose, 'name': game_name(loose) if loose else aid, 'nameReal': real_name(loose) if loose else aid,
        'items': ammo_items({'ammoId': aid, 'magazineId': None}, None),
        'weapons': [w['id'] for w in users],
        'mags': sorted({w['stats']['magazineId'].replace('Base.', '') for w in users if w['stats']['magazineId']}),
    }
    entry['magItems'] = [{'id': m, 'name': game_name(m), 'capacity': num(items.get(m, {}).get('maxammo')),
                          **{k: v2 for k, v2 in icon_for(m).items() if k in ('icon', 'iconName')},
                          'weapons': [w['id'] for w in users if w['stats']['magazineId'] == 'Base.' + m]} for m in entry['mags']]
    # Botín que añade el mod a cajas y cartones de esta munición
    entry['modLoot'] = []
    for iid in filter(None, (box, carton)):
        rows = {}
        for r in loot.get(iid, []):
            rows[r['name']] = round(rows.get(r['name'], 0) + r['w'], 3)
        if rows:
            entry['modLoot'].append({'item': iid, 'name': game_name(iid), 'top': sorted(rows.items(), key=lambda kv: -kv[1])[:6]})
    ammo.append(entry)

# ---------- Hallazgos ----------
findings = []
for ref, locs in sorted(dead_refs.items()):
    if ref.startswith('SandboxVars'):
        findings.append({'claim': f'El mod consulta {ref}.', 'verdict': 'No existe',
                         'detail': 'Esa opción no está en sandbox-options.txt del mod, así que vale nil y ese bloque nunca se ejecuta.', 'where': sorted(locs)})
        continue
    name = ref.split('.', 1)[-1]
    real = next((k for k in items if k.lower() == name.lower()), None)
    what = 'a los zombis' if all('Attached' in f for f, _ in locs) else 'como botín'
    findings.append({'claim': f'El mod añade «{ref}» {what}.', 'verdict': 'Nombre mal escrito' if real else 'No existe',
                     'detail': (f'El objeto real se llama Base.{real}. ' if real else 'Ningún script del juego ni del mod define ese objeto. ')
                     + 'El juego no lo encuentra, así que esa entrada no hace nada'
                     + (f': {game_name(real)} no aparece por esa vía.' if real and real in mod_guns else '.'), 'where': sorted(locs)})
for w in weapons:
    mm = w.get('ammoBoxMismatch')
    if mm:
        findings.append({'claim': f'{w["nameReal"]}: su caja de munición asociada es «{mm["boxName"]}».', 'verdict': 'No encaja',
                         'detail': f'El arma dispara {w["stats"]["ammo"]}, pero el campo AmmoBox apunta a Base.{mm["box"]}'
                         + (f', que contiene {mm["holds"]}.' if mm['holds'] else ', que no existe.')
                         + f' Las cajas que sirven son las de {w["stats"]["ammo"]}.', 'where': [(w['file'], w['line'])]})

data = {
    'meta': {
        'game': 'Project Zomboid', 'version': GV, 'consulted': date.today().strftime('%d/%m/%Y'),
        'mod': {'name': INFO.get('name'), 'id': INFO.get('id'), 'workshop': WORKSHOP_ID, 'version': INFO.get('modversion'),
                'folder': f'Firearms/{VDIR.name}', 'versionMin': INFO.get('versionMin'), 'author': INFO.get('author'),
                'url': f'https://steamcommunity.com/sharedfiles/filedetails/?id={WORKSHOP_ID}'},
        'variants': VARIANTS,
        'counts': {'total': len(weapons), 'nueva': sum(w['origin'] == 'nueva' for w in weapons),
                   'cambiada': sum(w['origin'] == 'cambiada' for w in weapons), 'vanilla': sum(w['origin'] == 'vanilla' for w in weapons),
                   'ammo': len(ammo), 'ammoMod': sum(a['origin'] == 'mod' for a in ammo)},
        'sameStatsBeta': None,
    },
    'weapons': weapons, 'ammo': ammo, 'findings': findings,
}

# Estable y Beta: ¿mismos scripts de objetos?
beta = pick_version_folder(MODS / 'FirearmsBETA', GV)
same = all((VDIR / 'media/scripts/Items' / f.name).read_bytes() == f.read_bytes() for f in (beta / 'media/scripts/Items').glob('*.txt'))
data['meta']['sameStatsBeta'] = same

missing = [w['id'] for w in weapons if w['id'] not in VAL]
header = ('/* Generado por herramientas/generar_firearms.py desde Project Zomboid ' + GV + ' y el mod ' + str(INFO.get('name'))
          + ' ' + str(INFO.get('modversion')) + ' (solo lectura).\n   Los campos tier, reason y short son valoración propia '
          '(herramientas/firearms_valoracion.json), no datos del juego. */\n')
(WEB / 'firearms-data.js').write_text(header + 'window.PZ_MODS = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n', encoding='utf-8')
print(f'{len(weapons)} armas ({data["meta"]["counts"]}), {len(ammo)} municiones, {len(findings)} hallazgos.')
if missing:
    print('Sin valoración:', ', '.join(missing))
