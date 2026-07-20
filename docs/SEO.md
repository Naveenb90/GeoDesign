# SEO

**Updated:** 18 July 2026
**Scope:** measured against compiled output in `dist/` — 20 indexed routes + 404
**Canonical origin:** `https://geodesign.co.in`

The previous audit (April 2026) described a client-rendered Vite + React SPA using
`react-helmet-async`. **That architecture no longer exists** — the site is Astro static,
so every route ships complete HTML with no JavaScript-rendering dependency. The whole
class of SPA indexing concerns that audit raised is gone.

---

## Status

| Area | Rating | Note |
|---|---|---|
| Technical (robots, sitemap, URLs) | Strong | 20 URLs, kebab-case, all originals preserved |
| Titles & descriptions | Strong | Unique per route |
| Structured data | Strong | 6 types, all generated from site data |
| Headings | Strong | 1 H1/page, 0 level skips |
| Internal linking | Strong | 23–24 links/page (was 2–7) |
| Content depth | Good | Service pages 986–1325 words; home page thin by choice |
| Local SEO | Good | NAP site-wide, `ProfessionalService` ×2 with coordinates |
| Performance | Good | Major payload issues resolved |

Outstanding performance and content items live in
[TECH_DEBT.md](./TECH_DEBT.md) — not repeated here.

## Technical

| Item | State |
|---|---|
| `robots.txt` | `Allow: /`, points at `sitemap-index.xml` |
| Sitemap | `@astrojs/sitemap`, 20 URLs, 404 excluded |
| Canonicals | Every page, built from `Astro.site` |
| 404 | `noindex, nofollow`, not in sitemap |
| Rendering | Static HTML, no JS dependency for indexing |

**Not verifiable from the repo:** confirm apex ↔ www redirects resolve to a single
canonical host at the DNS/hosting layer.

## Headings

Verified across all 20 routes: exactly one H1 per page, zero level skips.

Two defects were fixed in V2 — `/about` had no H1 at all, and `/services` plus all five
technical service pages jumped H1 → H3. The rule is now enforced structurally: shared
components that render H3 by default (`ProcessSteps`, `AreasWeServe`, `FaqAccordion`)
expose a `headingLevel` prop, and the service-page heading contract is documented in
[SERVICES_PAGES.md](./SERVICES_PAGES.md#heading-contract).

## Structured data

| Schema | Where | Count |
|---|---|---|
| `Organization` | every page | 20 |
| `BreadcrumbList` | all service pages | 12 |
| `Service` | Tier 1 pages | 7 |
| `FAQPage` | Tier 1 pages | 7 |
| `ProfessionalService` | `/our-offices` | 2 |
| `VideoObject` | `/video` | 1 |

All built by `src/data/schema.js` from the same data the pages render, so schema cannot
drift from visible content. Every block is verified as parsing at build-check time.

**`FAQPage` is only emitted where the answers are visibly rendered.** `FaqAccordion`
uses native `<details>`, which keeps answers in the DOM. Emitting FAQ schema for content
that is not on the page is a violation.

**Never emit `AggregateRating` or `Review` without genuine, verifiable reviews.** It is
a manual-action risk. This is why review schema is absent despite 5,000+ projects — add
it only when real, attributable reviews exist.

## Internal linking

The largest V2 gain. Before: the home page had 2 outbound internal links and service
pages were reachable only through the hub. After: **23–24 internal links per page**,
driven by the footer, which carries all 12 service links plus company links everywhere.

Reinforced by the header services dropdown, `RelatedServices` on every service page, and
reciprocal Tier 1 ↔ Tier 2 linking.

## Duplicate content

A managed risk, not an absent one. The client's source copy repeated identical
"Areas We Serve", "Why Choose Us" and "Industries" blocks verbatim across all four
documents, and repeated `"<service> in Chennai"` 10–14 times per page.

Mitigations, and the rules that keep them working, are in
[SERVICES_PAGES.md](./SERVICES_PAGES.md#editing-rules).

**Measured worst-case pairwise 8-gram overlap between the 7 Tier 1 pages: 15.4%**
(threshold of concern ≈ 25%). Keyword density now 0.81%–2.41%.

Re-measure after any bulk copy edit.

## Local SEO

In place:

- NAP for both offices in the footer, on every page
- `ProfessionalService` schema ×2 with real coordinates, reused from the map embeds
- `areaServed` on every `Service`
- `AreasWeServe` locality blocks

**Copy is deliberately city-neutral**, with location relevance carried by the `areas`
block. The client's source copy was 100% Chennai; adopting that wholesale would have
diluted Coimbatore, where the head office and one of the two laboratories sit.

**Deferred:** city-variant pages (`/soil-testing-chennai`, `/soil-testing-coimbatore`).
Build only once the pillars have indexed and Search Console shows real local volume.
Launching ~16 near-identical variants alongside 7 new pages is the most likely way to
damage existing rankings.

**Not in the repo:** Google Business Profile claim and optimisation for both offices.
Worth doing.

## Content depth

| Route group | Body words |
|---|---|
| Tier 1 service pages | 986–1325 |
| Tier 2 service pages | 214–558 |
| `/about`, `/contact`, `/our-offices`, `/why-it-matters` | 219–337 |
| **`/`** | **116** |

**The home page is thin by explicit client decision.** It is hero-only; a credentials
band, services grid, why-it-matters teaser and CTA were built and then removed, because
the footer already carried every service link. The page leans on hero copy, title and
description for topical relevance.

If `/` loses ranking, the remedy is prose about what GeoDesign does — not a link grid,
which is what was already tried and removed.

## Editorial conventions

- **British English.** `analyse`, `behaviour`, `specialised`, `metres`, `programme`.
  Verified consistent site-wide.
- **Brand is "GeoDesign", one word.** See
  [SERVICES_PAGES.md](./SERVICES_PAGES.md#copy-provenance-and-review-status).
- **Em-dashes are spaced** ( — ); en-dashes are used unspaced for numeric ranges (1–5).
- **Typographic apostrophes** (’) throughout, not straight quotes.

## Before the next deploy

1. **Export a Search Console baseline for the original 13 URLs.** Without it, a
   regression is guesswork.
2. Submit the updated sitemap (20 URLs, up from 13).
3. Validate a sample of pages in Google's Rich Results Test.
4. **Watch `/services/drilling-sampling` and `/services/specialised-field-testing`** —
   most exposed to cannibalisation from the new Tier 1 pages. If either drops more than
   20% over 14 days, revert the hub restructure first.
