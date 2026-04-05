import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <>
      <SEO
        title="GeoDesign - Reduce Construction Risk in India"
        description="We reduce construction risk using scientific expertise — geotechnical investigation and testing across Tamil Nadu. 5,000+ projects. Coimbatore & Chennai."
        keywords="construction risk, geotechnical engineering, soil investigation, Tamil Nadu, Coimbatore, Chennai"
      />
      {/* Flex child fills main so hero + footer fit one viewport without redundant scroll */}
      <div className="flex flex-1 flex-col min-h-0 w-full">
        <Hero />
      </div>
    </>
  )
}

export default HomePage
