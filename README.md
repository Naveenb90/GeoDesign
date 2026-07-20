# GeoDesign — marketing site

Static, SEO-first site for **[GeoDesign](https://geodesign.co.in)** (geotechnical
engineering, Tamil Nadu). Built with **Astro 6**; ships real HTML per URL and uses
**React only where interactivity genuinely requires it**.

---

## Quick start

**Requirements:** [Node.js](https://nodejs.org/) **≥ 22.12.0** — see
[`.nvmrc`](.nvmrc) and `engines` in [`package.json`](package.json).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output: dist/
npm run preview  # test the production build locally
```

---

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro 6](https://astro.build/), `output: 'static'` |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) — [`src/styles/global.css`](src/styles/global.css) |
| Islands | [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) — 3 components only |
| SEO | [`BaseLayout.astro`](src/layouts/BaseLayout.astro) + [`src/data/schema.js`](src/data/schema.js); [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |
| Hosting | [Netlify](https://www.netlify.com/) — [`netlify.toml`](netlify.toml) |

Canonical origin `https://geodesign.co.in`, set in
[`astro.config.mjs`](astro.config.mjs).

Full detail: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

---

## Project layout

```
├── astro.config.mjs      # site URL, integrations, Vite + Tailwind
├── netlify.toml          # build command, publish dist/, Node version
├── CLAUDE.md             # working guide for agents and developers
├── public/               # static assets, copied to dist as-is
├── src/
│   ├── components/       # .astro (zero-JS) + .jsx (islands)
│   ├── data/             # all content and structured-data builders
│   ├── layouts/          # BaseLayout (head/SEO), SiteLayout (chrome)
│   ├── pages/            # file-based routes
│   └── styles/
├── docs/                 # documentation — start at docs/README.md
└── req/                  # V2 requirement source + archival records
```

---

## Routes

20 indexed routes plus `/404`. Service pages run on a **two-tier model** — 7 commercial
pages and 5 technical reference pages, both served by one dynamic route.

Full route map: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md#routes--20-indexed--404).
Services model: [docs/SERVICES_PAGES.md](docs/SERVICES_PAGES.md).

**Existing URLs must not change** — the site has a decade of accumulated ranking.

---

## Deployment

- **Build:** `npm ci && npm run build`
- **Publish:** `dist/`
- **Node:** `22.12.0` via `netlify.toml` and `.nvmrc`

No SPA fallback — every path is pre-rendered HTML, and missing URLs hit `404.html`.

The build emits `sitemap-index.xml`; [`public/robots.txt`](public/robots.txt) points at
it. Submit that URL in Google Search Console.

**Before deploying,** read the pre-deploy checklist in
[docs/SEO.md](docs/SEO.md#before-the-next-deploy) — in particular, export a Search
Console baseline first.

---

## Documentation

**Start at [docs/README.md](docs/README.md)** — the index and single-source-of-truth map.

| Doc | Scope |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Working guide: conventions, traps, rules |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Stack, routes, components, data layer |
| [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Brand tokens, layout, components, images |
| [docs/SERVICES_PAGES.md](docs/SERVICES_PAGES.md) | Two-tier services model |
| [docs/SEO.md](docs/SEO.md) | Audit, structured data, ongoing rules |
| [docs/TECH_DEBT.md](docs/TECH_DEBT.md) | Open debt, traps, items awaiting client input |

Every non-obvious fact has **exactly one owning document**; the others link to it.

**Private git notes:** copy [`docs/git-local.example.md`](docs/git-local.example.md) to
`docs/git-local.md` for fork URLs or personal reminders. That file is gitignored.

---

## License / ownership

Content and branding are the property of **GeoDesign India Private Limited**. Code in
this repository is maintained for deployment of the public marketing site.
