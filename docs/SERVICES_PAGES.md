# Service pages — two-tier model

**Updated:** 18 July 2026 (V2)

The site runs **two taxonomies over overlapping content**, deliberately. Understanding why is essential before editing anything under `/services`.

| Tier | Question it answers | Source file | Pages |
|------|--------------------|-------------|-------|
| **1 — Commercial** | "What do I need to buy?" | `src/data/commercialServices.js` | 7 |
| **2 — Technical** | "How is this actually done?" | `src/data/servicesCatalog.js` | 5 (41 subsections) |

Tier 2 predates V2 and was modelled from `public/assets/services/Geotechnical Investigation - SEO.pdf` (numbered sections 1–5). Tier 1 was added in V2 from client-supplied requirement documents.

## Why two tiers rather than one

The client requirement listed 8 commercial services. The site already organised the same subject matter by engineering discipline. Merging them would have meant either discarding 41 subsections of technical depth, or burying the commercial terms customers actually search for.

Keeping both, with **reciprocal linking**, lets each rank for what it is good at:

- Tier 1 targets commercial intent (`soil testing for construction`, `bridge load test`)
- Tier 2 targets method-level queries (`standard penetration test`, `Atterberg limits`)
- Tier 1 links **down** via `technicalDeepDive`; Tier 2 links **up** via `promotedTo`

Without that linking the tiers would cannibalise each other. Measured worst-case duplicate content between Tier 1 pages after mitigation: **15.4%** 8-gram overlap (threshold of concern ≈ 25%).

## URL map

Both tiers are served by one route, `src/pages/services/[slug].astro`, which branches on which catalog owns the slug.

| Path | Tier | H1 | Copy provenance |
|------|------|----|-----------------|
| `/services` | hub | Geotechnical services | — |
| `/services/soil-testing` | 1 | Soil Testing for Construction | Adapted from client doc |
| `/services/pile-foundation` | 1 | Pile Foundation & Foundation Design | **Rewritten** — scope corrected |
| `/services/plate-load-test` | 1 | Plate Load Test | ⚠️ Drafted — needs review |
| `/services/pile-load-test` | 1 | Pile Load Test & Pull Out Test | ⚠️ Drafted — needs review |
| `/services/bridge-load-test` | 1 | Bridge Load Test | Adapted from client doc |
| `/services/electrical-resistivity-test` | 1 | Electrical Resistivity Test | Adapted from client doc |
| `/services/topographical-survey` | 1 | Topographical & Contour Survey | ⚠️ Drafted — needs review |
| `/services/drilling-sampling` | 2 | Drilling & Sampling | Original (PDF) |
| `/services/foundation-recommendations` | 2 | Foundation Recommendations | Original (PDF) |
| `/services/specialised-field-testing` | 2 | Specialised Field Testing | Original (PDF) |
| `/services/laboratory-tests` | 2 | Laboratory Tests | Original (PDF) |
| `/services/tests-on-rock` | 2 | Tests On Rock | Original (PDF) |

`/services/laboratory-tests` doubles as the commercial answer for "Laboratory Soil Testing" — no separate Tier 1 page was created, because it would have duplicated a page that already ranks.

**All Tier 2 URLs are unchanged from before V2. Never rename or remove one.**

## Promoted subsections

Three Tier 2 subsections became full Tier 1 pages. The subsections **still exist**, with a shortened body and a `promotedTo` field rendering a "Full service →" link:

| Tier 2 page | Subsection | Promoted to |
|---|---|---|
| `specialised-field-testing` | Electric resistivity / soil resistivity test | `/services/electrical-resistivity-test` |
| `specialised-field-testing` | Plate load test | `/services/plate-load-test` |
| `foundation-recommendations` | Deep foundations — pile foundations | `/services/pile-foundation` |

**Do not delete a promoted subsection.** Its anchor and internal link carry accumulated ranking signal; removing it discards that and breaks external links to the anchor.

## Tier 1 page anatomy

`CommercialServiceBody.astro` renders these in order, each optional:

```
intro[]              paragraphs
scopeNote            optional callout (used on pile-foundation to state scope limits)
whyImportant         heading, body, listHeading, items[], closing
whyChooseUs          heading, body, items[], closing
ourServices          heading, body, items[{title, description}]
types                heading, body, items[{title, description}]
process              heading, body, steps[{title, description}]   -> ProcessSteps
industries           heading, body, items[{title, description}]
technicalDeepDive    {slug, label, note}                          -> Tier 2 link
areas                {region, lead}                               -> AreasWeServe
faqs[]               {question, answer}                           -> FaqAccordion + FAQPage schema
related[]            slugs                                        -> RelatedServices
ctaHeading           string                                       -> CtaBand
```

The sticky `PageToc` derives its entries from the sections that actually render, so it cannot drift from the content.

### Heading contract

- The page supplies the single **H1** (`[slug].astro`)
- `CommercialServiceBody` owns every **H2**
- Nested components render **H3**

Breaking this reintroduces heading-level skips, which the site was explicitly fixed for.

## Editing rules

1. **`AreasWeServe` requires a unique `lead` per page.** The locality data is shared across all Tier 1 pages; the lead sentence is the only thing keeping those blocks from being byte-identical. Enforced by making the prop required.
2. **Keep keyword density under ~2.5%.** The supplied copy repeated `"<service> in Chennai"` 10–14 times per page; that was cut to 3–4 natural occurrences. Re-check after editing.
3. **Copy is city-neutral.** Location relevance comes from the `areas` block. This protects Coimbatore (head office) rankings while still capturing local intent, and leaves room for city variants later.
4. **Brand is "GeoDesign", one word.** Client source documents use "Geo Design"; that form must not reach production.
5. **Adding a Tier 1 entry** automatically creates the route, sitemap entry, footer link, header dropdown item, and contact-form option. Nothing else needs touching.

## Outstanding

- `plate-load-test`, `pile-load-test`, `topographical-survey` are **drafted from the technical catalog, not client-supplied**. They assert capability that needs confirming. Flagged via `reviewStatus` in the data file.
- `pile-foundation` was rewritten because the supplied copy described pile *installation*; GeoDesign provides *design and supervision*. Do not reinstate the original wording.
- City-variant pages (`/soil-testing-chennai` etc.) are **deliberately deferred** until the pillars have indexed and Search Console shows real local volume. Building ~16 near-identical variants alongside 7 new pages is the most likely way to damage existing rankings.
