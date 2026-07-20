# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev       # Dev server at http://localhost:4321
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

Node ≥ 22.12.0 required (see `.nvmrc`). Deployment is via Netlify: `npm ci && npm run build`, publish `dist/`.

## Architecture

**Marketing site for GeoDesign** (geotechnical/soil testing, Tamil Nadu). Production: https://geodesign.co.in

This is an **Astro 6 static site** — not a React SPA. React is used only as islands (`@astrojs/react`) for interactive components. The legacy Vite+React SPA has been removed.

### Framework roles

| Layer | Technology | Location |
|-------|-----------|----------|
| Pages & routing | Astro (file-based, `output: 'static'`) | `src/pages/` |
| Interactive widgets | React islands (`.jsx`) | `src/components/` |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) | `src/styles/global.css` |
| Global layout/SEO | `BaseLayout.astro` + `SiteLayout.astro` | `src/layouts/` |
| Structured data | `src/data/schema.js` + `JsonLd.astro` | — |
| Shared data/copy | Static JS files | `src/data/` |

### React islands (only 3 interactive components)

- **`ContactForm.jsx`** — Netlify Forms with `useState` validation, honeypot spam protection, POST to `/` with `form-name: 'contact'`, `aria-live` announcements. Pre-selects the service from `?service=<slug>`. `message` is optional.
- **`ProjectsGallery.jsx`** — Fancybox lightbox + CSS marquee for client logos, with a pause control (WCAG 2.2.2). Async-loads Fancybox.
- **`HeroGalleryBackground.jsx`** — Home hero image rotation (`ROTATE_MS`, currently **10s**), rendered as `<picture>` with WebP sources.

Islands use `client:load`, `client:visible`, or `client:idle` directives in Astro pages. Never use `react-router-dom` — use plain `<a href>` for navigation.

**Everything else is a zero-JS `.astro` component, and should stay that way.** The FAQ accordion, for example, uses native `<details>`/`<summary>` rather than an island — correct keyboard/screen-reader behaviour for free, and the answers stay crawlable for FAQPage schema.

### Astro components

| Component | Purpose |
|---|---|
| `Header.astro` | Fixed header, pill nav, **services dropdown**, mobile sheet |
| `Footer.astro` | Four-column nav + NAP for both offices (on every page) |
| `SectionHead.astro` | Kicker + heading + intro; level via `as` |
| `CtaBand.astro` | Reusable conversion band; heading id derived from text |
| `StatsBand.astro` | Credentials row from `credentials.js` |
| `ProcessSteps.astro` | Numbered steps; `headingLevel` prop |
| `FaqAccordion.astro` | Native `<details>`; feeds FAQPage schema |
| `AreasWeServe.astro` | Locality lists from `serviceAreas.js`; **`lead` is required** |
| `RelatedServices.astro` | Cross-links between service pages |
| `Breadcrumbs.astro` | Visual trail (schema emitted separately) |
| `PageToc.astro` | Sticky scroll-spy TOC for long pages |
| `CommercialServiceBody.astro` | Renders a Tier 1 service page |
| `JsonLd.astro` | Serialises a JSON-LD block |
| `Office*.astro` | Office tiles, phone row, click-to-load map facade |

### Data layer

All content is in static JS files in `src/data/`:

- `data.js` — Nav links, project metadata, client logos, soil issue groups, contact info, map URLs, video config
- `commercialServices.js` — **Tier 1**: 7 commercial service pages (long-form landing pages)
- `servicesCatalog.js` — **Tier 2**: 5 technical discipline pages, 41 subsections
- `serviceAreas.js` — Locality data for "Areas We Serve" (Chennai + Coimbatore)
- `credentials.js` — Trust stats used by `StatsBand`
- `schema.js` — All structured-data builders
- `homeHeroImages.js` — Reads `public/assets/home/` at build time, pairing each source with its generated `-<width>.webp` variants
- `skyTileClasses.js` — Reusable Tailwind tile class tokens

### The two-tier services model — read before editing services

The site deliberately runs **two taxonomies** over overlapping content:

- **Tier 1 — commercial** (`commercialServices.js`): what a customer searches for and buys. Long-form pages with intro, why-it-matters, process, FAQ, areas served.
- **Tier 2 — technical** (`servicesCatalog.js`): engineering disciplines. The reference depth that proves competence.

Both live under `/services/:slug`, routed by a single `[slug].astro` that branches on which catalog owns the slug. **Tier 1 links down, Tier 2 links up.** That reciprocal linking is what stops the two competing for the same queries.

Three Tier 2 subsections were *promoted* to Tier 1 pages (electrical resistivity, plate load, pile foundation). They keep their original anchor and body but carry a `promotedTo` field rendering a "Full service →" link. **Never delete a promoted subsection** — the anchor and internal link are load-bearing.

### SEO pattern

`BaseLayout.astro` handles all SEO. Props: `title`, `description`, `canonicalPath`, `ogImagePath`, `robotsNoindex`, `schemas`.

- Canonical URLs built from `Astro.site` (`https://geodesign.co.in`)
- Titles formatted as `"${title} | GeoDesign"`
- `Organization` JSON-LD site-wide, generated from `contactInfo` — never hand-written
- Page-specific schema via the `schemas` array: `Service`, `FAQPage`, `BreadcrumbList`, `ProfessionalService` (×2 on `/our-offices`), `VideoObject`
- `@astrojs/sitemap` emits `sitemap-index.xml` at build

