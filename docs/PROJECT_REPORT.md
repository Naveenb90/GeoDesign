# GeoDesign Web — Full Project Report

**Prepared by:** Technical Consultant (AI-assisted analysis)  
**Date:** 15 April 2026  
**Scope:** Full codebase review — `src/`, `public/`, `docs/`, `netlify.toml`, `astro.config.mjs`, git history  
**Live site:** [https://geodesign.co.in](https://geodesign.co.in)

---

## 1. Executive Summary

GeoDesign India Private Limited operates a B2B marketing website targeting geotechnical engineering clients across Tamil Nadu and South India. The project has undergone a significant architectural evolution: it started as a Vite + React SPA in January 2026, was migrated to Astro 6 (static output) in early April 2026, and received a design refresh ("Design 2.0") on 15 April 2026.

The current stack is a well-chosen, modern foundation: Astro 6 with `output: 'static'` ships real HTML per route — excellent for SEO and Core Web Vitals — while React is used minimally and correctly as interactive islands (contact form, projects gallery, hero background). Tailwind CSS v4 is used for styling, and Netlify hosts the site with a simple, clean CI/CD pipeline.

**Overall project health: 7.8 / 10**

| Area | Rating |
|------|--------|
| Architecture & stack choice | ★★★★★ |
| SEO & structured data | ★★★★☆ |
| Accessibility | ★★★★☆ |
| Frontend / UI quality | ★★★★☆ |
| Performance (static HTML) | ★★★★☆ |
| Security posture | ★★★☆☆ |
| Code quality & maintainability | ★★★☆☆ |
| Testing & QA | ★☆☆☆☆ |
| CI/CD & DevOps | ★★☆☆☆ |
| Documentation | ★★★★☆ |

**Key strengths:** Zero-JS pages by default; per-route canonical/OG/JSON-LD SEO in static HTML; honeypot-protected Netlify Forms; accessibility foundations (skip link, ARIA, semantic HTML, `prefers-reduced-motion`).

**Critical gaps:** No automated tests; no security headers on Netlify; no analytics or error monitoring; no image optimisation pipeline; minimal CI beyond Netlify build.

---

## 2. Project Overview & Objectives

| Field | Value |
|-------|-------|
| **Project name** | GeoDesign India Pvt. Ltd. — Marketing Site |
| **Live URL** | https://geodesign.co.in |
| **Status** | Launched / Active maintenance |
| **Industry** | Geotechnical engineering, soil investigation, Tamil Nadu |
| **Framework** | Astro 6 (`output: 'static'`) |
| **Islands** | React 19 (`@astrojs/react`) — `ContactForm`, `ProjectsGallery`, `HeroGalleryBackground` |
| **Styling** | Tailwind CSS v4 |
| **Hosting** | Netlify |
| **Node version** | 22.12.0 (pinned in `.nvmrc` and `netlify.toml`) |
| **Source control** | Git — GitHub (`Naveenb90/GeoDesign`) |

**Business objectives:**
1. Generate qualified leads through the `/contact` form (primary conversion goal).
2. Communicate geotechnical expertise — services catalog with 5+ detailed service pages.
3. Build credibility — project gallery, client logos (marquee), 5,000+ projects social proof.
4. Rank in local search for "soil testing Tamil Nadu", "geotechnical investigation Coimbatore/Chennai".
5. Support two office locations (Coimbatore HQ, Chennai branch) with embedded maps and contact details.

---

## 3. Current Status & Milestone Tracker

| Milestone | Date | Status |
|-----------|------|--------|
| Initial React SPA created | Jan 2026 | ✅ Done |
| Core Web Vitals optimisation round | Jan 2026 | ✅ Done |
| SEO audit & meta overhaul | Apr 4, 2026 | ✅ Done |
| Astro migration (`feat/astro-netlify`) | Apr 5, 2026 | ✅ Done |
| Design 2.0 — header pill nav, new layout | Apr 15, 2026 | ✅ Done |
| Automated test suite | — | ❌ Not started |
| Netlify security headers | — | ❌ Not started |
| Analytics integration | — | ❌ Not started |
| Image conversion pipeline (WebP/AVIF) | — | ❌ Not started |
| Error monitoring (Sentry / similar) | — | ❌ Not started |
| Google Search Console submission | — | ⚠️ Pending verification |

---

## 4. Tech Stack Evaluation

### 4.1 Framework — Astro 6 (`output: 'static'`)

**Verdict: Excellent choice for this project.**

A geotechnical marketing site is almost entirely static content — a static site generator is the right tool. Astro's island architecture means only three components (out of ~10) ship client-side JavaScript. This is architecturally sound and superior to the previous Vite + React SPA in every dimension: SEO, performance, crawlability, and operational simplicity.

- `astro.config.mjs` correctly sets `site: 'https://geodesign.co.in'`, powering canonical URLs and the auto-generated sitemap.
- `output: 'static'` is the right choice; no SSR adapter complexity needed.
- Integrations: `@astrojs/react`, `@astrojs/sitemap` — both appropriate.

### 4.2 React Islands

Three islands use `client:load` / `client:visible` directives:

| Island | Directive | Assessment |
|--------|-----------|------------|
| `HeroGalleryBackground.jsx` | `client:load` | Acceptable — hero is above the fold; rotation starts immediately. Consider `client:idle` if image assets preload statically. |
| `ContactForm.jsx` | `client:load` | Acceptable — the form is the page's entire purpose on `/contact`. |
| `ProjectsGallery.jsx` | `client:load` | Could benefit from `client:visible` since the gallery is mid-page on `/projects`. |

### 4.3 Styling — Tailwind CSS v4

Tailwind v4 with `@tailwindcss/vite` is the current stable approach. The `@theme` block in `global.css` correctly registers custom fonts. Design tokens (`SKY_OUTCOME_TILE_CLASS`, `SKY_FACTOR_TILE_CLASS`) are centralised in `src/data/skyTileClasses.js` — a pragmatic way to share class strings between `.astro` and `.jsx` contexts.

**Gap:** No design token definitions for colors or spacing beyond Tailwind defaults. As the site grows, custom CSS variables (`--color-primary`, `--spacing-section`) would improve maintainability.

### 4.4 Hosting — Netlify

Netlify is a very appropriate choice: automatic HTTPS, CDN, Netlify Forms (used for the contact form), one-click deploy previews, and zero server management. The `netlify.toml` is correctly configured with `npm ci && npm run build` and `publish = "dist"`.

**Gap:** No `[[headers]]` section in `netlify.toml`. Security headers (CSP, HSTS, X-Frame-Options) are not set, which is a meaningful security gap (see Section 8).

### 4.5 Dependencies

```json
"astro": "^6.1.3",
"react": "^19.2.4",
"react-dom": "^19.2.4",
"@fancyapps/ui": "^5.0.36",
"tailwindcss": "^4.2.2"
```

- All major dependencies are up-to-date as of this report.
- `@fancyapps/ui` is now correctly installed as an npm package (not CDN) — this was a noted tech debt item that has been resolved.
- **No dev dependencies for testing** (`@testing-library/react`, `jest`, `@playwright/test` are absent).
- **No linter/formatter config** (no `.eslintrc`, `.prettierrc`) — code style relies on developer discipline and editor settings.

---

## 5. Frontend Quality & UI/UX Review

### 5.1 Layout & Navigation

The Design 2.0 header uses a pill-strip navigation bar: a clean, modern pattern that works well for a single-row desktop nav. The responsive mobile hamburger menu is well-implemented with correct `aria-expanded` management and icon switching.

**Strengths:**
- Active page state uses `aria-current="page"` — correct and accessible.
- Fixed header with scroll-triggered shadow (`header-site--scrolled`) improves wayfinding.
- `max-w-7xl` container maintains readable line lengths on wide screens.

**Gaps:**
- Footer is minimal (copyright line only) — no secondary nav, no social links, no office phone numbers. This is a missed opportunity for both UX and internal linking.
- No skip-to-content link is visible in the rendered header (the `.skip-link` CSS is defined in `global.css` but no `<a class="skip-link">` element appears in `SiteLayout.astro`).
- Hero section uses `role="banner"` — this duplicates the semantic role already implied by `<header>`. The `<section>` element does not need `role="banner"`.

### 5.2 Home Page Hero

`HeroGalleryBackground.jsx` cycles images every 10 seconds (constant `ROTATE_MS = 10_000`). The component correctly:
- Sets `loading="eager"` and `fetchpriority="high"` only for the first image (LCP candidate).
- Uses `aria-hidden="true"` so screen readers ignore the decorative background.
- Cleans up the interval on unmount.

**Gap:** The comment in `DESIGN_SYSTEM.md` says "20 seconds", but the component code uses 10,000 ms (10 seconds). A documentation/code mismatch to correct.

### 5.3 Contact Form

`ContactForm.jsx` is well-structured:
- Client-side validation before POST.
- Netlify Forms integration with honeypot field.
- `aria-live="polite"` on success/error messages.
- `aria-busy` on the submit button during submission.

**Gaps:**
- The `service` field is a free-text input. A `<select>` or `<datalist>` populated from `servicesCatalog.js` would improve UX and reduce gibberish submissions.
- No phone number format validation (only presence check). A basic regex for Indian phone numbers (+91 10-digit) would catch common entry errors.
- Error messages are non-specific ("There was an error submitting the form") — does not tell the user which field failed validation.

### 5.4 Projects Gallery

`ProjectsGallery.jsx` correctly loads Fancybox from npm via dynamic `import()`, with a loading state and error fallback.

**Gaps:**
- Client logos use `alt={`Client ${index + 1}`}` — generic and unhelpful for screen readers and crawlers. Real organisation names would improve accessibility and credibility.
- The `<h1>` heading "Who We Work With" is correct for the `/projects` route.
- The index is used as part of the key for the duplicated marquee (`${logo}-${index}`) — since the array is doubled for the CSS loop, this generates duplicate keys when indices overlap. Use a more stable key strategy.

---

## 6. Backend & API Health

This is a **fully static site with no backend server**. All "backend" functionality is handled by:

- **Netlify Forms** — contact form POST handling, spam filtering (honeypot), email notifications.
- **Static data files** — `src/data/` (services catalog, project images, client logos, office info).
- **No database** — all content is hardcoded in JavaScript data files.

**Assessment:** Appropriate for the current scale. The absence of a server is a feature, not a gap — it eliminates an entire category of security and reliability concerns.

**Future-facing consideration:** If content updates become frequent (new services, project images, client logos), a headless CMS (Contentful, Sanity, or Directus) would reduce developer friction. The current `src/data/` structure is already CMS-ready in shape — migration would be straightforward.

---

## 7. Performance & Page Speed Analysis

### 7.1 Architecture-level wins

Because Astro emits static HTML per route, **most pages ship zero client-side JavaScript** to the browser. This is the single biggest performance advantage of the current stack.

| Route | Client JS | Notes |
|-------|-----------|-------|
| `/` | Yes — `HeroGalleryBackground` island | Image rotation; 1 small React bundle |
| `/services`, `/services/:slug` | No | Pure static HTML |
| `/about`, `/why-it-matters` | No | Pure static HTML |
| `/contact` | Yes — `ContactForm` island | Form interactivity |
| `/projects` | Yes — `ProjectsGallery` island | Fancybox loaded dynamically |
| `/video` | No | Static embed |
| `/our-offices` | No | Static maps |

### 7.2 Image handling

- Hero background images: `loading="eager"` + `fetchpriority="high"` on the first image — correct LCP optimisation.
- Gallery and preview images: `loading="lazy"` — correct.
- **All images appear to be JPEG/PNG format.** No WebP or AVIF variants are generated. This is the largest remaining performance gap: modern formats reduce transfer size by 30–50% with identical visual quality.

### 7.3 Fonts

Google Fonts loaded via `<link rel="preconnect">` and `rel="stylesheet"` in `BaseLayout.astro`. The `display=swap` parameter in the URL means text is visible during font load.

**Gap:** Google Fonts are loaded from an external CDN, adding a DNS lookup + TCP round-trip on first visit. Self-hosting the two font families (Inter + Montserrat) via `@font-face` in `global.css` would eliminate this network dependency and improve LCP.

### 7.4 Fancybox

`@fancyapps/ui` is dynamically imported in `ProjectsGallery.jsx` — this means the library (~150 KB uncompressed) is only fetched when the `/projects` page is opened, not on every page. This is the correct approach.

### 7.5 Performance goals vs. expected actuals

| Metric | Target | Expected (static HTML) |
|--------|--------|----------------------|
| LCP | < 2.5s | ✅ ~1.2–1.8s (static pages) |
| FID / INP | < 100ms | ✅ Near zero on static routes |
| CLS | < 0.1 | ⚠️ Hero image swap may shift layout |
| TTI | < 3.5s | ✅ Most pages |
| Lighthouse performance | 90+ | ⚠️ Image formats may drag score |

---

## 8. Security & Vulnerability Assessment

### 8.1 Application-level security

| Check | Status | Notes |
|-------|--------|-------|
| `dangerouslySetInnerHTML` usage | ✅ None | React auto-escaping active |
| External links | ✅ Clean | `rel="noopener noreferrer"` pattern recommended in standards |
| Form honeypot | ✅ Active | `netlify-honeypot="bot-field"` |
| Sensitive data in frontend | ✅ None | No API keys, no tokens |
| CSRF | ✅ Netlify Forms handles this | Standard POST with `form-name` |

### 8.2 HTTP security headers

**This is the most significant security gap.** Netlify will serve the site with default headers only. No `[[headers]]` block exists in `netlify.toml`.

Missing headers:

| Header | Impact |
|--------|--------|
| `Content-Security-Policy` | No protection against XSS via injected scripts |
| `X-Frame-Options: DENY` | Site can be embedded in iframes (clickjacking) |
| `X-Content-Type-Options: nosniff` | Browser may MIME-sniff responses |
| `Referrer-Policy: strict-origin-when-cross-origin` | Referrer data leaks to external sites |
| `Permissions-Policy` | Browser features (camera, mic, geolocation) not restricted |
| `Strict-Transport-Security` | HSTS not explicitly set (Netlify does provide HTTPS, but HSTS header is best practice) |

### 8.3 Netlify Forms

- Honeypot field correctly hidden with `aria-hidden="true"` and CSS `hidden` class.
- Netlify provides server-side form validation and spam filtering.
- **Gap:** No CAPTCHA (reCAPTCHA / hCaptcha / Turnstile). For a lead-gen form, this is medium priority — Netlify's honeypot catches most bots, but sophisticated spam will bypass it.

---

## 9. SEO & Accessibility Audit

### 9.1 SEO

| Check | Status |
|-------|--------|
| Per-route `<title>` in static HTML | ✅ Correct (Astro `BaseLayout`) |
| `<meta name="description">` | ✅ Unique per route |
| Canonical `<link>` | ✅ Build-time absolute URL |
| Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) | ✅ All set |
| Twitter Card | ✅ `summary_large_image` |
| `robots.txt` | ✅ `Allow: /`, sitemap reference |
| `sitemap-index.xml` | ✅ Generated by `@astrojs/sitemap` |
| JSON-LD Organization schema | ✅ On every page (see gap below) |
| `<html lang="en">` | ✅ |
| Heading hierarchy | ✅ Most routes — Video page ⚠️ |

