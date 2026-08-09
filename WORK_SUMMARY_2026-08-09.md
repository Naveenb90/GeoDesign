# Work summary — 9 August 2026

## Completed today

**Navigation & link test (site-wide).**
Full link/reachability audit against the production build: 20 internal link targets,
0 broken; every page reachable within one click of home; header nav, services dropdown,
mobile menu, breadcrumbs, CTA prefill links and in-page anchors all resolve; external
links carry `rel="noopener"`.

**Verified the two content documents are fully applied.**
- `GEO DESIGN - TITLE DESCRIPTION.docx` — confirmed live on all four Chennai service
  pages (meta title, description, keywords, slug, canonical; brand normalised to the
  one-word "GeoDesign"). No changes needed.
- `SOIL TESTING - GEO DESIGN.docx` — body copy renders verbatim (all 91 sentences),
  Areas-We-Serve matches, CTA is the confirmed "Get Free Consultation".
- Closed the one image gap: added a descriptive `alt` + `title` to the `/video` poster
  (`maxresdefault.jpg`). Decorative hero, footer-logo and client-logo images correctly
  left with empty alt (accessibility best practice), per the agreed scope.

**Applied the new Chennai office address (from `TECHNICAL SEO FOR GEO DESIGN.docx`).**
- New address: `1st Floor, DJR Complex, 286, 1st Street, Bharathi Nagar, Noothencheri,
  Vengavasal, Tambaram, Chennai - 600126` (replaces `No. 15, Periyar Pathai,
  Choolaimedu, Chennai - 600094`).
- New coordinates: `12.898465, 80.1746741` (replaces `13.0924, 80.2197`).
- Changed in `src/data/data.js` (branch address + map embed) and `src/data/schema.js`
  (branch geo). Propagates automatically to the footer NAP, `/our-offices`, `/contact`,
  and the Organization / ProfessionalService structured data.
- Rebuilt and verified: old address and coordinates gone from every file; new address
  present across all 21 pages; all JSON-LD still parses.

**Added a local-run guide.**
Created `docs/RUNNING_LOCALLY.md` (prerequisites, install, dev/build/preview,
troubleshooting) and linked it from `docs/README.md`.

---

## TECHNICAL SEO FOR GEO DESIGN.docx — implementation status

**All items now implemented and verified in the build.**

| # | Item in the document | Status |
|---|---|---|
| 1 | New Chennai office address + coordinates | **Done** |
| 2 | Canonical fix — add trailing slash on the 4 Chennai service pages | **Done** |
| 3 | Google Search Console verification `<meta>` on the home page | **Done** |
| 4 | Google Analytics 4 (`gtag.js`, `G-3WW93MWR7V`) | **Done** |
| 5 | Per-page Open Graph + Twitter Card tags (incl. per-page `og:image`) | **Done** |
| 6 | Per-page `ProfessionalService` JSON-LD (new address, hours, serviceType) | **Done** |
| 7 | Per-page `BreadcrumbList` + `FAQPage` JSON-LD | **Done** (already present) |

### What was changed (second session)

- **Canonical trailing slash** — the four client-document pages now emit
  `.../<slug>/` for both `<link rel="canonical">` and `og:url`; all other routes keep
  the site's no-trailing-slash convention. (`src/pages/services/[slug].astro`)
- **GA4** — `gtag.js` for `G-3WW93MWR7V` added site-wide in `BaseLayout.astro`
  (`async`, off the render path); present on all 21 pages.
- **Search Console verification** — `google-site-verification` meta added to the home
  page only, via the head slot in `index.astro`.
- **Per-page OG / Twitter** — added `ogImageAlt` and `twitterDescription` props through
  `SiteLayout` → `BaseLayout`; the four pages now set the doc's per-page `og:image`,
  `og:image:alt` and `twitter:description`.
- **OG images created** — four purpose-built **1200×630** branded cards generated at
  the exact paths the doc specifies, in `public/assets/images/`
  (`soil-testing-construction-chennai.webp`, `pile-foundation-chennai.webp`,
  `bridge-load-test-chennai.webp`, `electrical-resistivity-test-chennai.webp`). Built
  from high-resolution gallery photos (no upscaling) with a title + logo overlay.
- **ProfessionalService JSON-LD** — new `chennaiOfficeSchema(slug)` builder in
  `schema.js` emits the Chennai office node (new address, geo, Mon–Sun 09:00–17:00,
  `priceRange`, per-service `serviceType`) on the four pages only.

### Deliberate deviations from the document (to avoid shipping invalid/broken markup)

- **Brand normalised to one-word "GeoDesign"** in OG tags, image alts and schema
  `name` (the doc uses "Geo Design"). Consistent with the rest of the site.
- **Schema `@id`** uses the existing Chennai office node
  (`https://geodesign.co.in/our-offices#chennai`) instead of the doc's `#organization`,
  which already belongs to the site-wide `Organization` node — reusing it would create
  two nodes with one `@id` but different `@type`, an invalid graph.
- **Placeholder `sameAs` omitted** — the doc's `sameAs` were empty profile stubs
  (`facebook.com/`, `linkedin.com/company/`); publishing them as broken links would hurt,
  not help. Add real Facebook/LinkedIn URLs and they can be included.
- **Breadcrumb label** kept as the site's "What We Do" (doc says "Services") to match
  the visible navigation; the `BreadcrumbList` structure and `FAQPage` were already
  emitted from page data.

### Verification (against the compiled `dist/`)

- Canonical trailing slash correct on the 4 pages; control page unchanged.
- Per-page `og:image` / `og:image:alt` / `twitter:description` correct on all 4.
- GA4 present on all 21 pages; verification meta on home only.
- `ProfessionalService` on the 4 pages only, single consistent `@id`.
- All 54 JSON-LD blocks parse; one H1 per page; no image missing `alt`.

---

## Also outstanding (unchanged from before today)

- Optional follow-ups on the SEO work: supply real Facebook/LinkedIn URLs to populate
  `sameAs`, and (if wanted) verify the GA4 property is receiving hits after deploy.
- Standing client-input items remain as tracked in
  [`docs/TECH_DEBT.md`](./docs/TECH_DEBT.md) (drafted service pages, Coimbatore
  locality list, hero image replacements, `videoConfig.uploadDate`, old→new slug
  redirects).
- Git commit of today's changes is yours to run (sandbox git is unavailable).
