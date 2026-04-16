# GeoDesign — marketing site

Static, SEO-first site for **[GeoDesign](https://geodesign.co.in)** (geotechnical engineering, Tamil Nadu). Built with **Astro** at the **repository root**; ships real HTML per URL and uses **React only where needed** (contact form, projects gallery).

---

## Quick start

**Requirements:** [Node.js](https://nodejs.org/) **≥ 22.12.0** (see [`package.json`](package.json) `engines` and [`.nvmrc`](.nvmrc)).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output: dist/
npm run preview  # test production build locally
```

---

## Stack

| Layer | Choice |
|--------|--------|
| Framework | [Astro 6](https://astro.build/) (`output: 'static'`) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) — [`src/styles/global.css`](src/styles/global.css) |
| Islands | [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) (`ContactForm`, `ProjectsGallery`) |
| SEO | Per-route meta in [`SiteLayout`](src/layouts/SiteLayout.astro) / [`BaseLayout.astro`](src/layouts/BaseLayout.astro); Organization JSON-LD; [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |
| Hosting | [Netlify](https://www.netlify.com/) — see [`netlify.toml`](netlify.toml) |

**Site URL** (canonical, sitemap, OG): `https://geodesign.co.in` — set in [`astro.config.mjs`](astro.config.mjs).

---

## Project layout

```
├── astro.config.mjs      # site URL, integrations, Vite + Tailwind
├── netlify.toml          # build command, publish dist/, Node version
├── package.json
├── public/               # static assets (copied to dist as-is)
│   └── robots.txt
├── src/
│   ├── components/       # .astro + .jsx (islands)
│   ├── data/             # copy, services catalog, sky tile classes
│   ├── layouts/          # BaseLayout (head/SEO), SiteLayout (chrome)
│   ├── pages/            # file-based routes
│   └── styles/
└── docs/                 # extended documentation (see below)
```

---

## Routes

| Path | Content |
|------|---------|
| `/` | Home hero (rotating images from `public/assets/home/`, 20s — [`src/data/homeHeroImages.js`](src/data/homeHeroImages.js)) |
| `/why-it-matters`, `/about`, `/services`, `/services/:slug` | Marketing + service catalog |
| `/projects`, `/contact`, `/video`, `/our-offices` | Portfolio, Netlify form, video, offices |
| `/404` | Not found |

Dynamic service pages use [`src/pages/services/[slug].astro`](src/pages/services/[slug].astro) and data in [`src/data/servicesCatalog.js`](src/data/servicesCatalog.js).

---

## Deployment (Netlify)

- **Build:** `npm ci && npm run build`
- **Publish directory:** `dist/`
- **Node:** `22.12.0` via `netlify.toml` and `.nvmrc`

No SPA fallback: each path is pre-rendered HTML; missing URLs should hit `404.html` per [Netlify static hosting](https://docs.netlify.com/manage-deploys/single-page-apps/).

**Sitemap:** Build emits `sitemap-index.xml`. **`public/robots.txt`** references `https://geodesign.co.in/sitemap-index.xml` — submit that URL in Google Search Console.

---

## Documentation

Additional guides under **`docs/`**:

| Doc | Description |
|-----|-------------|
| [**docs/PROJECT_SUMMARY.md**](docs/PROJECT_SUMMARY.md) | Route list, key files, scripts, deployment recap |
| [**docs/ASTRO_MIGRATION.md**](docs/ASTRO_MIGRATION.md) | Directory roles, Netlify, `src/data/` |
| [**docs/DESIGN_SYSTEM.md**](docs/DESIGN_SYSTEM.md) | Layout shells, sky tiles, typography, maps |
| [**docs/SERVICES_PAGES.md**](docs/SERVICES_PAGES.md) | `/services` hub/detail URLs and catalog |
| [**docs/SEO_AUDIT.md**](docs/SEO_AUDIT.md) | SEO audit notes and checklist |
| [**docs/TECH_DEBT.md**](docs/TECH_DEBT.md) | Backlog and improvement ideas |
| [**docs/git-local.example.md**](docs/git-local.example.md) | Sample Git commands |

**Private git notes:** copy [`docs/git-local.example.md`](docs/git-local.example.md) to **`docs/git-local.md`** for fork URLs or personal reminders. That file is **gitignored** and is not committed.

---

## License / ownership

Content and branding are property of **GeoDesign India Private Limited**. Code in this repository is maintained for deployment of the public marketing site.