**Open gaps:**
1. **Video page `/video` has no visible `<h1>`** — impacts heading hierarchy and SEO for that route.
2. **Organization JSON-LD emitted on every page** — the `description` field mirrors the page meta description, causing the Organization schema `description` to vary per page. The Organisation description should be fixed branding copy.
3. **`meta name="revisit-after"`** — if still present from the legacy SPA, this is obsolete and should be removed.
4. **Client logo `alt` text** in the marquee is `"Client N"` — missed opportunity for brand name recognition.
5. **Analytics not active** — without GA4 or Plausible, there is no click data, conversion tracking, or Search Console integration.
6. **Google Search Console** — sitemap should be submitted at `https://geodesign.co.in/sitemap-index.xml`.

### 9.2 Accessibility

| Check | Status |
|-------|--------|
| Semantic HTML (`<header>`, `<main>`, `<nav>`, `<footer>`) | ✅ |
| `aria-current="page"` on active nav link | ✅ |
| `aria-expanded` on mobile menu toggle | ✅ |
| `aria-label` on nav regions | ✅ |
| `aria-live="polite"` on form status | ✅ |
| `aria-busy` on submit button | ✅ |
| `aria-hidden="true"` on decorative hero image | ✅ |
| Focus-visible styles (`:focus-visible` ring) | ✅ |
| `prefers-reduced-motion` for marquee | ✅ |
| Skip link CSS defined | ✅ (in `global.css`) |
| Skip link `<a>` element in layout | ⚠️ Missing in HTML |
| Form `<label>` associations | ✅ `htmlFor` / `id` pairs |
| Required field indicators | ✅ Red asterisk + `aria-required` |
| Image alt text quality | ⚠️ Client logos are generic |

