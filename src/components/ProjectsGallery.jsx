import React, { useEffect, useState } from 'react';

import { previewImages, getGalleryImages, clientLogos } from '../data/data.js';
import { SKY_OUTCOME_TILE_CLASS } from '../data/skyTileClasses.js';

const FANCYBOX_VERSION = '5.0.36';
const FANCYBOX_SCRIPT_URL = `https://cdn.jsdelivr.net/npm/@fancyapps/ui@${FANCYBOX_VERSION}/dist/fancybox/fancybox.umd.js`;
const FANCYBOX_CSS_URL = `https://cdn.jsdelivr.net/npm/@fancyapps/ui@${FANCYBOX_VERSION}/dist/fancybox/fancybox.css`;

/**
 * Gallery + client marquee — Fancybox loaded on demand (matches legacy React).
 * @returns {JSX.Element}
 */
export function ProjectsGallery() {
  const galleryImages = getGalleryImages();
  const [fancyboxStatus, setFancyboxStatus] = useState('idle');

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FANCYBOX_CSS_URL;
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Fancybox) {
      setFancyboxStatus('loaded');
      return;
    }

    setFancyboxStatus('loading');

    const script = document.createElement('script');
    script.src = FANCYBOX_SCRIPT_URL;
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      if (window.Fancybox) {
        setFancyboxStatus('loaded');
      } else {
        console.error('Fancybox script loaded but Fancybox object not available');
        setFancyboxStatus('error');
      }
    };

    script.onerror = (error) => {
      console.error('Failed to load Fancybox library:', error);
      setFancyboxStatus('error');
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleOpenGallery = () => {
    if (fancyboxStatus === 'loading') {
      return;
    }

    if (fancyboxStatus === 'error' || !window.Fancybox) {
      window.alert('Gallery is temporarily unavailable. Please refresh the page and try again.');
      console.error('Fancybox is not available');
      return;
    }

    window.Fancybox.show(galleryImages, {
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
      <h1 id="projects-heading" className="mb-5 text-center text-3xl font-bold text-slate-900 sm:mb-6 sm:text-4xl">
        Who We Work With
      </h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:mb-12 md:text-lg">
        Organisations that rely on GeoDesign to reduce construction risk — scientific ground investigation,
        testing, and foundation-related insight across Tamil Nadu and South India.
      </p>

      <div className={tile}>
        <div className="mb-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
          {previewImages.map((image, index) => (
            <img
              key={index}
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

      <h2 className="mb-2 text-center text-2xl font-bold text-slate-900 md:text-3xl">Trusted By</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:mb-10 md:text-base">
        Developers, contractors, and institutions we&apos;ve supported on geotechnical assignments.
      </p>

      <div className={marqueeTile}>
        <div className="relative overflow-hidden" aria-label="Client logos">
          <div className="animate-marquee flex space-x-12">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
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
