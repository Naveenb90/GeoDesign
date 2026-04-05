import React, { useEffect, useState } from 'react'
import { previewImages, getGalleryImages, clientLogos } from '../constants/data'
import { SKY_OUTCOME_TILE_CLASS } from '../constants/skyTileClasses'

/**
 * Fancybox configuration
 * Pinned version for stability and security
 */
const FANCYBOX_VERSION = '5.0.36'
const FANCYBOX_SCRIPT_URL = `https://cdn.jsdelivr.net/npm/@fancyapps/ui@${FANCYBOX_VERSION}/dist/fancybox/fancybox.umd.js`

/**
 * Projects Section Component
 *
 * Displays recent projects gallery and client logos.
 * Layout matches the services hub: white canvas, section headings, sky-gradient panels.
 *
 * @component
 * @returns {JSX.Element} Projects and clients section
 */
function ProjectsSection() {
  const galleryImages = getGalleryImages()

  const [fancyboxStatus, setFancyboxStatus] = useState('idle') // 'idle' | 'loading' | 'loaded' | 'error'

  useEffect(() => {
    if (window.Fancybox) {
      setFancyboxStatus('loaded')
      return
    }

    setFancyboxStatus('loading')

    const script = document.createElement('script')
    script.src = FANCYBOX_SCRIPT_URL
    script.async = true
    script.crossOrigin = 'anonymous'

    script.onload = () => {
      if (window.Fancybox) {
        setFancyboxStatus('loaded')
      } else {
        console.error('Fancybox script loaded but Fancybox object not available')
        setFancyboxStatus('error')
      }
    }

    script.onerror = (error) => {
      console.error('Failed to load Fancybox library:', error)
      setFancyboxStatus('error')
    }

    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleOpenGallery = () => {
    if (fancyboxStatus === 'loading') {
      return
    }

    if (fancyboxStatus === 'error' || !window.Fancybox) {
      alert('Gallery is temporarily unavailable. Please refresh the page and try again.')
      console.error('Fancybox is not available')
      return
    }

    window.Fancybox.show(galleryImages, {
      Thumbs: false,
      Toolbar: true,
      Carousel: {
        transition: 'slide',
      },
    })
  }

  return (
    <section
      id="projects"
      className="w-full min-w-0 py-8 md:py-10"
      aria-labelledby="projects-heading"
    >
      <h1
        id="projects-heading"
        className="text-3xl sm:text-4xl font-bold text-center mb-5 md:mb-6 text-slate-900"
      >
        Who We Work With
      </h1>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 md:mb-12">
        Organisations that rely on GeoDesign to reduce construction risk — scientific ground investigation,
        testing, and foundation-related insight across Tamil Nadu and South India.
      </p>

      <div
        className={`${SKY_OUTCOME_TILE_CLASS} mb-10 md:mb-12 w-full max-w-7xl mx-auto !p-8 md:!p-10 lg:!p-12`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 mb-8">
          {previewImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md hover:scale-105 transition w-full"
              loading="lazy"
            />
          ))}
        </div>

        <button
          id="openGallery"
          type="button"
          onClick={handleOpenGallery}
          disabled={fancyboxStatus === 'loading'}
          className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white ${
            fancyboxStatus === 'loading'
              ? 'bg-sky-400 cursor-wait'
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
                className="animate-spin h-5 w-5"
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

      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2">
        Trusted By
      </h2>
      <p className="text-center text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
        Developers, contractors, and institutions we&apos;ve supported on geotechnical assignments.
      </p>

      <div className={`${SKY_OUTCOME_TILE_CLASS} overflow-hidden`}>
        <div className="overflow-hidden relative" aria-label="Client logos">
          <div className="flex animate-marquee space-x-12">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white/90 border border-sky-200/50 rounded-xl p-4 shadow-sm flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-16 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
