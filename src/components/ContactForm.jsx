import React, { useState } from 'react';

/**
 * Netlify contact form — client-side validation and fetch POST (same as legacy React app).
 * @returns {JSX.Element}
 */
export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formState.name || !formState.email || !formState.phone || !formState.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append('form-name', 'contact');
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setTimeout(() => {
          document.getElementById('successMessage')?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }, 100);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-w-0 lg:sticky lg:top-28">
      <div className="rounded-2xl border border-sky-200/70 bg-white p-6 shadow-sm ring-1 ring-sky-100/80 md:p-8">
        <h2 className="mb-6 text-xl font-semibold text-slate-900 md:text-2xl">Send Us a Message</h2>

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
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
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
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
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
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
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
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
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
              rows={4}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements..."
              className="w-full resize-none rounded-lg border-2 border-slate-200 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:from-sky-600 hover:to-sky-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
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
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 p-4 text-center text-white shadow-lg"
            role="alert"
            aria-live="polite"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-semibold sm:text-base">
              Thank you! Your message has been sent successfully.
            </span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-4 text-center text-white shadow-lg"
            role="alert"
            aria-live="polite"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm font-semibold sm:text-base">
              There was an error submitting the form. Please try again.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
