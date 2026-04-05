import React from 'react'

/**
 * Footer Component - Simplified
 * 
 * Clean footer with copyright information only.
 * 
 * @component
 * @returns {JSX.Element} Footer section
 */
function Footer() {
  return (
    <footer
      className="shrink-0 bg-slate-100 text-slate-800 py-3 sm:py-4 border-t border-slate-200"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Copyright */}
        <div className="text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} GeoDesign India Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

