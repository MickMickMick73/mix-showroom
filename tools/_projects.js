/* MiX portfolio — curated doors + full live access map for diggers.
 * Domains = 6 doors. Featured = homepage heroes. Catalog = full scope.
 * liveAccess = messy-on-purpose inventory of public URLs on both hosts.
 */
window.MIX_PORTFOLIO = {
  owner: {
    name: "Michael Keulemans",
    brand: "MiX apps",
    location: "Queensland, Australia",
    tagline:
      "Systems builder · Grok Build specialist · practical problem-solver",
    email: "michael@mixapps.store",
    applyFocus: "AI Tutor – Software Engineering Specialist (xAI)",
    volume:
      "Thousands of hours directing Grok Build · hundreds of projects · early Grok / Grok Build adopter",
  },

  hosts: {
    ventra: {
      id: "ventra",
      label: "VentraIP · mixapps.store",
      base: "https://mixapps.store",
      role: "Public product host — portfolio, labs, downloads, APKs, venue demos, Rust library (one hygiene bracket with Binary)",
    },
    binary: {
      id: "binary",
      label: "Binary Lane · demos.mixapps.store",
      base: "https://demos.mixapps.store",
      role: "Public demo host — BMS/shop twins, portals, multiplayer twins (same hygiene rules; nginx denials; SE may co-reside)",
    },
  },

  /** Six clear directions */
  domains: [
    {
      id: "web-mobile",
      label: "Web + mobile packages",
      short: "Live websites with backends, Android & PC apps — full stack for real businesses",
      blurb:
        "Not brochure sites alone: live content control without cPanel/FTP, booking and retail plugins, Android clients, kiosks, and PC tools that complete the package.",
    },
    {
      id: "retail",
      label: "Retail & operations",
      short: "POS, BMS, admin, payments, tax/accounting paths for multi-shop reality",
      blurb:
        "Operational software for shops — stock, sales, people, and backends that can span tablets, PCs, and websites.",
    },
    {
      id: "games-ops",
      label: "Games & server ops",
      short: "Rust mods, live AU servers, control panels, Space Engineers engine/Linux work",
      blurb:
        "Deep game-server systems: free mod libraries, admin control from the desk, and engine-side optimization work.",
    },
    {
      id: "3d-agents",
      label: "3D worlds & simulation",
      short: "Humanoid bots, Mars terra, Starship landing, WebGL courses, collision gates",
      blurb:
        "Interactive 3D and simulation demos built through long agent sessions — Blender → GLB → WebGL, root motion, dual body types.",
    },
    {
      id: "plugins-ai",
      label: "Grok Build plugins & AI method",
      short: "Installable skills, handoffs, smoke tests, self-eval — how agents get trained in practice",
      blurb:
        "Not only using the chat window: installable agent skills, continuity STATUS/handoffs, quality gates, and large-scale AI planning examples.",
    },
    {
      id: "hardware-craft",
      label: "Hardware, craft & tools",
      short: "Legacy modernization, skins/UV craft, voice studio, Windows utilities",
      blurb:
        "Modernizing old hardware software, rigorous skin/material craft, voice casting tools, and portable PC utilities.",
    },
  ],

  featuredIds: [
    "form-study-3d",
    "terra-starship",
    "grok-agent-os",
    "browser-multiplayer",
    "carneys-suite",
    "web-live-backend",
    "hotel-booking-demos",
  ],

  projects: [
    {
      id: "grok-agent-os",
      domain: "plugins-ai",
      platforms: ["Agent tooling", "Skills", "Web"],
      status: "Active standing procedure",
      title: "How I work with Grok — continuity, gates, plugins",
      oneLiner:
        "Thousands of hours directing Grok Build: STATUS/handoffs for memory, smoke gates, correction loops, and installable skills — not one-off chats.",
      problem:
        "Long AI coding sessions lose continuity; quality is guessed instead of tested; wins never become reusable teaching assets for the next session or the next person.",
      solution:
        "Operating model: compact-safe handoffs, project-brain continuity, pre/post upload smoke (including dual-host denials), self-eval PASS/FAIL discipline, and plugins (Game3D, Audio, Bookings, host hygiene, skins) so multi-system work is structure + gates, not prompt tourism.",
      judgement:
        "Same muscle as AI tutoring: structure multi-step work, spot bad output, write gates, document failure modes, encode what works.",
      stack: ["Grok Build", "Skills/plugins", "Python", "JS", "Blender", "WebGL"],
      links: [
        { label: "Full method page", href: "method.html" },
        { label: "Form study course", href: "https://mixapps.store/lab/form-study/course/" },
        { label: "Games hub", href: "games.html" },
        { label: "Live map", href: "live.html" },
      ],
      images: ["img/collage/grok-agent-os.jpg"],
      featured: true,
      note: "16-tile board: live admin, form study, demos, tools — months of agent-directed work.",
    },
    {
      id: "web-live-backend",
      domain: "web-mobile",
      platforms: ["Web", "PHP", "Android", "PC"],
      status: "Live demos / production patterns",
      title: "Live website backends (no cPanel/FTP content edits)",
      oneLiner:
        "Remote interfaces so owners change site content instantly — without traditional hosting control panels or FTP.",
      problem:
        "Small businesses can’t rely on developers for every text/image change; classic FTP/cPanel workflows are slow and error-prone.",
      solution:
        "Built live PHP/server interfaces and admin-style flows so content updates from the browser; paired with venue demos and plugins that deploy as packages.",
      judgement:
        "Product thinking: the website is a living system, not a static export — rare in typical freelance site dumps.",
      stack: ["PHP", "JS", "HTML/CSS", "Deploy tooling"],
      links: [
        { label: "Demo websites hub", href: "https://mixapps.store/demo-websites.html" },
        { label: "Gympie demos", href: "https://mixapps.store/gympie-demos.html" },
        { label: "Websites page", href: "https://mixapps.store/websites.html" },
        { label: "DR portal (Binary)", href: "https://demos.mixapps.store/dynamic-road-services-demo/portal.html" },
      ],
      images: ["img/collage/web-live-backend.jpg"],
      featured: true,
    },
    {
      id: "carneys-suite",
      domain: "web-mobile",
      platforms: ["Android", "Web", "Windows"],
      status: "Live demos",
      title: "Carney’s Rural — full stack suite",
      oneLiner:
        "Shop + manager/POS paths + voice Biz tools on a shared server of record — website and apps as one package.",
      problem:
        "Rural produce ops need stock, sales, and people data shared across tablets, PCs, and web — not five disconnected apps.",
      solution:
        "Multi-client suite: customer shop, staff manager/POS paths, showcase site, APKs, and demo backends for walkthroughs.",
      judgement:
        "True multi-surface product design (Android + web + ops), not a single marketing page.",
      stack: ["Android", "JavaScript", "PHP/API", "Retail UX"],
      links: [
        { label: "Shop (VentraIP)", href: "https://mixapps.store/carneys/" },
        { label: "Shop twin (Binary)", href: "https://demos.mixapps.store/carneys/" },
        { label: "Shop app shell", href: "https://mixapps.store/carneys-shop-app/" },
        { label: "Catalog API", href: "https://mixapps.store/api/carneys-shop/catalog.php" },
        { label: "BMS manager", href: "https://demos.mixapps.store/mix-retail-bms/manager/?tenant=carneys" },
        { label: "Showcase (Binary)", href: "https://demos.mixapps.store/carneys-showcase/" },
        {
          label: "POS APK",
          href: "https://mixapps.store/download-apk.html?f=Carneys-POS-3.12.0-carneys-bms-debug.apk",
        },
        {
          label: "Shop APK",
          href: "https://mixapps.store/download-apk.html?f=Carneys-Shop-debug.apk",
        },
      ],
      images: ["img/collage/carneys-suite.jpg"],
      featured: true,
      note: "Both hosts run live twins — dig into shop, app shell, API, BMS",
    },
    {
      id: "hotel-booking-demos",
      domain: "web-mobile",
      platforms: ["Web", "Plugin"],
      status: "Live demos",
      title: "Hotel & venue sites + booking plugin",
      oneLiner:
        "Polished venue websites with table/room booking embeds and staff admin — reusable plugin scaffold.",
      problem:
        "Venues need a modern site and simple bookings without enterprise complexity.",
      solution:
        "Venue demos (e.g. Queenslander Hotel style), GrokBookings embeds, staff portals, deploy tooling for new hotel sites.",
      judgement:
        "Pluginized booking so each new venue is configuration + branding, not a rewrite.",
      stack: ["HTML/CSS/JS", "PHP", "Booking UX", "Deploy automation"],
      links: [
        { label: "Demo websites hub", href: "https://mixapps.store/demo-websites.html" },
        { label: "Queenslander Hotel", href: "https://mixapps.store/queenslander-hotel-demo/" },
        { label: "Apex Lane", href: "https://mixapps.store/apex-lane-demo/" },
        { label: "Golden Plate Gympie", href: "https://mixapps.store/goldenplate-gympie-demo/" },
        { label: "Year 2525", href: "https://mixapps.store/year2525-demo/" },
        { label: "Hot Rod Garage", href: "https://mixapps.store/hotrodgarage-demo/" },
      ],
      images: ["img/collage/hotel-booking-demos.jpg"],
      featured: true,
    },
    {
      id: "retail-pos-suite",
      domain: "retail",
      platforms: ["PC", "Android", "Web", "Admin"],
      status: "Suite / demos",
      title: "Retail POS · BMS · admin suite",
      oneLiner:
        "Retail operations stack — POS, back-office BMS, admin portals, and business-manager paths.",
      problem:
        "Shops need coherent stock/sales/admin software that can grow across devices.",
      solution:
        "mix-retail-pos, mix-retail-bms, retail-admin, mix-business-manager and related clients designed as a family.",
      judgement:
        "Suite architecture: one operational story across surfaces.",
      stack: ["Retail UX", "API", "Android", "Web", "Windows"],
      links: [
        { label: "BMS home (Binary)", href: "https://demos.mixapps.store/mix-retail-bms/" },
        {
          label: "BMS manager · carneys",
          href: "https://demos.mixapps.store/mix-retail-bms/manager/?tenant=carneys",
        },
        { label: "BMS twin (VentraIP)", href: "https://mixapps.store/mix-retail-bms/" },
        { label: "Carney’s shop", href: "https://mixapps.store/carneys/" },
        { label: "All APKs / downloads", href: "https://mixapps.store/downloads/" },
        {
          label: "Manager APK",
          href: "https://mixapps.store/download-apk.html?f=Carneys-Manager-debug.apk",
        },
      ],
      images: ["img/collage/retail-pos-suite.jpg"],
      featured: true,
      note: "BMS product API may require PIN/auth — manager UI is the public walkthrough",
    },
    {
      id: "rust-free-library",
      domain: "games-ops",
      platforms: ["PC", "Linux server"],
      status: "Live",
      title: "Rust free mods + AU game servers + control",
      oneLiner:
        "Original free Oxide/Carbon plugin library, live AU servers, and server control so work can be done from the desk.",
      problem:
        "Owners want free working mods without marketplace lock-in — and proof they load on live hosts.",
      solution:
        "Original MiX plugins, dual packaging, catalog pages, pack health tooling, live BinaryLane AU + test hosts; admin/control patterns for full remote ops.",
      judgement:
        "Ops-grade: catalog + live verification + remote control surface.",
      stack: ["C#", "Oxide", "Carbon", "Linux VPS", "RCON automation"],
      links: [
        { label: "Free mods library", href: "https://mixapps.store/mix-mods-singles.html" },
        { label: "Mod pack", href: "https://mixapps.store/mix-mod-pack.html" },
        { label: "Workshop skins", href: "https://mixapps.store/mix-skins.html" },
        { label: "Join AU server", href: "https://mixapps.store/mix-dev-server-join.html" },
        { label: "About / why free", href: "https://mixapps.store/mix-about.html" },
        { label: "Pack downloads", href: "https://mixapps.store/downloads/mixpack/" },
        { label: "Mod zips", href: "https://mixapps.store/downloads/mixmods/" },
        {
          label: "Rust host panel zip",
          href: "https://mixapps.store/downloads/mix-rust-host-panel/",
        },
      ],
      images: ["img/collage/rust-free-library.jpg"],
      featured: true,
    },
    {
      id: "form-study-3d",
      domain: "3d-agents",
      platforms: ["WebGL", "Blender", "Agent pipeline"],
      status: "Active lab + live web demos",
      title: "Form study — agent-driven humanoids, animation, collision",
      oneLiner:
        "Grok Build–built male/female Optimus-class bodies: iterated articulation, Walk/Run/Jump root motion, collision course smoke gate, 1st/3rd person — real course screenshots, not concept art.",
      problem:
        "Game-ready characters need form, articulation, clips, export, runtime control, and world contact tests — a pretty still frame proves almost nothing.",
      solution:
        "Directed Grok Build through procedural dual body types, retarget pipeline, WebGL course with collision clear gate, freecam clip viewer, and play modes. Iterated past stick-figure stages; slim public package under /lab/form-study/. Sibling worlds (Terra Walk / Claim Jump starship land & systems) are a separate card.",
      judgement:
        "Tutor-relevant multi-system loop: mesh → anim → collision gate → handoff. Quality is rebuild → smoke → document.",
      stack: ["Blender", "glTF", "Three.js", "Python", "Grok Build"],
      links: [
        { label: "Obstacle course (gate)", href: "https://mixapps.store/lab/form-study/course/" },
        { label: "Freecam viewer", href: "https://mixapps.store/lab/form-study/viewer/" },
        { label: "Lab landing", href: "https://mixapps.store/lab/form-study/" },
        { label: "Method page", href: "method.html" },
        { label: "Terra / Claim worlds", href: "domain.html?d=3d-agents" },
      ],
      images: ["img/collage/form-study-3d.jpg"],
      featured: true,
      note: "16 tiles: course frames + dual-body humanoid renders (agent-built)",
    },
    {
      id: "space-engineers-ops",
      domain: "games-ops",
      platforms: ["Linux", "Game engine", "Mods"],
      status: "Deep systems work · handoff pack live",
      title: "Space Engineers — Linux/mod/optimization path",
      oneLiner:
        "Engine-side and ops work toward a working Linux + mods setup, pushing past stock limitations.",
      problem:
        "Stock game/server constraints block performance and mod workflows operators need.",
      solution:
        "Hands-on engine/port/mod stack work (mix-se and related), optimizing around real limits rather than surface UI-only changes.",
      judgement:
        "Willingness to work below the app layer — valuable for SE-style systems teaching.",
      stack: ["C#", "Game engines", "Linux", "Mods"],
      links: [
        {
          label: "SE Linux workshop pack",
          href: "https://mixapps.store/downloads/se-linux-workshop/",
        },
        {
          label: "Workshop gate patcher",
          href: "https://mixapps.store/se-workshop-gate-patcher.html",
        },
      ],
      images: [],
      featured: false,
    },
    {
      id: "terra-starship",
      domain: "3d-agents",
      platforms: ["WebGL", "Blender"],
      status: "Live demos",
      title: "Terra Walk · Claim Jump — worlds beyond the humanoid",
      oneLiner:
        "Same agent pipeline as form study, applied to full environments: forest/lake walk, starship land & pad, Claim Jump space systems — not movement physics alone.",
      problem:
        "Reviewers can mistake a humanoid course for the whole 3D story. Colonisation / claim fantasy needs world, craft, and mission surfaces too.",
      solution:
        "Terra Walk public demo frames (world, forest, starship hero, pad engines) plus Claim Jump ship/intro systems; occupy-mars as related pack. Live on mixapps.store.",
      judgement:
        "Shows multi-system Grok Build work: characters + worlds + vehicles/space systems under one craft culture.",
      stack: ["Three.js", "Blender", "glTF", "Grok Build"],
      links: [
        { label: "Play Terra Walk", href: "https://mixapps.store/terra-walk/" },
        { label: "Play Claim Jump", href: "https://mixapps.store/claim-jump/" },
        { label: "Occupy Mars", href: "https://mixapps.store/occupy-mars/" },
        { label: "Form study course", href: "https://mixapps.store/lab/form-study/course/" },
        { label: "Games hub", href: "games.html" },
      ],
      images: ["img/collage/worlds-terra-claim.jpg", "img/collage/terra-starship.jpg"],
      featured: true,
      note: "16 tiles: Terra Walk starship/forest/world + Claim Jump systems — worlds beyond locomotion",
    },
    {
      id: "thermal-modernize",
      domain: "hardware-craft",
      platforms: ["Windows", "Hardware", "Android"],
      status: "Modernized · packages live",
      title: "Thermal sensor software modernization",
      oneLiner:
        "Rewrote/modernized thermal sensor application on the legacy system base — making old hardware software relevant again.",
      problem:
        "Working hardware stuck behind outdated software becomes shelfware.",
      solution:
        "Used the old system as foundation; rebuilt a modern interface and flow for real-world testing.",
      judgement:
        "Respect the installed base; modernize the layer humans touch.",
      stack: ["Windows", "Legacy integration", "UX modernization"],
      links: [
        {
          label: "Huato monitor APK",
          href: "https://mixapps.store/download-apk.html?f=HuatoMonitor.apk",
        },
        {
          label: "Remote test package",
          href: "https://mixapps.store/downloads/HuatoMonitor-RemoteTest-Package.zip",
        },
      ],
      images: [],
      featured: false,
    },
    {
      id: "voice-audition",
      domain: "hardware-craft",
      platforms: ["Windows"],
      status: "Live · downloadable",
      title: "MiX Voice Audition Studio",
      oneLiner:
        "Multi-character teleprompter + raw 24-bit / 48 kHz mono WAV for casting — no full DAW required.",
      problem:
        "Casting wants clean multi-character scripts as unprocessed broadcast-style WAV without DAW friction.",
      solution:
        "Portable Windows studio: teleprompter, script browse, fullscreen read, meter, local WAV export.",
      judgement:
        "Spec discipline (bit depth/rate/mono) over feature bloat.",
      stack: ["Python", "JavaScript", "Web Audio", "PyInstaller"],
      links: [
        { label: "Product page", href: "https://mixapps.store/tool-voice-audition.html" },
        {
          label: "Windows download folder",
          href: "https://mixapps.store/downloads/voice-audition/",
        },
        {
          label: "EXE (direct)",
          href: "https://mixapps.store/downloads/voice-audition/MiX-Voice-Audition-Studio.exe",
        },
      ],
      images: ["img/collage/voice-audition.jpg"],
      featured: false,
    },
    {
      id: "pctools",
      domain: "hardware-craft",
      platforms: ["Windows"],
      status: "Live",
      title: "MiX PCTOOLS",
      oneLiner: "Portable free Windows utilities — Photo to USB and Photo Wall+.",
      problem: "Non-technical users need simple PC tools without adware installers.",
      solution: "Single-file EXEs with clear product pages and downloads.",
      judgement: "Portable + honest free tools.",
      stack: ["Python", "Windows"],
      links: [
        { label: "PCTOOLS hub", href: "https://mixapps.store/pctools.html" },
        { label: "Photo to USB", href: "https://mixapps.store/tool-photo-to-usb.html" },
        { label: "Photo Wall+", href: "https://mixapps.store/tool-mix-photo-wall.html" },
        { label: "PhotoToUSB.exe", href: "https://mixapps.store/downloads/PhotoToUSB.exe" },
        {
          label: "MixPhotoWallPlus.exe",
          href: "https://mixapps.store/downloads/MixPhotoWallPlus.exe",
        },
      ],
      images: ["img/collage/pctools.jpg"],
      featured: false,
    },
    {
      id: "android-learning",
      domain: "web-mobile",
      platforms: ["Android"],
      status: "Live",
      title: "MiX Learning apps (Android)",
      oneLiner: "Free educational apps — speak-and-see, toddler cards, and more.",
      problem: "Families want simple learning tools without ads or dark patterns.",
      solution: "Full free Android apps with showcase pages and APK distribution.",
      judgement: "Ship free without enshittification.",
      stack: ["Android", "Mobile UX"],
      links: [
        { label: "Apps catalog", href: "https://mixapps.store/apps.html" },
        {
          label: "Speak & See Words",
          href: "https://mixapps.store/app.html?slug=mix-speak-see-words",
        },
        {
          label: "APK · Speak & See",
          href: "https://mixapps.store/download-apk.html?f=Mix-Speak-See-Words-v1.4.0.apk",
        },
        {
          label: "APK · Toddler Cards",
          href: "https://mixapps.store/download-apk.html?f=Mix-Learn-to-Read-Toddler-Cards-v1.0.9.apk",
        },
        { label: "All downloads", href: "https://mixapps.store/downloads/" },
      ],
      images: ["img/collage/android-learning.jpg"],
      featured: false,
    },
    {
      id: "android-guides",
      domain: "web-mobile",
      platforms: ["Android"],
      status: "Live",
      title: "Guides & lifestyle Android apps",
      oneLiner: "Garden, cooking, mechanics, brew guides — offline-friendly mobile packaging.",
      problem: "Specialist content needs clean mobile packaging.",
      solution: "Family of guide-style apps with consistent showcase packaging.",
      judgement: "Catalog scale with consistent product DNA.",
      stack: ["Android", "Content UX"],
      links: [
        { label: "Apps catalog", href: "https://mixapps.store/apps.html" },
        {
          label: "Garden Buddy APK",
          href: "https://mixapps.store/download-apk.html?f=Garden-Buddy-v1.1.1.apk",
        },
        {
          label: "30-Min Cookbook APK",
          href: "https://mixapps.store/download-apk.html?f=30-Minute-Cookbook-v1.1.3.apk",
        },
        {
          label: "Mechanics Guide APK",
          href: "https://mixapps.store/download-apk.html?f=Mechanics-Guide-Australia-v1.1.1.apk",
        },
        { label: "Raw downloads dir", href: "https://mixapps.store/downloads/" },
      ],
      images: ["img/collage/android-guides.jpg"],
      featured: false,
    },
    {
      id: "mobile-games",
      domain: "games-ops",
      platforms: ["Android"],
      status: "Live",
      title: "MiX mobile games",
      oneLiner: "Original mobile games including Mars Survivor and Outpost Defense.",
      problem: "Shippable game clients for the free product line.",
      solution: "Built and packaged Android game titles with storefront thumbs.",
      judgement: "Finish and publish, not only prototype.",
      stack: ["Android", "Game design"],
      links: [
        { label: "Apps catalog", href: "https://mixapps.store/apps.html" },
        {
          label: "Mars Survivor APK",
          href: "https://mixapps.store/download-apk.html?f=mars-survivor-v4.6.0.apk",
        },
        {
          label: "Outpost Defense APK",
          href: "https://mixapps.store/download-apk.html?f=OutpostDefense-v1.7.7.apk",
        },
        {
          label: "Ultima Resistentia APK",
          href: "https://mixapps.store/download-apk.html?f=Ultima-Resistentia-v1.1.0.apk",
        },
      ],
      images: ["img/collage/mobile-games.jpg"],
      featured: false,
    },
    {
      id: "browser-multiplayer",
      domain: "games-ops",
      platforms: ["Web", "Multiplayer"],
      status: "Live demos",
      title: "Browser multiplayer — ShipForge + Intent family",
      oneLiner:
        "Live multiplayer browser titles: ShipForge hangar/classes, Strike, Relic Run, Intent Hub, MiX Duel — real game art, not the form-study collage.",
      problem:
        "Most portfolios never show multiplayer systems work — only screenshots of single-player prototypes.",
      solution:
        "Shipped playable lobbies and game clients on mixapps.store with shared Intent tooling paths; ShipForge ships hangar, classes, and combat surfaces.",
      judgement:
        "Real networked play beats mockups — even when the UI is still lab-grade.",
      stack: ["WebSockets/HTTP", "JS game clients", "Lobby UX"],
      links: [
        { label: "Games hub", href: "games.html" },
        { label: "ShipForge", href: "https://mixapps.store/intent-shipforge/" },
        { label: "Strike", href: "https://mixapps.store/intent-strike/" },
        { label: "Relic Run", href: "https://mixapps.store/intent-game/" },
        { label: "MiX Duel", href: "https://mixapps.store/mix-duel-demo/" },
        { label: "Intent Hub", href: "https://mixapps.store/intent-hub/" },
      ],
      images: ["img/collage/browser-multiplayer.jpg"],
      featured: true,
      note: "16 tiles: ShipForge hangar/classes/hulls + Strike/Duel/hub captures",
    },
    {
      id: "rust-skins-craft",
      domain: "hardware-craft",
      platforms: ["PC", "Workshop craft"],
      status: "Active craft · public gallery",
      title: "Rust skins — UV, alpha, emission craft",
      oneLiner:
        "Deep skin pipeline: templates, transparency, layer maps, emission for Workshop items.",
      problem: "Skins fail when UV/alpha/emission are guessed instead of template-true.",
      solution:
        "Discipline around UV truth, alpha, emission maps, batch workflows (MiX Rust skins craft + emission skill).",
      judgement: "Craft quality is technical, not only artistic.",
      stack: ["Photoshop/PIL", "UV templates", "Emission maps"],
      links: [
        { label: "Workshop skins page", href: "https://mixapps.store/mix-skins.html" },
        { label: "Main forge site", href: "https://mixapps.store/" },
      ],
      images: [],
      featured: false,
    },
    {
      id: "host-hygiene-skill",
      domain: "plugins-ai",
      platforms: ["Agent tooling", "Ops", "Web"],
      status: "Active standing procedure",
      title: "mix-host-hygiene — public ship discipline",
      oneLiner:
        "Installable skill so “upload it” means slim packages, no secrets on either public host, chrome, site-map, and dual-host smoke — not monorepo FTP.",
      problem:
        "Result-first deploys left secrets listings, backups online, and no way home from demos. Two hosts made agents treat Binary as a looser sandbox.",
      solution:
        "One-bracket policy for VentraIP + Binary Lane: stage/scan/ship scripts, Apache + nginx deny tools, portfolio chrome, canonical site-map, post-upload smoke that probes both bases.",
      judgement:
        "Teaching artifact: agents get reusable ops discipline, not a one-off cleanup chat. Same muscle as tutoring — procedures, gates, refuse unsafe.",
      stack: ["Grok skill", "Python", "Apache/nginx", "Deploy tooling"],
      links: [
        { label: "Method page", href: "method.html" },
        { label: "Live access map", href: "live.html" },
        { label: "Form study lab (clean ship)", href: "https://mixapps.store/lab/form-study/" },
        { label: "Carney’s shop (Ventra)", href: "https://mixapps.store/carneys/" },
        { label: "BMS twin (Binary)", href: "https://demos.mixapps.store/mix-retail-bms/manager/?tenant=carneys" },
      ],
      images: ["img/collage/web-live-backend.jpg"],
      featured: false,
      note: "Both hosts under one policy — adapters only change transport",
    },
    {
      id: "mixhouse-planning",
      domain: "plugins-ai",
      platforms: ["AI planning", "Tools"],
      status: "In progress / example",
      title: "MixHouse — AI planning at scale",
      oneLiner:
        "Large-scale AI planning example (house design / prefab-scale thinking) — method over finished product claim.",
      problem:
        "Complex multi-phase builds need structured agent planning, not a single prompt.",
      solution:
        "Used Grok/agent workflows for massive planning graphs, phase gates, and structured design tooling (house-design-tool lineage).",
      judgement:
        "Shows how agents tackle scope that humans alone thrash on — honest status: planning example, not finished real-estate product.",
      stack: ["AI planning", "Python", "Design tools"],
      links: [{ label: "Method page", href: "method.html" }],
      images: [],
      featured: false,
    },
    {
      id: "server-control-desk",
      domain: "games-ops",
      platforms: ["Web", "Linux", "Ops"],
      status: "Built / operational patterns",
      title: "Remote server control systems",
      oneLiner:
        "Desk-side control so game/server work can be done 100% remotely — deploy, mods, health, admin.",
      problem:
        "SSH-only ops don’t scale for day-to-day server product work.",
      solution:
        "Control surfaces and automation around Rust/game hosts and multi-server workflows (admin-class tooling patterns).",
      judgement:
        "Ops productization: the control plane is the product.",
      stack: ["Linux", "RCON", "Automation", "Web admin"],
      links: [
        {
          label: "Host panel download",
          href: "https://mixapps.store/downloads/mix-rust-host-panel/",
        },
        { label: "Join / server page", href: "https://mixapps.store/mix-dev-server-join.html" },
        { label: "Mod pack page", href: "https://mixapps.store/mix-mod-pack.html" },
      ],
      images: [],
      featured: false,
    },
    {
      id: "freepay-tax",
      domain: "retail",
      platforms: ["Web", "Mobile", "Finance"],
      status: "Suite concepts / builds",
      title: "Payments, free SMS/5G paths, tax & ledger",
      oneLiner:
        "Broader commercial stack: freepay, invoice/ledger Android, tax/accounting directions without forced SaaS SMS.",
      problem:
        "Shops get locked into subscription SMS and fragmented finance tools.",
      solution:
        "Explored and built suite pieces (mix-freepay, invoice ledger Android, accounting paths) toward a coherent ops package.",
      judgement:
        "Challenge default SaaS lock-in with device-native capabilities where viable.",
      stack: ["Payments", "Android", "Accounting UX"],
      links: [
        { label: "Software hub", href: "https://mixapps.store/software.html" },
        { label: "Downloads", href: "https://mixapps.store/downloads/" },
        {
          label: "PawnMate Counter APK",
          href: "https://mixapps.store/download-apk.html?f=PawnMate-Counter-0.4.0-phase4.apk",
        },
      ],
      images: [],
      featured: false,
    },
    {
      id: "field-ops-android",
      domain: "web-mobile",
      platforms: ["Android", "Web portal"],
      status: "Live demos + APKs",
      title: "Dynamic Road / field ops package",
      oneLiner:
        "Industry client stack: quote portal, hire/fleet boards, prestart and field Android, media upload — live on both hosts.",
      problem:
        "Field businesses need more than a brochure: portals, quality flows, and mobile capture.",
      solution:
        "Full demo package for Dynamic Road Services + Hire with portal pages and companion APKs.",
      judgement:
        "Package thinking: website + portal + mobile as one deliverable.",
      stack: ["PHP/JS web", "Android", "Ops UX"],
      links: [
        {
          label: "Services demo (VentraIP)",
          href: "https://mixapps.store/dynamic-road-services-demo/",
        },
        {
          label: "Services portal (Binary)",
          href: "https://demos.mixapps.store/dynamic-road-services-demo/portal.html",
        },
        {
          label: "Hire demo (VentraIP)",
          href: "https://mixapps.store/dynamic-road-hire-demo/",
        },
        {
          label: "Hire fleet board (Binary)",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/fleet-board.html",
        },
        {
          label: "DRH Prestart APK",
          href: "https://mixapps.store/download-apk.html?f=DRH-Prestart-debug.apk",
        },
        {
          label: "DRH Field APK",
          href: "https://mixapps.store/download-apk.html?f=DRH-Field-debug.apk",
        },
      ],
      images: ["img/collage/field-ops-android.jpg"],
      featured: false,
    },
  ],

  /** Catalog extras — one-liners for scope; href when public */
  catalogExtra: [
    {
      domain: "web-mobile",
      title: "Iron & Chrome Garage demo",
      note: "Venue style showcase",
      href: "https://mixapps.store/hotrodgarage-demo/",
    },
    {
      domain: "web-mobile",
      title: "Denika Electric demo",
      note: "Trade business site demo",
      href: "https://mixapps.store/denika-electric-demo/",
    },
    {
      domain: "web-mobile",
      title: "Gympie demos hub",
      note: "Regional AU demo family",
      href: "https://mixapps.store/gympie-demos.html",
    },
    {
      domain: "web-mobile",
      title: "Developer / deploy pages",
      note: "How packages land on hosts",
      href: "https://mixapps.store/developer.html",
    },
    {
      domain: "web-mobile",
      title: "GrokBookingsPlugin",
      note: "Installable hotel booking skill/plugin (lab skill, demos live)",
      href: "https://mixapps.store/queenslander-hotel-demo/",
    },
    {
      domain: "web-mobile",
      title: "mix-booking Android + kiosk",
      note: "Booking clients beyond website embed",
      href: "https://mixapps.store/apps.html",
    },
    {
      domain: "retail",
      title: "Carney’s Hub / Manager / Shop APKs",
      note: "Tablet package family in downloads/",
      href: "https://mixapps.store/downloads/",
    },
    {
      domain: "retail",
      title: "mix-business-manager lineage",
      note: "Cross-business management client",
      href: "https://mixapps.store/software.html",
    },
    {
      domain: "retail",
      title: "PawnMate suite",
      note: "Counter APK + server zip",
      href: "https://mixapps.store/downloads/PawnMate-Server-0.6.0-phase4.zip",
    },
    {
      domain: "games-ops",
      title: "intent-shipforge",
      note: "Game product experiment live",
      href: "https://mixapps.store/intent-shipforge/",
    },
    {
      domain: "games-ops",
      title: "MiX server pack zips",
      note: "Full / light / show-off packs",
      href: "https://mixapps.store/downloads/mixpack/",
    },
    {
      domain: "3d-agents",
      title: "occupy-mars / claim-jump packs",
      note: "World kit lineage live",
      href: "https://mixapps.store/occupy-mars/",
    },
    {
      domain: "3d-agents",
      title: "GrokGameAnim sprite packs",
      note: "2D animation plugin path (method)",
      href: "method.html",
    },
    {
      domain: "plugins-ai",
      title: "GrokProjectBrain / GrokProjectAll",
      note: "Continuity & multi-project OS",
      href: "method.html",
    },
    {
      domain: "plugins-ai",
      title: "task-self-eval / asset-self-eval",
      note: "Automated quality gates for agents",
      href: "method.html",
    },
    {
      domain: "plugins-ai",
      title: "GrokAudioMedia",
      note: "Owned audio generation/harvest pipeline",
      href: "method.html",
    },
    {
      domain: "hardware-craft",
      title: "SpeakEasy workshop/reports APKs",
      note: "Voice/ops mobile tools",
      href: "https://mixapps.store/downloads/",
    },
    {
      domain: "hardware-craft",
      title: "Emission map skill (Rust)",
      note: "Workshop emission craft",
      href: "https://mixapps.store/mix-skins.html",
    },
  ],

  /**
   * Full live access map — intentional mess for deep diggers.
   * host: "ventra" | "binary" | "both"
   * kind: website | backend | apk | exe | pack | 3d | hub | game
   */
  liveAccess: [
    {
      group: "Start here · hubs",
      items: [
        {
          title: "Portfolio (this site)",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/portfolio/",
          note: "Curated entry + this live map",
        },
        {
          title: "mixapps.store home",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/",
          note: "Public product + Rust forge front",
        },
        {
          title: "demos.mixapps.store home",
          host: "binary",
          kind: "hub",
          href: "https://demos.mixapps.store/",
          note: "Binary Lane demo host index",
        },
        {
          title: "Apps catalog",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/apps.html",
          note: "All Android products + APK buttons",
        },
        {
          title: "Raw downloads directory",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/downloads/",
          note: "APKs, EXEs, packs, zips — open season",
        },
        {
          title: "Demo websites hub",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/demo-websites.html",
          note: "Style showcases launcher",
        },
        {
          title: "Gympie demos",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/gympie-demos.html",
          note: "Regional venue family",
        },
        {
          title: "Websites page",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/websites.html",
          note: "Site product narrative",
        },
        {
          title: "Software hub",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/software.html",
          note: "Broader software products",
        },
        {
          title: "Developer page",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/developer.html",
          note: "Deploy / package notes",
        },
        {
          title: "PCTOOLS hub",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/pctools.html",
          note: "Windows utilities",
        },
      ],
    },
    {
      group: "Live websites · venues & businesses",
      items: [
        {
          title: "Queenslander Hotel demo",
          host: "ventra",
          kind: "website",
          href: "https://mixapps.store/queenslander-hotel-demo/",
        },
        {
          title: "Apex Lane demo",
          host: "ventra",
          kind: "website",
          href: "https://mixapps.store/apex-lane-demo/",
        },
        {
          title: "Golden Plate Gympie",
          host: "ventra",
          kind: "website",
          href: "https://mixapps.store/goldenplate-gympie-demo/",
        },
        {
          title: "Hot Rod Garage",
          host: "ventra",
          kind: "website",
          href: "https://mixapps.store/hotrodgarage-demo/",
        },
        {
          title: "Year 2525 / ChronoLuxe",
          host: "ventra",
          kind: "website",
          href: "https://mixapps.store/year2525-demo/",
        },
        {
          title: "Denika Electric",
          host: "ventra",
          kind: "website",
          href: "https://mixapps.store/denika-electric-demo/",
        },
        {
          title: "Dynamic Road Services",
          host: "both",
          kind: "website",
          href: "https://mixapps.store/dynamic-road-services-demo/",
          note: "Also on Binary Lane",
        },
        {
          title: "Dynamic Road Hire",
          host: "both",
          kind: "website",
          href: "https://mixapps.store/dynamic-road-hire-demo/",
          note: "Also on Binary Lane",
        },
        {
          title: "Carney’s shop site",
          host: "both",
          kind: "website",
          href: "https://mixapps.store/carneys/",
          note: "Twin on demos.mixapps.store/carneys/",
        },
      ],
    },
    {
      group: "Backends · portals · APIs · admin-style surfaces",
      items: [
        {
          title: "Carney’s shop full",
          host: "ventra",
          kind: "backend",
          href: "https://mixapps.store/carneys/shop-full.php",
        },
        {
          title: "Carney’s cart",
          host: "ventra",
          kind: "backend",
          href: "https://mixapps.store/carneys/cart.php",
        },
        {
          title: "Carney’s catalog API",
          host: "both",
          kind: "backend",
          href: "https://mixapps.store/api/carneys-shop/catalog.php",
          note: "JSON API — raw",
        },
        {
          title: "Carney’s shop app shell",
          host: "both",
          kind: "backend",
          href: "https://mixapps.store/carneys-shop-app/",
        },
        {
          title: "Retail BMS (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/mix-retail-bms/",
        },
        {
          title: "BMS manager · tenant=carneys",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/mix-retail-bms/manager/?tenant=carneys",
          note: "Primary SoR walkthrough host",
        },
        {
          title: "BMS manager twin (VentraIP)",
          host: "ventra",
          kind: "backend",
          href: "https://mixapps.store/mix-retail-bms/manager/?tenant=carneys",
        },
        {
          title: "Carney’s showcase (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/carneys-showcase/",
        },
        {
          title: "DRS portal (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-services-demo/portal.html",
        },
        {
          title: "DRS quote app (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-services-demo/quote-app.html",
        },
        {
          title: "DRS quality (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-services-demo/quality.html",
        },
        {
          title: "DRS media upload (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-services-demo/media-upload.html",
        },
        {
          title: "DRH portal (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/portal.html",
        },
        {
          title: "DRH fleet board (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/fleet-board.html",
        },
        {
          title: "DRH prestart app (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/prestart-app.html",
        },
        {
          title: "DRH incident app (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/incident-app.html",
        },
        {
          title: "DRH hire flow (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/hire.html",
        },
        {
          title: "DRH media library (Binary)",
          host: "binary",
          kind: "backend",
          href: "https://demos.mixapps.store/dynamic-road-hire-demo/media-library.html",
        },
      ],
    },
    {
      group: "Android APKs · download & install",
      items: [
        {
          title: "Speak & See Words",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Mix-Speak-See-Words-v1.4.0.apk",
        },
        {
          title: "Toddler Cards",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Mix-Learn-to-Read-Toddler-Cards-v1.0.9.apk",
        },
        {
          title: "30 Minute Cookbook",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=30-Minute-Cookbook-v1.1.3.apk",
        },
        {
          title: "Garden Buddy",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Garden-Buddy-v1.1.1.apk",
        },
        {
          title: "Mechanics Guide Australia",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Mechanics-Guide-Australia-v1.1.1.apk",
        },
        {
          title: "Mars Survivor",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=mars-survivor-v4.6.0.apk",
        },
        {
          title: "Outpost Defense",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=OutpostDefense-v1.7.7.apk",
        },
        {
          title: "Ultima Resistentia",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Ultima-Resistentia-v1.1.0.apk",
        },
        {
          title: "Carney’s POS (BMS)",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Carneys-POS-3.12.0-carneys-bms-debug.apk",
          note: "Debug package for walkthroughs",
        },
        {
          title: "Carney’s Shop",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Carneys-Shop-debug.apk",
        },
        {
          title: "Carney’s Manager",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Carneys-Manager-debug.apk",
        },
        {
          title: "Carney’s Hub",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=Carneys-Hub-debug.apk",
        },
        {
          title: "DRH Prestart",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=DRH-Prestart-debug.apk",
        },
        {
          title: "DRH Field",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=DRH-Field-debug.apk",
        },
        {
          title: "Huato thermal monitor",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=HuatoMonitor.apk",
        },
        {
          title: "PawnMate Counter",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=PawnMate-Counter-0.4.0-phase4.apk",
        },
        {
          title: "SpeakEasy Reports",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=SpeakEasy-Reports-v3.17.0.apk",
        },
        {
          title: "FloraAU",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/download-apk.html?f=FloraAU-v1.3.0.apk",
        },
        {
          title: "More cookbooks / guides in /downloads/",
          host: "ventra",
          kind: "apk",
          href: "https://mixapps.store/downloads/",
          note: "Asian Foods, Slow Roast, Brew, Spirits, Food Diary, etc.",
        },
      ],
    },
    {
      group: "Windows EXEs · PC tools",
      items: [
        {
          title: "Photo to USB product",
          host: "ventra",
          kind: "exe",
          href: "https://mixapps.store/tool-photo-to-usb.html",
        },
        {
          title: "PhotoToUSB.exe",
          host: "ventra",
          kind: "exe",
          href: "https://mixapps.store/downloads/PhotoToUSB.exe",
        },
        {
          title: "Photo Wall+ product",
          host: "ventra",
          kind: "exe",
          href: "https://mixapps.store/tool-mix-photo-wall.html",
        },
        {
          title: "MixPhotoWallPlus.exe",
          host: "ventra",
          kind: "exe",
          href: "https://mixapps.store/downloads/MixPhotoWallPlus.exe",
        },
        {
          title: "Voice Audition product",
          host: "ventra",
          kind: "exe",
          href: "https://mixapps.store/tool-voice-audition.html",
        },
        {
          title: "Voice Audition EXE",
          host: "ventra",
          kind: "exe",
          href: "https://mixapps.store/downloads/voice-audition/MiX-Voice-Audition-Studio.exe",
        },
        {
          title: "Voice Audition zip folder",
          host: "ventra",
          kind: "pack",
          href: "https://mixapps.store/downloads/voice-audition/",
        },
      ],
    },
    {
      group: "Games · Rust · packs",
      items: [
        {
          title: "Free mods library",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/mix-mods-singles.html",
        },
        {
          title: "Mod pack page",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/mix-mod-pack.html",
        },
        {
          title: "Workshop skins",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/mix-skins.html",
        },
        {
          title: "Join AU / dev server",
          host: "ventra",
          kind: "game",
          href: "https://mixapps.store/mix-dev-server-join.html",
        },
        {
          title: "About free mods",
          host: "ventra",
          kind: "hub",
          href: "https://mixapps.store/mix-about.html",
        },
        {
          title: "Server pack downloads",
          host: "ventra",
          kind: "pack",
          href: "https://mixapps.store/downloads/mixpack/",
        },
        {
          title: "Mod zip library",
          host: "ventra",
          kind: "pack",
          href: "https://mixapps.store/downloads/mixmods/",
        },
        {
          title: "Rust host panel",
          host: "ventra",
          kind: "pack",
          href: "https://mixapps.store/downloads/mix-rust-host-panel/",
        },
        {
          title: "SE Linux workshop pack",
          host: "ventra",
          kind: "pack",
          href: "https://mixapps.store/downloads/se-linux-workshop/",
        },
        {
          title: "SE Workshop gate patcher",
          host: "ventra",
          kind: "tool",
          href: "https://mixapps.store/se-workshop-gate-patcher.html",
        },
        {
          title: "ShipForge intent",
          host: "both",
          kind: "game",
          href: "https://mixapps.store/intent-shipforge/",
        },
      ],
    },
    {
      group: "3D web demos (live)",
      items: [
        {
          title: "Terra walk",
          host: "ventra",
          kind: "3d",
          href: "https://mixapps.store/terra-walk/",
        },
        {
          title: "Claim jump",
          host: "ventra",
          kind: "3d",
          href: "https://mixapps.store/claim-jump/",
        },
        {
          title: "Occupy Mars",
          host: "ventra",
          kind: "3d",
          href: "https://mixapps.store/occupy-mars/",
        },
        {
          title: "ShipForge",
          host: "ventra",
          kind: "3d",
          href: "https://mixapps.store/intent-shipforge/",
        },
      ],
    },
  ],

  resume: {
    name: "Michael Keulemans",
    headline: "Systems builder · Grok Build specialist · practical problem-solver",
    location: "Queensland, Australia · Remote",
    summary:
      "Hands-on systems builder and early Grok Build user with 46 years of continuous computer experience. Started coding on an Apple II Plus at age 7. Built a successful multi-store pawnbroking business (~$1.5M annual turnover, 15 staff). After COVID closed the physical retail operation, moved into earthworks until carpal tunnel surgery limited heavy physical work. Since the first week of Grok Build’s release, focused full-time on training and directing the agent across complex multi-system projects — interactive 3D, physics, animation, reusable plugins, audio, live web backends, and agent pipelines with quality gates. Building structured continuity so Grok Build operates as a reliable high-scope development tool. Seeking remote contribution.",
    volumeLine:
      "Thousands of hours of intensive practical Grok Build work · hundreds of projects (games, interactive 3D, websites, retail tools, servers, Android/PC apps) · live production systems on two public hosts — not one-off demos.",
    bullets: [
      {
        title: "Grok Build & AI systems (intensive · ongoing)",
        text: "Early adopter of Grok from day one of public release; Grok Build from the first week of launch. Thousands of hours producing hundreds of projects. Focus: structured workflows, continuity across sessions, quality gates, smoke testing, reusable plugins — especially complex 3D humanoid animation, physics, collisions, and multi-system interactive environments. Live systems on VentraIP and Binary Lane.",
      },
      {
        title: "Business ownership & retail operations (15+ years)",
        text: "Owned and operated a large pawnbroking business (B1 licence) for eight years — ~$1.5M annual turnover, 15 staff, high-volume trading. Previously rose through Cash Converters and independent stores from floor staff to multi-store manager on results. Full responsibility for operations, staffing, inventory, compliance, and customer volume.",
      },
      {
        title: "Trade & practical skills",
        text: "Completed motor mechanic apprenticeship and worked in the trade. Self-taught truck driving and excavator operation; ran an earthworks business for several years. Extensive practical multi-workstation network and retail systems setup/maintenance.",
      },
      {
        title: "Early technical foundation",
        text: "Programming from age 7 on Apple II Plus (BASIC, simple graphics, later machine-code optimisations). Collaborated on games and tools through childhood; independently built dungeon-creation software with save/print/custom detail features. Continuous computing through every era since.",
      },
      {
        title: "Current situation",
        text: "Carpal tunnel surgery successful for sleep and daily function; residual arm pain prevents heavy physical work. Fully capable of sustained computer-based work. Regional Queensland, caring for family; seeking remote contribution.",
      },
    ],
    fit: [
      "Structure multi-step engineering work for AI agents and keep continuity across sessions",
      "Set quality gates and smoke tests; refuse unverified “done”",
      "Train and correct the model on complex multi-system stacks (3D, web, ops, plugins)",
      "Ship across web, mobile, servers, and tools — honest status labels",
      "Document so the next session (or the next tutor) can continue",
      "Operations judgement from real multi-staff, multi-shop retail ownership",
    ],
  },
};

