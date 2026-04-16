# Project summary — GeoDesign web

> **Start here:** [README.md](../README.md)

## Overview

Marketing site for **GeoDesign** (geotechnical / soil testing, Tamil Nadu).

**Stack:** **Astro 6** at the **repository root** — file-based routes under `src/pages/`, **`BaseLayout.astro`** for meta/OG/JSON-LD, Tailwind v4, `@astrojs/sitemap`, React islands (`@astrojs/react`) for the contact form and projects gallery. Shared copy in **`src/data/`**.

**Production reference:** [https://geodesign.co.in](https://geodesign.co.in)

## Routes (`src/pages/`)

| Path | Notes |
|------|--------|
| `/` | Home hero; rotating background images (3 assets, 20s) via `HeroGalleryBackground.jsx` |
| `/why-it-matters` | Issue factors + importance cards |
| `/about` | About / vision / mission |
| `/services` | Services hub |
| `/services/:slug` | Service detail (`getStaticPaths`) |
| `/projects` | Gallery + clients (Fancybox island) |
| `/contact` | Netlify form island |
| `/video` | YouTube embed (page-shell-white + title) |
| `/our-offices` | Maps + addresses |
| `/404` | 404 page |

## Key files

- **`astro.config.mjs`** — `site`, integrations, Vite + Tailwind.
- **`src/layouts/BaseLayout.astro`**, **`SiteLayout.astro`** — Meta, shell, header/footer.
- **`src/components/Header.astro`**, **`Footer.astro`** — Shared chrome (`bg-slate-100`, nav pill + CTA).
- **`src/components/HeroGalleryBackground.jsx`** — Home hero image rotation.
- **`src/data/data.js`**, **`servicesCatalog.js`**, **`skyTileClasses.js`**, **`homeHeroImages.js`** — Content and card tokens; home hero asset list (`public/assets/home/`).

## Scripts

```bash
npm install
npm run dev      # Astro, port 4321
npm run build    # output dist/
npm run preview
```

## Deployment

**Netlify:** `npm ci && npm run build`, publish **`dist/`**, Node **22.12.0** — see **`netlify.toml`** and **`.nvmrc`**.

## Tech stack

Astro 6, Tailwind v4, `@astrojs/react`, `@astrojs/sitemap`, TypeScript (`tsconfig.json` extends Astro strict).
