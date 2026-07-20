# Technical debt, traps & open items

**Updated:** 18 July 2026

The single home for **what is broken, what is risky, and what is waiting on someone**.
Other documents link here rather than restating these.

---

## Current state

| Check | Result |
|---|---|
| Build | 21 pages, clean |
| One H1 per page, no level skips | Pass |
| Duplicate element ids | 0 |
| `<img>` without `alt` | 0 |
| `srcset`/`src` candidates resolving | 65/65 |
| JSON-LD parsing | Pass, 6 schema types |
| Emoji in UI | 0 |
| JavaScript shipped | 0 KB on most routes |
| Automated tests | **None** |

---

## Open debt

### High

**1. No automated tests or CI.**
Everything above was verified by ad-hoc scripts run against `dist/`. They are
reproducible but uncommitted, so nothing prevents a regression.

Worth encoding as a CI step:

- one H1 per page, no heading-level skips
- no duplicate element ids
- no `<img>` without `alt`
- every `srcset`/`src` candidate resolves on disk
- all JSON-LD parses
- all 20 routes present in the sitemap

Not hypothetical — **every one of those checks caught a real bug during V2.**

**2. Three hero images are below usable resolution.**

| File | Size | Needed |
|---|---|---|
| `Railway.jpg` | 539×360 | ~1600px |
| `Soil-Testing.jpg` | 700×298 | ~1600px |
| `construction.jpg` | 800×579 | ~1600px |
| `hero-site.jpg` | 1600×733 | OK |

Used full-bleed at `100vw`. **Compression cannot fix this** — the detail is not there,
and upscaling looks worse. Needs replacement source files. This is the largest
remaining visual-quality issue on the site.

**3. Image variant generation is manual and unguarded.**
The `<picture>`/WebP convention — including the rule that variants are never upscaled —
is documented in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#images).

The debt is that nothing enforces it. Variants are produced by a one-off script, and
hand-written `srcset` in `.astro` files cannot know which widths were actually generated.
**This shipped two broken images on `/about`** before review caught it. Fix by extending
the `homeHeroImages.js` disk-scanning pattern, or by adding the candidate-resolution
check to CI (item 1).


### Medium

**4. Emoji removed from the UI, but `icon:` fields remain in data.**
`commercialServices.js` and `servicesCatalog.js` still carry legacy `icon: '🧭'` fields
alongside the live `iconKey`. Nothing renders them. Harmless, but they invite confusion —
remove when next editing those files.

**5. Three card treatments remain slightly divergent.**
`SKY_OUTCOME_TILE_CLASS`, `SKY_FACTOR_TILE_CLASS`, and the ad-hoc white
`factorCardClass` in `why-it-matters.astro`. Consolidating touches 5 consuming files at
once, which is why it was deferred.

**6. Gradient utility drift.**
`ContactForm.jsx` uses Tailwind v4 `bg-linear-to-r`; everything else uses the v3-style
`bg-gradient-to-r`. Both work; the mix is confusing.

**7. `prop-types` ships to production.**
Runtime prop validation in a TypeScript-configured project. Removable.

**8. Contact form has no offline handling.**
A submission on a flaky connection fails with a generic error and the user loses their
message. Worth retaining form state on failure.

### Low

**9. Unreferenced large assets.**
`public/assets/web/logo.png` and `logo2.png`, 2.1 MB each, are no longer referenced.
They cost **zero page weight** — an unreferenced file is never downloaded — but they
bloat the repo. Keep as masters or delete.

**10. Gallery filename inconsistency.**
`gallery1–27.JPG` (uppercase) vs `gallery28–31.jpg`. `getGalleryImages()` works around
it with an index threshold, which breaks silently if images are added out of order.

**11. Stray files from tooling.**
`public/assets/web/.writetest` and `logo-256.webp` were created during development and
should be deleted. `.DS_Store` files are gitignored and never reach Netlify.

---

## Known traps

Documented where they belong, listed here so they are findable:

| Trap | Detail |
|---|---|
| Page height coupled to footer height | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#the-flex-height-trap) |
| Astro inlines small `<style>` blocks | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#verifying-styles-shipped) |
| `srcset` variants are never upscaled | item 3 above |
| Header nav is `overflow-x-auto` | dropdown panels must sit outside it — [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#header) |
| `homeHeroImages.js` scans the filesystem | dropping a file into `public/assets/home/` changes the hero with no code change |

---

## Deliberate decisions that look like debt

Choices, not oversights. Do not "fix" these without reading the reasoning.

| Looks like | Actually |
|---|---|
| Two overlapping service catalogs | Deliberate two-tier model — [SERVICES_PAGES.md](./SERVICES_PAGES.md) |
| Home page has only 116 words | Client decision; sections were built and removed — [SEO.md](./SEO.md#content-depth) |
| Promoted subsections still on Tier 2 pages | Anchors and internal links are load-bearing — [SERVICES_PAGES.md](./SERVICES_PAGES.md#promoted-subsections) |
| Locality data duplicated across 7 pages | One source; `lead` prop enforces uniqueness — [SERVICES_PAGES.md](./SERVICES_PAGES.md#editing-rules) |
| FAQ is `<details>`, not a component | Free a11y, crawlable answers, zero JS |
| No `AggregateRating` schema | No genuine reviews — [SEO.md](./SEO.md#structured-data) |
| Maps and YouTube behind facades | Deliberate; do not reinstate eager iframes |
| Hero has a hardcoded `min-height` | Required — [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#the-flex-height-trap) |

---

## Awaiting client input

Blocking items that no amount of engineering resolves.

| Item | Detail |
|---|---|
| **Three service pages are drafts, not client copy** | `plate-load-test`, `pile-load-test`, `topographical-survey`. They assert capability that needs confirming. Flagged via `reviewStatus` in `commercialServices.js` |
| **Coimbatore locality list is a draft** | Flagged in `serviceAreas.js`. Stating a service area is a business claim. The Chennai list is verbatim from client documents and needs no review |
| **`videoConfig.uploadDate` is unset** | `VideoObject` omits `uploadDate` until a real YouTube publish date is supplied. Google wants it for video rich results. **Do not invent one** |
| **Hero image replacements** | See item 2 above |
| **Google Business Profile** | Unclaimed/unoptimised for both offices — [SEO.md](./SEO.md#local-seo) |

---

## Security

Sound and unchanged: Netlify Forms with honeypot, no `dangerouslySetInnerHTML`,
`rel="noopener noreferrer"` on external links, HTTPS throughout.

`JsonLd.astro` uses `set:html` because JSON-LD must not be HTML-escaped. Input is always
our own static data, never user input, and `<` is escaped defensively.

Worth adding: a Content Security Policy header (hosting-side).

## Browser support

- **`svh` units** — viewport-height sections. Universal as of 2026; `100vh` declared
  first as fallback.
- **`<details>`/`<summary>`** — universal.
- **WebP** — universal; original-format fallback retained in every `<picture>` regardless.
- **`color-mix()`, `inset-block`** — used in card hover styles, well supported.
