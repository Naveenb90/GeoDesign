/**
 * Commercial service pages — "what a customer buys".
 *
 * WHY A SEPARATE FILE FROM `servicesCatalog.js`
 * The site models services by *engineering discipline* (5 pages, 41 technical
 * subsections). The requirement models them by *commercial offering* (8 services,
 * each a landing page). Both taxonomies are valid and they overlap heavily.
 *
 * Keeping them in separate files gives a clean two-tier model:
 *   Tier 1 (this file) — commercial pages: what customers search for
 *   Tier 2 (servicesCatalog.js) — technical pages: the depth that proves competence
 * Each tier links to the other, so they support rather than cannibalise each other.
 *
 * COPY PROVENANCE — read before editing
 *  - soil-testing, bridge-load-test, electrical-resistivity-test: adapted from the
 *    supplied requirement documents. Brand normalised "Geo Design" → "GeoDesign".
 *    Keyword repetition reduced from 10–14 to 3–4 occurrences per page.
 *  - pile-foundation: DELIBERATELY REWRITTEN. The supplied copy described pile
 *    *installation and construction* ("execution of bore piles… using modern
 *    equipment"). Naveen confirmed GeoDesign provides foundation DESIGN AND
 *    SUPERVISION, not construction. Do not reinstate the original wording.
 *  - plate-load-test, pile-load-test, topographical-survey: DRAFTED by Claude from
 *    the existing technical catalog, as no copy was supplied. ⚠️ NEEDS REVIEW.
 *
 * CITY STRATEGY
 * Copy is city-neutral. Location relevance comes from the `areas` block, which
 * renders from `serviceAreas.js`. This protects Coimbatore (head office) rankings
 * while still capturing local intent, and leaves room for city-variant pages later.
 *
 * @typedef {{ title: string, description: string }} DetailItem
 * @typedef {{ question: string, answer: string }} Faq
 */

