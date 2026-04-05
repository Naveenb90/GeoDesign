---
name: geodesign-astro
description: >-
  Conventions for the GeoDesign Astro marketing site (geodesign.co.in) at repo root: static output,
  BaseLayout SEO/JSON-LD, React islands, Tailwind v4, Netlify build. Use when editing src/, Netlify,
  or migration docs.
---

# GeoDesign Astro — project conventions

## Stack

- **Astro 6** at the **repository root** — **`output: 'static'`** for SEO-first HTML per route.
- **React** only as **islands** (`@astrojs/react`).

## Production reference

Live site: [https://geodesign.co.in](https://geodesign.co.in). Match tone and layout parity when changing pages.

## Key paths

| Area | Location |
|------|----------|
| Site origin / sitemap base | [`astro.config.mjs`](../../../astro.config.mjs) — `site: 'https://geodesign.co.in'` |
| Global layout + meta + JSON-LD | [`src/layouts/BaseLayout.astro`](../../../src/layouts/BaseLayout.astro) |
| Pages (file-based routes) | [`src/pages/`](../../../src/pages/) |
| Styles (Tailwind v4) | [`src/styles/global.css`](../../../src/styles/global.css) |
| Public assets | [`public/`](../../../public/) |
| Netlify build | [`netlify.toml`](../../../netlify.toml) — `npm ci && npm run build`, publish `dist/` |

## Commands

```bash
npm install
npm run dev    # http://localhost:4321
npm run build && npm run preview
```

## SEO

- Prefer **native `<title>`, `<meta>`, `<link rel="canonical">`, OG/Twitter** in `BaseLayout.astro` (or page frontmatter).
- **`@astrojs/sitemap`** emits `sitemap-index.xml` at build; [`public/robots.txt`](../../../public/robots.txt) points to `https://geodesign.co.in/sitemap-index.xml`.

## React islands

- Use `@astrojs/react` with `client:load`, `client:visible`, or `client:idle` only where needed (e.g. contact form, projects gallery).
- Island components live under [`src/components/`](../../../src/components/) (`*.jsx`).

## Data

- Shared copy: [`src/data/`](../../../src/data/) (ported from the old `src/constants/`).

## Forms and hosting

- **Netlify Forms:** `data-netlify`, honeypot, hidden static form for detection; POST to `/` from islands.
- See [`docs/ASTRO_MIGRATION.md`](../../../docs/ASTRO_MIGRATION.md).

## Documentation

- [`docs/ASTRO_MIGRATION.md`](../../../docs/ASTRO_MIGRATION.md), [`docs/DESIGN_SYSTEM.md`](../../../docs/DESIGN_SYSTEM.md).
