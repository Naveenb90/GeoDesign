---
name: geodesign-react
description: >-
  React islands inside the Astro site (ContactForm, ProjectsGallery). For pages, layouts, and
  routing use geodesign-astro. Follow react_standards.mdc for JSX in src/components/*.jsx.
---

# GeoDesign React — islands only

The **Vite + React SPA** at the repo root has been **removed**. This skill applies to **React island components** used by Astro (`src/components/*.jsx`).

For **Astro pages, layouts, data, and Netlify**, use **[geodesign-astro](../geodesign-astro/SKILL.md)**.

## Conventions

- Match **[.cursor/rules/react_standards.mdc](../../rules/react_standards.mdc)** for hooks, accessibility, and PropTypes where used.
- Co-locate island logic with the `.astro` pages that import them; avoid pulling in `react-router-dom` (use `<a href>` from Astro for links).

## Production reference

[https://geodesign.co.in](https://geodesign.co.in) — keep UX and copy aligned with static pages.
