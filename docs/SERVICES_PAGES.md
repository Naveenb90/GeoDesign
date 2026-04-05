# Geotechnical service pages (PDF-aligned)

Source: `public/assets/services/Geotechnical Investigation - SEO.pdf`. Plain-text extraction does not preserve red highlights; **numbered sections 1–5** in the PDF are modeled as **five top-level routes** under **What We Do** (`/services`).

## URL map

| Path | Page title (H1) |
|------|-----------------|
| `/services` | What We Do (hub) |
| `/services/drilling-sampling` | Drilling & Sampling |
| `/services/foundation-recommendations` | Foundation Recommendations |
| `/services/specialised-field-testing` | Specialised Field Testing |
| `/services/laboratory-tests` | Laboratory Tests |
| `/services/tests-on-rock` | Tests On Rock |

## Behaviour

- **Hub** (`/services`): Lists all five services; **Drilling & Sampling** is visually marked **Start here** (default entry for investigation scope). Uses compact sky tiles (`SKY_FACTOR_TILE_CLASS`).
- **Detail** (`/services/:slug`): One H1, intro, breadcrumb (Home → What We Do → topic), **topic cards** in a grid (large sky tiles — `SKY_OUTCOME_TILE_CLASS`). No separate “Topics covered” heading — cards follow the intro.
- **SEO**: Per-page `metaTitle`, `metaDescription`, `keywords` in `src/constants/servicesCatalog.js`; `<SEO />` on each route.

## Code

- Catalog: `src/constants/servicesCatalog.js`
- Hub: `src/pages/ServicesPage.jsx`
- Detail: `src/pages/ServiceDetailPage.jsx`

## Sitemap

Service URLs are listed in `public/sitemap.xml` under **`https://geodesign.co.in`** (keep in sync with `SEO.jsx` and Search Console).