**`ogImagePath` defaults to `/assets/web/og-image.jpg`** — a purpose-built 1200×630 crop. `og:image:width`/`height` are hardcoded to 1200×630, so **do not point `ogImagePath` at an arbitrary photo** without correcting those tags. (This previously pointed at a rotating hero image, so dropping a file into `public/assets/home/` silently changed the social card.)

**Never emit `AggregateRating` or `Review` schema** without genuine, verifiable reviews — it is a manual-action risk.

### Routes (20 indexed + 404)

```
/  /about  /why-it-matters  /projects  /our-offices  /contact  /video  /404

/services                                  (hub — both tiers)
/services/soil-testing                     ┐
/services/pile-foundation                  │
/services/plate-load-test                  │ Tier 1
/services/pile-load-test                   │ commercial
/services/bridge-load-test                 │
/services/electrical-resistivity-test      │
/services/topographical-survey             ┘
/services/drilling-sampling                ┐
/services/foundation-recommendations       │ Tier 2
/services/specialised-field-testing        │ technical
/services/laboratory-tests                 │
/services/tests-on-rock                    ┘
```

**All original URLs are preserved.** Never change or remove one.

## Key conventions

- **No SPA routing** — every navigation uses Astro page links.
- **Forms** — Netlify Forms only. A static hidden form in the `.astro` page enables Netlify detection; the React island POSTs to `/`. **Never rename `form-name` or existing field names** — it breaks submission history.
- **Tailwind v4** — configured via `@theme` in `global.css`, not `tailwind.config.js`. Custom utilities: `.page-shell-white`, `.page-shell-inner`, `.animate-marquee`. Animations respect `prefers-reduced-motion`.
- **Headings** — exactly one H1 per page, no level skips. Components rendering H3 by default (`ProcessSteps`, `AreasWeServe`, `FaqAccordion`) take a `headingLevel` prop; pass `h2` if placing them directly under the page H1.
- **Images** — `<picture>` with WebP `srcset` and the original as fallback. Variants are named `<base>-<width>.webp`. Every non-decorative image needs real `alt` **and** a `title` attribute (explicit client requirement).
- **Third parties** — Google Maps and YouTube sit behind click-to-load facades. Do not reinstate eager iframes; they set cookies and cost hundreds of KB before anyone interacts.
- **Fonts** — loaded via `rel="preload" as="style"` + `onload`, with a `<noscript>` fallback, so they do not block first render. All four Inter weights and both Montserrat weights are in use; nothing can be trimmed from the request.
- **TypeScript** — `tsconfig.json` extends `astro/tsconfigs/strict`; JSX runtime is `react-jsx`.

## Layout trap — read before touching page height

`<body>` is `min-h-screen flex flex-col`, `<main>` is `flex-1`, the footer is `shrink-0`.

Any page whose content relies on `flex-1` **with no intrinsic height** is coupled to the footer's height. The footer grew substantially in V2 (four columns, 27 links, two addresses), and pages relying on `flex-1` alone collapsed — the footer rose into mid-screen. Two pages therefore carry explicit floors:

- `index.astro` — hero uses `.hero-full` (`100svh`, `100vh` fallback, landscape cap)
- `404.astro` — inner uses `min-h-[60svh]`

Use `svh`, not `vh`, for viewport-height heroes: on mobile `svh` measures with browser chrome visible, so the layout does not jump as the URL bar hides.

## Home page

**Hero-only, by decision.** A credentials band, services grid, why-it-matters teaser, and CTA were built and then removed at the client's direction — the footer already carries every service link on every page, so those sections duplicated links without extending reach.

The trade-off is recorded: the page carries ~116 body words and leans on the hero copy, title, and description for topical relevance. If homepage rankings slip, the fix is prose, not a link grid.

## Verifying changes

Astro **inlines small `<style>` blocks into the HTML** rather than emitting them to `_astro/*.css`. When checking whether a scoped style shipped, grep the built HTML too — grepping only the CSS bundle produces false negatives.

Worth checking after any structural change: one H1 per page, no heading-level skips, no duplicate element ids, no `<img>` without `alt`, all JSON-LD parsing, and that all 20 routes still build.

## Docs

`docs/` holds `DESIGN_SYSTEM.md`, `ASTRO_MIGRATION.md`, `TECH_DEBT.md`, `SERVICES_PAGES.md`, `SEO_AUDIT.md`, plus point-in-time reports. The V2 programme is recorded in `req/ANALYSIS_AND_PLAN.md` and `req/IMPLEMENTATION_RECORD.md`.

## Open items needing client input

- **Three Tier 1 pages are drafted, not client-supplied** — `plate-load-test`, `pile-load-test`, `topographical-survey`. Flagged `reviewStatus: 'drafted-needs-review'` in `commercialServices.js`.
- **Coimbatore locality list is a draft** — flagged in `serviceAreas.js`. The Chennai list is verbatim from client documents.
- **`videoConfig.uploadDate` is unset** — `VideoObject` omits `uploadDate` until a real date is supplied. Do not invent one.
- **Three hero images are below usable resolution** for full-bleed use (`Railway.jpg` 539×360, `Soil-Testing.jpg` 700×298, `construction.jpg` 800×579). They need ~1600px replacements; compression cannot recover detail that is not there.
- **Pile foundation scope** — GeoDesign provides foundation *design and supervision*, not pile installation. The supplied source copy described construction; it was deliberately rewritten. Do not reinstate.
