/**
 * Home page (`/`) rotating hero backgrounds — **fully driven by `public/assets/home/`.**
 * At build time we read every image file in that folder (no hardcoded list).
 * Order: alphabetical by filename (case-insensitive). Add/rename files and rebuild.
 * Interval: `HeroGalleryBackground.jsx` → `ROTATE_MS` (20s).
 */

import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXT = /\.(jpe?g|png|gif|webp|avif)$/i;

const publicHomeDir = path.join(process.cwd(), 'public/assets/home');

function loadHomeHeroImages() {
  try {
    if (!fs.existsSync(publicHomeDir)) {
      return [];
    }
    const files = fs
      .readdirSync(publicHomeDir)
      .filter((f) => IMAGE_EXT.test(f) && !f.startsWith('.'))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));
    return files.map((name) => ({ src: `/assets/home/${encodeURI(name)}`, type: 'image' }));
  } catch (err) {
    console.error('[homeHeroImages]:', err);
    return [];
  }
}

export const homeHeroImages = loadHomeHeroImages();
