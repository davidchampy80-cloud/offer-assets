# offer-assets: Offer Team, Leroy Merlin South Africa

Static pages and assets, served by GitHub Pages from `main` at
https://davidchampy80-cloud.github.io/offer-assets/

## What lives here

- `index.html`, `manifest.webmanifest` and the root icons: the **Offer Product Academy** launcher.
  The team installed it as an app on their phones; it redirects to the Academy web app (Apps Script).
  Its manifest scope is the site root, so `index.html` must stay the Academy launcher.
- `hq/`: **Offer HQ**, the landing page that lists everything the Offer built.
  `hq/tools.js` is the list (one block per tool: group, name, blurb, audience, url, search tags).
  `hq/index.html` holds the layout, styles and the search/filter script only.
  A tool without a url shows "Link to come".

## Rules

- The repo and the Pages site are public. Only link apps or files that ask for a leroymerlin.co.za
  login: Apps Script deployments under `/a/macros/leroymerlin.co.za/`, Drive files that are not shared
  "Anyone with the link". No files from personal accounts. No figures, margins, supplier terms or
  strategy text on any page. Pages carry `noindex`.
- Team-facing copy is in English. House vocabulary: Turnover (never Revenue), MDH (never Private Label),
  "steps" (never "beats").
- Offer family identity: Offer green `#4C8B2B` for marks and the single accent, slate `#3E4A56` for all
  text, panel tint `#F3F7F1` for cards, red only for alerts. Archivo SemiBold for titles and wordmarks,
  IBM Plex Mono SemiBold for spaced-capital eyebrow labels. Use the Offer Team tile
  (`offer_favicon_144.png`) as it is: never redraw, recolour or stretch a mark.
- Plain HTML, CSS and JavaScript; Google Fonts is the only external resource.

## Before pushing

Serve the repo root (`python3 -m http.server`) and open `/hq/` at 390 px and 1280 px wide, in light and
dark mode: no horizontal scroll, search and filters work, every "Live" card opens its link.
