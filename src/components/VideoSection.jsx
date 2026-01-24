import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { videoConfig } from '../constants/data'

/**
 * Video Section Component
 * 
 * Displays an embedded YouTube video with lazy loading.
 * The video only loads when the section enters the viewport,
 * improving initial page load performance.
 * 
 * Performance:
 * - Lazy loads YouTube iframe to reduce initial page weight
 * - Uses Intersection Observer API for efficient detection
 * - Prevents unnecessary network requests until needed
 * 
 * Security:
 * - Uses YouTube embed URL (not direct video links)
 * - Includes security parameters (rel=0, controls=1)
 * 
 * @component
 * @returns {JSX.Element} Video section with lazy-loaded iframe
 */
function VideoSection() {
  // Lazy load video when section is 50% visible
  const [sectionRef, hasIntersected] = useIntersectionObserver({ 
    threshold: 0.5 
  })

  return (
    <section
      id="video"
      ref={sectionRef}
      className="min-h-screen pt-20 pb-16 relative w-full flex items-center justify-center bg-gray-100"
      aria-label="Video section"
    >
      <div className="relative w-11/12 md:w-4/5 h-[70vh] bg-gray-300 rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          {hasIntersected ? (
            <iframe
              className="w-full h-full"
              src={videoConfig.embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            // Placeholder while video loads
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Loading video...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoSection

