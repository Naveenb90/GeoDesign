/**
 * Application Data Constants
 * 
 * Centralized data storage for easier maintenance and potential CMS integration.
 * This file contains all static content that could be moved to a CMS in the future.
 * 
 * Benefits:
 * - Single source of truth
 * - Easy to update content
 * - Can be replaced with API calls later
 * - Better for internationalization
 */

/**
 * Navigation links configuration
 * Updated for React Router navigation
 */
export const navLinks = [
  { href: '/about', label: 'Who We Are' },
  { href: '/services', label: 'What We Do' },
  { href: '/why-it-matters', label: 'Why It Matters' },
  { href: '/projects', label: 'Who We Work With' },
  { href: '/our-offices', label: 'Our Offices' },
]

/**
 * Short intro for the Why It Matters page (shown under the H1).
 */
export const whyItMattersIntro =
  'Construction risk often starts underground. Every site is different — soil, rock, groundwater, and fill affect how loads are carried and how structures settle. Scientific investigation maps these factors early so design can reduce surprises and costly rework.'

/**
 * Soil and site factors grouped by theme for the Why It Matters page.
 * @typedef {{ icon: string, title: string, description: string }} SoilIssueItem
 * @typedef {{ id: string, title: string, blurb: string, items: SoilIssueItem[] }} SoilIssueGroup
 * @type {SoilIssueGroup[]}
 */
export const soilIssueGroups = [
  {
    id: 'soil-rock',
    title: 'Soil & ground conditions',
    blurb: 'How the ground behaves under load and when excavated.',
    items: [
      {
        icon: '🧱',
        title: 'Type of Soil',
        description: 'Clay is reactive, sand settles under load, silt loses strength when wet.',
      },
      {
        icon: '⚠️',
        title: 'Soft Soil',
        description: 'Can settle under load affecting stability.',
      },
      {
        icon: '🌊',
        title: 'Marine Clays',
        description: 'May have low or no bearing capacity.',
      },
      {
        icon: '🪨',
        title: 'Rock Boulders',
        description: 'May move underground or create voids when excavated.',
      },
      {
        icon: '🪨',
        title: 'Rock Layers',
        description: 'May impact excavation.',
      },
    ],
  },
  {
    id: 'site-water',
    title: 'Site access & water',
    blurb: 'Access for investigation and groundwater-related risks.',
    items: [
      {
        icon: '📍',
        title: 'Site Access',
        description: 'Quality of access impacts site investigation.',
      },
      {
        icon: '💦',
        title: 'Water Table',
        description: 'Depths can affect excavation feasibility.',
      },
      {
        icon: '💧',
        title: 'Low-Lying Areas',
        description: 'Could contain acid sulfate soils.',
      },
      {
        icon: '⛰️',
        title: 'Slopes',
        description: 'Steeper slopes may have slip potential.',
      },
    ],
  },
  {
    id: 'trees-earthworks',
    title: 'Trees & earthworks',
    blurb: 'Vegetation and man-made changes to levels.',
    items: [
      {
        icon: '🌳',
        title: 'Trees & Roots',
        description: 'Roots may draw moisture, causing shrinkage near footings.',
      },
      {
        icon: '🛠️',
        title: 'Filled Areas',
        description: 'May have un-compacted soils causing settlement.',
      },
      {
        icon: '⚡',
        title: 'Cut & Fill Pads',
        description: 'Could experience differential settlement.',
      },
    ],
  },
  {
    id: 'disposal',
    title: 'Disposal & land use',
    blurb: 'On-site suitability for wastewater and similar uses.',
    items: [
      {
        icon: '🚰',
        title: 'Wastewater Suitability',
        description: 'Soil suitability for sewerage and greywater disposal.',
      },
      {
        icon: '🏞️',
        title: 'Land Block',
        description: 'Suitability for on-site wastewater disposal.',
      },
    ],
  },
]

/**
 * Importance cards explaining why soil testing matters
 */
export const importanceCards = [
  {
    icon: '🏦',
    title: 'Protect Your Investment',
    description: 'Proper foundations prevent building movement and wall cracks.',
  },
  {
    icon: '💰',
    title: 'Prevent Future Costs',
    description: 'Identify issues early, estimate costs, make informed land decisions.',
  },
  {
    icon: '🌍',
    title: 'Build on Solid Ground',
    description: 'Ensure safety and stability with accurate soil analysis for foundations that last a lifetime.',
  },
]

/**
 * About us points
 */
export const aboutPoints = [
  'Founded by experienced Geotechnical Engineers, our company specializes in providing expert geotechnical consulting services for civil engineering projects.',
  'Registered Geotechical engineers in DTCP and CMDA.',
  'We conduct comprehensive soil testing for bore-hole investigations across a wide range of constructions, including residential buildings, apartments, high-rises, commercial complexes, and bridges.',
  'With over 5,000 successful projects completed throughout Tamil Nadu and South India, our company operates well-equipped soil mechanics laboratories in Coimbatore and Chennai.',
  'We perform thorough testing of soil and rock samples both on-site and in the laboratory, supported by a skilled team of 5 Geotechnical Engineers and 20 Civil Engineers, ensuring reliable and efficient project execution.',
]

