# Project summary — GeoDesign web

## Overview

Marketing site for **GeoDesign** (geotechnical / soil testing, Tamil Nadu).

**Stack:** **Astro 6** at the **repository root** — file-based routes under `src/pages/`, **`BaseLayout.astro`** for meta/OG/JSON-LD, Tailwind v4, `@astrojs/sitemap`, React islands (`@astrojs/react`) for the contact form and projects gallery. Shared copy in **`src/data/`**.

**Production reference:** [https://geodesign.co.in](https://geodesign.co.in)

## Routes (`src/pages/`)

| Path | Notes |
|------|--------|
| `/` | Home hero |
| `/why-it-matters` | Issue factors + importance cards |
| `/about` | About / vision / mission |
| `/services` | Services hub |
| `/services/:slug` | Service detail (`getStaticPaths`) |
| `/projects` | Gallery + clients (Fancybox island) |
| `/contact` | Netlify form island |
| `/video` | YouTube embed |
| `/our-offices` | Maps + addresses |
| `/404` | 404 page |

## Key files

- **`astro.config.mjs`** — `site`, integrations, Vite + Tailwind.
- **`src/layouts/BaseLayout.astro`**, **`SiteLayout.astro`** — Meta, shell, header/footer.
- **`src/data/data.js`**, **`servicesCatalog.js`**, **`skyTileClasses.js`** — Content and card tokens.

## Scripts

```bash
npm install
npm run dev      # Astro, port 4321
npm run build    # output dist/
npm run preview
```

## Deployment

**Netlify:** `npm ci && npm run build`, publish **`dist/`**, Node 20 — see **`netlify.toml`**.

## Documentation index

| Doc | Purpose |
|-----|---------|
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Layout, tiles, typography, maps, SEO URL |
| [SERVICES_PAGES.md](./SERVICES_PAGES.md) | `/services` hub and PDF-aligned slugs |
| [TECH_DEBT.md](./TECH_DEBT.md) | Improvements backlog |
| [SEO_AUDIT.md](./SEO_AUDIT.md) | SEO checklist |
| [ASTRO_MIGRATION.md](./ASTRO_MIGRATION.md) | Stack and layout map |

## Tech stack

Astro 6, Tailwind v4, `@astrojs/react`, `@astrojs/sitemap`, TypeScript (`tsconfig.json` extends Astro strict).
