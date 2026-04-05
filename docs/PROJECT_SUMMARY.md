# Project summary — GeoDesign React

## Overview

Marketing site for **GeoDesign** (geotechnical / soil testing, Tamil Nadu): React 18 SPA built with **Vite**, **Tailwind CSS**, **React Router**, **`react-helmet-async`**. Content is largely static modules under **`src/constants/`**.

**Production reference:** [https://geodesign.co.in](https://geodesign.co.in)

## Routes (`App.jsx`)

| Path | Page |
|------|------|
| `/` | Home (`Hero`) |
| `/why-it-matters` | Why It Matters (`IssueSection`) |
| `/about` | About (`AboutSection`) |
| `/services` | What We Do hub |
| `/services/:slug` | Service detail (catalog) |
| `/projects` | Who We Work With (`ProjectsSection`) |
| `/contact` | Contact (`ContactSection`, Netlify form) |
| `/video` | Video |
| `/our-offices` | Our Offices (maps + addresses) |
| `*` | 404 |

## Key files

- **`src/App.jsx`** — Router, `ScrollToTop`, `ErrorBoundary`, `HelmetProvider`, skip link.
- **`src/components/SEO.jsx`** — Meta, OG, Twitter, Organization JSON-LD.
- **`src/constants/data.js`** — Nav, copy, galleries, offices, **`soilIssueGroups`** (Why It Matters factors), **`importanceCards`**.
- **`src/constants/servicesCatalog.js`** — Geotechnical service hub + detail content, **`getServiceBySlug`**, section icons.
- **`src/constants/skyTileClasses.js`** — **`SKY_OUTCOME_TILE_CLASS`**, **`SKY_FACTOR_TILE_CLASS`** for shared card chrome.

## Components (high level)

- **Header** — Fixed nav, mobile menu.
- **Footer** — Copyright strip (`bg-slate-100`).
- **Hero** — Home only; full-bleed image, CTAs.
- **IssueSection** — Why It Matters: flat factor grid + “What you gain from testing”.
- **AboutSection** — Vision/mission grids; images fill columns on desktop.
- **ServicesSection** — Home “services” teaser (not the full `/services` hub).
- **ProjectsSection** — Used on `/projects` only; Fancybox gallery; client marquee.
- **ContactSection** — Two columns: trust copy + Netlify form.
- **VideoSection** — Lazy YouTube embed.
- **OfficeMapEmbed** — Google Maps iframe wrapper.

## Styling

- **Global:** `src/styles/index.css` — `page-shell`, design tokens.
- **Inner pages:** White shell + `max-w-7xl` + sky tiles (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)).

## Scripts

```bash
npm install
npm run dev      # Vite, port 3000
npm run build    # output dist/
npm run preview
npm run lint
```

## Deployment

**Netlify:** `npm run build`, publish **`dist`**, Node 20 (`netlify.toml`). Forms require Netlify-hosted build.

## Documentation index

| Doc | Purpose |
|-----|---------|
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Layout, tiles, typography, maps, SEO URL |
| [SERVICES_PAGES.md](./SERVICES_PAGES.md) | `/services` hub and PDF-aligned slugs |
| [TECH_DEBT.md](./TECH_DEBT.md) | Improvements backlog, notes |
| [SEO_AUDIT.md](./SEO_AUDIT.md) | Historical SEO checklist (verify dates/domains) |
| [git-local.example.md](./git-local.example.md) | Git commands template; copy to `git-local.md` (gitignored) |

## Tech stack

- React 18, react-router-dom 6, react-helmet-async  
- Vite 7, Tailwind 3, ESLint  
- Fancybox (CDN) for project gallery  

## Future ideas (non-blocking)

- Route-level `React.lazy` for code splitting  
- WebP/AVIF for `public/` images  
- Tests (RTL/Jest) for form and routes  
- Analytics (commented placeholders in `index.html`)
