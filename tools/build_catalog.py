"""Build comprehensive MiX Showroom catalog.json + thumbnail PNGs."""
from __future__ import annotations

import hashlib
import json
import re
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_JSON = ROOT / "assets" / "catalog.json"
THUMBS = ROOT / "assets" / "thumbs"
PROJECTS_JS = Path(__file__).resolve().parent / "_projects.js"

BASE = "https://mixapps.store"
DEMOS = "https://demos.mixapps.store"

# Extra static doors not always in projects.js link list
EXTRA = [
    ("fsts", "From Seed to Supper", "Garden companion web + field apps", "Product", f"{BASE}/from-seed-to-supper/", "Garden story app"),
    ("fsts-app", "Seed to Supper app", "Login + garden map companion", "Product", f"{BASE}/from-seed-to-supper/app/", "Open garden companion"),
    ("showroom-web", "MiX Showroom (web)", "Web mirror of this app", "Hub", f"{BASE}/showroom/", "Portfolio showroom"),
    ("terra-walk", "Terra Walk", "3D walk / claim world demo", "Games", f"{BASE}/terra-walk/", "Terra Walk demo"),
    ("form-course", "Form study course", "Humanoid obstacle course gate", "Games", f"{BASE}/lab/form-study/course/", "Form study course"),
    ("form-viewer", "Form study viewer", "Freecam character viewer", "Games", f"{BASE}/lab/form-study/viewer/", "Form study viewer"),
    ("form-lab", "Form study lab", "3D form study landing", "Games", f"{BASE}/lab/form-study/", "Form study lab"),
    ("intent-shipforge", "ShipForge", "Hangar builder / shooter", "Games", f"{BASE}/intent-shipforge/", "Play ShipForge"),
    ("intent-strike", "Intent Strike", "Companion game", "Games", f"{BASE}/intent-strike/", "Play Intent Strike"),
    ("intent-hub", "Intent Hub", "Intent games hub", "Games", f"{BASE}/intent-hub/", "Intent hub"),
    ("mix-duel", "Mix Duel", "Experimental duel demo", "Games", f"{BASE}/mix-duel-demo/", "Mix Duel"),
    ("quantum-math", "Quantum Math", "Math game demo", "Games", f"{BASE}/quantum-math-demo/", "Quantum Math"),
    ("shroom-effect", "Shroom Effect", "Visual effect demo", "Games", f"{BASE}/shroom-effect-demo/", "Shroom Effect"),
    ("apex-lane", "Apex Lane", "Venue / demo experience", "Websites", f"{BASE}/apex-lane-demo/", "Apex Lane demo"),
    ("year2525", "Year 2525", "Sci-fi venue demo", "Websites", f"{BASE}/year2525-demo/", "Year 2525"),
    ("hotrod", "Hot Rod Garage", "Garage venue demo", "Websites", f"{BASE}/hotrodgarage-demo/", "Hot Rod Garage"),
    ("denika-electric", "Denica Electric", "Trade / electric demo site", "Websites", f"{BASE}/denika-electric-demo/", "Denica Electric"),
    ("tgrm", "TGRM demo", "Client site demo", "Websites", f"{BASE}/tgrm-demo/", "TGRM"),
    ("undying", "Undying Lands", "Game world demo page", "Games", f"{BASE}/undying-lands-demo/", "Undying Lands"),
    ("legacy-learners", "Legacy Learners", "Education demo", "Websites", f"{BASE}/legacy-learners-demo/", "Legacy Learners"),
    ("ellie", "Ellie Egyptian Arabian", "Stud / horse site demo", "Websites", f"{BASE}/ellie-egyptian-arabian-demo/", "Ellie Arabian"),
    ("stewart", "Stewart McKenny", "Client site demo", "Websites", f"{BASE}/stewart-mckenny-demo/", "Stewart McKenny"),
    ("wh-autos", "WH Autos", "Automotive demo", "Websites", f"{BASE}/wh-autos-demo/", "WH Autos"),
    ("whats-cookin", "What's Cookin", "Food demo", "Websites", f"{BASE}/whats-cookin-demo/", "What's Cookin"),
    ("mount-pleasant", "Mount Pleasant Hotel", "Gympie hotel demo", "Hotels", f"{BASE}/mount-pleasant-hotel-gympie-demo/", "Mount Pleasant Hotel"),
    ("queenslander", "Queenslander Hotel", "Hotel + bookings", "Hotels", f"{BASE}/queenslander-hotel-demo/", "Queenslander Hotel"),
    ("qld-book", "Queenslander bookings", "Direct bookings page", "Hotels", f"{BASE}/queenslander-hotel-demo/bookings.html", "Book Queenslander"),
    ("city-cafe", "City Cafe Gympie", "Cafe demo", "Venues", f"{BASE}/city-cafe-gympie-demo/", "City Cafe"),
    ("city-seafood", "City Seafood Gympie", "Seafood demo", "Venues", f"{BASE}/city-seafood-gympie-demo/", "City Seafood"),
    ("country-kitchen", "Country Kitchen", "Cafe demo", "Venues", f"{BASE}/country-kitchen-gympie-demo/", "Country Kitchen"),
    ("keen-bean", "Keen Bean", "Cafe demo", "Venues", f"{BASE}/keen-bean-gympie-demo/", "Keen Bean"),
    ("little-h", "Little H Cafe", "Cafe demo", "Venues", f"{BASE}/little-h-cafe-gympie-demo/", "Little H"),
    ("soma", "Soma Soma", "Venue demo", "Venues", f"{BASE}/soma-soma-gympie-demo/", "Soma Soma"),
    ("fishermans", "Fishermans Haul", "Food demo", "Venues", f"{BASE}/fishermans-haul-gympie-demo/", "Fishermans Haul"),
    ("goldenplate", "Golden Plate", "Restaurant demo", "Venues", f"{BASE}/goldenplate-gympie-demo/", "Golden Plate"),
    ("pizza-hut-g", "Pizza Hut Gympie demo", "Food demo site", "Venues", f"{BASE}/pizza-hut-gympie-demo/", "Pizza Hut Gympie"),
    ("tramcars", "Tramcars Bakery", "Bakery demo", "Venues", f"{BASE}/tramcars-bakery-gympie-demo/", "Tramcars Bakery"),
    ("southside", "Southside Takeaways", "Takeaway demo", "Venues", f"{BASE}/southside-takeaways-gympie-demo/", "Southside Takeaways"),
    ("espresso-fix", "Espresso Fix GC", "Cafe demo", "Venues", f"{BASE}/espresso-fix-gc-demo/", "Espresso Fix"),
    ("city-cafe-grinder", "City Cafe Grinder", "Cafe variant demo", "Venues", f"{BASE}/city-cafe-grinder-demo/", "Cafe Grinder"),
    ("entice", "Entice demo", "Client demo", "Websites", f"{BASE}/entice-demo/", "Entice"),
    ("drh", "Dynamic Road Hire", "Plant hire demo", "Industrial", f"{BASE}/dynamic-road-hire-demo/", "Dynamic Road Hire"),
    ("drs", "Dynamic Road Services", "Services demo", "Industrial", f"{BASE}/dynamic-road-services-demo/", "Dynamic Road Services"),
    ("drh-portal", "DRH portal (Binary)", "Hire portal", "Industrial", f"{DEMOS}/dynamic-road-hire-demo/portal.html", "DRH portal"),
    ("drs-portal", "DRS portal (Binary)", "Services portal", "Industrial", f"{DEMOS}/dynamic-road-services-demo/portal.html", "DRS portal"),
    ("drh-prestart", "DRH prestart app", "Field prestart web", "Industrial", f"{DEMOS}/dynamic-road-hire-demo/prestart-app.html", "DRH prestart"),
    ("drs-quote", "DRS quote app", "Quote web app", "Industrial", f"{DEMOS}/dynamic-road-services-demo/quote-app.html", "DRS quote"),
    ("carneys", "Carney's shop", "Rural produce shop", "Retail", f"{BASE}/carneys/", "Carney's shop"),
    ("carneys-bin", "Carney's shop (Binary)", "Shop twin host", "Retail", f"{DEMOS}/carneys/", "Carney's Binary"),
    ("carneys-show", "Carney's showcase", "Marketing showcase", "Retail", f"{DEMOS}/carneys-showcase/", "Carney's showcase"),
    ("carneys-app", "Carney's shop app shell", "Web shop shell", "Retail", f"{BASE}/carneys-shop-app/", "Carney's app shell"),
    ("bms-bin", "Retail BMS (Binary)", "BMS product home", "Retail", f"{DEMOS}/mix-retail-bms/", "MiX Retail BMS"),
    ("bms-mgr", "BMS manager · Carney's", "Manager walkthrough", "Retail", f"{DEMOS}/mix-retail-bms/manager/?tenant=carneys", "BMS manager"),
    ("bms-ventra", "BMS twin (Ventra)", "BMS on mixapps.store", "Retail", f"{BASE}/mix-retail-bms/", "BMS Ventra"),
    ("bizmgr", "Business Manager", "AI business manager shell", "Retail", f"{BASE}/business-manager/", "Business Manager"),
    ("mixmods", "MixMods free library", "Rust free plugins", "Rust", f"{BASE}/mix-mods-singles.html", "Free Rust mods"),
    ("mixpack", "Mix mod pack", "Full pack page", "Rust", f"{BASE}/mix-mod-pack.html", "Mod pack"),
    ("mixskins", "Mix skins", "Workshop skins", "Rust", f"{BASE}/mix-skins.html", "MiX skins"),
    ("mix-join", "Join AU server", "Rust connect page", "Rust", f"{BASE}/mix-dev-server-join.html", "Join AU Rust"),
    ("mix-about", "Mix about free", "Why free mods", "Rust", f"{BASE}/mix-about.html", "About free mods"),
    ("se-patch", "SE Patch Day", "Space Engineers tool", "Product", f"{BASE}/se-patch-day.html", "SE Patch Day"),
    ("shipforge-demos", "ShipForge (demos host)", "Binary demos path", "Games", f"{DEMOS}/intent-shipforge/", "ShipForge demos"),
    ("mixhouse", "MixHouse", "House/ops demo", "Product", f"{DEMOS}/mixhouse/", "MixHouse"),
    ("home", "MiX Apps home", "mixapps.store front", "Hub", f"{BASE}/", "MiX home"),
    ("software", "Software hub", "Internal software map", "Hub", f"{BASE}/software.html", "Software hub"),
    ("apps", "Apps catalog", "Published apps list", "Apps", f"{BASE}/apps.html", "Apps catalog"),
    ("downloads", "Downloads", "APKs and files", "Hub", f"{BASE}/downloads.html", "Downloads"),
    ("demo-hub", "Demo websites hub", "All demo doors", "Hub", f"{BASE}/demo-websites.html", "Demo websites"),
    ("gympie", "Gympie demos hub", "Venue demos index", "Hub", f"{BASE}/gympie-demos.html", "Gympie demos"),
    ("websites", "Websites page", "Web product page", "Hub", f"{BASE}/websites.html", "Websites"),
    ("portfolio-games", "Portfolio games", "Games board", "Hub", f"{BASE}/portfolio/games.html", "Portfolio games"),
    ("portfolio-live", "Portfolio live map", "Live URL map", "Hub", f"{BASE}/portfolio/live.html", "Live map"),
    ("portfolio-venues", "Portfolio venues", "Venue board", "Hub", f"{BASE}/portfolio/venues.html", "Venues"),
    ("portfolio-catalog", "Portfolio catalog", "Full catalog", "Hub", f"{BASE}/portfolio/catalog.html", "Catalog"),
    ("pctools", "PC tools", "Windows utilities page", "Tools", f"{BASE}/pctools.html", "PC tools"),
    ("mix-booking", "MiX Booking", "Booking product", "Product", f"{BASE}/mix-booking.html", "MiX Booking"),
    ("mix-obd", "Mix OBD office", "Workshop OBD page", "Tools", f"{BASE}/mix-obd-office.html", "Mix OBD"),
    ("workshop-hub", "Mix workshop hub", "Workshop systems", "Tools", f"{BASE}/mix-workshop-hub.html", "Workshop hub"),
    ("voice-audition", "Voice audition tool", "Voice casting tool", "Tools", f"{BASE}/tool-voice-audition.html", "Voice audition"),
    ("developer", "Developer hub", "Developer page", "Hub", f"{BASE}/developer.html", "Developer"),
    ("live-backends", "Live backends", "Backend demos map", "Hub", f"{BASE}/developer-live-backends.html", "Live backends"),
    # Catalog apps (open app page)
    ("app-speakeasy", "SpeakEasy Reports", "Field reports app page", "Apps", f"{BASE}/app.html?slug=speakeasy-reports", "SpeakEasy Reports"),
    ("app-speakeasy-ws", "SpeakEasy Workshop", "Workshop app page", "Apps", f"{BASE}/app.html?slug=speakeasy-workshop", "SpeakEasy Workshop"),
    ("app-speak-see", "Mix Speak See Words", "Kids literacy app", "Apps", f"{BASE}/app.html?slug=mix-speak-see-words", "Speak See Words"),
    ("app-read-cards", "Learn to Read cards", "Toddler cards app", "Apps", f"{BASE}/app.html?slug=mix-learn-to-read-toddler-cards", "Learn to Read"),
    ("app-30min", "30 Minute Cookbook", "Cookbook app", "Apps", f"{BASE}/app.html?slug=30-minute-cookbook", "30 Minute Cookbook"),
    ("app-30gf", "30 Min GF Cookbook", "Gluten-free cookbook", "Apps", f"{BASE}/app.html?slug=30-minute-gf-cookbook", "GF Cookbook"),
    ("app-asian", "Asian Foods Cookbook", "Cookbook app", "Apps", f"{BASE}/app.html?slug=asian-foods-cookbook", "Asian Foods"),
    ("app-slow", "Slow Roast Cookbook", "Cookbook app", "Apps", f"{BASE}/app.html?slug=slow-roast-cookbook", "Slow Roast"),
    ("app-brew", "Home Brew Master", "Brewing guide", "Apps", f"{BASE}/app.html?slug=home-brew-master-guide", "Home Brew"),
    ("app-spirits", "Spirits Master Guide", "Spirits guide", "Apps", f"{BASE}/app.html?slug=spirits-master-guide", "Spirits Guide"),
    ("app-datsun", "Datsun 1000 Guide", "Car owners guide", "Apps", f"{BASE}/app.html?slug=datsun-1000-guide", "Datsun Guide"),
    ("app-food-sym", "Food Symptom Diary", "Health diary app", "Apps", f"{BASE}/app.html?slug=food-symptom-diary", "Food Symptom Diary"),
    ("app-mech", "Mechanics Guide AU", "Mechanics guide", "Apps", f"{BASE}/app.html?slug=mechanics-guide-au", "Mechanics Guide"),
    ("app-garden", "Garden Buddy", "Garden app", "Apps", f"{BASE}/app.html?slug=garden-buddy", "Garden Buddy"),
    ("app-flora", "Flora AU", "Flora encyclopedia", "Apps", f"{BASE}/app.html?slug=flora-au", "Flora AU"),
]

