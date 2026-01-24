import React from 'react'
import SEO from '../components/SEO'
import { contactInfo } from '../constants/data'

function OurOfficesPage() {
  // Google Maps embed URL for Head Office (Coimbatore)
  // You can get the embed URL from Google Maps by:
  // 1. Go to Google Maps
  // 2. Search for the address
  // 3. Click Share → Embed a map
  // 4. Copy the iframe src URL
  const headOfficeMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3NsKwNTcnMjAuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`

  return (
    <>
      <SEO
        title="Our Offices - GeoDesign"
        description="Visit GeoDesign offices in Coimbatore and Chennai. Contact us for expert soil testing services across Tamil Nadu."
        keywords="geodesign offices, Coimbatore office, Chennai office, contact address"
      />
      <div className="pt-20 pb-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-4">
              Our Offices
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at our offices in Coimbatore and Chennai for expert geotechnical consulting services
            </p>
          </div>

          {/* Two Column Layout: Address & Google Maps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column: Address Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              {/* Head Office */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Head Office</h3>
                <p className="text-gray-600 mb-3">Coimbatore, Tamil Nadu</p>
                <address className="not-italic space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">📍</span>
                    <span>{contactInfo.headOffice.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sky-600">📞</span>
                    <span>{contactInfo.phone.landline}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sky-600">📱</span>
                    <a 
                      href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`} 
                      className="text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      {contactInfo.phone.mobile}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sky-600">✉️</span>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </address>
              </div>

              {/* Branch Office */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Branch Office</h3>
                <p className="text-gray-600 mb-3">Chennai, Tamil Nadu</p>
                <address className="not-italic space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">📍</span>
                    <span>{contactInfo.branchOffice.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sky-600">📞</span>
                    <span>{contactInfo.phone.landline}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sky-600">📱</span>
                    <a 
                      href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`} 
                      className="text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      {contactInfo.phone.mobile}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sky-600">✉️</span>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </address>
              </div>
            </div>

            {/* Right Column: Google Maps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 p-6 pb-0">Find Us</h2>
              <div className="w-full h-full min-h-[400px]">
                <iframe
                  src={headOfficeMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GeoDesign Head Office Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form CTA */}
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions? Want to schedule a consultation? Contact us today!
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurOfficesPage
