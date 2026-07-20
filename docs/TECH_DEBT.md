# Technical debt & known issues

**Updated:** 18 July 2026 (V2)

> This file was rewritten for V2. The previous version documented a Vite + React SPA — CDN-loaded Fancybox, `react-vendor` manual chunks, route-level `React.lazy`, `ScrollToTop`. **None of that architecture exists.** The site is Astro static with three React islands.

---

## Current state

| Area | Status |
|------|--------|
| Build | 21 pages, clean |
| Heading structure | 1 H1/page, 0 skips (verified in compiled output) |
| Duplicate element ids | 0 |
| Images without `alt` | 0 |
| JSON-LD | 6 schema types, all parsing |
| JavaScript shipped | 0 KB on most routes |
| Tests | **None** — see below |

---

## Open debt, by priority

### High

**1. No automated tests or CI.**
The entire V2 programme was verified by ad-hoc scripts run against `dist/`. Those checks are reproducible but not committed, so nothing prevents a regression.

Worth encoding as a build-time or CI check:
- one H1 per page, no heading-level skips
- no duplicate element ids
- no `<img>` without `alt`
- every `srcset`/`src` candidate resolves on disk
- all JSON-LD parses
- all 20 routes present in the sitemap

That list is not hypothetical — **every one of those checks caught a real bug during V2.**

**2. Three hero images below usable resolution.**

| File | Size |
|------|------|
| `Railway.jpg` | 539×360 |
| `Soil-Testing.jpg` | 700×298 |
| `construction.jpg` | 800×579 |

Used full-bleed at `100vw`. Compression cannot help; they need ~1600px replacements. `hero-site.jpg` (1600×733) is fine.

**3. Image variant generation is manual and unguarded.**
WebP variants were produced by a one-off script that correctly refuses to upscale. Hand-written `srcset` in `.astro` files does not know which widths were actually produced — hardcoding a `1200w` candidate for a 1024px source ships a 404 and the image breaks. **This happened on `/about`.**

`homeHeroImages.js` avoids the problem by pairing sources with variants found on disk. Either extend that pattern to other images, or add the disk-existence check to CI.

### Medium

**4. Emoji used as iconography.**
`soilIssueGroups`, `credentials`, service icons, and section icons all use emoji. They render differently per OS/browser, cannot be colour-matched to the brand, and on service detail pages are assigned by **cycling an array by index** (`getSectionIcon`), so the icon bears no relationship to the content it sits above. A small inline SVG set would fix all three problems.

**5. Three card treatments remain slightly divergent.**
`SKY_OUTCOME_TILE_CLASS`, `SKY_FACTOR_TILE_CLASS`, and the ad-hoc white `factorCardClass` in `why-it-matters.astro`. Consolidating means touching 5 consuming files at once, which is why it was deferred.

**6. Gradient utility drift.**
`ContactForm.jsx` uses Tailwind v4 `bg-linear-to-r`; everything else uses v3-style `bg-gradient-to-r`. Both work; the mix is confusing.

**7. `prop-types` ships to production.**
Runtime prop validation in a TypeScript-configured project. Removable.

**8. Contact form has no offline handling.**
A submission on a flaky connection fails with a generic error and the user loses their message. Worth retaining form state on failure.

### Low

**9. Unreferenced large assets.**
`public/assets/web/logo.png` and `logo2.png` (2.1 MB each) are no longer referenced by anything. They cost **zero page weight** — an unreferenced file is never downloaded — but they bloat the repo. Keep as masters or delete.

**10. Gallery filename inconsistency.**
`gallery1–27.JPG` (uppercase) vs `gallery28–31.jpg`. `getGalleryImages()` works around it with an index threshold, which will break silently if images are added out of order.

**11. `docs/PROJECT_REPORT.md` is a point-in-time snapshot** dated 15 April 2026, pre-V2. Retained as history; do not treat as current.

---

## Deliberate decisions that look like debt

These are choices, not oversights. Do not "fix" them without reading the reasoning.

| Looks like | Actually |
|------------|----------|
| Two overlapping service catalogs | Deliberate two-tier model — see `SERVICES_PAGES.md` |
| Home page has only 116 words | Client decision; sections were built and removed |
| Promoted subsections still on Tier 2 pages | Anchors and internal links are load-bearing for SEO |
| Duplicated locality data across 7 pages | Rendered from one source; `lead` prop enforces uniqueness |
| FAQ is `<details>` not a React component | Free a11y, crawlable answers, zero JS |
| No `AggregateRating` schema | No genuine reviews — emitting it is a manual-action risk |
| `videoConfig.uploadDate` missing | Refusing to invent a date for structured data |
| Maps/YouTube behind facades | Deliberate; do not reinstate eager iframes |
| Hero has a hardcoded `min-height` | Required — see the flex-height trap below |

---

## The flex-height trap

`<body>` is `min-h-screen flex flex-col`, `<main>` is `flex-1`, the footer is `shrink-0`.

Any page whose content relies on `flex-1` **with no intrinsic height** is coupled to the footer's height. The V2 footer is much taller than V1's single copyright line, and pages relying on `flex-1` alone collapsed — the footer rose into mid-screen. Two pages carry explicit floors (`index.astro` hero, `404.astro` inner).

If you add a short page, give it a height floor. Use `svh`, not `vh`.

---

## Security

Unchanged from previous review and still sound: Netlify Forms with honeypot, no `dangerouslySetInnerHTML`, `rel="noopener noreferrer"` on external links, HTTPS throughout.

`JsonLd.astro` uses `set:html` — necessary because JSON-LD must not be HTML-escaped. Input is always our own static data, never user input, and `<` is escaped defensively.

Still worth adding: a Content Security Policy header (hosting-side).

---

## Browser support notes

- **`svh` units** — used for viewport-height sections. Universally supported as of 2026; `100vh` declared first as fallback.
- **`<details>`/`<summary>`** — universal.
- **WebP** — universal; original-format fallback retained in every `<picture>` regardless.
- **`color-mix()` / `inset-block`** — used in card hover styles, well supported.