CAT_COLORS = {
    "Games": (40, 90, 140),
    "Websites": (45, 100, 70),
    "Venues": (120, 70, 40),
    "Hotels": (90, 50, 90),
    "Retail": (140, 90, 40),
    "Rust": (90, 40, 40),
    "Product": (40, 110, 90),
    "Industrial": (70, 70, 90),
    "Apps": (50, 80, 120),
    "Tools": (60, 60, 80),
    "Hub": (30, 50, 45),
    "Other": (50, 50, 50),
}


def slugify(s: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s.strip().lower()).strip("-")
    return s[:48] or "item"


def resolve_href(href: str) -> str | None:
    if not href or href.startswith("#") or href.startswith("mailto:"):
        return None
    if href.startswith("http://") or href.startswith("https://"):
        return href
    if href.startswith("/"):
        return BASE + href
    # relative portfolio
    if href.endswith(".html") or "/" in href:
        return f"{BASE}/portfolio/{href}"
    return None


def parse_projects_js() -> list[dict]:
    if not PROJECTS_JS.is_file():
        return []
    text = PROJECTS_JS.read_text(encoding="utf-8", errors="replace")
    items: list[dict] = []
    # crude: find title + links blocks
    for m in re.finditer(
        r'id:\s*"([^"]+)".*?title:\s*"([^"]+)".*?oneLiner:\s*"([^"]*)".*?links:\s*\[(.*?)\]',
        text,
        re.S,
    ):
        pid, title, one, links_blob = m.group(1), m.group(2), m.group(3), m.group(4)
        domain_m = re.search(r'domain:\s*"([^"]+)"', text[m.start() - 200 : m.start() + 50])
        domain = domain_m.group(1) if domain_m else "Other"
        cat_map = {
            "web-mobile": "Websites",
            "retail": "Retail",
            "games-ops": "Rust",
            "3d-agents": "Games",
            "plugins-ai": "Product",
            "hardware-craft": "Tools",
        }
        category = cat_map.get(domain, "Product")
        for lm in re.finditer(r'href:\s*"([^"]+)"', links_blob):
            url = resolve_href(lm.group(1))
            if not url:
                continue
            label_m = re.search(r'label:\s*"([^"]+)"', links_blob[: links_blob.find(lm.group(0))])
            # better: label near href
            chunk = links_blob[max(0, lm.start() - 80) : lm.end()]
            lab = re.search(r'label:\s*"([^"]+)"', chunk)
            name = lab.group(1) if lab else f"{title}"
            items.append(
                {
                    "id": f"{pid}-{slugify(name)}",
                    "name": name[:80],
                    "tagline": one[:140] if one else title,
                    "category": category,
                    "url": url,
                    "shareNote": f"{name} — MiX apps",
                    "parent": title,
                }
            )
        # also parent card pointing at first good link
        first_urls = [resolve_href(x) for x in re.findall(r'href:\s*"([^"]+)"', links_blob)]
        first_urls = [u for u in first_urls if u]
        if first_urls:
            items.append(
                {
                    "id": pid,
                    "name": title[:80],
                    "tagline": one[:140],
                    "category": category,
                    "url": first_urls[0],
                    "shareNote": f"{title} — MiX apps",
                }
            )
    return items


