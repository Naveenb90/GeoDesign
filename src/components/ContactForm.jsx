import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { geotechnicalServicePages } from '../data/servicesCatalog.js';
import { commercialServices } from '../data/commercialServices.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Dropdown options.
 *
 * IMPORTANT: the submitted value is the service *title*, which is what appears in
 * existing Netlify submissions. Commercial services are appended ahead of the
 * technical list; no existing option value changes, so historical submissions stay
 * comparable.
 */
const SERVICE_OPTIONS = [
  ...commercialServices.map((s) => ({ slug: s.slug, title: s.title })),
  ...geotechnicalServicePages.map((s) => ({ slug: s.slug, title: s.title })),
];

function validate(formState) {
  const errors = {};
  if (!formState.name.trim()) errors.name = 'Your name is required.';
  if (!formState.email.trim()) {
    errors.email = 'Your email is required.';
  } else if (!EMAIL_RE.test(formState.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!formState.phone.trim()) errors.phone = 'Your phone number is required.';
  if (!formState.service) errors.service = 'Please select a service type.';
  // `message` is intentionally optional — requiring it added friction for visitors
  // who simply want a callback, and the phone number is the field that matters.
  return errors;
}

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Pre-select the service from `?service=<slug>`, so the CTA on each service page
   * carries the visitor's intent into the form instead of making them re-pick it.
   * Runs after mount because this is a static build with no server-side query access.
   */
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('service');
    if (!slug) return;
    const match = SERVICE_OPTIONS.find((s) => s.slug === slug);
    if (match) {
      setFormState((prev) => (prev.service ? prev : { ...prev, service: match.title }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validate(formState);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }

    setFieldErrors({});
    const formData = new FormData();
    formData.append('form-name', 'contact');
    Object.keys(formState).forEach((key) => formData.append(key, formState[key]));

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => {
          document.getElementById('successMessage')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

  const inputClass =
    'w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100';
  const inputErrorClass =
    'w-full rounded-lg border-2 border-red-400 bg-slate-50 p-3 placeholder-slate-400 transition-all duration-200 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-100';

  return (
    <div className="w-full min-w-0 lg:sticky lg:top-28">
      <div className="rounded-2xl border border-sky-200/70 bg-white p-6 shadow-sm ring-1 ring-sky-100/80 md:p-8">
        <h2 className="mb-6 text-xl font-semibold text-slate-900 md:text-2xl">Send Us a Message</h2>

        <form
          id="contact-intake-form"
          method="POST"
          action="/"
          data-netlify="true"
          {...{ 'netlify-honeypot': 'bot-field' }}
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Contact form"
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" aria-hidden="true">
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
              Your Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={fieldErrors.name ? inputErrorClass : inputClass}
              required
              aria-required="true"
              aria-describedby={fieldErrors.name ? 'name-error' : undefined}
              aria-invalid={!!fieldErrors.name}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-sm text-red-600" role="alert">{fieldErrors.name}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
              Your Email <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={fieldErrors.email ? inputErrorClass : inputClass}
              required
              aria-required="true"
              aria-describedby={fieldErrors.email ? 'email-error' : undefined}
              aria-invalid={!!fieldErrors.email}
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-sm text-red-600" role="alert">{fieldErrors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
              Your Phone Number <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className={fieldErrors.phone ? inputErrorClass : inputClass}
              required
              aria-required="true"
              aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
              aria-invalid={!!fieldErrors.phone}
            />
            {fieldErrors.phone && (
              <p id="phone-error" className="text-sm text-red-600" role="alert">{fieldErrors.phone}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
              Type of Service <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formState.service}
              onChange={handleChange}
              className={`${fieldErrors.service ? inputErrorClass : inputClass} text-slate-800`}
              required
              aria-required="true"
              aria-describedby={fieldErrors.service ? 'service-error' : undefined}
              aria-invalid={!!fieldErrors.service}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </select>
            {fieldErrors.service && (
              <p id="service-error" className="text-sm text-red-600" role="alert">{fieldErrors.service}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
              Your Message <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements..."
              className={`${fieldErrors.message ? inputErrorClass : inputClass} resize-none`}
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              aria-invalid={!!fieldErrors.message}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-sm text-red-600" role="alert">{fieldErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-linear-to-r from-sky-500 to-sky-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:from-sky-600 hover:to-sky-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-500 to-green-600 p-4 text-center text-white shadow-lg"
            role="alert"
            aria-live="polite"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-semibold sm:text-base">
              Thank you! Your message has been sent successfully.
            </span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-500 to-red-600 p-4 text-center text-white shadow-lg"
            role="alert"
            aria-live="polite"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

ContactForm.propTypes = {};

export default ContactForm;
