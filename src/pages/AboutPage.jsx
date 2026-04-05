import React from 'react'
import SEO from '../components/SEO'
import AboutSection from '../components/AboutSection'

/** Who We Are — same page shell as What We Do / Why It Matters for footer alignment. */
function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - GeoDesign"
        description="Learn about GeoDesign - Founded by experienced Geotechnical Engineers. Registered in DTCP and CMDA. Over 5000 successful projects in Tamil Nadu."
        keywords="about geodesign, geotechnical engineers, soil testing company, Tamil Nadu"
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
