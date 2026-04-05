import React from 'react'
import { SKY_FACTOR_TILE_CLASS, SKY_OUTCOME_TILE_CLASS } from '../constants/skyTileClasses'
import { importanceCards, soilIssueGroups, whyItMattersIntro } from '../constants/data'

/**
 * Issue Section Component
 *
 * Educational section explaining why soil testing matters: site-factor tiles in one grid,
 * then a distinct “outcomes” block. Page chrome (background) comes from the route wrapper.
 *
 * @component
 * @returns {JSX.Element} Issue section with cards
 */
function IssueSection() {
  return (
    <section
      id="issue"
      className="w-full min-w-0 py-8 md:py-10"
      aria-labelledby="issue-heading"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1
          id="issue-heading"
          className="text-3xl sm:text-4xl font-bold text-center mb-5 md:mb-6 text-slate-900"
        >
          Why Soil Testing Matters?
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 md:mb-12">
          {whyItMattersIntro}
        </p>

        <h2
          id="site-factors-heading"
          className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2"
        >
          What affects your site
        </h2>
        <p className="text-center text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10">
          Ground conditions, water, earthworks, and land use — each plays a role in safe foundation design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
          {soilIssueGroups.flatMap((group) =>
            group.items.map((issue, itemIndex) => {
              const issueId = `issue-${group.id}-${itemIndex}`
              return (
                <div
                  key={issueId}
                  className={`group ${SKY_FACTOR_TILE_CLASS} transition-all duration-200 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-400 hover:shadow-lg hover:from-sky-100/90 hover:to-white motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-sm`}
                  role="article"
                  aria-labelledby={issueId}
                >
                  <span
                    className="text-4xl text-sky-600 mb-2 block transition-colors duration-200 group-hover:text-sky-700"
                    aria-hidden="true"
                  >
                    {issue.icon}
                  </span>
                  <h3
                    id={issueId}
                    className="text-base md:text-lg font-bold text-slate-900 mb-1.5"
                  >
                    {issue.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-snug">{issue.description}</p>
                </div>
              )
            })
          )}
        </div>

        <div
          className="border-t border-stone-200/80 pt-10 md:pt-12"
          aria-labelledby="outcomes-heading"
        >
          <h2
            id="outcomes-heading"
            className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2"
          >
            What you gain from testing
          </h2>
          <p className="text-center text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10">
            Clear data supports better decisions before you build — not after problems appear.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {importanceCards.map((card, index) => (
              <div
                key={card.title}
                className={`group ${SKY_OUTCOME_TILE_CLASS} transition-all duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:scale-[1.015] hover:border-sky-400 hover:shadow-lg hover:from-sky-100/90 hover:to-white motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-sm`}
                role="article"
                aria-labelledby={`importance-${index}`}
              >
                <span
                  className="text-5xl text-sky-600 mb-4 block transition-colors duration-200 group-hover:text-sky-700"
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3
                  id={`importance-${index}`}
                  className="text-xl md:text-2xl font-bold text-slate-900 mb-3"
                >
                  {card.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IssueSection
