import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../constants/data'

/**
 * Header Component
 * 
 * Fixed navigation header with responsive mobile menu.
 * 
 * Features:
 * - Sticky header with backdrop blur effect
 * - Responsive navigation (desktop/mobile)
 * - Accessible menu toggle with ARIA attributes
 * - Smooth scroll navigation to page sections
 * 
 * Accessibility:
 * - ARIA labels for screen readers
 * - Keyboard navigation support
 * - Focus management for mobile menu
 * 
 * @component
 * @returns {JSX.Element} Header with navigation
 */
function Header() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  /**
   * Toggle mobile menu visibility
   * Also manages ARIA attributes for accessibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  /**
   * Close mobile menu when a link is clicked
   * Improves UX on mobile devices
   */
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  // Track scroll position for header styling
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/80 backdrop-blur-md shadow-md py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Enhanced */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src="/assets/web/logo.png" 
              alt="GeoDesign Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain transition-transform duration-300 group-hover:scale-110"
              loading="eager"
              fetchPriority="high"
              width="80"
              height="80"
              decoding="async"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors">
              Geo Design
            </span>
            <span className="text-xs text-gray-600 hidden sm:block">
              We care for your Safety & Investment
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Enhanced */}
        <nav 
          className="hidden lg:flex items-center space-x-1"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              location.pathname === '/'
                ? 'text-sky-600 bg-sky-50'
                : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
            }`}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                location.pathname === link.href
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg hover:from-sky-600 hover:to-sky-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-300"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button - Enhanced */}
        <button
          id="menu-btn"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu - Enhanced with Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          id="mobile-menu"
          className="flex flex-col space-y-1 px-4 pb-4 pt-2 bg-white border-t border-gray-200"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            onClick={handleNavClick}
            className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              location.pathname === '/'
                ? 'text-sky-600 bg-sky-50'
                : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
            }`}
          >
            Home
          </Link>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleNavClick}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                location.pathname === link.href
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="mt-2 px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg hover:from-sky-600 hover:to-sky-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-300"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

