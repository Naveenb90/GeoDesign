# GeoDesign — web repository

Marketing site for **GeoDesign** ([geodesign.co.in](https://geodesign.co.in)). This repo contains **two** apps:

| App | Path | Stack | When to use |
|-----|------|--------|-------------|
| **Astro (target)** | [`astro/`](./astro/) | Astro 6, static output, Tailwind v4, React islands | **New work** on branch `feat/astro-netlify` — SEO-first HTML, Netlify publishes `astro/dist` |
| **Legacy React SPA** | [`src/`](./src/) | React 18, Vite, React Router, `react-helmet-async` | Reference until routes are migrated; `npm run build` → `dist/` |

**Docs:** [docs/README.md](./docs/README.md) — start with [docs/ASTRO_MIGRATION.md](./docs/ASTRO_MIGRATION.md) for the Astro branch and Netlify.

---

## Astro site (recommended)

```bash
cd astro
npm install
npm run dev          # http://localhost:4321
npm run build        # astro/dist
npm run preview
```

**Netlify (this branch):** [`netlify.toml`](./netlify.toml) runs `cd astro && npm ci && npm run build` and publishes **`astro/dist`**. No SPA catch-all redirect.

---

## Legacy Vite + React app

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # dist/
npm run preview
npm run lint
```

Used for production until Astro migration is complete. See [docs/PROJECT_SUMMARY.md](./docs/PROJECT_SUMMARY.md).

---

## Project structure (high level)

```
do_react/
├── astro/                 # Astro app (static SEO site)
├── src/                   # Legacy React SPA
├── public/                # Legacy Vite public assets
├── docs/                  # Design system, migration, SEO audit
├── netlify.toml           # Build: Astro on feat/astro-netlify
└── package.json           # Root = legacy app
```

## Features (directional)

- Static HTML per route (Astro) for crawlers and social previews
- Tailwind CSS; design tokens aligned with [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)
- Netlify Forms (contact) — wire in Astro when porting `/contact`
- Accessibility and semantic HTML (WCAG-oriented rules in `.cursor/rules/`)

## Git workflow

Template: [docs/git-local.example.md](./docs/git-local.example.md) (copy to `docs/git-local.md`, gitignored).
