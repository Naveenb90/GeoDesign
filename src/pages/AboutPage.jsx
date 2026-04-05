import React from 'react'
import SEO from '../components/SEO'
import AboutSection from '../components/AboutSection'

/** Who We Are — same page shell as What We Do / Why It Matters for footer alignment. */
function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - GeoDesign"
        description="GeoDesign — geotechnical engineers reducing construction risk with scientific ground investigation. DTCP & CMDA registered. 5,000+ projects in Tamil Nadu."
        keywords="about geodesign, geotechnical engineers, construction risk, Tamil Nadu"
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <AboutSection />
        </div>
      </div>
    </>
  )
}

export default AboutPage
