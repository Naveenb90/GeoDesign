# Design system — GeoDesign web

**Updated:** 18 July 2026 (V2)

Production reference: [https://geodesign.co.in](https://geodesign.co.in)

V2 was built as **version 2 of the existing site, not a redesign**. Palette, typography, and chrome are unchanged; what changed is structure, consistency, and the addition of reusable components.

---

## Brand tokens — do not change without approval

### Colour

The site uses **no custom palette** — Tailwind defaults, consistently selected.

| Role | Token |
|------|-------|
| Primary brand | `sky-600` / `sky-700` (CTAs), `sky-800` / `sky-900` (active, accents) |
| Primary gradient | `from-sky-600 to-sky-700` → hover `from-sky-700 to-sky-800` |
| Card surface | `bg-gradient-to-br from-sky-50/95 to-white`, `border-sky-200/70`, `ring-sky-100/80` |
| Text | `slate-900` headings, `slate-800` body, `slate-600` secondary, `slate-500` tertiary |
| Chrome | `bg-slate-100` header & footer, `border-slate-200` |
| Canvas | `bg-white` |
| Feedback | `red-400/500/600` errors, `green-500/600` success |

### Typography

- **Body:** Inter — Tailwind `font-sans`
- **Display:** Montserrat — Tailwind `font-display`
- Defined via `@theme` in `src/styles/global.css` (Tailwind v4 — there is no `tailwind.config.js`)

Scale:

| Level | Classes |
|-------|---------|
| Page H1 | `text-3xl sm:text-4xl md:text-5xl` |
| Section H2 | `text-2xl md:text-3xl` |
| Card H3 | `text-base md:text-lg` |
| Body | `text-base md:text-lg`, `leading-relaxed` |

Headings use `text-balance` for better ragging.

**Font loading:** `rel="preload" as="style"` + `onload`, with a `<noscript>` fallback, so fonts do not block first render. All four Inter weights and both Montserrat weights are genuinely in use — verified against compiled HTML — so nothing can be trimmed from the request.

---

## Layout

### Shells

Defined in `src/styles/global.css`:

- **`.page-shell-white`** — `pt-28` (clears the fixed header) + responsive horizontal padding, white canvas. The default for every inner page.
- **`.page-shell-inner`** — `mx-auto w-full max-w-7xl`
- Section rhythm — `py-8 md:py-10`

`html` carries `scroll-padding-top: 7.5rem` so anchor targets clear the fixed header without per-element `scroll-mt-*`.

> **Removed in V2:** `.page-shell` (stone canvas) was defined but used by zero pages. Recover from git history if a non-white band is ever needed.

### The flex-height trap

`<body>` is `min-h-screen flex flex-col`, `<main>` is `flex-1`, the footer is `shrink-0`.

Any page whose content relies on `flex-1` **with no intrinsic height** is coupled to the footer's height. The V2 footer is substantially taller than V1's single copyright line, and pages relying on `flex-1` alone collapsed — the footer rose into mid-screen.

Pages with explicit floors:

| Page | Floor |
|------|-------|
| `index.astro` hero | `.hero-full` → `100svh` (with `100vh` fallback, landscape cap at `32rem`) |
| `404.astro` inner | `min-h-[60svh]` |

Use **`svh`, not `vh`**, for viewport-height sections: on mobile `svh` measures with browser chrome visible, so the layout does not jump as the URL bar hides.

---

## Components

### Chrome

### Header

**`Header.astro`** — fixed, `bg-slate-100`, single-row pill nav plus a gradient "Get in Touch" button.

The nav is `overflow-x-auto` — this is the guard that stops the pill row breaking the header grid. Consequently the **services dropdown panel is a direct child of `<header>`, not of `<nav>`**: nested inside, it would be clipped. `<header>` is `position: fixed`, which establishes the containing block.

Dropdown behaviour (vanilla JS, no island): Escape closes and restores focus, ArrowDown enters the panel, tabbing past the last item closes it, click-outside closes. Mobile lists services inline in the sheet rather than behind a second tap.

**`Footer.astro`** — four-column grid: brand, services (both tiers), company, NAP for both offices. Matches header chrome (`bg-slate-100`, `border-slate-200`).

The footer carries a link to every service on every page. This is the site's primary internal-linking mechanism — page-level service grids were removed as redundant because of it.

### Shared building blocks

| Component | Notes |
|-----------|-------|
| `SectionHead` | Kicker + heading + intro, capped at `max-w-3xl`. `as` sets heading level. |
| `CtaBand` | `tile` or `plain`. Heading id derived from heading text so multiple bands per page stay valid. |
| `StatsBand` | `rule` or `tile`. Data from `credentials.js`. |
| `ProcessSteps` | Numbered `01`, `02`… in Montserrat. `headingLevel` prop. |
| `FaqAccordion` | Native `<details>`/`<summary>`, **zero JS**. Answers stay in the DOM for FAQPage schema. |
| `AreasWeServe` | `lead` prop is **required** — it is what keeps shared locality data from being duplicate content. |
| `RelatedServices` | Card grid with hover lift + accent rail. |
| `Breadcrumbs` | Visual only; JSON-LD is emitted separately. |
| `PageToc` | Sticky scroll-spy, `lg`+ only. |

### Card treatment

Tokens live in `src/data/skyTileClasses.js`:

- `SKY_OUTCOME_TILE_CLASS` — large cards
- `SKY_FACTOR_TILE_CLASS` — compact cards
- `SKY_OFFICE_TILE_SHELL_CLASS` — office tiles

**Interactive cards** add a hover treatment adapted from the V2 sample reference: `translateY(-3px)`, a soft shadow, and a 3px `sky-500` accent rail fading in from the left. `:focus-visible` is styled **identically to `:hover`** so keyboard users get the same affordance. All of it sits behind `prefers-reduced-motion`.

### Verifying styles shipped

Astro **inlines small `<style>` blocks into the HTML** rather than emitting them to the
CSS bundle. When checking whether a scoped style shipped, grep the built HTML too —
checking only `_astro/*.css` produces false negatives. This caused a false bug report
during V2.

---

## Images

Every non-decorative image uses `<picture>` with a WebP `srcset` and the original as fallback:

```html
<picture>
  <source type="image/webp" srcset="/path/name-600.webp 600w, /path/name-1024.webp 1024w" sizes="..." />
  <img src="/path/name.jpg" alt="..." title="..." width="..." height="..." loading="lazy" decoding="async" />
</picture>
```

**Naming:** `<base>-<width>.webp`, alongside the original.

**⚠️ Variants are never upscaled.** If a source is 1024px wide, no 1200w variant is produced. Hardcoding a `1200w` candidate for such an image ships a 404 and the image breaks — this happened on `/about` and was caught in review. **After generating variants, verify every `srcset` candidate exists on disk.** A quick check over the build output:

```
for every srcset/src URL in dist/**/*.html -> assert the file exists
```

`homeHeroImages.js` avoids the problem entirely by pairing sources with the variants actually found on disk. Hand-written `srcset` in `.astro` files does not have that protection.

**Alt and title:** every non-decorative image needs descriptive `alt` **and** a `title` attribute (explicit client requirement). Decorative images take `alt=""` and `aria-hidden`.

**Social card:** `/assets/web/og-image.jpg` is a purpose-built 1200×630 crop. `og:image:width`/`height` are hardcoded to match, so do not point `ogImagePath` at an arbitrary photo without correcting them.

### Known image debt

Three hero sources are below usable resolution for full-bleed use and cannot be
fixed by compression. Details and current status: [TECH_DEBT.md](./TECH_DEBT.md#open-debt).


---

## Third-party embeds

Google Maps and YouTube sit behind **click-to-load facades**. Neither loads third-party script or sets cookies until the user asks. Both have `<noscript>` fallbacks so the content is never unreachable.

Do not reinstate eager iframes.

---

## Motion & accessibility

- Every transition and animation respects `prefers-reduced-motion`
- The client-logo marquee has a **user-accessible pause control** (WCAG 2.2.2)
- Mobile menu has a focus trap and Escape-to-close
- Skip link to `#main-content`
- Exactly one H1 per page, no heading-level skips — components rendering H3 by default expose a `headingLevel` prop
- `:focus-visible` rings site-wide, styled to match hover on interactive cards

---

## Home page

Hero-only, by client decision. The content-depth trade-off is recorded in [SEO.md](./SEO.md#content-depth).


---

## Netlify

`npm ci && npm run build`, publish `dist/`, Node 22.12.0 — see `netlify.toml` and `.nvmrc`.
