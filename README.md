# GeoDesign — Astro site (SEO-first)

Static marketing site at the repository root.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output dist/
npm run preview  # serve dist locally
```

## Stack

- Astro 6, `output: 'static'`
- Tailwind CSS v4 (`src/styles/global.css`)
- `@astrojs/react` (islands: contact form, projects gallery)
- `@astrojs/sitemap`

## SEO

- Global meta and Organization JSON-LD: `src/layouts/BaseLayout.astro`
- Site origin: `astro.config.mjs` → `https://geodesign.co.in`

## Netlify

Root [`netlify.toml`](netlify.toml) runs `npm run build` and publishes `dist/`. See [`docs/ASTRO_MIGRATION.md`](docs/ASTRO_MIGRATION.md).
