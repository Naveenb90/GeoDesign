import React, { useEffect } from 'react'
import { previewImages, getGalleryImages, clientLogos } from '../constants/data'

/**
 * Projects Section Component
 * 
 * Displays recent projects gallery and client logos.
 * 
 * Features:
 * - Project image gallery with preview
 * - Full gallery modal using Fancybox
 * - Scrolling client logos (marquee animation)
 * 
 * Dependencies:
 * - @fancyapps/ui for gallery modal
 * 
 * Performance:
 * - Images are lazy loaded
 * - Gallery images only loaded when modal opens
 * 
 * @component
 * @returns {JSX.Element} Projects and clients section
 */
function ProjectsSection() {
  // Get all gallery images for the modal
  const galleryImages = getGalleryImages()

  /**
   * Initialize Fancybox when component mounts
   * Loads Fancybox library dynamically for better performance
   */
  useEffect(() => {
    // Check if Fancybox is already loaded
    if (window.Fancybox) {
      return
    }

    // Dynamically load Fancybox script
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup: remove script on unmount (optional)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  /**
   * Open gallery modal with Fancybox
   * Validates that Fancybox is loaded before opening
   */
  const handleOpenGallery = () => {
    if (!window.Fancybox) {
      console.error('Fancybox is not loaded')
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

  // Client logos are imported from constants at the top
  // In a production app, this could be fetched from an API

  return (
    <section
      id="projects"
      className="pt-28 pb-16 px-4 sm:px-6 bg-white"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto w-full text-center space-y-6">
        {/* Recent Projects Section */}
        <section className="py-8 bg-white-50 rounded-2xl shadow-sm">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 id="projects-heading" className="text-3xl font-bold mb-6">
              Recent Projects
            </h2>
            <p className="text-gray-600 mb-10">
              A glimpse of our latest work in geotechnical engineering.
            </p>

            {/* Preview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {previewImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-md hover:scale-105 transition"
                  loading="lazy"
                  width="400"
                  height="300"
                  decoding="async"
                />
              ))}
            </div>

            {/* View Gallery Button */}
            <button
              id="openGallery"
              onClick={handleOpenGallery}
              className="inline-block bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              aria-label="Open full project gallery"
            >
              View Full Gallery
            </button>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-white-50">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted By</h2>

          {/* Scrolling container */}
          <div className="overflow-hidden relative" aria-label="Client logos">
            <div className="flex animate-marquee space-x-12">
              {/* Render logos twice for seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-gray-100 rounded-xl p-4 shadow-md flex-shrink-0"
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
        </section>
      </div>
    </section>
  )
}

export default ProjectsSection

