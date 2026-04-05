import React from 'react'

/**
 * Embedded Google Map for an office location.
 *
 * @param {Object} props
 * @param {string} props.title - Accessible map title and visible heading
 * @param {string} props.embedUrl - Google Maps embed iframe src (Share → Embed a map)
 * @param {string} [props.subtitle] - Optional line under heading
 * @returns {JSX.Element}
 */
function OfficeMapEmbed({ title, embedUrl, subtitle }) {
  return (
    <div className="h-full min-h-0 overflow-hidden rounded-2xl border border-sky-200/70 bg-white shadow-sm ring-1 ring-sky-100/80">
      <div className="border-b border-sky-100/80 px-4 pt-4 pb-2 md:px-5 md:pt-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-600 mt-0.5">{subtitle}</p> : null}
      </div>
      <div className="w-full min-h-[280px] md:min-h-[320px]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '280px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full h-full min-h-[280px]"
        />
      </div>
    </div>
  )
}

export default OfficeMapEmbed
