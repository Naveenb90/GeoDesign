import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <>
      <SEO
        title="GeoDesign - Expert Soil Testing Services in India"
        description="GeoDesign provides reliable soil testing services for residential, commercial, and government projects in Tamil Nadu. 5000+ projects completed."
        keywords="soil testing, geotechnical services, Coimbatore, Chennai, foundation testing"
      />
      <div className="pt-20">
        <Hero />
      </div>
    </>
  )
}

export default HomePage
