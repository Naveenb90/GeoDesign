import React from 'react'
import SEO from '../components/SEO'
import AboutSection from '../components/AboutSection'

function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - GeoDesign"
        description="Learn about GeoDesign - Founded by experienced Geotechnical Engineers. Registered in DTCP and CMDA. Over 5000 successful projects in Tamil Nadu."
        keywords="about geodesign, geotechnical engineers, soil testing company, Tamil Nadu"
      />
      <div className="pt-28 min-h-screen bg-white">
        <AboutSection />
      </div>
    </>
  )
}

export default AboutPage
