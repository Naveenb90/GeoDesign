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
        description="View our portfolio of 5000+ successful geotechnical projects across Tamil Nadu. Trusted by leading developers and construction companies."
        keywords="geodesign projects, soil testing projects, Tamil Nadu projects, construction projects"
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
