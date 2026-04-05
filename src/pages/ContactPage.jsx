import React from 'react'
import SEO from '../components/SEO'
import ContactSection from '../components/ContactSection'

/** Contact / inquiry — same page shell as About (white canvas, footer alignment). */
function ContactPage() {
  return (
    <>
      <SEO
        title="Get Started - Contact GeoDesign"
        description="Contact GeoDesign — reduce construction risk with scientific geotechnical expertise. Inquiry, quote, or site discussion across Tamil Nadu."
        keywords="contact geodesign, geotechnical quote, construction risk, inquiry form, Tamil Nadu"
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
