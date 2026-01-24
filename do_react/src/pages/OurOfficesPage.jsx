import React from 'react'
import SEO from '../components/SEO'
import { contactInfo } from '../constants/data'

function OurOfficesPage() {
  return (
    <>
      <SEO
        title="Our Offices - GeoDesign"
        description="Visit GeoDesign offices in Coimbatore and Chennai. Contact us for expert soil testing services across Tamil Nadu."
        keywords="geodesign offices, Coimbatore office, Chennai office, contact address"
      />
      <div className="pt-20 pb-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Our Offices
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our offices in Coimbatore and Chennai for expert geotechnical consulting services
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Head Office */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Head Office</h2>
              <p className="text-gray-600 mb-4">Coimbatore, Tamil Nadu</p>
              <address className="not-italic space-y-2 text-gray-600">
                <p>
                  <span aria-label="Location">📍</span> {contactInfo.headOffice.address}
                </p>
                <p>
                  <span aria-label="Phone">📞</span> {contactInfo.phone.landline} |{' '}
                  <a href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`} className="text-sky-600 hover:text-sky-700">
                    📱 {contactInfo.phone.mobile}
                  </a>
                </p>
                <p>
                  <span aria-label="Email">✉️</span>{' '}
                  <a href={`mailto:${contactInfo.email}`} className="text-sky-600 hover:text-sky-700">
                    {contactInfo.email}
                  </a>
                </p>
              </address>
            </div>

            {/* Branch Office */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Branch Office</h2>
              <p className="text-gray-600 mb-4">Chennai, Tamil Nadu</p>
              <address className="not-italic space-y-2 text-gray-600">
                <p>
                  <span aria-label="Location">📍</span> {contactInfo.branchOffice.address}
                </p>
                <p>
                  <span aria-label="Phone">📞</span> {contactInfo.phone.landline} |{' '}
                  <a href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`} className="text-sky-600 hover:text-sky-700">
                    📱 {contactInfo.phone.mobile}
                  </a>
                </p>
                <p>
                  <span aria-label="Email">✉️</span>{' '}
                  <a href={`mailto:${contactInfo.email}`} className="text-sky-600 hover:text-sky-700">
                    {contactInfo.email}
                  </a>
                </p>
              </address>
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
