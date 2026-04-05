import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Hero Section — full-bleed background; flex-1 so layout works with sticky footer.
 *
 * @component
 * @returns {JSX.Element}
 */
function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="flex flex-1 flex-col min-h-0 w-full items-center justify-center pt-20 pb-12 sm:pb-16 relative overflow-hidden"
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
      <div className={`relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-5 md:px-6 py-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white/30 rounded-3xl shadow-lg backdrop-blur-md p-8">

        {/* Main headline — benefit-led, geotechnical authority */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.25rem] lg:text-4xl font-bold mb-4 text-slate-900 leading-[1.2] hero-title font-display tracking-tight">
          Know Your Ground.
          <span className="block mt-1 text-sky-800">Build With Confidence.</span>
        </h1>

        {/* Subheading — scope + geography */}
        <p className="mb-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
        Expert soil testing for residential, commercial, and government projects</p>

        {/* Trust line — trophy + number emphasized */}
        <p className="mb-4 text-sm sm:text-base font-display tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-1 w-full">
          <span className="text-base sm:text-lg leading-none select-none" aria-hidden="true">
            🏆
          </span>
          <span className="text-sky-600 text-lg sm:text-2xl font-extrabold tabular-nums">5,000+</span>
          <span className="font-semibold text-slate-800 uppercase tracking-wide">
            Projects Completed
          </span>
        </p>

        {/* CTA buttons — primary (Get a Quote) + secondary (Watch Video) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 min-w-[200px] bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold rounded-xl shadow-md hover:from-sky-700 hover:to-sky-800 transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            aria-label="Get a quote for soil testing services"
          >
            Get a Quote
          </Link>
          <Link
            to="/video"
            className="inline-flex items-center justify-center px-6 py-3 min-w-[200px] rounded-xl border-2 border-slate-700/80 bg-white/50 text-slate-900 font-semibold hover:bg-white/80 transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            aria-label="Watch our video about soil testing"
          >
            Watch Video
          </Link>
        </div>
        </div>
      </div>

    </section>
  )
}

export default Hero