---

## 10. Code Quality & Maintainability

### 10.1 Strengths

- **Island architecture** keeps interactive complexity isolated to three `.jsx` files.
- **Data centralisation** — all copy lives in `src/data/` (services catalog, nav links, project images, map URLs). Changes to content do not require touching component logic.
- **Layout shells** (`BaseLayout.astro`, `SiteLayout.astro`) avoid duplication of `<head>` across routes.
- **Consistent naming** — PascalCase components, camelCase data files, kebab-case routes.
- JSDoc type comments on `servicesCatalog.js` (`@typedef`) improve editor IntelliSense.

### 10.2 Gaps

- **No TypeScript on React islands** — `ContactForm.jsx` and `ProjectsGallery.jsx` use plain JSX with no PropTypes defined. The Astro layouts use TypeScript (`.astro` frontmatter has typed `interface Props`), creating an inconsistency.
- **No ESLint or Prettier config** — no `.eslintrc.js` / `.eslintrc.mjs`, no `.prettierrc`. Code style relies on developer and editor convention rather than enforced rules.
- **`ROTATE_MS` mismatch** — code uses 10,000 ms; `DESIGN_SYSTEM.md` says 20 seconds.
- **Duplicate `aria-current` logic** — desktop nav and mobile nav both manually enumerate all links with the same `currentPath` check. A shared helper would reduce duplication.
- **`service` field is a free-text input** — a `<select>` driven from `servicesCatalog.js` would align with DRY principles.
- **`index` used in marquee key** — `key={`${logo}-${index}`}` generates predictable but potentially duplicate keys when the array is doubled for the CSS loop.

