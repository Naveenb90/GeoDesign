import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { geotechnicalServicePages } from '../constants/servicesCatalog'
import { SKY_FACTOR_TILE_CLASS } from '../constants/skyTileClasses'

/**
 * Hub for “What We Do”: lists all geotechnical service pages (PDF-aligned catalog).
 * Page shell and tiles align with Why It Matters (white canvas, sky-gradient cards).
 *
 * @returns {JSX.Element}
 */
function ServicesPage() {
  return (
    <>
      <SEO
        title="What We Do — Geotechnical Services"
        description="How we reduce construction risk: structured geotechnical investigation — drilling, testing, lab analysis, and foundation recommendations — Coimbatore, Chennai, Tamil Nadu."
        keywords="geotechnical investigation, construction risk, soil testing, foundation design, Tamil Nadu"
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <section
            className="w-full min-w-0 py-8 md:py-10"
            aria-labelledby="services-hub-heading"
          >
            <h1
              id="services-hub-heading"
              className="text-3xl sm:text-4xl font-bold text-center mb-5 md:mb-6 text-slate-900"
            >
              What We Do
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 md:mb-12">
              We reduce risk in construction using scientific expertise — structured investigation from field
              drilling and specialised testing through laboratory analysis and foundation recommendations. Open a
              topic for full scope and methodology.
            </p>

            <ul className="grid gap-4 md:gap-5 sm:grid-cols-2 list-none p-0 m-0">
              {geotechnicalServicePages.map((svc, index) => {
                const isPrimary = index === 0
                return (
                  <li key={svc.slug}>
                    <Link
                      to={`/services/${svc.slug}`}
                      className={`block h-full ${SKY_FACTOR_TILE_CLASS} transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white ${
                        isPrimary ? 'ring-2 ring-sky-400/70' : ''
                      }`}
                    >
                      {isPrimary ? (
                        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 mb-2">
                          Start here
                        </p>
                      ) : null}
                      <span className="text-4xl text-sky-600 mb-2 block" aria-hidden="true">
                        {svc.icon}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1.5">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-snug mb-3">{svc.shortDescription}</p>
                      <span className="inline-block text-sm font-semibold text-sky-700">View details →</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default ServicesPage
