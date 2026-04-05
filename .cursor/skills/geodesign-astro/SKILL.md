---
name: geodesign-astro
description: >-
  Conventions for the GeoDesign Astro marketing site (geodesign.co.in): static output,
  BaseLayout SEO/JSON-LD, React islands, Tailwind v4, Netlify build from astro/, and migration
  from the legacy Vite app. Use when editing astro/, Netlify config, or migration docs.
---

# GeoDesign Astro — project conventions

## Relationship to the legacy app

- **Target stack:** Astro 6 under [`astro/`](../../../astro/) — **static (`output: 'static'`)** for SEO-first HTML per route.
- **Legacy:** Vite + React SPA at repo root [`src/`](../../../src/) remains until routes are ported and production cuts over.

## Production reference

Live site: [https://geodesign.co.in](https://geodesign.co.in). Match tone and layout parity when migrating pages from the React app.

## Key paths

| Area | Location |
|------|----------|
| Site origin / sitemap base | [`astro/astro.config.mjs`](../../../astro/astro.config.mjs) — `site: 'https://geodesign.co.in'` |
| Global layout + meta + JSON-LD | [`astro/src/layouts/BaseLayout.astro`](../../../astro/src/layouts/BaseLayout.astro) |
| Pages (file-based routes) | [`astro/src/pages/`](../../../astro/src/pages/) |
| Styles (Tailwind v4) | [`astro/src/styles/global.css`](../../../astro/src/styles/global.css) |
| Public assets | [`astro/public/`](../../../astro/public/) |
| Netlify build | Root [`netlify.toml`](../../../netlify.toml) — `cd astro && npm ci && npm run build`, publish `astro/dist` |

## Commands

```bash
cd astro && npm install   # first time
cd astro && npm run dev   # http://localhost:4321 (default Astro port)
cd astro && npm run build && npm run preview
```

## SEO

- Prefer **native `<title>`, `<meta>`, `<link rel="canonical">`, OG/Twitter** in `BaseLayout.astro` (or page frontmatter) — not client-only helmet.
- **`@astrojs/sitemap`** emits `sitemap-index.xml` at build; [`astro/public/robots.txt`](../../../astro/public/robots.txt) points to `https://geodesign.co.in/sitemap-index.xml`.

## React islands

- Use `@astrojs/react` with `client:load`, `client:visible`, or `client:idle` only where needed (forms, mobile nav, galleries).
- Keep island components colocated under `astro/src/components/react/` (or similar) once ported from [`src/components/`](../../../src/components/).

## Data and maps

- During migration, reuse copy from [`src/constants/data.js`](../../../src/constants/data.js) — move shared values into `astro/src/` modules or env as you port.
- Google Maps: same `mapEmbedUrls` pattern; port [`OfficeMapEmbed`](../../../src/components/OfficeMapEmbed.jsx) as Astro component or island.

## Forms and hosting

- **Netlify Forms:** static HTML attributes (`data-netlify`, `name`, honeypot) in `.astro` or a React island; POST to `/` unchanged.
- Branch **`feat/astro-netlify`** uses Astro as the Netlify publish root — see [`docs/ASTRO_MIGRATION.md`](../../../docs/ASTRO_MIGRATION.md).

## Documentation

- Migration checklist and route parity: [`docs/ASTRO_MIGRATION.md`](../../../docs/ASTRO_MIGRATION.md).
- Design parity: [`docs/DESIGN_SYSTEM.md`](../../../docs/DESIGN_SYSTEM.md) (Astro subsection).
