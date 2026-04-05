// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** Production origin — canonical URLs, sitemap, and OG absolute URLs */
const site = 'https://geodesign.co.in';

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  /** Hide Astro dev toolbar (inspect / dev overlay) in local dev — not shown in production builds. */
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
