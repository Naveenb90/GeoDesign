# Running the site locally

**Updated:** 9 August 2026

How to get the GeoDesign site running on your own machine — for previewing changes
before they go to Netlify. This is an **Astro 6 static site**; see
[ARCHITECTURE.md](./ARCHITECTURE.md) for how it is built.

---

## Prerequisites

- **Node.js 22.12.0 or newer.** The version is pinned in `.nvmrc` and enforced by
  `package.json` (`engines.node >= 22.12.0`). If you use `nvm`, run `nvm use` in the
  project folder to switch to the right version automatically.
- **npm** (ships with Node). No other package manager is required — the project has a
  committed `package-lock.json`.

Check what you have:

```bash
node -v      # must be >= 22.12.0
npm -v
```

---

## First-time setup

From the project root (`do_react/`):

```bash
npm install
```

This reads `package-lock.json` and creates `node_modules/`. You only need to do this
once, and again whenever dependencies change.

---

## Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload at **http://localhost:4321** |
| `npm run build` | Produce the production build in **`dist/`** |
| `npm run preview` | Serve the built `dist/` locally, exactly as Netlify would |

### Develop

```bash
npm run dev
```

Open http://localhost:4321. Edits to files under `src/` reload the page automatically.
Stop the server with `Ctrl+C`.

### Build and preview the production output

```bash
npm run build
npm run preview
```

`build` writes static HTML for every route into `dist/` (plus `sitemap-index.xml`).
`preview` then serves that folder so you can check the real, compiled site — useful for
verifying anything that only appears in the production build (canonical URLs, JSON-LD,
the sitemap).

---

## How it deploys (for context)

Netlify runs `npm ci && npm run build` and publishes the `dist/` folder, with
`NODE_VERSION = 22.12.0` (see `netlify.toml`). There is no server and no SPA
catch-all — every route is a real HTML file, and Netlify serves `404.html` for missing
paths. Running `npm run build` locally reproduces exactly what Netlify publishes.

---

## Troubleshooting

**Wrong Node version / build fails immediately.** Run `nvm use` (or install Node
22.12.0). Astro 6 will not run on older Node.

**`npm run dev` says the port is in use.** Another process is on 4321. Stop it, or start
on another port: `npm run dev -- --port 3000`.

**Errors about a missing platform binary (e.g. `@rollup/rollup-*`) after copying the
project between machines or operating systems.** `node_modules` contains
OS-specific binaries. Delete it and reinstall clean:

```bash
rm -rf node_modules
npm ci
```

**Styling looks unstyled on first load.** Fonts load without blocking render
(see [SEO.md](./SEO.md)); a brief fallback-font flash on a cold cache is expected, not a
bug.

**Images fail to appear after adding new ones.** `srcset` variants are never upscaled and
are partly hand-written — read the image rules in
[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md#images) and the note in
[TECH_DEBT.md](./TECH_DEBT.md) before adding image files.

---

## Git

Local git conventions and a safe commit/tag workflow are documented separately in
[git-local.example.md](./git-local.example.md).
