# Design system — GeoDesign web

This project aligns with the live marketing site at [https://geodesign.co.in](https://geodesign.co.in) (tone, offices, contact).

## Astro app (`astro/`)

**Branch `feat/astro-netlify`.** Static pages use **`astro/src/layouts/BaseLayout.astro`** for document shell and SEO (replacing `react-helmet-async` for migrated routes).

- **Page body:** Prefer `.astro` sections for static content; use **React islands** (`@astrojs/react` + `client:*`) only for interactive blocks (nav, forms, galleries).
- **Layout parity:** Reproduce **`page-shell`** spacing and **sky tiles** via shared Astro components or Tailwind classes aligned with [`src/constants/skyTileClasses.js`](../src/constants/skyTileClasses.js) tokens.
- **Typography:** Tailwind v4 in [`astro/src/styles/global.css`](../astro/src/styles/global.css); align Inter / Montserrat with the legacy [`index.html`](../index.html) loading pattern when porting fonts.
- **Images:** Prefer Astro **`Image`** (or optimized assets) when migrating hero and galleries.
- **Maps / offices:** Port [`OfficeMapEmbed`](../src/components/OfficeMapEmbed.jsx) patterns into `.astro` or a small island.

## Legacy React SPA — Typography

- **Body:** Inter — Tailwind `font-sans`, CSS `--font-sans`.
- **Headings / display:** Montserrat — Tailwind `font-display`, CSS `--font-display` (used on Hero and some headings; many inner pages use bold sans only for H1).
- **Serif accent:** Playfair may appear in CSS tokens; **`index.html` loads Inter + Montserrat** — keep `index.html`, `tailwind.config.js`, and `src/styles/index.css` in sync if you add or remove families.

## Page layout

### `page-shell` (global)

Defined in `src/styles/index.css`:

- Top padding clears the fixed header (`pt-28`).
- Default background: `bg-stone-50`.

### Marketing pages (About, Why It Matters, What We Do, Projects, Contact, Our Offices, service hub/detail)

These routes **override** the shell for a consistent look:

- **`page-shell bg-white !pb-6 sm:!pb-8`** — white canvas, tighter bottom gap above the footer.
- Inner wrapper: **`max-w-7xl mx-auto w-full`**.
- Section content often uses **`py-8 md:py-10`** on the inner `<section>`.

**Home** uses the hero inside `page-shell` with a full-bleed background image.

**Video** (`VideoPage`) may still use the default `page-shell` only — align with the white shell when polishing parity.

## Sky tiles (cards)

Shared classes live in **`src/constants/skyTileClasses.js`**:

- **`SKY_OUTCOME_TILE_CLASS`** — large cards (e.g. “Protect Your Investment”, service detail topics, office panels, projects gallery panels).
- **`SKY_FACTOR_TILE_CLASS`** — compact cards (Why It Matters factor grid, What We Do hub links).

Issue Section factor tiles use **hover** lift/scale and border/shadow (see `IssueSection.jsx`); respect `prefers-reduced-motion`.

## Google Maps

Embed URLs: `src/constants/data.js` → **`mapEmbedUrls`** (`headOffice`, `branchOffice`). Prefer **Share → Embed a map** from Google Maps for accurate pins.

**`OfficeMapEmbed.jsx`** — sky-styled chrome (`rounded-2xl`, `border-sky-200/70`, ring). Used on **Our Offices** (and anywhere else maps appear).

## SEO base URL

- **Astro:** `site` in [`astro/astro.config.mjs`](../astro/astro.config.mjs) is **`https://geodesign.co.in`**; canonicals and OG in [`BaseLayout.astro`](../astro/src/layouts/BaseLayout.astro).
- **Legacy SPA:** **`src/components/SEO.jsx`** defaults `url` to **`https://geodesign.co.in`** for canonical, Open Graph, and JSON-LD.

## Netlify

- **Astro migration branch:** `cd astro && npm ci && npm run build`, publish **`astro/dist`** — see root [`netlify.toml`](../netlify.toml). No SPA catch-all for static routes.
- **Legacy:** `npm run build`, publish **`dist/`**; SPA fallback `/* → /index.html` in [`public/_redirects`](../public/_redirects) (not used when Astro is the publish root).
- **Forms:** Netlify Forms (`ContactSection.jsx` in legacy; port attributes to Astro when migrating `/contact`).

## Scroll

**`ScrollToTop`** in `App.jsx` scrolls to `(0,0)` on route changes (`pathname` / `search`).
