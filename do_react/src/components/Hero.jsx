import React, { useEffect, useState } from 'react'

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
      style={{
        backgroundImage: "url('/assets/web/hero-site.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="banner"
      aria-label="Hero section"
    >
      
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

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition"
          aria-label="Get a quote for soil testing services"
        >
          Get a Quote
        </a>
        </div>
      </div>

    </section>
  )
}

export default Hero


