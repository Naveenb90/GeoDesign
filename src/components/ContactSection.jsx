import React, { useState } from 'react'

/**
 * Contact Section Component
 * 
 * Contact form and company information section.
 * 
 * Features:
 * - Netlify Forms integration
 * - Form validation
 * - Success/error messaging
 * - Honeypot field for spam protection
 * 
 * Security:
 * - Client-side validation
 * - Honeypot field (bot-field) for spam prevention
 * - Server-side validation should be implemented on backend
 * 
 * Accessibility:
 * - Proper form labels
 * - ARIA attributes
 * - Error messaging
 * 
 * @component
 * @returns {JSX.Element} Contact section with form
 */
function ContactSection() {
  // Form state management
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  /**
   * Handle input changes
   * Updates form state with user input
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  /**
   * Handle form submission
   * Validates form and submits to Netlify Forms
   * 
   * Security Note:
   * - Client-side validation is for UX only
   * - Always validate on server-side in production
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Basic client-side validation
    if (!formState.name || !formState.email || !formState.phone || !formState.message) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Create FormData for Netlify Forms
    const formData = new FormData()
    formData.append('form-name', 'contact')
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key])
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('successMessage')?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          })
        }, 100)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 bg-white relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
        {/* Left Column: Enhanced Copy */}
        <div className="flex flex-col justify-center space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 rounded-full w-fit mb-1">
            <span className="text-sky-600 font-semibold text-xs">Get Started Today</span>
          </div>
          <h3 id="contact-heading" className="text-5xl font-extrabold text-sky-700 leading-tight contact-title">
            You Are in Safe Hands
          </h3>
          <p className="text-gray-700 text-lg">
            Every great project begins with the right foundation. With our expert soil testing,
            your construction is built on safety, stability, and confidence.
          </p>
          <p className="text-gray-700 text-lg font-semibold">
            The first step to your dream starts here — make sure it stands strong for a lifetime.
          </p>
          <ul className="space-y-3 text-gray-600" role="list">
            <li>✔️ Fast and Reliable Testing</li>
            <li>✔️ Detailed Reports & Recommendations</li>
            <li>✔️ Trusted by 5000+ Projects Across Tamil Nadu</li>
          </ul>
        </div>

        {/* Right Column: Enhanced Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-4 sm:p-6 w-full overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Have questions? Want a quote? Fill out the form below!
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-3"
            aria-label="Contact form"
          >
            {/* Hidden fields for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field for spam protection */}
            <p className="hidden" aria-hidden="true">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Name Input - Enhanced */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-2.5 text-sm rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 hover:border-gray-300"
                required
                aria-required="true"
              />
            </div>

            {/* Email Input - Enhanced */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full p-2.5 text-sm rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 hover:border-gray-300"
                required
                aria-required="true"
              />
            </div>

            {/* Phone Input - Enhanced */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full p-2.5 text-sm rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 hover:border-gray-300"
                required
                aria-required="true"
              />
            </div>

            {/* Service Input - Enhanced */}
            <div className="space-y-1">
              <label htmlFor="service" className="block text-xs font-semibold text-gray-700">
                Type of Service <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
                placeholder="e.g., Soil Testing, Foundation Design"
                className="w-full p-2.5 text-sm rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 hover:border-gray-300"
                required
                aria-required="true"
              />
            </div>

            {/* Message Textarea - Enhanced */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                className="w-full p-2.5 text-sm rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 hover:border-gray-300 resize-none"
                required
                aria-required="true"
              />
            </div>

            {/* Submit Button - Enhanced */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-2.5 px-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-sm rounded-lg hover:from-sky-600 hover:to-sky-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 overflow-hidden"
              aria-busy={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {/* Success Message - Enhanced */}
          {submitStatus === 'success' && (
            <div
              id="successMessage"
              className="mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-center shadow-lg animate-scale-in flex items-center justify-center gap-2"
              role="alert"
              aria-live="polite"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {/* Error Message - Enhanced */}
          {submitStatus === 'error' && (
            <div
              className="mt-6 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl text-center shadow-lg animate-scale-in flex items-center justify-center gap-2"
              role="alert"
              aria-live="polite"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-semibold">There was an error submitting the form. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection


