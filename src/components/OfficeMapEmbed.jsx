import React from 'react'

/**
 * Embedded Google Map — city name only (title) above the iframe.
 *
 * @param {Object} props
 * @param {string} props.title - City label (e.g. Coimbatore, Chennai); used for heading and iframe title.
 * @param {string} props.embedUrl - Google Maps embed iframe src (Share → Embed a map)
 * @returns {JSX.Element}
 */
function OfficeMapEmbed({ title, embedUrl }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-sky-200/70 bg-white shadow-sm ring-1 ring-sky-100/80">
      <div className="shrink-0 border-b border-sky-100/80 px-4 py-2.5 md:px-5 md:py-3">
        <h3 className="text-base font-semibold text-slate-900 md:text-lg">{title}</h3>
      </div>
      <div className="min-h-0 flex-1 w-full">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="block h-full min-h-[260px] w-full md:min-h-[300px] lg:min-h-0"
        />
      </div>
    </div>
  )
}

export default OfficeMapEmbed
