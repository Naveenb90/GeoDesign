import React from 'react'
import SEO from '../components/SEO'
import ProjectsSection from '../components/ProjectsSection'

/**
 * Portfolio and clients — same page shell and visual system as What We Do / Why It Matters.
 *
 * @returns {JSX.Element}
 */
function ProjectsPage() {
  return (
    <>
      <SEO
        title="Our Projects - GeoDesign Portfolio"
        description="Who we work with — 5,000+ geotechnical projects across Tamil Nadu. Partners who rely on science-led ground insight to reduce construction risk."
        keywords="geodesign projects, geotechnical portfolio, Tamil Nadu, construction"
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <ProjectsSection />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
