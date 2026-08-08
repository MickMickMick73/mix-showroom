# MiX Showroom

Portable portfolio for your phone: **browse demos**, **open in browser**, **SMS / share links**.

| | |
|--|--|
| Bundle / applicationId | `store.mixapps.showroom` |
| Catalog | `assets/catalog.json` (edit + rebuild to add projects) |
| Codemagic iOS | workflow `showroom-ios` → TestFlight |

## Features

- Dark showroom UI (no big white screens)
- Categories + search + favourites
- **Open** project URL
- **SMS** with ready-made share text + link
- System **Share** sheet + **copy link**

## Local

```powershell
cd E:\Projects\mix-apps\MiX-Apps-Website\mix-showroom
flutter pub get
flutter run
```

## Add a project

Edit `assets/catalog.json`:

```json
{
  "id": "unique-id",
  "name": "Display name",
  "tagline": "One line",
  "category": "Product",
  "url": "https://…",
  "shareNote": "Optional SMS blurb",
  "tags": ["demo"]
}
```

## iOS ship

1. Apple: register Bundle ID `store.mixapps.showroom` + ASC app  
2. Push this folder to GitHub (or monorepo path)  
3. Codemagic → `showroom-ios` + env group `global`  
4. TestFlight  

## Web mirror

Instant phone use without install:  
https://mixapps.store/mix-showroom/  
(when deployed from `public` sibling HTML under website `mix-showroom/web-host/`)
