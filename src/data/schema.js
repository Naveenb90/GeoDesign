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
  branchOffice: { latitude: 12.898465, longitude: 80.1746741 },
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
 * Per-service `serviceType` lists for the Chennai `ProfessionalService` node,
 * transcribed from `req/TECHNICAL SEO FOR GEO DESIGN.docx`.
 */
const CHENNAI_SERVICE_TYPES = {
  'soil-testing-for-construction-in-chennai': [
    'Soil Testing',
    'Geotechnical Investigation',
    'Soil Investigation',
    'Soil Bearing Capacity Test',
    'Borehole Drilling',
    'Foundation Design',
    'Plate Load Test',
    'Ground Investigation',
  ],
  'pile-foundation-in-chennai': [
    'Pile Foundation',
    'Foundation Design',
    'Bore Pile Foundation',
    'Cast in Situ Piles',
    'RCC Pile Foundation',
    'Deep Foundation',
    'Geotechnical Investigation',
    'Soil Testing',
    'Geotechnical Engineering',
  ],
  'bridge-load-test-in-chennai': [
    'Soil Testing',
    'Geotechnical Investigation',
    'Pile Foundation',
    'Foundation Design',
    'Bridge Load Test',
    'Structural Load Testing',
    'Static Load Test',
    'Dynamic Load Test',
    'Bridge Deflection Monitoring',
    'Geotechnical Engineering',
  ],
  'electrical-resistivity-test-in-chennai': [
    'Electrical Resistivity Test',
    'Geophysical Survey',
    'Groundwater Exploration',
    'Subsurface Investigation',
    'Soil Investigation',
    'Foundation Investigation',
    'Geological Survey',
    'Geotechnical Engineering',
  ],
}

/**
 * ProfessionalService node for the Chennai office, emitted on the four
 * client-document service pages per `TECHNICAL SEO FOR GEO DESIGN.docx`.
 *
 * Deviations from the source document, made deliberately to avoid shipping invalid
 * structured data:
 *   - `@id` uses the existing Chennai office node (`/our-offices#chennai`) instead of
 *     the document's `#organization`, which already belongs to the site-wide
 *     `Organization` node — two nodes sharing one `@id` with different `@type` is a
 *     structured-data error.
 *   - Brand rendered as one-word "GeoDesign" (site standard); the document uses
 *     "Geo Design".
 *   - The document's placeholder `sameAs` (bare facebook.com / linkedin.com/company/)
 *     is omitted rather than published as broken profile links.
 * Address, geo, phone, hours, priceRange and serviceType follow the document.
 *
 * @param {string} slug
 * @returns {object|null}
 */
export function chennaiOfficeSchema(slug) {
  const serviceType = CHENNAI_SERVICE_TYPES[slug]
  if (!serviceType) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/our-offices#chennai`,
    name: 'GeoDesign — Chennai',
    parentOrganization: { '@id': ORG_ID },
    url: `${SITE}/`,
    image: `${SITE}/assets/web/logo-256.png`,
    logo: `${SITE}/assets/web/logo-256.png`,
    description:
      'GeoDesign provides professional soil testing, geotechnical investigation, pile foundation, bridge load testing, electrical resistivity testing, and foundation engineering services in Chennai and Tamil Nadu.',
    telephone: contactInfo.branchOffice.mobile.replace(/\s/g, ''),
    email: contactInfo.email,
    priceRange: '$$',
    address: splitAddress(contactInfo.branchOffice.address, 'Chennai'),
    geo: { '@type': 'GeoCoordinates', ...OFFICE_GEO.branchOffice },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: { '@type': 'City', name: 'Chennai' },
    serviceType,
  }
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
