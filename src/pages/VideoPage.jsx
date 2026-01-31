import React from 'react'
import SEO from '../components/SEO'
import VideoSection from '../components/VideoSection'

function VideoPage() {
  return (
    <>
      <SEO
        title="Watch Our Video - GeoDesign"
        description="Watch our informative video about soil testing and geotechnical services. Learn why soil testing matters for your construction project."
        keywords="soil testing video, geotechnical video, construction video"
      />
      <div className="pt-28 min-h-screen bg-white">
        <VideoSection />
      </div>
    </>
  )
}

export default VideoPage
