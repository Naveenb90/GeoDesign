# Design system — GeoDesign web

This project aligns with the live marketing site at [https://geodesign.co.in](https://geodesign.co.in) (tone, offices, contact).

## Astro site (repo root)

Static pages use **`src/layouts/BaseLayout.astro`** for document shell and SEO.

- **Page body:** Prefer `.astro` sections for static content; use **React islands** (`@astrojs/react` + `client:*`) only for interactive blocks (contact form, projects gallery, home hero background).
- **Layout parity:** Reproduce **`page-shell`** spacing and **sky tiles** via Tailwind classes aligned with [`src/data/skyTileClasses.js`](../src/data/skyTileClasses.js) tokens.
- **Typography:** Tailwind v4 in [`src/styles/global.css`](../src/styles/global.css); Inter + Montserrat via Google Fonts in `BaseLayout.astro`.
- **Maps / offices:** [`OfficeMapEmbed.astro`](../src/components/OfficeMapEmbed.astro) and contact tiles.

## Typography

- **Body:** Inter — Tailwind `font-sans`, `@theme` in `global.css`.
- **Headings / display:** Montserrat — Tailwind `font-display`.
- **Inner pages:** Primary headings use **`font-display`**, **`font-bold`**, **`text-slate-900`**, and a consistent scale (`text-3xl` → `md:text-5xl` for main H1s where applicable). Supporting text uses **`text-slate-600`** / **`text-slate-700`** with relaxed leading.

## Chrome (header & footer)

Implemented in [`Header.astro`](../src/components/Header.astro) and [`Footer.astro`](../src/components/Footer.astro):

- **Background:** **`bg-slate-100`** with **`border-slate-200`** so header and footer match.
- **Desktop navigation:** Single-row **pill strip** (`rounded-full`, white/translucent bar, sky active state) plus a **gradient “Get in Touch”** button; grid uses **`auto` + `minmax(0,1fr)`** so links do not collide with the logo block.
- **Mobile:** Hamburger + full-width sheet; unchanged pattern from desktop styling tokens.

## Home page (`/`)

- **Hero background:** Put images in **`public/assets/home/`** — no list to edit. [`src/data/homeHeroImages.js`](../src/data/homeHeroImages.js) reads that folder at **build time** (all `jpg/jpeg/png/gif/webp/avif`, alphabetical order). [`HeroGalleryBackground.jsx`](../src/components/HeroGalleryBackground.jsx) cycles them every **20 seconds** (see `ROTATE_MS`). After adding files, rebuild (or restart dev) so the scan runs again.
- **Hero content:** Frosted panel uses **`bg-white/82`**, light border, **no backdrop blur** on the photo (avoids muddy backgrounds). Primary headline uses **`font-display`** from `sm` breakpoint up.
- **OG image** defaults: site-wide fallback in [`BaseLayout.astro`](../src/layouts/BaseLayout.astro) uses **`/assets/home/hero-site.jpg`**. The home page passes the first hero asset via `ogImagePath` unless overridden.

## Page layout

### `page-shell` / `page-shell-white` (global)

Defined in [`src/styles/global.css`](../src/styles/global.css):

- Top padding clears the fixed header (`pt-28`).
- **Default for marketing inner pages:** **`page-shell-white`** — white canvas, consistent horizontal padding.
- **`page-shell`:** Stone background (`bg-stone-50`) — use when a non-white band is intentional (most routes use white for continuity with the header).

### Marketing pages

Inner wrapper: **`page-shell-inner`** (`max-w-7xl mx-auto w-full`). Sections typically use **`py-8 md:py-10`**.

### Video page

Uses **`page-shell-white`** + centered **H1** + **16:9** embed in a bordered, rounded container (slate border/ring), aligned with other inner pages.

## Sky tiles (cards)

Shared classes live in **`src/data/skyTileClasses.js`**:

- **`SKY_OUTCOME_TILE_CLASS`** — large cards.
- **`SKY_FACTOR_TILE_CLASS`** — compact cards (Why It Matters, services hub).

## Google Maps

Embed URLs: `src/data/data.js` → **`mapEmbedUrls`**. Prefer **Share → Embed a map** from Google Maps.

## SEO base URL

- **`site`** in [`astro.config.mjs`](../astro.config.mjs) is **`https://geodesign.co.in`**; canonicals and OG in [`BaseLayout.astro`](../src/layouts/BaseLayout.astro).

## Netlify

- **`npm ci && npm run build`**, publish **`dist/`**, Node **22.12.0** — see [`netlify.toml`](../netlify.toml) and **`.nvmrc`**.

## Scroll

Astro performs full page navigations; the browser handles scroll position. No SPA `ScrollToTop` helper.
