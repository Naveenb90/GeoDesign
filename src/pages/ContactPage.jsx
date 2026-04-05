import React from 'react'
import SEO from '../components/SEO'
import ContactSection from '../components/ContactSection'

/** Contact / inquiry — same page shell as About (white canvas, footer alignment). */
function ContactPage() {
  return (
    <>
      <SEO
        title="Get Started - Contact GeoDesign"
        description="Get started with GeoDesign: expert soil testing, detailed reports, and trusted service across Tamil Nadu. Send an inquiry or request a quote."
        keywords="contact geodesign, soil testing quote, inquiry form, geotechnical consulting"
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <ContactSection />
        </div>
      </div>
    </>
  )
}

export default ContactPage
