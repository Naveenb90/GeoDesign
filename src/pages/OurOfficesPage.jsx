import React from 'react'
import { Link } from 'react-router-dom'
import OfficeMapEmbed from '../components/OfficeMapEmbed'
import SEO from '../components/SEO'
import { contactInfo, mapEmbedUrls } from '../constants/data'
import { SKY_OUTCOME_TILE_CLASS } from '../constants/skyTileClasses'

/**
 * Office locations: address column on the left, map on the right (desktop); stacked on small screens.
 * Page shell and tiles align with About / Contact (white canvas, sky-gradient panels).
 *
 * @returns {JSX.Element}
 */
function OurOfficesPage() {
  return (
    <>
      <SEO
        title="Our Offices - GeoDesign"
        description="Visit GeoDesign in Coimbatore and Chennai — geotechnical expertise that helps reduce construction risk across Tamil Nadu."
        keywords="geodesign offices, Coimbatore office, Chennai office, contact address"
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <section className="w-full min-w-0 py-8 md:py-10 space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 md:mb-6">
                Our Offices
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Visit us in Coimbatore or Chennai — discuss your site and how scientific ground insight can
                reduce risk before you build.
              </p>
            </div>

            {/* Head Office — details left, map right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              <div className={`${SKY_OUTCOME_TILE_CLASS} flex flex-col justify-center text-left`}>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  Head Office
                </h2>
                <p className="text-sm text-slate-500 mb-5">{contactInfo.headOffice.regionLabel}</p>
                <address className="not-italic space-y-3 text-slate-600 text-base leading-relaxed">
                  <p>
                    <span aria-hidden="true">📍</span> {contactInfo.headOffice.address}
                  </p>
                  <p>
                    <span aria-hidden="true">📞</span> {contactInfo.phone.landline}
                  </p>
                  <p>
                    <a
                      href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`}
                      className="text-sky-700 hover:text-sky-800 hover:underline"
                    >
                      📱 {contactInfo.phone.mobile}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${contactInfo.email}`} className="text-sky-700 hover:text-sky-800 hover:underline">
                      ✉️ {contactInfo.email}
                    </a>
                  </p>
                </address>
              </div>
              <div className="min-h-0">
                <OfficeMapEmbed
                  title="Head Office — Coimbatore"
                  subtitle={contactInfo.headOffice.address}
                  embedUrl={mapEmbedUrls.headOffice}
                />
              </div>
            </div>

            {/* Branch Office — details left, map right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              <div className={`${SKY_OUTCOME_TILE_CLASS} flex flex-col justify-center text-left`}>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  Branch Office
                </h2>
                <p className="text-sm text-slate-500 mb-5">{contactInfo.branchOffice.regionLabel}</p>
                <address className="not-italic space-y-3 text-slate-600 text-base leading-relaxed">
                  <p>
                    <span aria-hidden="true">📍</span> {contactInfo.branchOffice.address}
                  </p>
                  <p>
                    <span aria-hidden="true">📞</span> {contactInfo.phone.landline}
                  </p>
                  <p>
                    <a
                      href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`}
                      className="text-sky-700 hover:text-sky-800 hover:underline"
                    >
                      📱 {contactInfo.phone.mobile}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${contactInfo.email}`} className="text-sky-700 hover:text-sky-800 hover:underline">
                      ✉️ {contactInfo.email}
                    </a>
                  </p>
                </address>
              </div>
              <div className="min-h-0">
                <OfficeMapEmbed
                  title="Branch Office — Chennai"
                  subtitle={contactInfo.branchOffice.address}
                  embedUrl={mapEmbedUrls.branchOffice}
                />
              </div>
            </div>

            <div className={`${SKY_OUTCOME_TILE_CLASS} text-center`}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Submit an inquiry</h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto text-sm md:text-base">
                Request a quote or ask a question on our dedicated inquiry page.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold rounded-xl shadow-md hover:from-sky-700 hover:to-sky-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
              >
                Go to inquiry form
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default OurOfficesPage
