import React from 'react'
import { services } from '../constants/data'

/**
 * Services Section Component
 * 
 * Displays the services offered by GeoDesign.
 * Each service is presented in a card format with hover effects.
 * 
 * @component
 * @returns {JSX.Element} Services section with service cards
 */
function ServicesSection() {

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-2 sm:px-3 md:px-5 lg:px-6 bg-white md:bg-gradient-to-b md:from-gray-50 md:via-white md:to-gray-50 relative w-full min-w-0"
      aria-labelledby="services-heading"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 bg-sky-100 rounded-full">
            <span className="text-sky-600 font-semibold text-xs">What we do</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 mb-14 max-w-3xl mx-auto">
            We reduce construction risk using scientific expertise — geotechnical investigation, testing, and
            foundation insight for your safety and investment.
          </p>
        </div>

        {/* Services Grid - Enhanced Cards */}
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
              role="article"
              aria-labelledby={`service-${index}`}
            >
              <h3 id={`service-${index}`} className="relative z-10 text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="relative z-10 text-slate-600 text-base sm:text-sm">{service.description}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-sky-50/0 group-hover:from-sky-50/50 group-hover:to-transparent rounded-3xl transition-all duration-300 pointer-events-none" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

