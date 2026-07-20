/**
 * Trust credentials — surfaced as a shared stats band.
 *
 * Every figure here is taken from content already published on the site
 * (`aboutPoints` in `data.js` and the header tagline). Nothing is invented.
 * The audit found these credentials each appear on exactly one page; the band
 * lets them work on the home page and every service page.
 *
 * @typedef {{ value: string, label: string, detail?: string }} Credential
 * @type {Credential[]}
 */
export const credentials = [
  {
    value: '5,000+',
    label: 'Projects completed',
    detail: 'Across Tamil Nadu and South India',
  },
  {
    value: '25',
    label: 'Engineers on staff',
    detail: '5 geotechnical, 20 civil',
  },
  {
    value: '2',
    label: 'Soil mechanics laboratories',
    detail: 'Coimbatore and Chennai',
  },
  {
    value: 'DTCP & CMDA',
    label: 'Registered engineers',
    detail: 'Chennai statutory registration',
  },
]
