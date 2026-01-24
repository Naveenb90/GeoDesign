import React from 'react'
import { soilIssues, importanceCards } from '../constants/data'

/**
 * Issue Section Component
 * 
 * Educational section explaining why soil testing matters.
 * Displays various soil-related issues and their importance.
 * 
 * Structure:
 * - Grid of issue cards (14 items)
 * - Three main importance cards
 * 
 * @component
 * @returns {JSX.Element} Issue section with cards
 */
function IssueSection() {

  return (
    <section
      id="issue"
      className="min-h-screen pt-24 md:pt-32 py-16 px-6 bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900 text-white rounded-xl"
      aria-labelledby="issue-heading"
    >
      <div className="max-w-7xl mx-auto">
      <h2 id="issue-heading" className="text-4xl font-bold text-center mb-12">
        Why Soil Testing Matters?
      </h2>

      {/* Issues Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {soilIssues.map((issue, index) => (
          <div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            role="article"
            aria-labelledby={`issue-${index}`}
          >
            <span className="text-4xl mb-2 block" aria-hidden="true">
              {issue.icon}
            </span>
            <h4 id={`issue-${index}`} className="font-bold mb-1">
              {issue.title}
            </h4>
            <p className="text-sm">{issue.description}</p>
          </div>
        ))}
      </div>

      {/* Importance Section */}
      <h3 className="text-3xl font-bold text-center mb-8">
        Why Soil Testing is Important?
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {importanceCards.map((card, index) => (
          <div
            key={index}
            className="p-8 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            role="article"
            aria-labelledby={`importance-${index}`}
          >
            <span className="text-5xl text-sky-400 mb-4 block" aria-hidden="true">
              {card.icon}
            </span>
            <h4 id={`importance-${index}`} className="text-2xl font-bold mb-3">
              {card.title}
            </h4>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default IssueSection

