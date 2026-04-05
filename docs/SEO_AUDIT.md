# SEO audit — GeoDesign React (codebase review)

**Audit date:** 4 April 2026  
**Scope:** Static review of `src/`, `index.html`, and `public/` (robots, sitemap).  
**Canonical origin:** `https://geodesign.co.in` — matches `src/components/SEO.jsx` default `url` prop.

**Note:** This is a **client-rendered SPA** (Vite + React). Search engines that execute JavaScript will see per-route `<title>` and meta from `react-helmet-async`. The initial `index.html` still ships default meta; avoid conflicting canonicals between static HTML and hydrated app (see [Issues](#8-issues--recommendations)).

---

## Executive summary

| Area | Rating | Notes |
|------|--------|--------|
| Technical (robots, sitemap, URLs) | **Strong** | `robots.txt` + `sitemap.xml` present; URLs aligned to **geodesign.co.in** (updated this audit). |
| On-page (titles, descriptions) | **Strong** | Every route renders `<SEO />` with unique `title` / `description` / `keywords`. |
| Structured data | **Good** | Organization JSON-LD on all pages; room to add `WebPage` / `LocalBusiness` refinement. |
| Content & headings | **Good** | Clear H1 on most routes; **Video** page lacks a visible H1 (see below). |
| SPA / indexing | **Watch** | Canonical uses `window.location.pathname` client-side; prerender/SSR would be stronger for non-JS crawlers. |

**Overall:** **~82 / 100** — solid marketing-site SEO foundation; main gaps are SPA mechanics, one heading issue, and schema duplication—not missing meta on routes.

---

## 1. Technical SEO

### Implemented

| Item | Location | Status |
|------|----------|--------|
| **robots.txt** | `public/robots.txt` | `Allow: /`; **Sitemap** points to `https://geodesign.co.in/sitemap.xml` |
| **sitemap.xml** | `public/sitemap.xml` | **14 URLs**: home, about, `/services`, 5× `/services/:slug`, projects, contact, video, why-it-matters, our-offices |
| **Clean URLs** | React Router | Kebab-case paths; service slugs match catalog |
| **404** | `App.jsx` | Friendly message + link home (not in sitemap — correct) |
| **lang** | `index.html` | `<html lang="en">` |
| **Viewport** | `index.html` | Present |
| **Scroll restoration** | `ScrollToTop.jsx` | Scroll to top on navigation — improves UX signals |

### SPA considerations

- **Canonical & OG URL:** Built in `SEO.jsx` as `` `${url}${window.location.pathname}` `` after load. Ensure production host redirects (e.g. apex ↔ www) match **one** canonical host (**geodesign.co.in**).
- **HTTPS:** Expected on Netlify/production; not enforced in repo (hosting concern).

---

## 2. On-page SEO (per route)

All listed pages use **`src/components/SEO.jsx`** with route-specific props.

| Route | Document title (via `<SEO title=…>`) | Notes |
|-------|--------------------------------------|--------|
| `/` | GeoDesign - Expert Soil Testing Services in India | Matches brand + scope |
| `/about` | About Us - GeoDesign | Short; acceptable |
| `/why-it-matters` | Why Soil Testing Matters - GeoDesign | Clear intent |
| `/services` | What We Do — Geotechnical Services | Hub |
| `/services/…` | From `servicesCatalog` `metaTitle` | Unique per service |
| `/projects` | Our Projects - GeoDesign Portfolio | |
| `/contact` | Get Started - Contact GeoDesign | |
| `/video` | Watch Our Video - GeoDesign | |
| `/our-offices` | Our Offices - GeoDesign | |

**Title pattern:** If `title` does not include “GeoDesign”, the component appends ` | GeoDesign`.

**Meta keywords:** Still output; Google largely ignores them — low priority to maintain.

**Obsolete meta:** `revisit-after` in `SEO.jsx` is outdated for modern crawlers — safe to remove later.

---

## 3. Headings (accessibility & SEO)

| Page | Visible H1 | Note |
|------|------------|------|
| Home | Yes (Hero) | |
| About, Why It Matters, Services hub, Projects, Contact, Offices | Yes | |
| Service detail | Yes | From catalog |
| **Video** | **No** | `VideoSection` uses `aria-label` on `<section>` only — **recommend adding a visible `<h1>`** (e.g. “Watch our video”) for outline and SEO |

---

## 4. Structured data (`SEO.jsx`)

- **Type:** `Organization` with name, url, logo, description, address (Coimbatore), `ContactPoint`.
- **Issue:** Same block is emitted on **every** page; `description` follows **page** meta — Organization description can drift from a single brand definition.
- **Recommendation:** Emit **Organization** once (e.g. home only) or keep fixed `description` for Organization; add **`WebPage`** (or `Service` for service URLs) with page-specific fields if you extend schema.

---

## 5. Open Graph & Twitter

- **og:title, og:description, og:image, og:url** — set.
- **twitter:card** — `summary_large_image`.
- **Default image:** `/assets/web/hero-site.jpg` (absolute URL resolved against site origin).
- **Locale:** `og:locale` = `en_IN`.

---

## 6. Performance & Core Web Vitals (SEO-adjacent)

- Hero **LCP** image preloaded in `index.html`.
- Fonts: async CSS pattern for Google Fonts.
- Images: many use `loading="lazy"`; **WebP/AVIF** not mandated — opportunity for LCP/weight on gallery assets.
- **Analytics:** Commented in `index.html` — enable one stack for measurement (Plausible/GA4) when ready.

---

## 7. Internal linking

- Header nav covers main sections.
- Breadcrumbs on **service detail** (Home → What We Do → service).
- Cross-links (e.g. Contact → Our Offices) present in copy.

---

## 8. Issues & recommendations

### High

1. **Video page H1** — Add a visible page title for users and heading hierarchy.
2. **Domain consistency** — Use **one** primary host everywhere (this audit aligned **robots** / **sitemap** to **geodesign.co.in**). Configure Netlify redirects if **geodesign.in** still serves traffic.

### Medium

3. **Organization JSON-LD** — Use a **stable** organization description; add **`WebPage`** for key URLs if you invest in rich results.
4. **Canonical in SPA** — Validate in **Google Search Console** URL Inspection after deploy; consider **prerender** or **SSR** if non-JS crawlers matter.
5. **Remove** `meta name="revisit-after"` — cosmetic cleanup.

### Low

6. **meta keywords** — Optional removal to reduce noise.
7. **Sitemap `lastmod`** — Currently uniform; regenerate on meaningful deploys or automate in CI.
8. **Client logo alts** on Projects — generic “Client N”; improve if you have names.

---

## 9. Verification checklist (post-deploy)

- [ ] **Search Console** property for **geodesign.co.in**, submit sitemap `https://geodesign.co.in/sitemap.xml`
- [ ] **URL Inspection** on `/`, `/services`, one service detail
- [ ] **Rich Results Test** on a page with JSON-LD
- [ ] **Lighthouse** SEO category on key routes
- [ ] Confirm **301** from old domain if migrating

---

## 10. Files reference

| Concern | File |
|---------|------|
| Meta, canonical, OG, JSON-LD | `src/components/SEO.jsx` |
| Per-route titles/descriptions | `src/pages/*.jsx`, `src/constants/servicesCatalog.js` |
| Crawlers | `public/robots.txt`, `public/sitemap.xml` |
| Shell document | `index.html` |

---

## Addendum — Astro static site (`feat/astro-netlify`)

The **Astro** app under **`astro/`** ships per-route **HTML with meta and canonical in the first response** via [`astro/src/layouts/BaseLayout.astro`](../astro/src/layouts/BaseLayout.astro). This addresses the SPA limitations called out in **§ SPA considerations** and **Executive summary** for crawlers that do not execute JavaScript. **`@astrojs/sitemap`** generates **`sitemap-index.xml`** at build time; [`astro/public/robots.txt`](../astro/public/robots.txt) references **`https://geodesign.co.in/sitemap-index.xml`**. Re-run Lighthouse and Rich Results after each batch of migrated routes.

---

## Changelog

- **2026-04-05:** Addendum for Astro migration branch and static HTML SEO.
- **2026-04-04:** Full rewrite from codebase audit; aligned **robots.txt** / **sitemap.xml** to **https://geodesign.co.in**; updated sitemap **lastmod**; removed obsolete / corrupted table fragments from prior version.
