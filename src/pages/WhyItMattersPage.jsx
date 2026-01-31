import React from 'react'
import SEO from '../components/SEO'
import IssueSection from '../components/IssueSection'

function WhyItMattersPage() {
  return (
    <>
      <SEO
        title="Why Soil Testing Matters - GeoDesign"
        description="Learn why soil testing is crucial for construction projects. Discover the importance of proper soil analysis for building safety and stability."
        keywords="why soil testing matters, importance of soil testing, soil testing benefits, construction safety"
      />
      <div className="pt-28 min-h-screen bg-white">
        <IssueSection />
      </div>
    </>
  )
}

export default WhyItMattersPage