def make_thumb(item_id: str, name: str, category: str) -> str:
    THUMBS.mkdir(parents=True, exist_ok=True)
    path = THUMBS / f"{item_id}.png"
    # asset path relative for Flutter
    asset = f"assets/thumbs/{item_id}.png"
    if path.is_file() and path.stat().st_size > 100:
        return asset
    rgb = CAT_COLORS.get(category, CAT_COLORS["Other"])
    # slight hash variance
    h = int(hashlib.md5(item_id.encode()).hexdigest()[:4], 16)
    rgb = tuple(min(255, max(0, c + (h % 40) - 20)) for c in rgb)
    img = Image.new("RGB", (256, 160), rgb)
    draw = ImageDraw.Draw(img)
    # top bar
    draw.rectangle([0, 0, 256, 8], fill=(212, 168, 75))
    initials = "".join(w[0] for w in name.split()[:3] if w).upper()[:3] or "MX"
    try:
        font_big = ImageFont.truetype("arial.ttf", 48)
        font_sm = ImageFont.truetype("arial.ttf", 16)
    except Exception:
        font_big = ImageFont.load_default()
        font_sm = font_big
    draw.text((20, 40), initials, fill=(232, 224, 208), font=font_big)
    # wrap name
    draw.text((20, 120), name[:28], fill=(200, 210, 200), font=font_sm)
    img.save(path, "PNG", optimize=True)
    return asset


