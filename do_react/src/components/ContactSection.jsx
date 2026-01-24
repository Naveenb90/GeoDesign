import React, { useState } from 'react'
import { contactInfo } from '../constants/data'

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

  // Google Maps embed URL for Head Office (Coimbatore)
  // You can get the embed URL from Google Maps by:
  // 1. Go to Google Maps
  // 2. Search for the address
  // 3. Click Share → Embed a map
  // 4. Copy the iframe src URL
  const headOfficeMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3NsKwNTcnMjAuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`

  return (
    <section
      id="contact"
      className="pt-20 pb-16 px-4 sm:px-6 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-4 contact-title">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Want a quote? Contact us today!
          </p>
        </div>

        {/* Two Column Layout: Address & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Address Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            {/* Head Office */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Head Office</h3>
              <address className="not-italic space-y-2 text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">📍</span>
                  <span>{contactInfo.headOffice.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-600">📞</span>
                  <span>{contactInfo.phone.landline}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-600">📱</span>
                  <a 
                    href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`} 
                    className="text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    {contactInfo.phone.mobile}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-600">✉️</span>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </address>
            </div>

            {/* Branch Office */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Branch Office</h3>
              <address className="not-italic space-y-2 text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">📍</span>
                  <span>{contactInfo.branchOffice.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-600">📞</span>
                  <span>{contactInfo.phone.landline}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-600">📱</span>
                  <a 
                    href={`tel:${contactInfo.phone.mobile.replace(/\s/g, '')}`} 
                    className="text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    {contactInfo.phone.mobile}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-600">✉️</span>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Right Column: Google Maps */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 p-6 pb-0">Find Us</h2>
            <div className="w-full h-full min-h-[400px]">
              <iframe
                src={headOfficeMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GeoDesign Head Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">
            Send Us a Message
          </h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-4"
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

            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-3 rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                required
                aria-required="true"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full p-3 rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                required
                aria-required="true"
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full p-3 rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                required
                aria-required="true"
              />
            </div>

            {/* Service Input */}
            <div className="space-y-1">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                Type of Service <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
                placeholder="e.g., Soil Testing, Foundation Design"
                className="w-full p-3 rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                required
                aria-required="true"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                className="w-full p-3 rounded-lg bg-gray-50 placeholder-gray-400 border-2 border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 resize-none"
                required
                aria-required="true"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold rounded-lg hover:from-sky-600 hover:to-sky-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div
              id="successMessage"
              className="mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-center shadow-lg flex items-center justify-center gap-2 max-w-2xl mx-auto"
              role="alert"
              aria-live="polite"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div
              className="mt-6 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl text-center shadow-lg flex items-center justify-center gap-2 max-w-2xl mx-auto"
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


