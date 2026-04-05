# Astro migration (`feat/astro-netlify`)

**Goals:** SEO-first static HTML per URL, smaller client JS (React only as islands), Netlify deploy from `astro/dist`.

**Branch:** `feat/astro-netlify`  
**Legacy app:** Vite + React SPA at repo root (`src/`, `npm run build` → `dist/`) — unchanged until cutover.

## Layout

| Path | Role |
|------|------|
| [`astro/`](../astro/) | Astro 6 app — **this** is what Netlify builds on this branch |
| [`astro/src/layouts/BaseLayout.astro`](../astro/src/layouts/BaseLayout.astro) | Shared `<head>`: title, meta, canonical, OG/Twitter, Organization JSON-LD |
| [`astro/src/pages/`](../astro/src/pages/) | File-based routes |
| [`astro/public/`](../astro/public/) | Static files (trimmed `assets/web/` for hero/logo; add `clients/` / `gallery/` when porting Projects/Home) |
| [`netlify.toml`](../netlify.toml) | `command = "cd astro && npm ci && npm run build"`, `publish = "astro/dist"` |
| [`.cursor/skills/geodesign-astro/SKILL.md`](../.cursor/skills/geodesign-astro/SKILL.md) | Agent conventions |
| [`.cursor/rules/astro_standards.mdc`](../.cursor/rules/astro_standards.mdc) | Astro + island standards |

## Netlify

1. Connect the repo; set **production branch** or use **Deploy Previews** for `feat/astro-netlify`.
2. Build settings are read from **`netlify.toml`** (no SPA `/* → /index.html` redirect — Astro emits real HTML per path).
3. **Node:** 20 (`[build.environment]`).
4. After deploy, confirm:
   - `/` returns static HTML with correct `<title>`.
   - `/sitemap-index.xml` exists.
   - `robots.txt` references `https://geodesign.co.in/sitemap-index.xml`.

## Route parity (checklist)

Mirror [`App.jsx`](../src/App.jsx) and [PROJECT_SUMMARY](./PROJECT_SUMMARY.md):

| Path | Status |
|------|--------|
| `/` | Scaffold (placeholder copy) |
| `/why-it-matters` | Pending |
| `/about` | Pending |
| `/services` | Pending |
| `/services/:slug` | Pending (dynamic segments → `getStaticPaths` or file tree) |
| `/projects` | Pending |
| `/contact` | Pending (Netlify form in `.astro` or island) |
| `/video` | Pending |
| `/our-offices` | Pending |
| 404 | [`astro/src/pages/404.astro`](../astro/src/pages/404.astro) |

## Cutover (when ready)

1. QA Deploy Preview on Netlify (all routes, forms, maps, analytics).
2. Point production domain to the new deploy or merge to default branch after updating `netlify.toml` on `master`.
3. Remove or archive root Vite app if no longer needed.
4. Update internal links and any hard-coded `dist/` references.

## Effort notes

- **Incremental:** Port one route at a time; copy constants from `src/constants/` into `astro/src/` as you go.
- **Assets:** Copy additional folders under `public/assets/` as pages require them (see trim note in [`astro/README.md`](../astro/README.md)).