---

## 11. Testing & QA Coverage

**Current state: No automated tests exist.**

There are no test files, no test runners configured, and no testing dependencies in `package.json`. This is the most significant quality gap in the project.

The `docs/TECH_DEBT.md` acknowledges this and sets targets (80%+ component coverage, 90%+ hook coverage, 100% utility coverage) but these have not been actioned.

**Risk surface without tests:**
- Form validation logic in `ContactForm.jsx` can silently regress.
- Service catalog changes could break `getStaticPaths` without a build-time test.
- Fancybox dynamic import error handling cannot be exercised.
- Accessibility regressions (missing ARIA, broken heading hierarchy) go undetected.

**Deployment checklist in `TECH_DEBT.md`** covers manual QA steps but this is not automated.

---

## 12. CI/CD & Deployment Workflow

### Current flow

```
git push → Netlify build webhook → npm ci && npm run build → dist/ → CDN
```

**Strengths:**
- Netlify provides automatic deploy previews on pull requests (if configured).
- `npm ci` (not `npm install`) ensures deterministic installs from `package-lock.json`.
- Node version pinned at `22.12.0` in both `.nvmrc` and `netlify.toml` — no version drift.

**Gaps:**
- No pre-deploy test run — code that breaks the build is caught, but code that ships broken UI is not.
- No Lighthouse CI step — performance regressions are not automatically flagged.
- No branch protection rules mentioned — direct pushes to `main` appear to trigger production deploys.
- Commit message convention is inconsistent — some commits use Conventional Commits (`feat(astro):`, `chore:`), others use free-form messages ("new design 2.0", "Your commit message").
- No staging environment distinct from Netlify deploy previews.

