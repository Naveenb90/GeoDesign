import React from 'react'
import { aboutPoints } from '../constants/data'

/**
 * About Section Component
 * 
 * Displays company information, vision, and mission.
 * Uses a two-column layout with images and text.
 * 
 * Content:
 * - About Us (company background)
 * - Vision statement
 * - Mission statement
 * 
 * Page chrome (background, bottom padding) comes from AboutPage; section uses py-8/md:py-10 only.
 *
 * @component
 * @returns {JSX.Element} About section with company info
 */
function AboutSection() {

  return (
    <section
      id="about"
      className="w-full min-w-0 py-8 md:py-10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto w-full space-y-10 md:space-y-14">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-stretch">
          <div className="relative min-h-[280px] w-full overflow-hidden rounded-lg shadow-lg md:h-full md:min-h-0">
            <img
              src="/assets/web/engineers_at_work.jpeg"
              alt="GeoDesign engineers at work"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 id="about-heading" className="text-3xl font-bold text-slate-900 mb-4">
              About Us
            </h2>
            <ul className="space-y-4 text-slate-600 leading-relaxed" role="list">
              {aboutPoints.map((point, index) => (
                <li key={index}>✔️ {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-stretch">
          <div className="order-2 flex flex-col justify-center text-center md:order-1 md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              Our vision is to expand and strengthen our Geotechnical team to provide a
              comprehensive range of specialized engineering and consulting services, becoming
              our clients&apos; preferred professional service partner. We aim to deliver every
              project—whether a building or civil engineering endeavor—with excellence,
              efficiency, and innovation, consistently exceeding expectations and setting new
              industry standards.
            </p>
          </div>
          <div className="relative order-1 min-h-[280px] w-full overflow-hidden rounded-lg shadow-lg md:order-2 md:h-full md:min-h-0">
            <img
              src="/assets/web/vision.jpg"
              alt="GeoDesign vision"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-stretch">
          <div className="relative min-h-[280px] w-full overflow-hidden rounded-lg shadow-lg md:h-full md:min-h-0">
            <img
              src="/assets/web/mission.jpg"
              alt="GeoDesign mission"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to deliver outstanding service across all our professional
              disciplines, adhering to statutory regulations, codes of conduct, and ethical
              standards. We are committed to nurturing our team and providing a strong,
              reliable platform to serve the construction industry, with a focus on consistently
              meeting and exceeding the expectations of our valued clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

