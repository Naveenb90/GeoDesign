---
name: geodesign-react
description: >-
  Legacy Vite + React SPA at repo root (geodesign.co.in). For new marketing-site
  work, prefer Astro under astro/ — see geodesign-astro skill. Use this skill when
  editing src/, React islands, or parity with the old SPA.
---

# GeoDesign React — project conventions (legacy SPA)

> **New stack:** The **`feat/astro-netlify`** migration uses **Astro** under [`astro/`](../../astro/) for a static, SEO-first site. Prefer **[geodesign-astro](../geodesign-astro/SKILL.md)** for new pages and Netlify build targeting `astro/dist`. This file remains the reference for the **existing Vite + React** app in [`src/`](../../src/) until cutover.

## Production reference

The live site is the visual and copy reference: [https://geodesign.co.in](https://geodesign.co.in). Inner pages should use the same section structure and tone as production (e.g. Our Offices: Contact Information, Find Us, Get in Touch → Contact).

## Typography

- **Body:** Inter (`font-sans`, `--font-sans`).
- **Headings:** Montserrat (`font-display`, `--font-display`).
- **Serif accent:** Playfair Display (`font-serif`).
- Fonts load from Google Fonts in `index.html` (preload + async stylesheet). Keep `index.html`, `tailwind.config.js`, and `src/styles/index.css` in sync when changing fonts.

## Page layout

- Use **`page-shell`** on the outer wrapper of route pages (see `src/styles/index.css`). It applies header offset, horizontal padding, min height, and warm background (`bg-stone-50`).
- Do not duplicate large top padding inside sections when the page already uses `page-shell`.

## Data and maps

- Copy and contact fields: `src/constants/data.js` (`contactInfo`, etc.).
- Google Maps iframe URLs: **`mapEmbedUrls`** (`headOffice`, `branchOffice`). Prefer official embed `src` from Google Maps (Share → Embed a map) for exact pins; coordinate `output=embed` URLs may be replaced anytime.
- Reuse **`OfficeMapEmbed`** for embedded maps instead of raw iframes in multiple files.

## SEO

- Default site origin for canonical/OG/JSON-LD: **`https://geodesign.co.in`** in `src/components/SEO.jsx` (`url` prop default).

## Forms and hosting

- Contact form targets **Netlify Forms** (`data-netlify`, POST to `/`). Keep form attributes compatible with Netlify when changing the contact UI.

## Documentation

- Design and layout details: [docs/DESIGN_SYSTEM.md](../../../docs/DESIGN_SYSTEM.md).
