# Design system — GeoDesign web

This project aligns with the live marketing site at [https://geodesign.co.in](https://geodesign.co.in) (tone, offices, contact).

## Astro site (repo root)

Static pages use **`src/layouts/BaseLayout.astro`** for document shell and SEO.

- **Page body:** Prefer `.astro` sections for static content; use **React islands** (`@astrojs/react` + `client:*`) only for interactive blocks (contact form, projects gallery).
- **Layout parity:** Reproduce **`page-shell`** spacing and **sky tiles** via Tailwind classes aligned with [`src/data/skyTileClasses.js`](../src/data/skyTileClasses.js) tokens.
- **Typography:** Tailwind v4 in [`src/styles/global.css`](../src/styles/global.css); Inter + Montserrat via Google Fonts in `BaseLayout.astro`.
- **Maps / offices:** [`OfficeMapEmbed.astro`](../src/components/OfficeMapEmbed.astro) and contact tiles.

## Typography

- **Body:** Inter — Tailwind `font-sans`, `@theme` in `global.css`.
- **Headings / display:** Montserrat — Tailwind `font-display`.

## Page layout

### `page-shell` / `page-shell-white` (global)

Defined in [`src/styles/global.css`](../src/styles/global.css):

- Top padding clears the fixed header (`pt-28`).
- Default inner pages: `page-shell-white` (white canvas, tighter bottom padding) or `page-shell` (stone background).

### Marketing pages

Inner wrapper: **`max-w-7xl mx-auto w-full`** (`page-shell-inner`). Section content often uses **`py-8 md:py-10`**.

## Sky tiles (cards)

Shared classes live in **`src/data/skyTileClasses.js`**:

- **`SKY_OUTCOME_TILE_CLASS`** — large cards.
- **`SKY_FACTOR_TILE_CLASS`** — compact cards (Why It Matters, services hub).

## Google Maps

Embed URLs: `src/data/data.js` → **`mapEmbedUrls`**. Prefer **Share → Embed a map** from Google Maps.

## SEO base URL

- **`site`** in [`astro.config.mjs`](../astro.config.mjs) is **`https://geodesign.co.in`**; canonicals and OG in [`BaseLayout.astro`](../src/layouts/BaseLayout.astro).

## Netlify

- **`npm ci && npm run build`**, publish **`dist/`** — see [`netlify.toml`](../netlify.toml).

## Scroll

Astro performs full page navigations; the browser handles scroll position. No SPA `ScrollToTop` helper.
