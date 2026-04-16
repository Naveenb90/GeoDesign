import React, { useEffect, useState } from 'react';

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
    if (fancyboxStatus === 'loading') {
      return;
    }

    const Fancybox = fancyboxRef.current;
    if (fancyboxStatus === 'error' || !Fancybox) {
      window.alert('Gallery is temporarily unavailable. Please refresh the page and try again.');
      return;
    }

    Fancybox.show(galleryImages, {
      Thumbs: false,
      Toolbar: true,
      Carousel: {
        transition: 'slide',
      },
    });
  };

  const tile = `${SKY_OUTCOME_TILE_CLASS} mb-10 md:mb-12 w-full max-w-7xl mx-auto !p-8 md:!p-10 lg:!p-12`;
  const marqueeTile = `${SKY_OUTCOME_TILE_CLASS} overflow-hidden`;

  return (
    <section id="projects" className="w-full min-w-0 py-8 md:py-10" aria-labelledby="projects-heading">
      <div className="mb-8 text-center md:mb-10">
        <h1
          id="projects-heading"
          className="font-display mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
        >
          Who We Work With
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Organisations that rely on GeoDesign to reduce construction risk — scientific ground investigation, testing,
          and foundation-related insight across Tamil Nadu and South India.
        </p>
      </div>

      <div className={tile}>
        <div className="mb-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
          {previewImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg shadow-md transition hover:scale-105"
              loading="lazy"
            />
          ))}
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
      </div>

      <h2 className="mb-3 text-center text-2xl font-bold text-slate-900 md:mb-4 md:text-3xl">Trusted By</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-slate-600 md:mb-10">
        Developers, contractors, and institutions we&apos;ve supported on geotechnical assignments.
      </p>

      <div className={marqueeTile}>
        <div className="relative overflow-hidden" aria-label="Client logos">
          <div className="animate-marquee flex space-x-12">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex flex-shrink-0 items-center justify-center rounded-xl border border-sky-200/50 bg-white/90 p-4 shadow-sm"
              >
                <img src={logo} alt={`Client ${index + 1}`} className="h-16 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsGallery;
