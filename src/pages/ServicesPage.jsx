import React from 'react'
import SEO from '../components/SEO'
import ServicesSection from '../components/ServicesSection'

function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services - Soil Testing & Foundation Design"
        description="Comprehensive soil testing services including laboratory testing, pile foundation design, plate load test, and topographical surveys."
        keywords="soil testing services, foundation design, pile load test, laboratory testing, geotechnical services"
      />
      <div className="pt-28 min-h-screen bg-white">
        <ServicesSection />
      </div>
    </>
  )
}

export default ServicesPage
