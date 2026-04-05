import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <>
      <SEO
        title="GeoDesign - Expert Soil Testing Services in India"
        description="Know your ground — geotechnical soil testing and foundation engineering across Tamil Nadu. 5,000+ projects completed. GeoDesign India."
        keywords="soil testing, geotechnical services, Coimbatore, Chennai, foundation testing"
      />
      {/* Flex child fills main so hero + footer fit one viewport without redundant scroll */}
      <div className="flex flex-1 flex-col min-h-0 w-full">
        <Hero />
      </div>
    </>
  )
}

export default HomePage
