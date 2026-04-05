import React from 'react'
import SEO from '../components/SEO'
import VideoSection from '../components/VideoSection'

function VideoPage() {
  return (
    <>
      <SEO
        title="Watch Our Video - GeoDesign"
        description="Watch how scientific ground investigation helps reduce construction risk — geotechnical insight for your project."
        keywords="geotechnical video, construction risk, soil investigation"
      />
      <div className="page-shell">
        <VideoSection />
      </div>
    </>
  )
}

export default VideoPage
