# Astro site (repository root)

**Goals:** SEO-first static HTML per URL, React only as islands, Netlify deploy from `dist/`.

The **Vite + React SPA** at the former repo root has been **removed**; this repository is **Astro-only**.

## Layout

| Path | Role |
|------|------|
| [`astro.config.mjs`](../astro.config.mjs) | Astro 6 config, `site`, integrations |
| [`src/layouts/BaseLayout.astro`](../src/layouts/BaseLayout.astro) | Shared `<head>`: title, meta, canonical, OG/Twitter, Organization JSON-LD |
| [`src/pages/`](../src/pages/) | File-based routes |
| [`public/`](../public/) | Static assets (`assets/web/`, `assets/clients/`, `assets/gallery/`, etc.) |
| [`netlify.toml`](../netlify.toml) | `npm ci && npm run build`, `publish = "dist"` |

Optional (local only, often gitignored): Cursor rules under `.cursor/` if your clone tracks them.

## Netlify

1. Build settings: **`netlify.toml`** (no SPA `/* → /index.html` redirect).
2. **Node:** **22.12.0** (`[build.environment]` and `.nvmrc`).
3. After deploy, confirm `/`, `/sitemap-index.xml`, and `robots.txt` → `https://geodesign.co.in/sitemap-index.xml`.

## Route parity

Routes mirror the former React Router app (removed). All primary paths are implemented under `src/pages/`.

## Effort notes

- Shared copy lives in [`src/data/`](../src/data/).
- Add assets under `public/assets/` as needed.
