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
 * @component
 * @returns {JSX.Element} About section with company info
 */
function AboutSection() {

  return (
    <section
      id="about"
      className="min-h-screen pt-20 pb-16 px-4 sm:px-6 bg-gray-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/web/engineers_at_work.jpeg"
              alt="GeoDesign engineers at work"
              className="rounded-lg shadow-lg w-full max-w-md"
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
            />
          </div>
          <div>
            <h2 id="about-heading" className="text-3xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed" role="list">
              {aboutPoints.map((point, index) => (
                <li key={index}>✔️ {point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to expand and strengthen our Geotechnical team to provide a
              comprehensive range of specialized engineering and consulting services, becoming
              our clients' preferred professional service partner. We aim to deliver every
              project—whether a building or civil engineering endeavor—with excellence,
              efficiency, and innovation, consistently exceeding expectations and setting new
              industry standards.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/assets/web/vision.jpg"
              alt="GeoDesign vision"
              className="rounded-lg shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/web/mission.jpg"
              alt="GeoDesign mission"
              className="rounded-lg shadow-lg w-full max-w-md"
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
            />
          </div>
          <div className="text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
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