---

## 13. Database Design & Data Management

There is no database. Content is managed as JavaScript data files:

| File | Content |
|------|---------|
| `src/data/servicesCatalog.js` | 5+ service pages with meta, sections, keywords |
| `src/data/data.js` | Nav links, preview/gallery images, client logos, map embed URLs |
| `src/data/homeHeroImages.js` | Home hero image list (scanned from `public/assets/home/`) |
| `src/data/skyTileClasses.js` | Tailwind class tokens for sky-tile card variants |

**Assessment:** This is entirely appropriate for the current content volume and update frequency. The catalog is well-typed with JSDoc `@typedef` annotations.

**Future consideration:** If the team starts adding new services, updating project photos, or publishing blog posts regularly, migrating to a headless CMS (Sanity, Contentful, or even a simple JSON/YAML flat-file approach) would reduce the need for developer involvement in content updates.

---

## 14. Documentation & Onboarding

The `docs/` directory is one of the project's genuine strengths:

| Document | Quality |
|----------|---------|
| `README.md` | ✅ Excellent — stack table, routes, commands, deployment, docs index |
| `docs/ASTRO_MIGRATION.md` | ✅ Explains directory roles, Netlify, data migration |
| `docs/DESIGN_SYSTEM.md` | ✅ Typography, layout shells, sky tiles, chrome, maps |
| `docs/PROJECT_SUMMARY.md` | ✅ Concise route + key-file reference |
| `docs/SEO_AUDIT.md` | ✅ Detailed SEO checklist with issue tracking |
| `docs/TECH_DEBT.md` | ✅ Improvement backlog (some items now outdated post-Astro migration) |
| `docs/SERVICES_PAGES.md` | ✅ Service URL catalog |

**Gaps:**
- `docs/TECH_DEBT.md` contains references to the legacy Vite/React SPA (vite.config.js, React.lazy routes) that are now stale and potentially confusing. A cleanup pass is needed.
- No `CONTRIBUTING.md` — onboarding a second developer requires reading multiple docs files in sequence.
- No `CHANGELOG.md` — version history is only in git log.
- `docs/SEO_AUDIT.md` still mentions "This is a client-rendered SPA" in its preamble (from the legacy React version) — the Astro addendum at the bottom is correct, but the top section is now misleading.

