/**
 * Service area data — single source of truth for "Areas We Serve" blocks.
 *
 * WHY THIS FILE EXISTS
 * The supplied requirement documents repeat an identical ~35-locality Chennai list
 * verbatim in all four service documents. Publishing that duplicated across 8+ pages
 * is a real duplicate-content risk. Rendering every instance from this one source lets
 * us keep the data consistent while varying the surrounding copy per service
 * (see the `lead` prop on `AreasWeServe.astro`).
 *
 * @typedef {{ id: string, title: string, localities: string[] }} AreaGroup
 * @typedef {{ id: string, city: string, region: string, groups: AreaGroup[], closing: string }} ServiceRegion
 */

/**
 * Chennai — transcribed directly from the requirement documents.
 * @type {ServiceRegion}
 */
export const chennaiAreas = {
  id: 'chennai',
  city: 'Chennai',
  region: 'Tamil Nadu',
  groups: [
    {
      id: 'central',
      title: 'Central Chennai',
      localities: ['Anna Nagar', 'Adyar', 'T. Nagar', 'Guindy', 'Velachery', 'Porur'],
    },
    {
      id: 'south',
      title: 'South Chennai',
      localities: [
        'Tambaram',
        'Pallavaram',
        'Chromepet',
        'Medavakkam',
        'Sholinganallur',
        'Perungudi',
        'OMR',
        'ECR',
        'Navalur',
        'Siruseri',
        'Kelambakkam',
      ],
    },
    {
      id: 'north-west',
      title: 'North & West Chennai',
      localities: ['Ambattur', 'Avadi', 'Madhavaram', 'Red Hills', 'Poonamallee'],
    },
    {
      id: 'nearby',
      title: 'Nearby Regions',
      localities: [
        'Chengalpattu',
        'Sriperumbudur',
        'Oragadam',
        'Maraimalai Nagar',
        'Kanchipuram',
      ],
    },
  ],
  closing: 'We also undertake projects across Tamil Nadu based on project requirements.',
}

/**
 * Coimbatore — head-office region.
 *
 * ⚠️ DRAFT — NEEDS CLIENT CONFIRMATION BEFORE PUBLICATION.
 * No Coimbatore locality list was supplied in the requirement. These localities are a
 * reasonable first pass for a Coimbatore-based operation, but stating that GeoDesign
 * serves a specific area is a *business claim*, not a design decision. Naveen should
 * confirm or correct this list before any page using it goes live.
 *
 * @type {ServiceRegion}
 */
export const coimbatoreAreas = {
  id: 'coimbatore',
  city: 'Coimbatore',
  region: 'Tamil Nadu',
  groups: [
    {
      id: 'central',
      title: 'Central Coimbatore',
      localities: ['R.S. Puram', 'Gandhipuram', 'Saibaba Colony', 'Race Course', 'Peelamedu'],
    },
    {
      id: 'south-east',
      title: 'South & East Coimbatore',
      localities: ['Singanallur', 'Ondipudur', 'Kurichi', 'Podanur', 'Sundarapuram'],
    },
    {
      id: 'north-west',
      title: 'North & West Coimbatore',
      localities: ['Ganapathy', 'Thudiyalur', 'Vadavalli', 'Kalapatti', 'Saravanampatti'],
    },
    {
      id: 'nearby',
      title: 'Nearby Regions',
      localities: ['Tirupur', 'Sulur', 'Mettupalayam', 'Pollachi', 'Avinashi', 'Annur'],
    },
  ],
  closing: 'We also undertake projects across western Tamil Nadu based on project requirements.',
}

/** @type {Record<string, ServiceRegion>} */
export const serviceRegions = {
  chennai: chennaiAreas,
  coimbatore: coimbatoreAreas,
}

/**
 * @param {string} id
 * @returns {ServiceRegion | undefined}
 */
export function getRegion(id) {
  return serviceRegions[id]
}

/** Total locality count — useful for copy like "35+ localities". */
export function localityCount(region) {
  return region.groups.reduce((n, g) => n + g.localities.length, 0)
}
