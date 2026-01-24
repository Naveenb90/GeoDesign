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
  title = 'GeoDesign - Expert Soil Testing Services in India',
  description = 'GeoDesign provides reliable soil testing services for residential, commercial, and government projects in Tamil Nadu. Contact us today!',
  keywords = 'soil testing, geotechnical services, borehole test, soil mechanics, Coimbatore, Chennai, Geo Design',
  image = '/assets/web/hero-site.jpg',
  url = 'https://geodesign.in',
  type = 'website'
}) {
  const fullTitle = title.includes('GeoDesign') ? title : `${title} | GeoDesign`
  const fullUrl = typeof window !== 'undefined' ? `${url}${window.location.pathname}` : url

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
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="GeoDesign" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
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
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9043344488",
            "contactType": "customer service",
            "email": "geodesign123@gmail.com"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