def try_download_collage(rel: str, item_id: str) -> str | None:
    """If portfolio collage exists, download as thumb."""
    url = f"{BASE}/portfolio/{rel.lstrip('/')}"
    dest = THUMBS / f"{item_id}.png"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "MiX-Showroom-Builder/1.0"})
        with urllib.request.urlopen(req, timeout=15) as r:
            data = r.read()
        if len(data) < 500:
            return None
        dest.write_bytes(data)
        # normalize size
        im = Image.open(dest).convert("RGB")
        im = im.resize((256, 160), Image.Resampling.LANCZOS)
        im.save(dest, "PNG", optimize=True)
        return f"assets/thumbs/{item_id}.png"
    except Exception:
        return None


def main() -> None:
    items: dict[str, dict] = {}

    def add(it: dict) -> None:
        url = it.get("url") or ""
        if not url.startswith("http"):
            return
        # skip pure anchors / fonts
        if any(x in url for x in ("fonts.google", "mailto:", "privacy", "terms.html")):
            return
        iid = it["id"]
        # unique by url prefer longer name
        for k, v in list(items.items()):
            if v["url"] == url:
                return
        if iid in items:
            iid = f"{iid}-{abs(hash(url)) % 10000}"
            it = {**it, "id": iid}
        cat = it.get("category") or "Other"
        thumb = make_thumb(it["id"], it.get("name") or "MiX", cat)
        it["thumb"] = thumb
        it["tags"] = it.get("tags") or []
        items[it["id"]] = {
            "id": it["id"],
            "name": it["name"],
            "tagline": it.get("tagline") or "",
            "category": cat,
            "url": url,
            "shareNote": it.get("shareNote") or it["name"],
            "thumb": thumb,
            "tags": it.get("tags") or [],
        }

    for row in EXTRA:
        add(
            {
                "id": row[0],
                "name": row[1],
                "tagline": row[2],
                "category": row[3],
                "url": row[4],
                "shareNote": row[5],
            }
        )

    for it in parse_projects_js():
        add(it)

    catalog = {
        "version": 2,
        "title": "MiX Showroom",
        "updated": "2026-08-08",
        "items": sorted(items.values(), key=lambda x: (x["category"], x["name"].lower())),
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(catalog['items'])} items -> {OUT_JSON}")
    print(f"Thumbs dir: {THUMBS} ({len(list(THUMBS.glob('*.png')))} png)")


if __name__ == "__main__":
    main()