---

## 15. Areas to Improve

### 15.1 Frontend / UI & UX

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| F1 | Skip-to-content link | CSS defined but no HTML element | Keyboard users cannot skip the nav | Add `<a href="#main-content" class="skip-link">Skip to main content</a>` as the first child of `<body>` in `SiteLayout.astro`; add `id="main-content"` to `<main>` | **High** |
| F2 | Footer depth | Copyright line only | No secondary nav, no phone numbers, no social links; internal linking is weak | Add office phone numbers, key page links, and a brief trust signal (DTCP/CMDA registration) | **Med** |
| F3 | Service field in ContactForm | Free-text `<input>` | Users enter inconsistent/unusable values; misses DRY link to catalog | Replace with `<select>` driven from `geotechnicalServicePages` slugs/titles in `servicesCatalog.js` | **Med** |

### 15.2 Backend / API Design

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| B1 | Form error feedback | Single generic error message | User cannot tell if validation failed or network failed | Split error into two branches: validation errors with per-field messages vs. network error with "try again" | **Med** |
| B2 | Phone validation | Presence check only | Invalid phone numbers reach Netlify submissions | Add regex: `/^[+]?[0-9\s\-()]{10,15}$/` with a clear "Enter a valid phone number" message | **Med** |
| B3 | CMS readiness | Data in `.js` files | Non-developer cannot update services, images, or office info | Document the `src/data/` files as the "CMS layer"; optionally evaluate Astro Content Collections for structured validation | **Low** |

