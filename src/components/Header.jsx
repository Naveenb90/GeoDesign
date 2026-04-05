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
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-2.5 sm:py-3' 
          : 'bg-white/80 backdrop-blur-md shadow-md py-3 sm:py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-6 w-full min-w-0">
        {/* Logo: smaller on phones so title stays readable; Montserrat on sm+ only */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <div className="relative shrink-0">
            <img 
              src="/assets/web/logo.png" 
              alt="GeoDesign Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain transition-transform duration-300 group-hover:scale-110"
              loading="eager"
            />
          </div>
          <div className="flex flex-col min-w-0 justify-center">
            <span className="text-[1.0625rem] leading-snug sm:text-xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors font-sans tracking-normal sm:font-display sm:tracking-tight">
              Geo Design
            </span>
            <span className="text-[0.6875rem] sm:text-xs text-slate-500 leading-snug mt-0.5 line-clamp-2 sm:line-clamp-none">
              We care for your Safety and Investment
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
                : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
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
                  : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
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
          className="lg:hidden shrink-0 p-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
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
          isMenuOpen ? 'max-h-[min(85vh,28rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          id="mobile-menu"
          className="flex flex-col space-y-0.5 px-3 sm:px-4 pb-4 pt-2 bg-white border-t border-gray-200 max-h-[min(85vh,28rem)] overflow-y-auto overscroll-contain"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            onClick={handleNavClick}
            className={`px-4 py-3.5 text-[0.9375rem] leading-snug font-medium font-sans rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              location.pathname === '/'
                ? 'text-sky-600 bg-sky-50'
                : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
            }`}
          >
            Home
          </Link>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleNavClick}
              className={`px-4 py-3.5 text-[0.9375rem] leading-snug font-medium font-sans rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                location.pathname === link.href
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="mt-2 px-4 py-3.5 text-[0.9375rem] font-semibold font-sans text-center text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg hover:from-sky-600 hover:to-sky-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-300"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

