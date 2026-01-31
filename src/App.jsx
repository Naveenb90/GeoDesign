import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

// Pages
import HomePage from './pages/HomePage'
import WhyItMattersPage from './pages/WhyItMattersPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
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
          <div className="font-sans min-h-screen bg-white">
            <Header />
            <main className="min-h-screen bg-white">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/why-it-matters" element={<WhyItMattersPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/video" element={<VideoPage />} />
                <Route path="/our-offices" element={<OurOfficesPage />} />
                {/* 404 Page */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center pt-28 bg-white">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                      <a href="/" className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
                        Go Home
                      </a>
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


