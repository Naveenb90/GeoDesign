import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { getSectionIcon, getServiceBySlug } from '../constants/servicesCatalog'
import { SKY_OUTCOME_TILE_CLASS } from '../constants/skyTileClasses'

/**
 * SEO-focused detail page for one geotechnical service (from services catalog / PDF outline).
 * Page shell and sky tiles align with Why It Matters / What We Do.
 *
 * @returns {JSX.Element}
 */
function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found"
          description="The requested geotechnical service page could not be found."
          keywords="geodesign services"
        />
        <div className="page-shell bg-white !pb-6 sm:!pb-8">
          <div className="max-w-7xl mx-auto w-full py-8 md:py-10">
            <section aria-labelledby="service-not-found-heading">
              <h1 id="service-not-found-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Service not found
              </h1>
              <p className="text-slate-600 mb-6 text-base">We couldn&apos;t find that service.</p>
              <Link
                to="/services"
                className="font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded"
              >
                Back to What We Do
              </Link>
            </section>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
      />
      <div className="page-shell bg-white !pb-6 sm:!pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <section
            className="w-full min-w-0 py-8 md:py-10"
            aria-labelledby="service-detail-heading"
          >
            <nav className="text-sm text-slate-600 mb-8 md:mb-10" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
                <li>
                  <Link
                    to="/"
                    className="hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded"
                  >
                    What We Do
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-900 font-medium" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>

            <article className="w-full" aria-labelledby="service-detail-heading">
              <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                <span className="text-5xl text-sky-600 mb-4 block" aria-hidden="true">
                  {service.icon}
                </span>
                <h1
                  id="service-detail-heading"
                  className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 md:mb-6"
                >
                  {service.title}
                </h1>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">{service.shortDescription}</p>
              </header>

              <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 list-none p-0 m-0">
                {service.sections.map((sec, index) => (
                  <li key={sec.title} className="min-w-0">
                    <section
                      className={`h-full ${SKY_OUTCOME_TILE_CLASS} flex flex-col scroll-mt-28 text-left`}
                      aria-labelledby={`service-section-${slug}-${index}`}
                    >
                      <span className="text-5xl text-sky-600 mb-4 block text-center" aria-hidden="true">
                        {getSectionIcon(index)}
                      </span>
                      <h3
                        id={`service-section-${slug}-${index}`}
                        className="text-xl md:text-2xl font-bold text-slate-900 mb-3 text-center"
                      >
                        {sec.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed flex-1">{sec.body}</p>
                    </section>
                  </li>
                ))}
              </ul>

              <footer className="mt-10 md:mt-12 pt-8 border-t border-stone-200/80">
                <Link
                  to="/services"
                  className="font-semibold text-sky-700 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded"
                >
                  ← All services
                </Link>
              </footer>
            </article>
          </section>
        </div>
      </div>
    </>
  )
}

export default ServiceDetailPage
