import { Helmet } from 'react-helmet-async'

/**
 * SEO Component
 * 
 * Handles meta tags, Open Graph, Twitter Cards, and structured data
 * for better SEO and social media sharing.
 * 
 * @param {Object} props - SEO configuration
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords
 * @param {string} props.image - OG image URL
 * @param {string} props.url - Canonical URL
 * @param {string} props.type - OG type (website, article, etc.)
 */
function SEO({ 
  title = 'GeoDesign - Reduce Construction Risk in India',
  description =
    'GeoDesign reduces construction risk using scientific geotechnical expertise — soil investigation, testing, and foundation insight across Tamil Nadu, Coimbatore & Chennai.',
  keywords = 'soil testing, geotechnical services, borehole test, soil mechanics, Coimbatore, Chennai, Geo Design',
  image = '/assets/web/hero-site.jpg',
  url = 'https://geodesign.co.in',
  type = 'website'
}) {
  const fullTitle = title.includes('GeoDesign') ? title : `${title} | GeoDesign`
  const fullUrl = typeof window !== 'undefined' ? `${url}${window.location.pathname}` : url

  const siteOrigin = url.replace(/\/$/, '')
  const absoluteImageUrl =
    /^https?:\/\//i.test(image) ? image : `${siteOrigin}${image.startsWith('/') ? image : `/${image}`}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GeoDesign India Private Limited" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content="GeoDesign" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GeoDesign India Private Limited",
          "url": url,
          "logo": `${url}/assets/web/logo.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Old No. 40, New No. 29, 8th Street, K.K.Pudur",
            "addressLocality": "Coimbatore",
            "postalCode": "641038",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-9043344488",
              "contactType": "customer service",
              "areaServed": "Coimbatore",
              "email": "geodesign123@gmail.com"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-9043344088",
              "contactType": "customer service",
              "areaServed": "Chennai",
              "email": "geodesign123@gmail.com"
            }
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO
