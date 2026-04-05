import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { SKY_OUTCOME_TILE_CLASS } from '../constants/skyTileClasses'

/**
 * Contact / inquiry layout: left column value content; right column Netlify form.
 * Page chrome comes from ContactPage; styling aligns with About (sky tiles, spacing).
 *
 * @returns {JSX.Element}
 */
function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!formState.name || !formState.email || !formState.phone || !formState.message) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

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
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
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

  const highlightItems = [
    'We care for your Safety and Investment',
    'Clear reports that support safer design decisions',
    'Trusted by 5,000+ projects across Tamil Nadu',
  ]

  return (
    <section
      id="contact"
      className="w-full min-w-0 py-8 md:py-10"
      aria-labelledby="contact-heading"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Left: messaging & trust */}
          <div className="space-y-8 max-w-xl lg:max-w-none">
            <div>
              <h1
                id="contact-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 md:mb-4"
              >
                Get Started Today
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Tell us about your project — we&apos;ll respond with clear next steps and timelines.
              </p>
            </div>

            <div className={`${SKY_OUTCOME_TILE_CLASS} text-left`}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
                You Are in Safe Hands
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  We reduce risk in construction using scientific expertise — investigation and testing that
                  turn ground conditions into clear design inputs, not guesswork.
                </p>
                <p>
                  Share your site and timeline; we&apos;ll respond with practical next steps so your build starts
                  on solid ground.
                </p>
              </div>
              <ul className="mt-8 space-y-3 border-t border-sky-200/60 pt-6" role="list">
                {highlightItems.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-800">
                    <span className="text-sky-600 font-bold shrink-0" aria-hidden="true">
                      ✔️
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-slate-600">
              Need addresses or directions?{' '}
              <Link
                to="/our-offices"
                className="font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
              >
                View our offices
              </Link>
            </p>
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-28 w-full min-w-0">
            <div className="rounded-2xl border border-sky-200/70 bg-white p-6 md:p-8 shadow-sm ring-1 ring-sky-100/80">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                Send Us a Message
              </h2>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Contact form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg bg-slate-50 placeholder-slate-400 border-2 border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-3 rounded-lg bg-slate-50 placeholder-slate-400 border-2 border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                    Your Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full p-3 rounded-lg bg-slate-50 placeholder-slate-400 border-2 border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
                    Type of Service <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    placeholder="e.g., Soil Testing, Foundation Design"
                    className="w-full p-3 rounded-lg bg-slate-50 placeholder-slate-400 border-2 border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    className="w-full p-3 rounded-lg bg-slate-50 placeholder-slate-400 border-2 border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none focus:bg-white transition-all duration-200 resize-none"
                    required
                    aria-required="true"
                  />
                </div>

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

              {submitStatus === 'success' && (
                <div
                  id="successMessage"
                  className="mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-center shadow-lg flex items-center justify-center gap-2"
                  role="alert"
                  aria-live="polite"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-base">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="mt-6 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl text-center shadow-lg flex items-center justify-center gap-2"
                  role="alert"
                  aria-live="polite"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-base">There was an error submitting the form. Please try again.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
