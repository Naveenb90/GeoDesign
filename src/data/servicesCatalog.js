/**
 * Geotechnical service pages — content structured from
 * `public/assets/services/Geotechnical Investigation - SEO.pdf`.
 * Major numbered sections (1–5) are exposed as individual routes under /services/:slug.
 *
 * @typedef {{ slug: string, title: string, shortDescription: string, icon: string, metaTitle: string, metaDescription: string, keywords: string, sections: { title: string, body: string }[] }} GeotechnicalServicePage
 */

/** Emoji icons cycled for subsection cards on service detail pages (matches IssueSection importance-card style). */
export const SERVICE_SECTION_ICONS = ['📋', '🔬', '⚙️', '📐', '🏗️', '💧', '🌡️', '📊']

/**
 * @param {number} sectionIndex
 * @returns {string}
 */
export function getSectionIcon(sectionIndex) {
  return SERVICE_SECTION_ICONS[sectionIndex % SERVICE_SECTION_ICONS.length]
}

/** @type {GeotechnicalServicePage[]} */
export const geotechnicalServicePages = [
  {
    slug: 'drilling-sampling',
    title: 'Drilling & Sampling',
    icon: '🏗️',
    shortDescription:
      'Boreholes, sampling, in-situ tests, and bearing capacity — core methods for subsurface investigation.',
    metaTitle: 'Drilling & Sampling | Geotechnical Investigation',
    metaDescription:
      'GeoDesign: drilling and sampling, soil boring, core drilling, SPT, auger boring, DCPT, CPT, trial pits, and safe bearing capacity for Tamil Nadu projects.',
    keywords:
      'drilling and sampling, soil boring, SPT, auger boring, cone penetration test, trial pits, SBC, geotechnical investigation India',
    sections: [
      {
        title: 'Drilling and sampling',
        body:
          'Drilling and sampling is a geotechnical investigation method used to extract soil or rock samples from the subsurface to determine their engineering, geological, and environmental properties. This process involves boring holes (drilling) and collecting materials (sampling) for laboratory testing, crucial for evaluating site strength, contamination, and design parameters.',
      },
      {
        title: 'Soil boring',
        body:
          'Soil boring is a geotechnical drilling process that extracts subsurface soil and rock samples to analyse soil layers, strength, and composition. It is essential for determining foundation requirements, assessing groundwater levels, and evaluating site suitability for construction. These samples are analysed for structural design and environmental assessment.',
      },
      {
        title: 'Core drilling',
        body:
          'Core drilling is a specialized rotary drilling technique that uses a hollow, diamond-tipped or carbide bit to cut a perfectly cylindrical hole, extracting a solid “core” sample of material rather than grinding it into dust.',
      },
      {
        title: 'Standard Penetration Test (SPT)',
        body:
          'The Standard Penetration Test (SPT) is a common in-situ geotechnical field test used to determine the density, strength, and bearing capacity of soil by driving a split-spoon sampler into the ground.',
      },
      {
        title: 'Auger boring',
        body:
          'The auger boring method of soil exploration involves rotating a helical screw (auger) into the ground to create shallow to moderate-depth boreholes, primarily in soft to stiff cohesive soils above the water table. It is a fast, economical, and popular method for collecting disturbed soil samples. Hand-operated augers reach depths up to 6 m.',
      },
      {
        title: 'Disturbed and undisturbed samples',
        body:
          'Collecting disturbed and undisturbed soil samples is a fundamental aspect of geotechnical engineering investigations, designed to assess the engineering properties of soil layers at different depths for construction design. Disturbed samples are used to classify soil and identify its grain properties, while undisturbed samples are critical for determining the in-situ structure, strength, and settlement behavior of the soil.',
      },
      {
        title: 'Safe Bearing Capacity (SBC)',
        body:
          'Safe Bearing Capacity (SBC) is the maximum pressure a soil can safely withstand without experiencing shear failure or excessive settlement. It is a critical geotechnical parameter, calculated by dividing the ultimate bearing capacity by a factor of safety.',
      },
      {
        title: 'Dynamic Cone Penetration Test (DCPT)',
        body:
          'The Dynamic Cone Penetration Test (DCPT) is a rapid, in-situ geotechnical test used to evaluate the strength and consistency of soil layers and compacted materials.',
      },
      {
        title: 'Cone Penetration Test (CPT)',
        body:
          'The Cone Penetration Test (CPT) is a widely used, rapid, and accurate in-situ geotechnical method for determining subsurface soil conditions and properties.',
      },
      {
        title: 'Trial pits',
        body:
          'A trial pit (or test pit) is a shallow, excavated hole—typically 1–5 meters deep—used to directly observe, sample, and log subsurface soil, rock, and groundwater conditions before construction.',
      },
    ],
  },
  {
    slug: 'foundation-recommendations',
    title: 'Foundation Recommendations',
    icon: '🏛️',
    shortDescription:
      'Shallow foundations, ground improvement, and deep pile foundations — recommendations aligned to your site data.',
    metaTitle: 'Foundation Recommendations | Shallow, Ground Improvement & Piles',
    metaDescription:
      'GeoDesign foundation recommendations: shallow foundations, ground improvement techniques, and deep pile foundations for safe, efficient structures in Tamil Nadu.',
    keywords:
      'shallow foundations, ground improvement, pile foundations, foundation design, geotechnical recommendations',
    sections: [
      {
        title: 'Shallow foundations',
        body:
          'Shallow foundations transfer building loads to soil at relatively shallow depth. Suitability depends on bearing capacity, settlement limits, and soil stratification from investigation and laboratory data.',
      },
      {
        title: 'Ground improvement technique',
        body:
          'Ground improvement methods strengthen or densify weak soils to support structures where shallow foundations would otherwise be inadequate — selected based on soil type, loads, and project constraints.',
      },
      {
        title: 'Deep foundations — pile foundations',
        body:
          'Deep foundations (including piles) transfer loads through weak or compressible strata to competent soil or rock. Design integrates structural loads, geotechnical parameters, and installation feasibility.',
      },
    ],
  },
  {
    slug: 'specialised-field-testing',
    title: 'Specialised Field Testing',
    icon: '📐',
    shortDescription:
      'Resistivity, vane shear, permeability, compaction checks, plate load tests, and water/soil chemical analysis.',
    metaTitle: 'Specialised Field Testing | GeoDesign Geotechnical Services',
    metaDescription:
      'Electrical resistivity, vane shear, field permeability, sand replacement, core cutter, plate load tests, and chemical analysis of water and soil — field testing in Tamil Nadu.',
    keywords:
      'electrical resistivity test, vane shear test, field permeability, plate load test, sand replacement, core cutter, soil chemical analysis',
    sections: [
      {
        title: 'Electric resistivity / soil resistivity test',
        body:
          'An electrical resistivity test of soil measures how strongly soil resists the flow of electric current. It is a critical, non-destructive geotechnical method used to evaluate soil composition, moisture content, and compaction, mainly for designing electrical grounding systems.',
      },
      {
        title: 'Vane shear test',
        body:
          'The vane shear test is a geotechnical method used to determine the in-situ or laboratory undrained shear strength of soft to medium-stiff cohesive soils (clays and silts). It is especially useful for determining the shear strength of sensitive clays, as it measures both the undisturbed and remoulded strength to calculate sensitivity.',
      },
      {
        title: 'Field permeability test',
        body:
          'Field permeability tests determine the in-situ hydraulic conductivity of soil (how easily water flows through pores), crucial for foundation design and hydrogeological studies.',
      },
      {
        title: 'Field sand replacement test',
        body:
          'The field sand replacement test is a geotechnical method to determine the in-situ dry density of compacted soil.',
      },
      {
        title: 'Field core cutter test',
        body:
          'The field core cutter test is a standard geotechnical field method used to determine the in-situ dry density and compaction level of soft, cohesive soils (e.g., clays, silts). By driving a calibrated steel cylinder into the ground, it measures the density in place, ensuring soil layers meet construction quality standards.',
      },
      {
        title: 'Chemical analysis of water (ground/bore) — construction purpose',
        body:
          'Measuring physical and chemical parameters (e.g., NaOH, H₂SO₄, Cl, SO₄, inorganic solids, suspended matter, organic solids, pH) for construction suitability.',
      },
      {
        title: 'Chemical analysis of water (ground/bore) — drinking purpose',
        body:
          'Measuring physical and chemical parameters per drinking-water quality needs (e.g., pH, turbidity, TDS, metals, anions, hardness, residual chlorine, and other regulated parameters).',
      },
      {
        title: 'Chemical analysis of soil',
        body:
          'Measuring physical and chemical parameters in soil (e.g., pH at 1.0% suspension, Cl, SO₄, N, PO₄, Na) to support design and compliance.',
      },
      {
        title: 'Plate load test',
        body:
          'The plate load test is a field method to determine a soil’s ultimate bearing capacity and settlement behaviour under a given load. The modulus of subgrade reaction (K value) can be determined by conducting a plate load test.',
      },
    ],
  },
  {
    slug: 'laboratory-tests',
    title: 'Laboratory Tests',
    icon: '🧪',
    shortDescription:
      'Grain size, Atterberg limits, shear strength, consolidation, compaction, CBR, and fine-soil gradation.',
    metaTitle: 'Soil Laboratory Tests | GeoDesign Coimbatore & Chennai',
    metaDescription:
      'Laboratory soil testing: sieve analysis, Atterberg limits, direct shear, triaxial, consolidation, hydrometer, Proctor, CBR, free swell index, and more — geotechnical lab services.',
    keywords:
      'soil laboratory testing, sieve analysis, Atterberg limits, triaxial test, CBR test, Proctor compaction, geotechnical lab Tamil Nadu',
    sections: [
      {
        title: 'Specific gravity',
        body:
          'Specific gravity is a dimensionless, crucial engineering property used to determine void ratio, porosity, and degree of saturation.',
      },
      {
        title: 'Sieve analysis — dry',
        body:
          'Dry sieve analysis is a laboratory method used to determine the grain size distribution of dry, free-flowing materials (such as sand, gravel, or powders) by passing them through a stacked series of sieves with progressively smaller mesh sizes.',
      },
      {
        title: 'Sieve analysis — wet',
        body:
          'Wet sieve analysis is a laboratory technique used to accurately determine the particle size distribution of materials—particularly soils, aggregates, or powders containing significant fines (clay/silt) or that are sticky.',
      },
      {
        title: 'Atterberg limits',
        body:
          'Atterberg limits are critical water content percentages (liquid, plastic, and shrinkage) that define the boundaries between solid, semi-solid, plastic, and liquid states of fine-grained soils (clays and silts).',
      },
      {
        title: 'Natural moisture content',
        body:
          'Natural moisture content (or natural water content) is the ratio of the weight of water to the weight of solid particles in a soil sample, expressed as a percentage. It represents the actual amount of water present in the soil in its natural, field state, generally determined by oven-drying at 105 °C–110 °C.',
      },
      {
        title: 'Direct shear test',
        body:
          'The direct shear test is a laboratory method used to determine the shear strength parameters—cohesion (c) and angle of internal friction (φ)—of soil by forcing a specimen to fail along a horizontal plane. It is particularly effective for testing granular, non-cohesive soils and provides quick results for geotechnical design applications.',
      },
      {
        title: 'Triaxial test',
        body:
          'A triaxial test is a common geotechnical laboratory test used to determine the shear strength parameters (cohesion and internal friction angle) of soil—essential for designing foundations, slopes, and tunnels.',
      },
      {
        title: 'Consolidation test',
        body:
          'The consolidation test measures the rate and magnitude of soil settlement in saturated, cohesive soils under vertical pressure.',
      },
      {
        title: 'Hydrometer analysis',
        body:
          'Hydrometer analysis is a geotechnical laboratory method used to determine the particle size distribution of fine-grained soils (silts and clays) passing the #200 sieve (0.075 mm).',
      },
      {
        title: 'Proctor compaction test',
        body:
          'The Proctor compaction test is a laboratory method used to determine the maximum dry density (MDD) and optimum moisture content (OMC) of soil.',
      },
      {
        title: 'Free swell index test',
        body:
          'The free swell index (FSI) test, per IS: 2720 (Part 40), measures the increase in volume of soil (10 g, passing 425 µm sieve) upon wetting, identifying its swelling potential.',
      },
      {
        title: 'California Bearing Ratio (CBR) test — soaked & unsoaked',
        body:
          'The California Bearing Ratio (CBR) test is a penetration test used to evaluate the mechanical strength of subgrade soil and base course materials for road and pavement design.',
      },
    ],
  },
  {
    slug: 'tests-on-rock',
    title: 'Tests On Rock',
    icon: '⛰️',
    shortDescription:
      'Elastic modulus, core recovery, RQD, point load, density, specific gravity, bearing pressure, and UCS.',
    metaTitle: 'Rock Testing | Modulus, RQD, Point Load & UCS | GeoDesign',
    metaDescription:
      'Rock mechanics tests: modulus of elasticity, core recovery and RQD, point load, density, specific gravity, allowable bearing pressure, and unconfined compression — geotechnical rock testing.',
    keywords:
      'rock testing, RQD, point load test, unconfined compression test, rock bearing pressure, core recovery',
    sections: [
      {
        title: 'Modulus of elasticity',
        body:
          'Determination of elastic modulus supports deformation analysis and structural interaction with rock masses for design.',
      },
      {
        title: 'Core recovery & RQD calculation',
        body:
          'Core recovery and rock quality designation (RQD) quantify drill core integrity and rock mass quality for engineering classification.',
      },
      {
        title: 'Point load test',
        body:
          'The point load test provides an index strength for rock and can be correlated with uniaxial compressive strength for classification.',
      },
      {
        title: 'Density',
        body:
          'Rock density (bulk and dry) supports weight–volume relationships and design calculations.',
      },
      {
        title: 'Specific gravity',
        body:
          'Specific gravity of rock solids supports porosity and unit weight estimates.',
      },
      {
        title: 'Allowable bearing pressure',
        body:
          'Allowable bearing pressure on rock is derived from strength, weathering, and discontinuity data for foundation design.',
      },
      {
        title: 'Unconfined compression test',
        body:
          'The unconfined compression test measures the compressive strength of rock specimens under axial load without lateral confinement.',
      },
    ],
  },
]

/**
 * @param {string} slug
 * @returns {GeotechnicalServicePage | undefined}
 */
export function getServiceBySlug(slug) {
  return geotechnicalServicePages.find((p) => p.slug === slug)
}
