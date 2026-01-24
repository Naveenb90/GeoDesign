import React from 'react'
import SEO from '../components/SEO'
import ContactSection from '../components/ContactSection'

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us - Get a Free Quote"
        description="Contact GeoDesign for expert soil testing services. Head office in Coimbatore, branch in Chennai. Get a free quote today!"
        keywords="contact geodesign, soil testing quote, Coimbatore, Chennai, geotechnical consulting"
      />
      <div className="pt-28">
        <ContactSection />
      </div>
    </>
  )
}

export default ContactPage
