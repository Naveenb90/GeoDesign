# Documentation index

**Updated:** 18 July 2026

## Where to start

| You want to… | Read |
|---|---|
| Run or deploy the site | [`../README.md`](../README.md) |
| Work on the code (agent or developer) | [`../CLAUDE.md`](../CLAUDE.md) |
| Understand the stack and routes | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Change how it looks | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) |
| Add or edit a service page | [SERVICES_PAGES.md](./SERVICES_PAGES.md) |
| Touch anything SEO-related | [SEO.md](./SEO.md) |
| Know what is broken or outstanding | [TECH_DEBT.md](./TECH_DEBT.md) |

---

## Single source of truth

Every non-obvious fact about this project has **exactly one owning document**. Other
documents link to it rather than restating it.

Before adding to any doc, check this table. If the fact already has an owner, link —
do not copy. Ten facts were previously restated across three to seven files each,
which meant updating one left the rest silently wrong.

| Fact | Owner |
|---|---|
| Stack, routes, data layer, build/deploy | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Colour, type, spacing, components, icons | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) |
| Flex-height / footer layout trap | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#the-flex-height-trap) |
| Astro inlines small `<style>` blocks | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#verifying-styles-shipped) |
| Image `<picture>` / WebP convention | [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#images) |
| Two-tier services model | [SERVICES_PAGES.md](./SERVICES_PAGES.md) |
| Promoted subsections, `promotedTo` | [SERVICES_PAGES.md](./SERVICES_PAGES.md#promoted-subsections) |
| Copy provenance, drafted pages, brand form | [SERVICES_PAGES.md](./SERVICES_PAGES.md#copy-provenance-and-review-status) |
| Schema types, canonicals, sitemap | [SEO.md](./SEO.md) |
| Why no `AggregateRating` | [SEO.md](./SEO.md#structured-data) |
| Home page content-depth trade-off | [SEO.md](./SEO.md#content-depth) |
| Open bugs, debt, awaiting-client items | [TECH_DEBT.md](./TECH_DEBT.md) |
| Hero image resolution problem | [TECH_DEBT.md](./TECH_DEBT.md#open-debt) |
| `srcset` upscaling trap | [TECH_DEBT.md](./TECH_DEBT.md#open-debt) |
| Netlify form field rule | [`../CLAUDE.md`](../CLAUDE.md#key-conventions) |

---

## Current documents

| File | Scope |
|---|---|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Stack, framework roles, routes, data layer, deployment |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Brand tokens, layout, components, icons, images, motion |
| [SERVICES_PAGES.md](./SERVICES_PAGES.md) | Two-tier service model, page anatomy, editing rules |
| [SEO.md](./SEO.md) | Audit findings, structured data, ongoing SEO rules |
| [TECH_DEBT.md](./TECH_DEBT.md) | Open debt, known traps, deliberate decisions, client items |
| [git-local.example.md](./git-local.example.md) | Template for personal git notes (copy to `git-local.md`) |

## Archival records

Point-in-time records of the V2 programme, kept because they document *why* decisions
were made. Their route lists and metrics are superseded — do not cite them as current.

| File | Record of |
|---|---|
| [`../req/ANALYSIS_AND_PLAN.md`](../req/ANALYSIS_AND_PLAN.md) | V2 audit, options and client Q&A, July 2026 |
| [`../req/IMPLEMENTATION_RECORD.md`](../req/IMPLEMENTATION_RECORD.md) | V2 delivery record, July 2026 |

These two intentionally restate facts owned elsewhere — they record what was found and
decided at a moment in time, and rewriting them would falsify that record. Do not sync
them with the live docs.

**Removed in the July 2026 consolidation:** `PROJECT_SUMMARY.md`, `SEO_AUDIT.md`,
`ASTRO_MIGRATION.md` and `PROJECT_REPORT.md` were deleted. All four were superseded by
the current documents above, and all four remain in git history if needed.

---

## Maintaining these docs

1. **One fact, one owner.** Check the table above before writing.
2. **Link, don't copy.** A restated fact is a fact that will go stale.
3. **Date every doc** at the top when you materially change it.
4. **Verify numbers against the build.** Route counts, component counts, word counts,
   and payload figures in these docs were measured from `dist/`, not estimated.
5. **Archive rather than rewrite** point-in-time reports.
