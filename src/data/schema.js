/**
 * Structured data builders.
 *
 * All schema is generated from existing site data rather than hand-written per
 * page, so it cannot drift from what is actually rendered.
 *
 * DELIBERATELY NOT INCLUDED: `AggregateRating` / `Review`. Emitting review schema
 * without genuine, verifiable reviews is a manual-action risk with Google. If real
 * reviews are collected later, add it then.
 */

import { contactInfo } from './data.js'

const SITE = 'https://geodesign.co.in'

export const ORG_ID = `${SITE}/#organization`

/** Coordinates already used for the office map embeds in `data.js`. */
const OFFICE_GEO = {
  headOffice: { latitude: 11.033309, longitude: 76.940973 },
  branchOffice: { latitude: 13.0924, longitude: 80.2197 },
}

/**
 * Split a one-line address into schema fields.
 * Addresses in `data.js` end with "<City> - <PIN>".
 */
function splitAddress(address, locality) {
  const pin = address.match(/(\d{6})\s*$/)?.[1]
  const street = address
    .replace(/,?\s*[A-Za-z]+\s*-\s*\d{6}\s*$/, '')
    .replace(/,\s*$/, '')
    .trim()
  return {
    '@type': 'PostalAddress',
    streetAddress: street,
    addressLocality: locality,
    addressRegion: 'Tamil Nadu',
    postalCode: pin,
    addressCountry: 'IN',
  }
}

/** @returns {object} Organization node, referenced by @id from other schema. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'GeoDesign India Private Limited',
    url: SITE,
    logo: `${SITE}/assets/web/logo-256.png`,
    description:
      'GeoDesign reduces construction risk using scientific geotechnical expertise — soil investigation, testing, and foundation insight across Tamil Nadu.',
    address: splitAddress(contactInfo.headOffice.address, 'Coimbatore'),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9043344488',
        contactType: 'customer service',
        areaServed: 'Coimbatore',
        email: contactInfo.email,
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9043344088',
        contactType: 'customer service',
        areaServed: 'Chennai',
        email: contactInfo.email,
      },
    ],
  }
}

/**
 * LocalBusiness nodes — one per office.
 * This is what makes the business eligible for local/map surfaces; the audit found
 * it entirely absent despite two physical offices.
 */
export function localBusinessSchema() {
  const offices = [
    {
      id: 'coimbatore',
      name: 'GeoDesign India Private Limited — Coimbatore (Head Office)',
      address: splitAddress(contactInfo.headOffice.address, 'Coimbatore'),
      geo: OFFICE_GEO.headOffice,
      telephone: contactInfo.headOffice.mobile.replace(/\s/g, ''),
    },
    {
      id: 'chennai',
      name: 'GeoDesign India Private Limited — Chennai (Branch Office)',
      address: splitAddress(contactInfo.branchOffice.address, 'Chennai'),
      geo: OFFICE_GEO.branchOffice,
      telephone: contactInfo.branchOffice.mobile.replace(/\s/g, ''),
    },
  ]

  return offices.map((o) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/our-offices#${o.id}`,
    name: o.name,
    parentOrganization: { '@id': ORG_ID },
    url: `${SITE}/our-offices`,
    image: `${SITE}/assets/web/logo-256.png`,
    address: o.address,
    geo: { '@type': 'GeoCoordinates', ...o.geo },
    telephone: o.telephone,
    email: contactInfo.email,
    areaServed: { '@type': 'State', name: 'Tamil Nadu' },
    knowsAbout: [
      'Geotechnical investigation',
      'Soil testing',
      'Foundation design',
      'Pile load testing',
    ],
  }))
}

/**
 * Service schema for a commercial service page.
 * @param {object} service entry from `commercialServices.js`
 */
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/services/${service.slug}#service`,
    name: service.title,
    description: service.shortDescription,
    serviceType: service.title,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'State', name: 'Tamil Nadu' },
    url: `${SITE}/services/${service.slug}`,
  }
}

/**
 * FAQPage schema. Only emit where the answers are genuinely visible on the page —
 * Google requires the content to be present, which is why `FaqAccordion` keeps
 * answers in the DOM rather than fetching them.
 */
export function faqSchema(faqs) {
  if (!faqs?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

/** @param {{label: string, href?: string}[]} items */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE}${item.href}` } : {}),
    })),
  }
}

/**
 * VideoObject for the `/video` page.
 *
 * ⚠️ `uploadDate` is omitted unless `videoConfig.uploadDate` is set in `data.js`.
 * Google wants uploadDate for video rich results, but inventing a date would be
 * false structured data. Set the real YouTube publish date (ISO 8601, e.g.
 * '2024-03-12') in `videoConfig` and it will be included automatically.
 *
 * @param {{videoId: string, uploadDate?: string}} config from `data.js` → `videoConfig`
 */
export function videoSchema(config) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'GeoDesign — geotechnical investigation and soil testing',
    description:
      'How scientific ground investigation supports safer design decisions on construction projects.',
    thumbnailUrl: `https://i.ytimg.com/vi/${config.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${config.videoId}`,
    ...(config.uploadDate ? { uploadDate: config.uploadDate } : {}),
    publisher: { '@id': ORG_ID },
  }
}
