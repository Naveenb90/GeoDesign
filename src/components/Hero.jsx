import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Hero Section Component - Enhanced Modern Design
 * 
 * Industry-standard hero section with:
 * - Smooth animations on scroll
 * - Professional gradient overlays
 * - Enhanced typography hierarchy
 * - Multiple CTAs for better conversion
 * - Trust indicators
 * 
 * @component
 * @returns {JSX.Element} Enhanced hero section
 */
function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Hero Image - Optimized for LCP */}
      <img
        src="/assets/web/hero-site.jpg"
        alt="GeoDesign soil testing services"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1080"
        decoding="async"
      />
      
      {/* Content Container with Enhanced Design */}
      <div className={`relative z-10 max-w-5xl mx-auto px-8 py-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white/30 rounded-3xl shadow-lg backdrop-blur-md p-8">

        {/* Main Heading - Enhanced Typography */}
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight hero-title">
          Secure Soil, Strong Structures, Safe Future
        </h1>

        {/* Subheading */}
        <p className="mb-6 text-lg text-gray-800 max-w-3xl mx-auto">
          Expert soil testing for residential, commercial, and government projects
        </p>

        {/* Trust Indicator - 5000 Projects Completed */}
        <div className="mb-6 flex items-center justify-center gap-2 text-gray-800">
          <svg 
            className="w-7 h-7 text-sky-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
            />
          </svg>
          <span className="text-lg font-semibold">
            <span className="text-sky-600 font-bold">5000+</span> Projects Completed
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/video"
            className="inline-block px-6 py-3 bg-white/90 text-sky-600 border-2 border-sky-500 rounded-xl hover:bg-white transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            aria-label="Watch our video about soil testing services"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </Link>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="Get a quote for soil testing services"
          >
            Get a Quote
          </Link>
        </div>
        </div>
      </div>

    </section>
  )
}

export default Hero


