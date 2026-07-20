/**
 * Home page (`/`) rotating hero backgrounds — **fully driven by `public/assets/home/`.**
 * At build time we read every image file in that folder (no hardcoded list).
 * Order: alphabetical by filename (case-insensitive). Add/rename files and rebuild.
 * Interval: `HeroGalleryBackground.jsx` → `ROTATE_MS` (20s).
 */

import fs from 'node:fs';
import path from 'node:path';

/** Source formats only — generated `.webp` variants are matched to these, not listed as heroes. */
const IMAGE_EXT = /\.(jpe?g|png|gif|avif)$/i;

/** Generated responsive variants are named `<base>-<width>.webp`. */
const VARIANT_RE = /^(.+)-(\d+)\.webp$/i;

const publicHomeDir = path.join(process.cwd(), 'public/assets/home');

function loadHomeHeroImages() {
  try {
    if (!fs.existsSync(publicHomeDir)) {
      return [];
    }

    const all = fs.readdirSync(publicHomeDir).filter((f) => !f.startsWith('.'));

    /** base name -> [{ src, width }] for every generated WebP variant. */
    const variants = new Map();
    for (const name of all) {
      const m = name.match(VARIANT_RE);
      if (!m) continue;
      const [, base, width] = m;
      if (!variants.has(base)) variants.set(base, []);
      variants.get(base).push({ src: `/assets/home/${encodeURI(name)}`, width: Number(width) });
    }
    for (const list of variants.values()) list.sort((a, b) => a.width - b.width);

    return all
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }))
      .map((name) => {
        const base = name.replace(/\.[^.]+$/, '');
        return {
          src: `/assets/home/${encodeURI(name)}`,
          type: 'image',
          webp: variants.get(base) ?? [],
        };
      });
  } catch (err) {
    console.error('[homeHeroImages]:', err);
    return [];
  }
}

export const homeHeroImages = loadHomeHeroImages();
