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
      className="bg-sky-100 text-gray-800 py-6"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} GeoDesign India Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

