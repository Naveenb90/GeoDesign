import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import WhyItMattersPage from './pages/WhyItMattersPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import VideoPage from './pages/VideoPage'
import OurOfficesPage from './pages/OurOfficesPage'

/**
 * Main App Component
 * 
 * Multi-page React application with React Router for navigation.
 * Each page has its own SEO optimization and meta tags.
 * 
 * @component
 * @returns {JSX.Element} The complete application structure with routing
 */
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="font-sans min-h-screen bg-white w-full min-w-0 overflow-x-hidden flex flex-col">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Header />
            <main
              id="main-content"
              className="flex-1 flex flex-col min-h-0 w-full min-w-0 bg-white"
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/why-it-matters" element={<WhyItMattersPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/video" element={<VideoPage />} />
                <Route path="/our-offices" element={<OurOfficesPage />} />
                {/* 404 Page */}
                <Route path="*" element={
                  <div className="page-shell flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-semibold mb-4 font-display text-slate-900">404 - Page Not Found</h1>
                      <p className="text-slate-600 mb-8">
                        The page you&apos;re looking for doesn&apos;t exist.
                      </p>
                      <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold rounded-xl hover:from-sky-700 hover:to-sky-800 shadow-md"
                      >
                        Go Home
                      </Link>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App