### 15.3 Performance & Core Web Vitals

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| P1 | Image formats | JPEG/PNG only | 30–50% larger file sizes vs. WebP/AVIF; impacts LCP on gallery pages | Add a build-time image optimisation step using `astro:assets` (Astro's built-in `<Image>` component converts and resizes at build time) | **High** |
| P2 | Self-hosted fonts | Google Fonts CDN | Additional DNS lookup + round-trip on first visit; external dependency | Use `fontsource` npm packages (`@fontsource/inter`, `@fontsource/montserrat`) and import in `global.css`; eliminates external CDN at zero visual cost | **Med** |
| P3 | `ProjectsGallery` hydration | `client:load` | Gallery island hydrates immediately even if user never scrolls to it | Change to `client:visible` — island only hydrates when it enters the viewport | **Med** |

### 15.4 Security (auth, data, HTTPS, headers)

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| S1 | HTTP security headers | None configured | No CSP, no X-Frame-Options, no HSTS, no referrer policy | Add `[[headers]]` block to `netlify.toml` with `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` | **High** |
| S2 | CAPTCHA on contact form | Honeypot only | Sophisticated bots bypass honeypots; no rate limiting | Integrate Netlify's built-in Turnstile (Cloudflare) or add `data-netlify-recaptcha="true"` | **Med** |
| S3 | Subresource integrity | No external scripts | Fancybox is now npm (good), Google Fonts CSS is external | Add `crossorigin="anonymous"` and consider caching fonts locally (see P2) to eliminate the only remaining external resource dependency | **Low** |

### 15.5 SEO & Accessibility (a11y)

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| A1 | Video page H1 | No visible heading | Heading hierarchy broken on `/video`; SEO signal missing | Add `<h1>Watch Our Work</h1>` or similar visible heading before the embed | **High** |
| A2 | Client logo alt text | `"Client N"` | Meaningless to screen readers and search crawlers | Update `data.js` `clientLogos` to an array of objects `{ src, name }` and use real organisation names in `alt` | **High** |
| A3 | Organisation JSON-LD | Emitted on every page with per-page description | Organisation schema description varies per page, diluting brand signal | Fix `description` in `BaseLayout.astro` JSON-LD to a single hardcoded brand description, separate from the page `description` prop | **Med** |

### 15.6 Code Quality & Architecture

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| C1 | No linting / formatting config | No ESLint or Prettier | Code style consistency depends on developer | Add `eslint.config.mjs` with `eslint-plugin-astro`, `eslint-plugin-jsx-a11y`, and `@typescript-eslint/eslint-plugin`; add `.prettierrc` | **High** |
| C2 | PropTypes absent on islands | No PropTypes or TS types on `.jsx` files | Runtime prop errors are silent; `images` in `HeroGalleryBackground` has no shape contract | Add PropTypes to all three island components or rename to `.tsx` and add TypeScript interfaces | **Med** |
| C3 | `ROTATE_MS` / docs mismatch | 10,000 ms in code; "20 seconds" in docs | Confusion for any developer reading the design system | Update `DESIGN_SYSTEM.md` to say "10 seconds" or change `ROTATE_MS` to `20_000` if 20s was intended | **Low** |

### 15.7 Testing Strategy

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| T1 | Unit tests for islands | None | Form validation logic, gallery error handling, hero rotation can silently regress | Install `@testing-library/react` + `vitest`; write tests for `ContactForm` validation paths and `HeroGalleryBackground` prop contract | **High** |
| T2 | Build smoke test in CI | None | A data-file edit that breaks `getStaticPaths` only fails at Netlify build time | Add a pre-push hook or GitHub Actions step: `npm run build` on every PR | **High** |
| T3 | Accessibility automated check | None | Heading hierarchy, ARIA issues, and colour contrast regressions are invisible | Add `@axe-core/playwright` or `axe-playwright` to an E2E suite; run against key routes on every deploy | **Med** |

### 15.8 DevOps & CI/CD Pipeline

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| D1 | No pre-deploy test step | Netlify runs build only | Broken UI ships unless manually caught | Add a GitHub Actions workflow: lint → test → `npm run build` on PR; block merge on failure | **High** |
| D2 | Lighthouse CI | None | Performance regressions are undetected between deploys | Add `treosh/lighthouse-ci-action` to the GitHub Actions workflow; set performance budget (LCP < 2.5s, score ≥ 90) | **Med** |
| D3 | Commit convention | Inconsistent | Hard to generate changelogs or understand history | Enforce Conventional Commits via `commitlint` + `husky`; add `CONTRIBUTING.md` with commit format instructions | **Low** |

### 15.9 Database & Caching

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| DB1 | Content updates require developer | Data in `.js` files | Adding a service, new project image, or updating an office phone number requires a code commit + deploy | Evaluate Astro Content Collections (zero infrastructure) as a typed, schema-validated flat-file CMS; or integrate a free-tier headless CMS (Sanity Studio, Decap CMS) | **Med** |
| DB2 | No CDN cache headers for assets | Netlify default | `public/assets/` images may not be cached aggressively | Add `Cache-Control: public, max-age=31536000, immutable` header for `/assets/*` in `netlify.toml`; use content-hashed filenames (Astro's built-in asset pipeline does this for processed assets) | **Med** |
| DB3 | Image assets unorganised naming | Mixed case extensions (`.JPG` vs `.jpg`) in gallery | File-system case sensitivity issues on Linux/Netlify builds | Standardise all image filenames to lowercase; document naming convention in `DESIGN_SYSTEM.md` | **Low** |

### 15.10 Documentation & Developer Experience

| # | Area | Current state | Problem | Recommended fix | Priority |
|---|------|---------------|---------|-----------------|----------|
| DX1 | `TECH_DEBT.md` has stale content | Legacy SPA references remain | Confusing for new developers | Audit and remove SPA-era content (Vite chunks, React.lazy routes, `vite.config.js`) from `TECH_DEBT.md`; update `SEO_AUDIT.md` preamble | **Med** |
| DX2 | No `CONTRIBUTING.md` | Multi-doc onboarding | A second developer must read 6 documents to understand the project | Create `CONTRIBUTING.md` with: setup, dev commands, commit convention, PR process, and links to key docs | **Med** |
| DX3 | No `CHANGELOG.md` | History only in git log | Hard to communicate releases to stakeholders | Create `CHANGELOG.md` using Keep-a-Changelog format; retroactively add entries for v1.0 (React SPA), v1.1 (Astro migration), v2.0 (Design refresh) | **Low** |

---

## 16. Quick Wins (Under 1 Week)

These improvements have high impact and low effort — each can be done in under a day:

| # | Task | Est. time | Impact |
|---|------|-----------|--------|
| QW1 | Add skip-to-content `<a>` in `SiteLayout.astro` | 15 min | Accessibility compliance |
| QW2 | Add visible `<h1>` to `/video` page | 15 min | SEO + a11y |
| QW3 | Add `[[headers]]` security headers in `netlify.toml` | 30 min | Security posture |
| QW4 | Fix Organisation JSON-LD description to a fixed brand string | 20 min | SEO structured data accuracy |
| QW5 | Change `ProjectsGallery` from `client:load` to `client:visible` | 5 min | Performance / TTI improvement |
| QW6 | Update `DESIGN_SYSTEM.md` `ROTATE_MS` docs to match 10s code | 5 min | Documentation accuracy |
| QW7 | Replace `service` text input with `<select>` from catalog | 45 min | UX + data quality |
| QW8 | Update client logo `alt` text to real organisation names | 30 min | Accessibility + SEO |
| QW9 | Add `Cache-Control` headers for `/assets/*` in `netlify.toml` | 15 min | Performance (repeat visits) |
| QW10 | Submit sitemap to Google Search Console | 10 min | SEO discoverability |

---

## 17. Roadmap Recommendations

### 30-Day Plan — Foundation & Security

| Priority | Task |
|----------|------|
| ★★★ | Implement HTTP security headers in `netlify.toml` (S1) |
| ★★★ | Add skip link to `SiteLayout.astro` (F1) |
| ★★★ | Fix Video page H1 (A1) |
| ★★★ | Update client logo alt text (A2) |
| ★★★ | Add ESLint + Prettier config (C1) |
| ★★★ | Set up Vitest + `@testing-library/react` for island unit tests (T1) |
| ★★☆ | Switch `ProjectsGallery` to `client:visible` (P3) |
| ★★☆ | Fix Organisation JSON-LD description (A3) |
| ★★☆ | Convert `service` contact field to `<select>` (F3) |
| ★★☆ | Submit sitemap to Google Search Console (SEO) |

### 60-Day Plan — Performance & Developer Experience

| Priority | Task |
|----------|------|
| ★★★ | Migrate images to WebP using Astro's `<Image>` component (P1) |
| ★★★ | Set up GitHub Actions CI: lint + test + build on every PR (D1) |
| ★★☆ | Self-host Inter + Montserrat fonts using `fontsource` (P2) |
| ★★☆ | Add PropTypes or TypeScript to all three island components (C2) |
| ★★☆ | Add Lighthouse CI to GitHub Actions (D2) |
| ★★☆ | Write E2E smoke test for contact form submission flow (T2) |
| ★☆☆ | Clean up `TECH_DEBT.md` stale content (DX1) |
| ★☆☆ | Create `CONTRIBUTING.md` (DX2) |
| ★☆☆ | Add CAPTCHA to contact form (S2) |

### 90-Day Plan — Scale & Maintainability

| Priority | Task |
|----------|------|
| ★★☆ | Evaluate Astro Content Collections for services + projects data (DB1) |
| ★★☆ | Enrich Footer with nav links, phone numbers, social links (F2) |
| ★★☆ | Add `axe-playwright` accessibility checks in CI (T3) |
| ★★☆ | Integrate analytics (Plausible or GA4) with conversion event on form submit |
| ★★☆ | Add error monitoring (Sentry or Netlify Observability) |
| ★☆☆ | Evaluate headless CMS for non-developer content updates (DB1) |
| ★☆☆ | Create `CHANGELOG.md` (DX3) |
| ★☆☆ | Standardise image filenames to lowercase (DB3) |

---

## 18. Conclusion

The GeoDesign marketing site is in strong shape architecturally. The decision to migrate from a Vite + React SPA to Astro 6 with static output was the right call — it resolved the site's previous weaknesses around SEO crawlability, page-load performance, and operational complexity in a single stroke. The React island pattern is used judiciously: only three components ship client-side JavaScript, and all three serve a clear interactive purpose.

The Design 2.0 refresh (April 15, 2026) brings a polished, professional look with the pill-strip navigation, a clear visual hierarchy, and a clean mobile experience.

The most pressing gaps are not architectural — they are operational maturity items that most early-stage projects defer:

1. **No automated tests** — the highest risk item. A form validation regression or broken service route could reach production undetected.
2. **No HTTP security headers** — fixable in under an hour with a `[[headers]]` block in `netlify.toml`.
3. **No analytics** — the business cannot measure conversion rates, most-visited routes, or lead sources without this.
4. **Image format modernisation** — Astro's built-in `<Image>` component makes WebP/AVIF conversion nearly free.

The quick-win list (Section 16) captures 10 improvements that collectively take less than 4 hours and would meaningfully raise the site's security, accessibility, and SEO scores without touching the architecture.

With the recommended 30/60/90-day roadmap, this site can reach a Lighthouse score of 95+ across all categories, achieve WCAG 2.1 AA compliance, and establish a repeatable CI/CD pipeline that gives the team confidence to ship changes quickly.

---

*Report generated from a full static code review of the repository at `/Users/naveen/Documents/Geodesign/do_react` as of 15 April 2026. No live URL scraping or Lighthouse run was performed; performance estimates are based on architecture analysis.*
