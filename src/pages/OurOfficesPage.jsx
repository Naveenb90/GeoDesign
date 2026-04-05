import React from 'react'
import { Link } from 'react-router-dom'
import OfficeContactTile from '../components/OfficeContactTile'
import OfficeMapEmbed from '../components/OfficeMapEmbed'
import SEO from '../components/SEO'
import { contactInfo, mapEmbedUrls } from '../constants/data'
import { SKY_OUTCOME_TILE_CLASS } from '../constants/skyTileClasses'

/**
 * Office locations: details + map per location; tiles use shared OfficeContactTile styling.
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
          <section className="w-full min-w-0 space-y-8 py-8 md:space-y-10 md:py-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 md:mb-6">
                Our Offices
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Visit us in Coimbatore or Chennai — discuss your site and how scientific ground insight can
                reduce risk before you build.
              </p>
            </div>

            {/* Head Office — contact tile + map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-stretch">
              <OfficeContactTile
                heading="Head Office"
                regionLabel={contactInfo.headOffice.regionLabel}
                address={contactInfo.headOffice.address}
                landline={contactInfo.phone.landline}
                mobile={contactInfo.headOffice.mobile}
                email={contactInfo.email}
                officeLabel="Coimbatore office"
              />
              <div className="flex min-h-[320px] flex-col lg:h-full lg:min-h-0">
                <OfficeMapEmbed title="Coimbatore" embedUrl={mapEmbedUrls.headOffice} />
              </div>
            </div>

            {/* Branch Office — contact tile + map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-stretch">
              <OfficeContactTile
                heading="Branch Office"
                regionLabel={contactInfo.branchOffice.regionLabel}
                address={contactInfo.branchOffice.address}
                mobile={contactInfo.branchOffice.mobile}
                email={contactInfo.email}
                officeLabel="Chennai branch office"
              />
              <div className="flex min-h-[320px] flex-col lg:h-full lg:min-h-0">
                <OfficeMapEmbed title="Chennai" embedUrl={mapEmbedUrls.branchOffice} />
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