/** @type {import('./commercialServices.js').CommercialService[]} */
export const commercialServices = [
  // ───────────────────────────────────────────────────────────── soil testing
  {
    slug: 'soil-testing',
    tier: 'commercial',
    title: 'Soil Testing for Construction',
    navLabel: 'Soil Testing',
    icon: '🧭',
    iconKey: 'drill',
    reviewStatus: 'adapted-from-requirement',
    ctaHeading: 'Planning a build? Start with the ground.',
    shortDescription:
      'Borehole investigation, sampling, and laboratory analysis that establish safe bearing capacity and foundation requirements before you build.',
    metaTitle: 'Soil Testing for Construction | Borehole Investigation & SBC',
    metaDescription:
      'GeoDesign provides soil testing for construction — borehole drilling, SPT, soil bearing capacity, and IS Code-compliant geotechnical reports across Tamil Nadu.',
    keywords:
      'soil testing for construction, soil test before construction, soil bearing capacity, SBC test, borehole drilling, geotechnical investigation',
    intro: [
      'Building a strong and durable structure starts with understanding the ground beneath it. GeoDesign provides soil testing for construction that helps homeowners, builders, architects, engineers, and developers make informed foundation decisions. Our geotechnical investigations evaluate soil properties, determine Safe Bearing Capacity (SBC), and provide clear recommendations for safe, cost-effective construction.',
      'Whether you are building a house, apartment, commercial building, or industrial facility, we deliver reliable results using calibrated equipment, our own soil mechanics laboratories, and experienced geotechnical engineers — so your project begins on a solid foundation.',
    ],
    whyImportant: {
      heading: 'Why soil testing matters before you build',
      body: 'Ground conditions vary sharply over short distances. Soft clay, loose sand, filled ground, shallow rock, and high groundwater each change how a foundation must be designed. Testing establishes these conditions as measured data rather than assumption, which is what allows a structural engineer to size foundations with confidence.',
      listHeading: 'Testing is strongly recommended for:',
      items: [
        'Individual houses, villas, and gated developments',
        'Apartments and multi-storey residential buildings',
        'Commercial, institutional, and hospital buildings',
        'Industrial facilities, factories, and warehouses',
        'Roads, bridges, and public infrastructure',
        'Sites with filled ground, marine clay, or a high water table',
      ],
      closing:
        'Identifying these conditions early is materially cheaper than discovering them after foundations are cast.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign for soil testing',
      body: 'We conduct detailed investigations — borehole drilling, soil sampling, laboratory testing, and geotechnical analysis — to deliver accurate data for foundation planning and structural design. All investigations follow the relevant Indian Standards (IS Codes).',
      items: [
        'Over 5,000 completed investigations across Tamil Nadu and South India',
        'Two owned soil mechanics laboratories, in Coimbatore and Chennai',
        'A team of 5 geotechnical and 20 civil engineers',
        'DTCP and CMDA registered engineers',
        'IS Code-compliant reporting, including bore logs and SBC',
        'Clear foundation recommendations, not just raw test data',
      ],
      closing:
        'Reports are written to be used — by the structural engineer designing your foundation, and by the authority reviewing it.',
    },
    ourServices: {
      heading: 'What a soil investigation includes',
      body: 'Every investigation is scoped to the structure, the loads it will carry, and the site conditions. A typical scope includes:',
      items: [
        {
          title: 'Site investigation & borehole drilling',
          description:
            'Soil exploration and borehole drilling to the depth required by the structure, with continuous logging of the strata encountered.',
        },
        {
          title: 'Soil sampling',
          description:
            'Collection of disturbed samples for classification and undisturbed samples for strength and settlement behaviour.',
        },
        {
          title: 'Standard Penetration Test (SPT)',
          description:
            'In-situ measurement of soil density and strength at regular depth intervals, the primary input to bearing capacity calculations.',
        },
        {
          title: 'Safe Bearing Capacity assessment',
          description:
            'Determination of the pressure the soil can carry safely without shear failure or excessive settlement.',
        },
        {
          title: 'Laboratory analysis',
          description:
            'Moisture content, grain size, Atterberg limits, shear strength, consolidation, and compaction characteristics as required.',
        },
        {
          title: 'Groundwater assessment',
          description:
            'Observation of water table depth and its implications for excavation, dewatering, and long-term foundation performance.',
        },
        {
          title: 'Geotechnical report',
          description:
            'Bore logs, soil profile, laboratory results, SBC, groundwater observations, and foundation recommendations in a single document.',
        },
      ],
    },
    process: {
      heading: 'How the investigation runs',
      body: 'A structured sequence from first call to final report.',
      steps: [
        {
          title: 'Site inspection',
          description: 'We assess access, ground conditions, and the scope your structure requires.',
        },
        {
          title: 'Investigation plan',
          description:
            'Borehole locations, depths, and test schedule are set against the structure and its loads.',
        },
        {
          title: 'Field work',
          description: 'Drilling, in-situ testing, and sampling, with continuous logging on site.',
        },
        {
          title: 'Laboratory testing',
          description: 'Samples are analysed at our own laboratory in Coimbatore or Chennai.',
        },
        {
          title: 'Analysis & recommendations',
          description:
            'Results are interpreted into bearing capacity and a recommended foundation approach.',
        },
        {
          title: 'Report & consultation',
          description:
            'You receive the full report, and our engineers are available to discuss it with your design team.',
        },
      ],
    },
    industries: {
      heading: 'Projects we support',
      body: 'Our investigations support a wide range of construction across the region.',
      items: [
        {
          title: 'Residential',
          description: 'Houses, villas, apartments, and gated communities.',
        },
        {
          title: 'Commercial & institutional',
          description: 'Offices, schools, colleges, hospitals, hotels, and retail developments.',
        },
        {
          title: 'Industrial',
          description: 'Factories, warehouses, manufacturing units, and logistics facilities.',
        },
        {
          title: 'Infrastructure',
          description: 'Roads, bridges, flyovers, railways, and government developments.',
        },
        {
          title: 'Real estate & energy',
          description: 'Layouts, township developments, solar plants, and utility infrastructure.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Investigation work is scheduled from whichever of our two laboratories is closer to your site, which keeps mobilisation time and sample transit short. In and around Chennai we regularly work across:',
    },
    faqs: [
      {
        question: 'Is soil testing mandatory before construction?',
        answer:
          'It is not universally mandated for small structures, but it is strongly recommended for any building project and is required by many approving authorities for larger developments. It establishes soil strength, bearing capacity, and the appropriate foundation type for safe, durable construction.',
      },
      {
        question: 'How long does soil testing take?',
        answer:
          'Most residential investigations are completed within one to three days of field work, depending on site conditions, drilling depth, and the number of boreholes. Laboratory analysis and report preparation follow.',
      },
      {
        question: 'What is Safe Bearing Capacity (SBC)?',
        answer:
          'Safe Bearing Capacity is the maximum pressure the ground can support without shear failure or excessive settlement. It is derived by applying a factor of safety to the ultimate bearing capacity, and it is the figure your structural engineer designs the foundation against.',
      },
      {
        question: 'Is soil testing needed for an individual house?',
        answer:
          'Yes, we recommend it. Individual houses are frequently built on filled or variable ground, and testing identifies the appropriate foundation type, improves structural safety, and reduces the risk of future settlement problems.',
      },
      {
        question: 'What does the investigation report include?',
        answer:
          'Bore logs, soil profile, laboratory test results, Safe Bearing Capacity, groundwater observations, and foundation recommendations — presented so your structural engineer can design directly from it.',
      },
      {
        question: 'Which standards do you follow?',
        answer:
          'Investigations are carried out in accordance with the applicable Indian Standards (IS Codes) and established geotechnical engineering practice.',
      },
    ],
    technicalDeepDive: {
      slug: 'drilling-sampling',
      label: 'Drilling & Sampling',
      note: 'For the full methodology behind each field test — SPT, auger boring, core drilling, CPT, DCPT, and trial pits — see our technical reference.',
    },
    related: ['plate-load-test', 'pile-foundation', 'laboratory-tests'],
  },

  // ────────────────────────────────────────────────────────── pile foundation
  {
    slug: 'pile-foundation',
    tier: 'commercial',
    title: 'Pile Foundation & Foundation Design',
    navLabel: 'Pile Foundation & Design',
    icon: '🏛️',
    iconKey: 'pile',
    reviewStatus: 'rewritten-scope-corrected',
    ctaHeading: 'Get an independent view on your foundation',
    shortDescription:
      'Foundation design and construction supervision — from soil investigation through pile specification, load test verification, and quality assurance.',
    metaTitle: 'Pile Foundation Design & Supervision | Foundation Engineering',
    metaDescription:
      'GeoDesign provides pile foundation design and construction supervision — soil investigation, pile specification, load test verification, and IS Code-compliant documentation.',
    keywords:
      'pile foundation design, foundation design, deep foundation design, pile design consultant, foundation engineering, construction supervision',
    intro: [
      'Every successful project begins with a properly engineered foundation. GeoDesign provides pile foundation design and foundation engineering for residential, commercial, industrial, and infrastructure projects. Our geotechnical and structural engineers design safe, economical, and durable foundation systems based on detailed soil investigation, structural loads, and site conditions.',
      'We work from shallow footing design for individual houses through to deep foundation systems for high-rise buildings and industrial facilities — and we supervise construction to confirm that what gets built matches what was designed.',
    ],
    scopeNote:
      'GeoDesign provides foundation design, specification, and construction supervision. We are not a piling contractor — we do not install piles. Where installation is required we can review contractor methodology and supervise execution on your behalf, which keeps design intent and site quality independently verified.',
    whyImportant: {
      heading: 'When a deep foundation is required',
      body: 'Soft clay, loose sand, reclaimed land, and high groundwater frequently make shallow foundations unsuitable. A properly designed pile foundation transfers structural loads through weak strata to competent soil or rock, improving stability and controlling settlement over the life of the structure.',
      listHeading: 'Deep foundations are commonly required for:',
      items: [
        'Buildings on soft, filled, or reclaimed ground',
        'High-rise and heavily loaded structures',
        'Commercial complexes and office buildings',
        'Industrial facilities and heavy machinery foundations',
        'Bridges, flyovers, and infrastructure works',
        'Coastal developments with high water tables',
      ],
      closing:
        'The decision between shallow and deep foundations should follow from investigation data, not from assumption — the cost difference is substantial in both directions.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign for foundation design',
      body: 'Our engineers analyse soil conditions, structural loads, groundwater, and project constraints before recommending a foundation system. Because we run our own investigation and laboratory work, the design is built on data we can stand behind.',
      items: [
        'Investigation, laboratory analysis, and design under one roof',
        'Foundation systems selected on measured data, not rules of thumb',
        'Independent of any piling contractor — no conflict of interest',
        'Load test specification and verification',
        'Construction supervision and quality assurance',
        'IS Code-compliant design documentation',
      ],
      closing:
        'Because we do not install piles, our recommendation on whether you need them is genuinely independent.',
    },
    ourServices: {
      heading: 'Our foundation engineering services',
      body: 'We manage the engineering side of the foundation from investigation through to construction verification.',
      items: [
        {
          title: 'Site investigation & soil testing',
          description:
            'Geotechnical investigation to establish soil properties, groundwater conditions, and bearing characteristics at foundation depth.',
        },
        {
          title: 'Foundation design & engineering',
          description:
            'Shallow or deep foundation design based on structural analysis, soil parameters, and settlement criteria.',
        },
        {
          title: 'Pile specification',
          description:
            'Pile type, diameter, length, capacity, and layout specified against the investigation data and structural loads.',
        },
        {
          title: 'Load test specification & verification',
          description:
            'Specification of pile load tests, witnessing of testing, and interpretation of results against design assumptions.',
        },
        {
          title: 'Construction supervision',
          description:
            'On-site supervision during foundation works to confirm that installation matches the design intent.',
        },
        {
          title: 'Technical documentation',
          description:
            'Design calculations, drawings, method review, and reporting for approval and record.',
        },
      ],
    },
    types: {
      heading: 'Pile types we design for',
      body: 'The right system depends on soil profile, load, depth to competent strata, and site constraints. We specify from the full range:',
      items: [
        {
          title: 'Bored piles',
          description:
            'Suited to high-rise buildings, commercial complexes, and projects needing deep foundation support with controlled vibration.',
        },
        {
          title: 'Cast-in-situ piles',
          description:
            'Formed at the pile position, offering flexibility across variable ground conditions in residential and commercial work.',
        },
        {
          title: 'RCC piles',
          description:
            'Designed for heavy structural loads where durability and long-term stability are the governing criteria.',
        },
        {
          title: 'End bearing piles',
          description:
            'Transfer load directly to hard rock or dense strata — appropriate where competent ground is within reach.',
        },
        {
          title: 'Friction piles',
          description:
            'Distribute load through shaft friction with surrounding soil, used where competent strata lie at greater depth.',
        },
      ],
    },
    process: {
      heading: 'Our foundation design process',
      body: 'A systematic sequence that keeps design tied to measured ground conditions.',
      steps: [
        {
          title: 'Site inspection',
          description: 'Assessment of the site, structural requirements, and surrounding conditions.',
        },
        {
          title: 'Soil investigation',
          description:
            'Geotechnical investigation establishes soil strength, groundwater, and bearing capacity at depth.',
        },
        {
          title: 'Foundation design',
          description:
            'Engineering analysis produces a foundation system sized to the structure and the ground.',
        },
        {
          title: 'Specification & documentation',
          description: 'Design calculations, drawings, and specifications issued for construction.',
        },
        {
          title: 'Load test verification',
          description:
            'Pile load tests confirm capacity against design assumptions before superstructure work proceeds.',
        },
        {
          title: 'Supervision & sign-off',
          description:
            'Site supervision and final inspection confirm the foundation matches the approved design.',
        },
      ],
    },
    industries: {
      heading: 'Projects we support',
      body: 'Foundation engineering across sectors and structure types.',
      items: [
        { title: 'Residential', description: 'Individual homes, villas, and apartment buildings.' },
        {
          title: 'Commercial',
          description: 'Office complexes, retail developments, hotels, hospitals, and institutions.',
        },
        {
          title: 'Industrial',
          description: 'Manufacturing plants, warehouses, and heavy machinery foundations.',
        },
        {
          title: 'Infrastructure',
          description: 'Bridges, government developments, IT parks, and large-scale works.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Foundation design work is desk-based, but investigation and supervision are not — our engineers attend site throughout. Around Chennai we regularly work in:',
    },
    faqs: [
      {
        question: 'What is a pile foundation?',
        answer:
          'A pile foundation is a deep foundation system that transfers structural loads through weak surface soils to stronger soil or rock below. It is used to improve stability, control settlement, and support structures that shallow foundations cannot safely carry.',
      },
      {
        question: 'Does GeoDesign install piles?',
        answer:
          'No. We provide foundation design, specification, load test verification, and construction supervision. Installation is carried out by a piling contractor. Because we are independent of any contractor, our assessment of whether piles are needed — and of the quality of the installed work — carries no commercial conflict.',
      },
      {
        question: 'When is a pile foundation required?',
        answer:
          'Typically when soil has low bearing capacity, groundwater is high, fill is deep, or the structure imposes heavy loads. The determination should come from soil investigation data rather than assumption, since deep foundations are considerably more expensive than shallow ones.',
      },
      {
        question: 'How is the right foundation design selected?',
        answer:
          'It follows from soil conditions, structural loads, groundwater levels, settlement tolerance, and site constraints. We carry out soil testing and geotechnical analysis, then design the system that meets the requirements economically.',
      },
      {
        question: 'Do you provide soil testing before foundation design?',
        answer:
          'Yes, and we treat it as a prerequisite. Designing a foundation without investigation data means designing against assumptions. Our investigation and laboratory work feed directly into the design.',
      },
      {
        question: 'Do you supervise the piling contractor?',
        answer:
          'Yes, where that is part of the appointment. We review the proposed methodology, supervise installation, witness load tests, and report on whether the constructed foundation meets the design.',
      },
    ],
    technicalDeepDive: {
      slug: 'foundation-recommendations',
      label: 'Foundation Recommendations',
      note: 'For the engineering background on shallow foundations, ground improvement, and deep foundation selection, see our technical reference.',
    },
    related: ['pile-load-test', 'soil-testing', 'plate-load-test'],
  },

  // ───────────────────────────────────────────────────────── plate load test
  {
    slug: 'plate-load-test',
    tier: 'commercial',
    title: 'Plate Load Test',
    navLabel: 'Plate Load Test',
    icon: '⚖️',
    iconKey: 'plate',
    reviewStatus: 'drafted-needs-review',
    ctaHeading: 'Need bearing capacity confirmed on site?',
    shortDescription:
      'In-situ determination of bearing capacity and settlement behaviour by loading a plate at foundation level.',
    metaTitle: 'Plate Load Test | Bearing Capacity & Settlement Testing',
    metaDescription:
      'GeoDesign conducts plate load tests to determine in-situ bearing capacity, settlement behaviour, and modulus of subgrade reaction for foundation design.',
    keywords:
      'plate load test, bearing capacity test, settlement test, modulus of subgrade reaction, k value test, foundation testing',
    intro: [
      'The plate load test measures how ground actually behaves under load at foundation level. A rigid plate is loaded in increments at the proposed founding depth, and settlement is recorded at each stage — producing a direct, in-situ measurement of bearing capacity and settlement rather than a value inferred from other tests.',
      'GeoDesign conducts plate load tests for building foundations, industrial floors, pavements, and infrastructure works, with test arrangements and reporting that follow the relevant Indian Standards.',
    ],
    whyImportant: {
      heading: 'Why a plate load test is used',
      body: 'Borehole testing establishes soil properties at depth, but a plate load test measures the response of the ground at the exact level a foundation will bear on. Where settlement is the governing design criterion, or where a design value needs direct confirmation, it provides evidence that calculation alone cannot.',
      listHeading: 'Commonly specified for:',
      items: [
        'Confirming design bearing capacity before foundation work',
        'Industrial floor slabs and heavily loaded ground bearing slabs',
        'Pavement and road subgrade assessment',
        'Determining the modulus of subgrade reaction (k value)',
        'Verifying ground improvement or compaction works',
        'Resolving disputes over ground conditions',
      ],
      closing:
        'It is often specified alongside a borehole investigation rather than instead of one — the two answer different questions.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign',
      body: 'The method is straightforward in principle and easy to get wrong in practice. Reaction loading, plate seating, increment control, and settlement measurement all affect the result.',
      items: [
        'Calibrated loading and settlement measurement equipment',
        'Test arrangements set up to the applicable IS Code',
        'Experienced engineers supervising on site',
        'Load–settlement curves with clear interpretation',
        'Results tied back to your foundation design',
        'Reporting suitable for submission and approval',
      ],
      closing:
        'You receive an interpreted result, not just a table of readings.',
    },
    ourServices: {
      heading: 'What the test covers',
      body: 'A complete plate load test engagement includes:',
      items: [
        {
          title: 'Test pit preparation',
          description:
            'Excavation to the proposed founding level with the bearing surface prepared and protected.',
        },
        {
          title: 'Reaction arrangement',
          description:
            'Kentledge or reaction frame set up to deliver the required test load safely and stably.',
        },
        {
          title: 'Incremental loading',
          description:
            'Load applied in defined increments, each held until the settlement rate falls within the specified limit.',
        },
        {
          title: 'Settlement measurement',
          description:
            'Settlement recorded by dial gauges at each increment, referenced to an independent datum.',
        },
        {
          title: 'Load–settlement analysis',
          description:
            'Construction of the load–settlement curve and determination of safe bearing capacity at the permissible settlement.',
        },
        {
          title: 'Modulus of subgrade reaction',
          description:
            'Determination of the k value where required for slab or pavement design.',
        },
      ],
    },
    process: {
      heading: 'How the test runs',
      body: 'From site preparation through to interpreted result.',
      steps: [
        {
          title: 'Test planning',
          description: 'Plate size, test depth, load increments, and locations agreed against the design.',
        },
        {
          title: 'Excavation & setup',
          description: 'Test pit excavated to founding level and the reaction arrangement assembled.',
        },
        {
          title: 'Seating & instrumentation',
          description: 'Plate bedded onto the prepared surface and dial gauges set to an independent datum.',
        },
        {
          title: 'Incremental loading',
          description: 'Load applied and held in stages, with settlement recorded throughout.',
        },
        {
          title: 'Analysis',
          description: 'Load–settlement curve constructed and bearing capacity determined.',
        },
        {
          title: 'Report',
          description: 'Test data, curve, interpretation, and design recommendations issued.',
        },
      ],
    },
    industries: {
      heading: 'Where it is applied',
      body: 'The test supports a wide range of ground-bearing design.',
      items: [
        { title: 'Buildings', description: 'Verification of design bearing capacity at footing level.' },
        {
          title: 'Industrial floors',
          description: 'Heavily loaded slabs, racking systems, and machinery bases.',
        },
        {
          title: 'Roads & pavements',
          description: 'Subgrade and sub-base assessment for pavement design.',
        },
        {
          title: 'Ground improvement',
          description: 'Verification that treated or compacted ground meets specification.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Testing needs reaction load on site, so access and working space matter to scheduling. We carry out testing across:',
    },
    faqs: [
      {
        question: 'What does the test measure?',
        answer:
          'It measures the in-situ bearing capacity and settlement behaviour of soil at foundation level, by loading a rigid plate in increments and recording settlement at each stage. The modulus of subgrade reaction (k value) is derived from the same data.',
      },
      {
        question: 'How is it different from a Standard Penetration Test?',
        answer:
          'An SPT measures soil resistance at intervals down a borehole and characterises the profile with depth. This test measures the actual load–settlement response at one level. They answer different questions and are frequently used together.',
      },
      {
        question: 'How long does the test take?',
        answer:
          'Setup and testing at one location typically takes a day, though this depends on the load required, the reaction arrangement, and how quickly settlement stabilises at each increment.',
      },
      {
        question: 'What is the k value?',
        answer:
          'The modulus of subgrade reaction, k, relates applied pressure to the resulting settlement. It is a required input for designing ground-bearing slabs and rigid pavements, and is derived directly from the test results.',
      },
      {
        question: 'Does the test depth matter?',
        answer:
          'Considerably. The test must be carried out at the proposed founding level, since soil properties change with depth. Testing at the wrong level produces a result that does not represent what the foundation will bear on.',
      },
    ],
    technicalDeepDive: {
      slug: 'specialised-field-testing',
      label: 'Specialised Field Testing',
      note: 'This test sits alongside vane shear, permeability, resistivity, and density testing in our field testing reference.',
    },
    related: ['soil-testing', 'pile-load-test', 'pile-foundation'],
  },

  // ────────────────────────────────────────────────────────── pile load test
  {
    slug: 'pile-load-test',
    tier: 'commercial',
    title: 'Pile Load Test & Pull Out Test',
    navLabel: 'Pile Load & Pull Out Test',
    icon: '🪝',
    iconKey: 'uplift',
    reviewStatus: 'drafted-needs-review',
    ctaHeading: 'Verify your piles before you build on them',
    shortDescription:
      'Verification of pile capacity under compression, tension, and lateral load — confirming that installed piles perform as designed.',
    metaTitle: 'Pile Load Test & Pull Out Test | Pile Capacity Verification',
    metaDescription:
      'GeoDesign conducts pile load tests and pull out tests — initial and routine testing under compressive, tensile, and lateral load, with IS Code-compliant reporting.',
    keywords:
      'pile load test, pull out test, pile capacity test, initial pile load test, routine pile load test, lateral load test, pile integrity',
    intro: [
      'A pile foundation is designed against calculated capacity. A pile load test measures what the installed pile actually carries. GeoDesign conducts initial and routine pile load tests under compressive, tensile, and lateral loading to verify that constructed piles meet their design capacity before the superstructure proceeds.',
      'Pull out testing measures tensile capacity, which governs where uplift is a design case — transmission towers, tall lightweight structures, basement slabs subject to buoyancy, and anchoring applications.',
    ],
    whyImportant: {
      heading: 'Why pile testing is specified',
      body: 'Pile capacity depends on installation quality as much as on design. Workmanship, ground variation, and construction method all affect the result, and none of them are visible once the pile is in the ground. Load testing is the only direct verification that the installed foundation carries what the design assumed.',
      listHeading: 'Testing is typically required for:',
      items: [
        'Verifying design capacity before superstructure construction',
        'Initial testing to establish or confirm design parameters',
        'Routine testing as construction quality assurance',
        'Uplift verification for towers, masts, and anchored structures',
        'Lateral capacity for piles carrying horizontal load',
        'Investigation where pile performance is in question',
      ],
      closing:
        'Most project specifications and approving authorities require a defined proportion of piles to be tested.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign',
      body: 'Pile testing generates large loads and demands careful control. Reaction arrangement, load increments, hold periods, and displacement measurement all have to be right for the result to mean anything.',
      items: [
        'Initial and routine testing under compression, tension, and lateral load',
        'Calibrated jacks, load cells, and displacement instrumentation',
        'Reaction arrangements designed for the test load',
        'Testing and interpretation to the applicable IS Code',
        'Independent of the piling contractor',
        'Reporting suitable for approval and record',
      ],
      closing:
        'Because we do not install piles, our verification of installed pile capacity is independent of the party that built them.',
    },
    ourServices: {
      heading: 'Tests we carry out',
      body: 'The appropriate test depends on the load case being verified.',
      items: [
        {
          title: 'Initial pile load test',
          description:
            'Testing to a multiple of design load on a sacrificial or test pile, to establish or confirm safe capacity before production piling.',
        },
        {
          title: 'Routine pile load test',
          description:
            'Testing of working piles to a defined proportion above design load, as construction quality assurance.',
        },
        {
          title: 'Pull out (tension) test',
          description:
            'Measurement of tensile capacity where uplift governs, using a reaction arrangement that loads the pile in tension.',
        },
        {
          title: 'Lateral load test',
          description:
            'Application of horizontal load to measure deflection and lateral capacity, typically between paired piles.',
        },
        {
          title: 'Instrumentation & monitoring',
          description:
            'Load cells, dial gauges, and displacement transducers referenced to an independent datum.',
        },
        {
          title: 'Analysis & reporting',
          description:
            'Load–settlement and load–displacement curves with interpretation against design capacity and specification criteria.',
        },
      ],
    },
    process: {
      heading: 'How pile testing runs',
      body: 'Testing must wait for the pile to gain strength, so scheduling matters.',
      steps: [
        {
          title: 'Test planning',
          description:
            'Test type, load, pile selection, and acceptance criteria agreed against the specification.',
        },
        {
          title: 'Pile preparation',
          description:
            'Pile head trimmed and prepared, with adequate curing time allowed before loading.',
        },
        {
          title: 'Reaction setup',
          description:
            'Kentledge, anchor piles, or a reaction frame assembled to deliver and resist the test load.',
        },
        {
          title: 'Instrumentation',
          description:
            'Jacks, load cells, and displacement gauges installed and referenced to an independent datum.',
        },
        {
          title: 'Loading cycles',
          description:
            'Load applied in increments with specified hold periods, and displacement recorded throughout.',
        },
        {
          title: 'Analysis & report',
          description:
            'Curves constructed, capacity assessed against acceptance criteria, and results reported.',
        },
      ],
    },
    industries: {
      heading: 'Where it is applied',
      body: 'Pile testing is specified across building and infrastructure work.',
      items: [
        {
          title: 'High-rise buildings',
          description: 'Verification of deep foundation capacity before superstructure work.',
        },
        {
          title: 'Bridges & infrastructure',
          description: 'Pier and abutment foundations carrying heavy concentrated loads.',
        },
        {
          title: 'Industrial facilities',
          description: 'Machinery foundations, silos, and heavily loaded structures.',
        },
        {
          title: 'Towers & masts',
          description: 'Uplift verification where wind load produces tension in the foundation.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Pile testing requires substantial reaction load and site working space, which we plan around your construction programme. We test across:',
    },
    faqs: [
      {
        question: 'What is the difference between initial and routine pile load tests?',
        answer:
          'An initial test is carried out on a test pile, loaded to a high multiple of design load — often to failure — to establish or confirm safe capacity before production piling begins. A routine test is carried out on working piles at a lower multiple, as quality assurance during construction.',
      },
      {
        question: 'What is a pull out test?',
        answer:
          'A pull out test loads the pile in tension rather than compression, measuring its uplift capacity. It is specified where the design case includes uplift — transmission towers, masts, anchored structures, and basement slabs subject to buoyancy.',
      },
      {
        question: 'How many piles need to be tested?',
        answer:
          'This is set by the project specification and the applicable code, and is usually expressed as a proportion of the total pile count, with a minimum number per project. We can advise on the requirement for your specification.',
      },
      {
        question: 'How long after installation can a pile be tested?',
        answer:
          'The pile must gain adequate strength first, and in cohesive soils the ground around it needs time to recover from installation. The waiting period depends on pile type and ground conditions, and is set by the specification.',
      },
      {
        question: 'What happens if a pile fails the test?',
        answer:
          'The result is reported against the acceptance criteria, and the cause is investigated — it may indicate an installation defect, a ground condition not anticipated in design, or a test setup issue. Remedial measures are a matter for the design team and contractor; our role is to establish what the pile actually carries.',
      },
    ],
    technicalDeepDive: {
      slug: 'foundation-recommendations',
      label: 'Foundation Recommendations',
      note: 'For background on deep foundation design and selection, see our technical reference.',
    },
    related: ['pile-foundation', 'plate-load-test', 'bridge-load-test'],
  },

  // ──────────────────────────────────────────────────────── bridge load test
  {
    slug: 'bridge-load-test',
    tier: 'commercial',
    title: 'Bridge Load Test',
    navLabel: 'Bridge Load Test',
    icon: '🌉',
    iconKey: 'bridge',
    reviewStatus: 'adapted-from-requirement',
    ctaHeading: 'Assessing a bridge? Talk to our engineers.',
    shortDescription:
      'Static and dynamic load testing of bridges, flyovers, and culverts — verifying structural capacity, deflection, and strain under controlled load.',
    metaTitle: 'Bridge Load Test | Static, Dynamic & Proof Load Testing',
    metaDescription:
      'GeoDesign provides bridge load testing — static and dynamic testing, deflection monitoring, and strain measurement for road bridges, railway bridges, and flyovers.',
    keywords:
      'bridge load test, static load test, dynamic load test, proof load test, bridge deflection monitoring, structural load testing',
    intro: [
      'Every bridge must be shown to safely carry the loads it was designed for. GeoDesign provides bridge load testing for road bridges, railway bridges, flyovers, culverts, and other infrastructure. Our structural and geotechnical engineers assess the strength, stability, and performance of bridge structures under controlled loading.',
      'From newly constructed bridges awaiting commissioning to existing structures requiring safety assessment, we deliver load testing that verifies structural integrity, supports compliance with engineering standards, and informs maintenance planning.',
    ],
    whyImportant: {
      heading: 'Why bridge load testing matters',
      body: 'Load testing verifies whether a bridge can safely support its intended design loads. With rising traffic volumes and ageing infrastructure, testing identifies load-carrying capacity and structural weaknesses before they become safety concerns — and provides an evidence base for decisions about rehabilitation or continued service.',
      listHeading: 'Testing is commonly required for:',
      items: [
        'Newly constructed bridges before commissioning',
        'Existing bridges requiring structural assessment',
        'Road and highway bridges',
        'Railway bridges and rail overbridges',
        'Flyovers, overpasses, and grade separators',
        'Culverts and pedestrian bridges',
        'Structures being rehabilitated or strengthened',
      ],
      closing:
        'Testing before and after strengthening works quantifies what the intervention achieved.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign',
      body: 'Our engineers assess bridge specifications, structural design, loading requirements, and site conditions before planning any test. Every load test follows the relevant Indian Standards and engineering guidelines.',
      items: [
        'Experienced structural and geotechnical engineering team',
        'Static, dynamic, and proof load testing capability',
        'Deflection and strain instrumentation',
        'IS Code-compliant testing procedures',
        'Comprehensive reports with engineering interpretation',
        'Experience across government and private infrastructure',
      ],
      closing:
        'Test planning accounts for traffic management and access constraints, which on live infrastructure often govern how testing can be carried out at all.',
    },
    ourServices: {
      heading: 'Our bridge testing services',
      body: 'We manage every stage from initial inspection through to structural performance evaluation, with test plans developed around bridge type, structural form, and loading requirements.',
      items: [
        {
          title: 'Static load testing',
          description:
            'Evaluation of bridge response under controlled stationary loads held for defined periods.',
        },
        {
          title: 'Dynamic load testing',
          description:
            'Assessment of structural behaviour under moving vehicle loads, including impact effects.',
        },
        {
          title: 'Proof load testing',
          description:
            'Verification that the structure safely carries a specified proof load without distress.',
        },
        {
          title: 'Deflection monitoring',
          description:
            'Measurement of vertical deflection at defined points throughout load application and removal.',
        },
        {
          title: 'Strain & stress monitoring',
          description:
            'Recording of strain in structural members to assess stress distribution under load.',
        },
        {
          title: 'Engineering reports',
          description:
            'Testing methodology, load arrangements, instrument readings, analysis, and recommendations.',
        },
      ],
    },
    types: {
      heading: 'Types of bridge load test',
      body: 'The appropriate test depends on structure type, the question being answered, and what access allows.',
      items: [
        {
          title: 'Static load test',
          description: 'Bridge performance under controlled stationary loads.',
        },
        {
          title: 'Dynamic load test',
          description: 'Structural behaviour under moving traffic and live loads.',
        },
        {
          title: 'Proof load test',
          description: "Verification of the structure’s ability to safely carry its design load.",
        },
        {
          title: 'Deflection measurement',
          description: 'Structural deflection recorded under defined loading conditions.',
        },
        {
          title: 'Strain monitoring',
          description: 'Stress and strain in structural members during load application.',
        },
      ],
    },
    process: {
      heading: 'Our bridge testing process',
      body: 'Load testing on live infrastructure requires careful sequencing and coordination.',
      steps: [
        {
          title: 'Site inspection',
          description: 'Assessment of bridge condition, structural form, and access constraints.',
        },
        {
          title: 'Test planning',
          description:
            'Loading methodology, instrumentation layout, and testing procedure prepared and agreed.',
        },
        {
          title: 'Instrument installation',
          description: 'Deflection and strain instrumentation installed at defined locations.',
        },
        {
          title: 'Load application',
          description: 'Controlled loading applied in stages with continuous monitoring.',
        },
        {
          title: 'Data analysis',
          description:
            'Structural response evaluated against predicted behaviour and load-carrying capacity assessed.',
        },
        {
          title: 'Final report',
          description: 'Results, observations, and engineering recommendations issued.',
        },
      ],
    },
    industries: {
      heading: 'Structures we test',
      body: 'Load testing across transport and public infrastructure.',
      items: [
        {
          title: 'Road bridges',
          description: 'National highways, state highways, and municipal road bridges.',
        },
        {
          title: 'Railway bridges',
          description: 'Rail overbridges, crossings, and rail transport infrastructure.',
        },
        {
          title: 'Flyovers & overpasses',
          description: 'Urban flyovers, grade separators, and elevated corridors.',
        },
        {
          title: 'Pedestrian bridges',
          description: 'Foot overbridges and pedestrian crossings.',
        },
        {
          title: 'Government infrastructure',
          description: 'Public works, transport departments, and civic infrastructure.',
        },
        {
          title: 'Rehabilitation projects',
          description: 'Structural assessment before and after repair or strengthening.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Bridge testing is coordinated with the asset owner and, on live routes, with traffic management. We undertake testing across:',
    },
    faqs: [
      {
        question: 'What is a bridge load test?',
        answer:
          "A bridge load test is a structural assessment that evaluates a bridge’s load-carrying capacity, stability, and performance under controlled loading. It verifies whether the structure can safely withstand its design loads, either before commissioning or as part of an assessment of an existing bridge.",
      },
      {
        question: 'When is a bridge load test required?',
        answer:
          'Commonly for newly constructed bridges before commissioning, existing bridges undergoing structural assessment, and structures being rehabilitated or strengthened. It is also used where a bridge is proposed for a load rating above its original design.',
      },
      {
        question: 'What types of bridges can be tested?',
        answer:
          'Road bridges, railway bridges, flyovers, pedestrian bridges, culverts, overpasses, and other transportation structures. The testing approach is adapted to the structural form.',
      },
      {
        question: 'How long does a bridge load test take?',
        answer:
          'Duration depends on bridge size, testing method, instrumentation extent, and access. Many tests can be completed within a day of field work, though larger or more complex structures require longer, and analysis and reporting follow.',
      },
      {
        question: 'Does the bridge need to be closed during testing?',
        answer:
          'Static testing generally requires the tested span to be free of other traffic, so some closure or lane management is usually needed. Dynamic testing requires controlled vehicle movement. Requirements are agreed with the asset owner during test planning.',
      },
      {
        question: 'What does the test report include?',
        answer:
          'Testing methodology, load arrangements, instrument readings, deflection measurements, strain data, structural analysis, observations, and engineering recommendations.',
      },
    ],
    technicalDeepDive: {
      slug: 'tests-on-rock',
      label: 'Tests On Rock',
      note: 'Where bridge foundations bear on rock, our rock testing reference covers the strength and quality parameters involved.',
    },
    related: ['pile-load-test', 'plate-load-test', 'soil-testing'],
  },

  // ────────────────────────────────────────────── electrical resistivity test
  {
    slug: 'electrical-resistivity-test',
    tier: 'commercial',
    title: 'Electrical Resistivity Test',
    navLabel: 'Electrical Resistivity Test',
    icon: '⚡',
    iconKey: 'resistivity',
    reviewStatus: 'adapted-from-requirement',
    ctaHeading: 'Need a resistivity survey for your site?',
    shortDescription:
      'Non-destructive geophysical survey mapping subsurface soil, rock, and groundwater — for earthing design, borewell siting, and site investigation.',
    metaTitle: 'Electrical Resistivity Test | Soil Resistivity & Geophysical Survey',
    metaDescription:
      'GeoDesign provides electrical resistivity testing — VES, resistivity tomography, groundwater exploration, and earthing design surveys across Tamil Nadu.',
    keywords:
      'electrical resistivity test, soil resistivity test, vertical electrical sounding, VES, resistivity tomography, groundwater survey, earthing design',
    intro: [
      'An electrical resistivity test measures how strongly the ground resists the flow of electric current. It is a non-destructive geophysical method that maps subsurface soil layers, rock depth, groundwater zones, and fractures — without extensive excavation or drilling.',
      'GeoDesign carries out resistivity surveys for residential, commercial, industrial, and infrastructure projects. Results support earthing and grounding design, borewell siting, foundation planning, and geological investigation.',
    ],
    whyImportant: {
      heading: 'Why resistivity testing is used',
      body: 'Resistivity surveying covers ground quickly and non-destructively, which makes it valuable both as a standalone investigation and as a way to target where boreholes should go. It is also the standard basis for electrical earthing design, where soil resistivity directly determines the earthing arrangement required.',
      listHeading: 'Common applications:',
      items: [
        'Earthing and grounding system design',
        'Groundwater exploration and borewell siting',
        'Mapping rock depth and soil stratification',
        'Locating fractures, cavities, and weak zones',
        'Preliminary investigation over large sites',
        'Targeting borehole locations before drilling',
      ],
      closing:
        'For earthing design in particular, resistivity is not optional — the design cannot be completed without it.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign',
      body: 'Resistivity data is only as good as its interpretation. Field measurement is straightforward; converting apparent resistivity into a defensible subsurface model requires experience with local geology.',
      items: [
        'Experienced geotechnical and geophysical engineers',
        'Vertical electrical sounding and resistivity tomography',
        'Interpretation using specialist inversion software',
        'Familiarity with regional soil and rock profiles',
        'Results linked to your engineering decision, not just plotted',
        'Reporting suitable for design and approval',
      ],
      closing:
        'Where results are ambiguous we say so, and recommend confirmatory drilling rather than overstating what a geophysical survey can resolve.',
    },
    ourServices: {
      heading: 'Our resistivity survey services',
      body: 'Survey type and layout are selected against the depth of interest and the question being answered.',
      items: [
        {
          title: 'Vertical Electrical Sounding (VES)',
          description:
            'Layered resistivity profile at a point, identifying soil layers, rock depth, and groundwater zones with depth.',
        },
        {
          title: 'Electrical Resistivity Tomography (ERT)',
          description:
            'Two-dimensional subsurface imaging along a survey line, showing lateral as well as vertical variation.',
        },
        {
          title: 'Soil resistivity for earthing design',
          description:
            'Measurement to the arrangement required for grounding system design, reported in the form the electrical designer needs.',
        },
        {
          title: 'Groundwater exploration',
          description:
            'Identification of potential water-bearing zones to guide borewell siting and depth.',
        },
        {
          title: 'Subsurface geological mapping',
          description:
            'Mapping of soil and rock formations, fractures, and cavities across a site.',
        },
        {
          title: 'Interpretation & recommendations',
          description:
            'Inversion, interpretation, and engineering recommendations based on the resulting model.',
        },
      ],
    },
    process: {
      heading: 'How the survey runs',
      body: 'Resistivity surveys are quick in the field; the value is in planning and interpretation.',
      steps: [
        {
          title: 'Site inspection',
          description: 'Assessment of site conditions, access, and survey objectives.',
        },
        {
          title: 'Survey planning',
          description: 'Array type, electrode spacing, and survey locations selected for the target depth.',
        },
        {
          title: 'Field measurement',
          description: 'Resistivity readings taken across the planned array using calibrated equipment.',
        },
        {
          title: 'Data processing',
          description: 'Apparent resistivity inverted into a subsurface model using specialist software.',
        },
        {
          title: 'Interpretation',
          description: 'The model is interpreted against local geology and the project question.',
        },
        {
          title: 'Report',
          description: 'Findings, sections, and engineering recommendations issued.',
        },
      ],
    },
    industries: {
      heading: 'Where it is applied',
      body: 'Resistivity surveying supports both construction and water supply work.',
      items: [
        {
          title: 'Buildings & developments',
          description: 'Residential, commercial, and institutional projects.',
        },
        {
          title: 'Industrial facilities',
          description: 'Earthing design for plants, substations, and warehouses.',
        },
        {
          title: 'Infrastructure',
          description: 'Roads, bridges, metro, and government infrastructure projects.',
        },
        {
          title: 'Water supply',
          description: 'Borewell siting and groundwater development.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Resistivity surveying needs a clear run of ground for the electrode array, which shapes where it can be deployed on constrained urban sites. We survey across:',
    },
    faqs: [
      {
        question: 'What is an electrical resistivity test?',
        answer:
          'It is a geophysical survey that measures the ground’s resistance to electric current in order to infer subsurface conditions — soil layers, rock depth, groundwater zones, and fractures. It is non-destructive and requires no drilling.',
      },
      {
        question: 'Why is it used before construction?',
        answer:
          'It maps subsurface conditions across a site quickly, which supports foundation planning and helps target where boreholes should be drilled. For electrical earthing design, soil resistivity is a required input.',
      },
      {
        question: 'Can it replace borehole investigation?',
        answer:
          'No. Resistivity gives good spatial coverage but infers conditions indirectly. Boreholes give direct sampling and measured strength at specific points. The two are complementary, and resistivity is often used to decide where boreholes should go.',
      },
      {
        question: 'Is it reliable for locating borewell points?',
        answer:
          'It is the standard method for identifying zones more likely to be water-bearing, and it substantially improves the odds compared with drilling blind. It indicates favourable conditions rather than guaranteeing yield.',
      },
      {
        question: 'How long does a survey take?',
        answer:
          'Most surveys are completed within a day of field work, depending on the area covered and the number of soundings, with data processing and reporting following.',
      },
      {
        question: 'What does the report include?',
        answer:
          'Survey layout, field data, interpreted resistivity sections, identified layers and their depths, groundwater observations where relevant, and engineering recommendations.',
      },
    ],
    technicalDeepDive: {
      slug: 'specialised-field-testing',
      label: 'Specialised Field Testing',
      note: 'Resistivity sits alongside vane shear, permeability, plate load, and chemical analysis in our field testing reference.',
    },
    related: ['soil-testing', 'topographical-survey', 'plate-load-test'],
  },

  // ─────────────────────────────────────────────────── topographical survey
  {
    slug: 'topographical-survey',
    tier: 'commercial',
    title: 'Topographical & Contour Survey',
    navLabel: 'Topographical Survey',
    icon: '🗺️',
    iconKey: 'contour',
    reviewStatus: 'drafted-needs-review',
    ctaHeading: 'Need a measured base survey?',
    shortDescription:
      'Measured survey of levels, contours, boundaries, and existing features — the base drawing every site layout and drainage design is built on.',
    metaTitle: 'Topographical & Contour Survey | Land Survey for Construction',
    metaDescription:
      'GeoDesign provides topographical and contour surveys — level and contour mapping, boundary and feature survey, and cut-and-fill volumes for construction projects.',
    keywords:
      'topographical survey, contour survey, land survey, level survey, total station survey, DGPS survey, cut and fill',
    intro: [
      'A topographical survey records what is actually on a site and at what level — ground levels, contours, boundaries, existing structures, trees, drains, and services. It becomes the base drawing that site layout, road levels, drainage design, and earthwork quantities are all developed from.',
      'GeoDesign carries out topographical and contour surveys using total station and DGPS equipment, delivering survey drawings in the formats your design team works in.',
    ],
    whyImportant: {
      heading: 'Why an accurate base survey matters',
      body: 'Layout and drainage decisions depend on levels. A survey that is inaccurate, out of date, or on an arbitrary datum propagates errors through every drawing built on it — and those errors typically surface during earthworks, when they are expensive to correct.',
      listHeading: 'A topographical survey is required for:',
      items: [
        'Site layout and master planning',
        'Road, drainage, and levelling design',
        'Cut-and-fill earthwork quantification',
        'Boundary and area verification',
        'Statutory approvals and layout submissions',
        'Establishing levels before and after earthworks',
      ],
      closing:
        'It is normally the first survey activity on a site, and it is often carried out alongside soil investigation.',
    },
    whyChooseUs: {
      heading: 'Why clients choose GeoDesign',
      body: 'We survey to a defined datum, record what is actually present rather than what is expected, and deliver drawings your design team can work in directly.',
      items: [
        'Total station and DGPS survey capability',
        'Surveys tied to a defined and recorded datum',
        'Contour intervals set to project requirements',
        'Deliverables in CAD formats, with level data',
        'Cut-and-fill volume computation',
        'Coordination with geotechnical investigation on the same site',
      ],
      closing:
        'Where we are also carrying out soil investigation, borehole positions and levels are recorded on the same survey control — so the two datasets align.',
    },
    ourServices: {
      heading: 'What the survey covers',
      body: 'Scope is set by what the design team needs, but typically includes:',
      items: [
        {
          title: 'Level & contour survey',
          description:
            'Spot levels across the site and contours generated at the required interval.',
        },
        {
          title: 'Boundary & feature survey',
          description:
            'Site boundaries, existing structures, compound walls, trees, and surface features located and recorded.',
        },
        {
          title: 'Existing services',
          description:
            'Visible drainage, manholes, poles, and utility features recorded where they can be identified on the surface.',
        },
        {
          title: 'Benchmark establishment',
          description:
            'Permanent survey control and benchmarks set on site for use through construction.',
        },
        {
          title: 'Cut & fill computation',
          description:
            'Earthwork volumes calculated between existing ground and a proposed formation level.',
        },
        {
          title: 'Survey drawings',
          description:
            'CAD drawings with levels, contours, and features, issued in the formats your design team requires.',
        },
      ],
    },
    process: {
      heading: 'How the survey runs',
      body: 'Field survey is quick; establishing correct control is what makes it usable.',
      steps: [
        {
          title: 'Requirement review',
          description:
            'Survey extent, contour interval, datum, and deliverable formats agreed with your design team.',
        },
        {
          title: 'Control establishment',
          description: 'Survey control and benchmarks set and referenced to the agreed datum.',
        },
        {
          title: 'Field survey',
          description:
            'Levels, boundaries, and features recorded by total station or DGPS across the site.',
        },
        {
          title: 'Data processing',
          description: 'Field data reduced, checked, and processed into a digital terrain model.',
        },
        {
          title: 'Drawing preparation',
          description: 'Contours generated and survey drawings prepared to the agreed format.',
        },
        {
          title: 'Issue & handover',
          description: 'Drawings, level data, and benchmark details issued for design use.',
        },
      ],
    },
    industries: {
      heading: 'Where it is applied',
      body: 'Base survey work across development and infrastructure.',
      items: [
        {
          title: 'Layouts & townships',
          description: 'Plot layouts, road levels, and drainage design for developments.',
        },
        {
          title: 'Buildings',
          description: 'Site levels and constraints for individual and multi-block projects.',
        },
        {
          title: 'Industrial sites',
          description: 'Platform levels, drainage, and earthwork quantification.',
        },
        {
          title: 'Roads & infrastructure',
          description: 'Alignment survey, longitudinal sections, and cross sections.',
        },
      ],
    },
    areas: {
      region: 'chennai',
      lead: 'Survey work is scheduled around site access and vegetation, both of which affect how quickly ground can be covered. We survey across:',
    },
    faqs: [
      {
        question: 'What is the difference between a topographical survey and a contour survey?',
        answer:
          'They are closely related. A topographical survey records levels together with boundaries, structures, and features. A contour survey focuses on ground levels and the contours generated from them. In practice most projects need both, and they are usually delivered as one exercise.',
      },
      {
        question: 'What contour interval should be specified?',
        answer:
          'It depends on terrain and purpose. Relatively flat sites and detailed drainage design need closer intervals; broad planning over undulating ground can work with wider ones. We will advise against your design requirement.',
      },
      {
        question: 'What deliverables do you provide?',
        answer:
          'CAD survey drawings showing levels, contours, boundaries, and features, along with the underlying level data and details of the benchmarks established on site.',
      },
      {
        question: 'How long does a survey take?',
        answer:
          'It depends on site area, terrain, vegetation, and the level of detail required. A typical individual plot is quick; large layouts or heavily vegetated sites take considerably longer.',
      },
      {
        question: 'Can the survey be combined with soil investigation?',
        answer:
          'Yes, and there is a real advantage in doing so. When both are carried out together, borehole positions and levels are recorded against the same survey control, so the geotechnical data ties directly to the survey drawing.',
      },
    ],
    related: ['soil-testing', 'electrical-resistivity-test', 'pile-foundation'],
  },
]

/**
 * @param {string} slug
 * @returns {object | undefined}
 */
export function getCommercialServiceBySlug(slug) {
  return commercialServices.find((s) => s.slug === slug)
}

/** Slugs that need client review before publication. */
export function servicesNeedingReview() {
  return commercialServices
    .filter((s) => s.reviewStatus === 'drafted-needs-review')
    .map((s) => s.slug)
}