/**
 * Services offered by GeoDesign
 */
export const services = [
  {
    title: 'Soil Testing for All Types of Constructions',
    description:
      'Comprehensive soil investigation to determine bearing capacity, settlement behavior, and suitability for buildings, roads, and industrial projects.',
  },
  {
    title: 'Laboratory Soil Testing',
    description:
      'State-of-the-art soil mechanics laboratory for analyzing strength, composition, and moisture properties that influence design and performance.',
  },
  {
    title: 'Pile Foundation & Foundation Design',
    description:
      'Expert design and execution of deep foundations to support high-rise buildings, bridges, and heavy structures.',
  },
  {
    title: 'Plate Load Test',
    description:
      'On-site testing to evaluate soil bearing capacity and settlement characteristics for shallow foundations.',
  },
  {
    title: 'Pile Load Test / Pull Out Test',
    description:
      'Critical testing to validate the load-carrying capacity and stability of piles, ensuring reliability in foundation systems.',
  },
  {
    title: 'Electrical Resistivity Test',
    description:
      'Subsurface investigation to map soil stratification, groundwater, and rock layers using resistivity methods for better foundation planning.',
  },
  {
    title: 'Topographical & Contour Survey',
    description:
      'Precise land surveys to capture terrain features and elevation data, supporting site planning, drainage design, and infrastructure projects.',
  },
]

/**
 * Gallery preview images
 */
export const previewImages = [
  { src: '/assets/gallery/gallery6.JPG', alt: 'Project 1' },
  { src: '/assets/gallery/gallery3.JPG', alt: 'Project 2' },
  { src: '/assets/gallery/gallery18.JPG', alt: 'Project 3' },
  { src: '/assets/gallery/gallery28.jpg', alt: 'Project 4' },
  { src: '/assets/gallery/gallery29.jpg', alt: 'Project 5' },
  { src: '/assets/gallery/gallery30.jpg', alt: 'Project 6' },
]

/**
 * Generate all gallery images for modal
 * Handles mixed file extensions (.JPG vs .jpg)
 */
export const getGalleryImages = () => {
  return Array.from({ length: 31 }, (_, i) => {
    const num = i + 1
    const extension = num <= 27 ? 'JPG' : 'jpg'
    return {
      src: `/assets/gallery/gallery${num}.${extension}`,
      type: 'image',
    }
  })
}

/**
 * Client logo paths
 * Note: Some use .png, some use .jpg
 */
export const clientLogos = [
  '/assets/clients/client1.png',
  '/assets/clients/client2.png',
  '/assets/clients/client3.png',
  '/assets/clients/client5.png',
  '/assets/clients/client7.png',
  '/assets/clients/client8.png',
  '/assets/clients/client9.png',
  '/assets/clients/client10.jpg',
  '/assets/clients/client11.jpg',
  '/assets/clients/client12.jpg',
  '/assets/clients/client13.jpg',
  '/assets/clients/client14.jpg',
  '/assets/clients/client15.jpg',
  '/assets/clients/client16.jpg',
  '/assets/clients/client17.jpg',
  '/assets/clients/client18.jpg',
  '/assets/clients/client19.jpg',
  '/assets/clients/client20.jpg',
  '/assets/clients/client21.jpg',
  '/assets/clients/client22.jpg',
  '/assets/clients/client23.jpg',
  '/assets/clients/client24.jpg',
  '/assets/clients/client25.jpg',
  '/assets/clients/client26.jpg',
  '/assets/clients/client27.jpg',
  '/assets/clients/client28.jpg',
  '/assets/clients/client29.jpg',
  '/assets/clients/client30.jpg',
]

/**
 * Contact information
 */
export const contactInfo = {
  headOffice: {
    address: 'Old No. 40, New No. 29, 8th Street, K.K.Pudur, Coimbatore - 641038',
    regionLabel: 'Coimbatore, Tamil Nadu',
    /** Mobile & WhatsApp — Coimbatore (head office) */
    mobile: '+91 9043344488',
  },
  branchOffice: {
    address: 'No. 15, Periyar Pathai, Choolaimedu, Chennai - 600094',
    regionLabel: 'Chennai, Tamil Nadu',
    /** Mobile & WhatsApp — Chennai branch */
    mobile: '+91 9043344088',
  },
  phone: {
    landline: '0422 - 4202452',
    /** Primary mobile (Coimbatore); use headOffice.mobile for office-specific UIs */
    mobile: '+91 9043344488',
  },
  email: 'geodesign123@gmail.com',
}

/**
 * Google Maps iframe embed URLs (Maps → Share → Embed a map).
 * Coordinate-based queries work without an API key; replace with official embed pb= URLs anytime.
 */
export const mapEmbedUrls = {
  headOffice:
    'https://www.google.com/maps?q=11.033309,76.940973&hl=en&z=16&output=embed',
  branchOffice:
    'https://www.google.com/maps?q=13.0924,80.2197&hl=en&z=16&output=embed',
}

/**
 * YouTube video configuration
 */
export const videoConfig = {
  videoId: 'FdMVB_qNAAY',
  embedUrl: 'https://www.youtube.com/embed/FdMVB_qNAAY?controls=1&rel=0&mute=0',
}


