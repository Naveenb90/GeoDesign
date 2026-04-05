import React from 'react'
import SEO from '../components/SEO'
import IssueSection from '../components/IssueSection'

function WhyItMattersPage() {
  return (
    <>
      <SEO
        title="Why Soil Testing Matters - GeoDesign"
        description="Why ground investigation matters: reducing construction risk with scientific soil and site analysis before design and build."
        keywords="construction risk, soil investigation, geotechnical testing, building safety, Tamil Nadu"
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <IssueSection />
        </div>
      </div>
    </>
  )
}

export default WhyItMattersPage
