import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { previewImages, getGalleryImages, clientLogos } from '../data/data.js';
import { SKY_OUTCOME_TILE_CLASS } from '../data/skyTileClasses.js';

/**
 * Gallery + client marquee — Fancybox loaded from npm (no CDN dependency).
 * @returns {JSX.Element}
 */
export function ProjectsGallery() {
  const galleryImages = getGalleryImages();
  const fancyboxRef = React.useRef(null);
  const [fancyboxStatus, setFancyboxStatus] = useState('loading');
  const [galleryError, setGalleryError] = useState(false);
  /** WCAG 2.2.2 — moving content lasting more than 5s needs a user-accessible pause. */
  const [marqueePaused, setMarqueePaused] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadFancybox() {
      try {
        await import('@fancyapps/ui/dist/fancybox/fancybox.css');
        const mod = await import('@fancyapps/ui');
        if (cancelled) return;
        const FB = mod.Fancybox ?? mod.default?.Fancybox;
        if (!FB) throw new Error('Fancybox export missing');
        fancyboxRef.current = FB;
        setFancyboxStatus('loaded');
      } catch (error) {
        console.error('Failed to load Fancybox:', error);
        if (!cancelled) setFancyboxStatus('error');
      }
    }

    loadFancybox();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleOpenGallery = () => {
    if (fancyboxStatus === 'loading') return;

    const Fancybox = fancyboxRef.current;
    if (fancyboxStatus === 'error' || !Fancybox) {
      setGalleryError(true);
      return;
    }

    setGalleryError(false);
    Fancybox.show(galleryImages, {
      Thumbs: false,
      Toolbar: true,
      Carousel: { transition: 'slide' },
    });
  };

  const tile = `${SKY_OUTCOME_TILE_CLASS} mb-10 md:mb-12 w-full max-w-7xl mx-auto !p-8 md:!p-10 lg:!p-12`;
  const marqueeTile = `${SKY_OUTCOME_TILE_CLASS} overflow-hidden`;

  return (
    <section id="projects" className="w-full min-w-0 py-8 md:py-10" aria-labelledby="projects-gallery-heading">
      <div className={tile}>
        <div className="mb-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
          {previewImages.map((image) => {
            // WebP variants are generated alongside each original at 400w/800w.
            // <picture> keeps the original JPEG as the fallback source, so nothing
            // breaks if a variant is ever missing.
            const base = image.src.replace(/\.[^.]+$/, '');
            return (
              <picture key={image.src}>
                <source
                  type="image/webp"
                  srcSet={`${base}-400.webp 400w, ${base}-800.webp 800w`}
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  width="400"
                  height="300"
                  className="w-full rounded-lg shadow-md transition hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            );
          })}
        </div>

        <button
          id="openGallery"
          type="button"
          onClick={handleOpenGallery}
          disabled={fancyboxStatus === 'loading'}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white ${
            fancyboxStatus === 'loading'
              ? 'cursor-wait bg-sky-400'
              : fancyboxStatus === 'error'
                ? 'bg-gray-500 hover:bg-gray-600'
                : 'bg-sky-600 hover:bg-sky-700'
          } text-white`}
          aria-label="Open full project gallery"
          aria-busy={fancyboxStatus === 'loading'}
        >
          {fancyboxStatus === 'loading' ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading Gallery...
            </>
          ) : (
            'View Full Gallery'
          )}
        </button>

        {galleryError && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            Gallery is temporarily unavailable. Please refresh the page and try again.
          </p>
        )}
      </div>

      <h2
        id="projects-gallery-heading"
        className="mb-3 text-center text-2xl font-bold text-slate-900 md:mb-4 md:text-3xl"
      >
        Trusted By
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-slate-600 md:mb-10">
        Developers, contractors, and institutions we&apos;ve supported on geotechnical assignments.
      </p>

      <div className={marqueeTile}>
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => setMarqueePaused((p) => !p)}
            className="rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            aria-pressed={marqueePaused}
          >
            {marqueePaused ? 'Play' : 'Pause'} logo scroll
          </button>
        </div>
        <div className="relative overflow-hidden" aria-label="Client logos">
          <div
            className="animate-marquee flex space-x-12"
            style={marqueePaused ? { animationPlayState: 'paused' } : undefined}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => {
              // The list is duplicated to make the marquee loop seamlessly. Only the
              // first copy carries alt text; the second is decorative, so announcing
              // it would repeat every client name to screen reader users.
              const isDuplicate = index >= clientLogos.length;
              return (
                <div
                  key={`${logo}-${index}`}
                  className="flex shrink-0 items-center justify-center rounded-xl border border-sky-200/50 bg-white/90 p-4 shadow-sm"
                  aria-hidden={isDuplicate ? 'true' : undefined}
                >
                  <img
                    src={logo}
                    alt={isDuplicate ? '' : 'Client of GeoDesign geotechnical services'}
                    width="120"
                    height="64"
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectsGallery.propTypes = {};

export default ProjectsGallery;
