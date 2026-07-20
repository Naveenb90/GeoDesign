# Architecture

**Updated:** 18 July 2026
Production: [https://geodesign.co.in](https://geodesign.co.in)

Supersedes `PROJECT_SUMMARY.md` and the layout section of `ASTRO_MIGRATION.md`.

---

## Stack

**Astro 6 static site.** Not a React SPA — the Vite + React SPA that preceded it was
removed in April 2026. React survives only as islands.

| Layer | Technology | Location |
|---|---|---|
| Pages & routing | Astro, file-based, `output: 'static'` | `src/pages/` |
| Interactive widgets | React 19 islands (`@astrojs/react`) | `src/components/*.jsx` |
| Everything else | Zero-JS Astro components | `src/components/*.astro` |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` | `src/styles/global.css` |
| Document shell & SEO | `BaseLayout.astro` + `SiteLayout.astro` | `src/layouts/` |
| Structured data | `schema.js` + `JsonLd.astro` | `src/data/`, `src/components/` |
| Content | Static JS modules | `src/data/` |

Tailwind v4 is configured with `@theme` in `global.css`. **There is no
`tailwind.config.js`.**

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # serve the production build
```

Node ≥ 22.12.0 (`.nvmrc`). Deploy: Netlify runs `npm ci && npm run build`, publishes
`dist/`. See `netlify.toml`. No SPA catch-all — Astro emits real HTML per route.

## Routes — 20 indexed + 404

```
/                                          hero only
/about  /why-it-matters  /projects
/our-offices  /contact  /video  /404

/services                                  hub, both tiers
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

Both service tiers are served by one dynamic route, `src/pages/services/[slug].astro`,
which branches on which catalog owns the slug. See
[SERVICES_PAGES.md](./SERVICES_PAGES.md).

**Every URL above predates or was added during V2 and must not change.** `/404` is
`noindex` and excluded from the sitemap.

## React islands — only three

| Island | Directive | Why it must be JS |
|---|---|---|
| `ContactForm.jsx` | `client:visible` | Field validation, Netlify POST, `?service=` prefill |
| `ProjectsGallery.jsx` | `client:visible` | Fancybox lightbox, marquee pause control |
| `HeroGalleryBackground.jsx` | `client:load` | Timed hero rotation (`ROTATE_MS`, 10s) |

Everything else is a zero-JS `.astro` component and should stay that way. The FAQ
accordion, for instance, uses native `<details>`/`<summary>` rather than an island —
correct keyboard and screen-reader behaviour for free, answers stay crawlable.

**Never use `react-router-dom`.** Navigation is plain `<a href>`.

## Components

| Component | Role |
|---|---|
| `Header.astro` | Fixed header, pill nav, services dropdown, mobile sheet |
| `Footer.astro` | Four-column nav + NAP for both offices, on every page |
| `PageHero.astro` | Page header for non-service pages |
| `ServiceHero.astro` | Page header for service pages (adds icon, chips, CTA) |
| `SectionHead.astro` | Kicker + heading + intro within a page |
| `CtaBand.astro` | Reusable conversion band |
| `StatsBand.astro` | Credentials row |
| `ProcessSteps.astro` | Numbered process steps |
| `FaqAccordion.astro` | Native `<details>` FAQ; feeds FAQPage schema |
| `AreasWeServe.astro` | Locality lists; `lead` prop is required |
| `RelatedServices.astro` | Cross-links across both service tiers |
| `Breadcrumbs.astro` | Visual trail (schema emitted separately) |
| `PageToc.astro` | Sticky scroll-spy TOC for long pages |
| `CommercialServiceBody.astro` | Renders a Tier 1 service page |
| `Icon.astro` | Inline SVG icon set |
| `JsonLd.astro` | Serialises a JSON-LD block |
| `Office*.astro` | Office tile, phone row, click-to-load map facade |

## Data layer

All content lives in `src/data/`. No CMS.

| File | Contains |
|---|---|
| `data.js` | Nav links, soil issue groups, importance cards, about points, gallery, client logos, contact info, map URLs, video config |
| `commercialServices.js` | Tier 1 — 7 commercial service pages |
| `servicesCatalog.js` | Tier 2 — 5 technical pages, 41 subsections, section-icon rules |
| `serviceAreas.js` | Locality data for Chennai and Coimbatore |
| `credentials.js` | Trust statistics for `StatsBand` |
| `schema.js` | All structured-data builders |
| `homeHeroImages.js` | Reads `public/assets/home/` at build time, pairing each source with its generated WebP variants |
| `skyTileClasses.js` | Shared Tailwind tile class tokens |

`homeHeroImages.js` scanning the filesystem at build time means **adding an image file
to `public/assets/home/` changes the hero with no code change.**

## Forms

Netlify Forms only. Each form needs a static hidden copy in the `.astro` page for
Netlify's build-time detection; the React island POSTs to `/`.

**Never rename `form-name` or an existing field name** — it breaks continuity with
existing submissions. See [`../CLAUDE.md`](../CLAUDE.md#key-conventions).

## SEO shell

`BaseLayout.astro` owns every `<head>` tag. Props: `title`, `description`,
`canonicalPath`, `ogImagePath`, `robotsNoindex`, `schemas`. Details in
[SEO.md](./SEO.md).
