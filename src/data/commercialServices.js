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
 *  - soil-testing, pile-foundation, bridge-load-test, electrical-resistivity-test:
 *    applied VERBATIM from the client's third-party content documents (req/*.docx),
 *    by client instruction (the provider requires an exact content match for SEO).
 *    The ONLY change from the source is brand: "Geo Design" → "GeoDesign" (one word),
 *    per Naveen. Section text, headings, keyword phrases ("… in Chennai"), FAQs, and
 *    the locality lists are the provider's wording. Do NOT "improve", deduplicate,
 *    or reduce keyword density without the client's and content provider's sign-off.
 *  - pile-foundation SCOPE: the document describes pile INSTALLATION/CONSTRUCTION.
 *    Naveen initially said design+supervision only, then explicitly chose "apply the
 *    document exactly", so the installation wording is intentional. Confirm with the
 *    client before changing.
 *  - plate-load-test, pile-load-test, topographical-survey: DRAFTED by Claude from
 *    the existing technical catalog, as no document was supplied. ⚠️ NEEDS REVIEW.
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
    slug: "soil-testing",
    tier: 'commercial',
    title: "Soil Testing for Construction in Chennai",
    navLabel: "Soil Testing",
    iconKey: "drill",
    reviewStatus: 'applied-from-client-document-verbatim',
    shortDescription: "Borehole investigation, sampling, and laboratory analysis that establish safe bearing capacity and foundation requirements before you build.",
    metaTitle: "Soil Testing for Construction | Borehole Investigation & SBC",
    metaDescription: "GeoDesign provides soil testing for construction — borehole drilling, SPT, soil bearing capacity, and IS Code-compliant geotechnical reports across Tamil Nadu.",
    keywords: "soil testing for construction, soil test before construction, soil bearing capacity, SBC test, borehole drilling, geotechnical investigation",
    intro: [
      "Building a strong and durable structure starts with understanding the ground beneath it. At GeoDesign, we provide professional soil testing for construction in Chennai to help homeowners, builders, architects, engineers, and developers make informed foundation decisions. Our geotechnical investigation services evaluate soil properties, determine Soil Bearing Capacity (SBC), and provide accurate recommendations for safe and cost-effective construction.",
      "Whether you're building a house, apartment, commercial building, or industrial facility, GeoDesign delivers reliable soil testing in Chennai using advanced equipment, laboratory analysis, and experienced geotechnical engineers to ensure your project begins on a solid foundation.",
    ],
    whyChooseUs: {
      heading: "Why Choose GeoDesign for Soil Testing for Construction in Chennai",
      body: "Choosing the right geotechnical engineering company is essential for ensuring safe and successful construction. At GeoDesign, we provide reliable Soil Testing for Construction in Chennai through accurate site investigation, advanced testing methods, and experienced geotechnical expertise. Our team conducts detailed soil investigations, including borehole drilling, soil sampling, laboratory testing, and geotechnical analysis, to deliver accurate data for foundation planning and structural design. All investigations are carried out in accordance with relevant Indian Standards (IS Codes).",
      listHeading: "Why Clients Choose GeoDesign",
      items: [
        "Experienced geotechnical engineering team",
        "Advanced soil testing equipment and investigation methods",
        "Accurate soil sampling and laboratory analysis",
        "IS Code-compliant geotechnical reports",
        "Foundation design recommendations",
        "Timely project delivery and technical support",
        "Services for residential, commercial, industrial, and infrastructure projects",
      ],
      closing: "With a focus on quality, accuracy, and engineering excellence, GeoDesign delivers dependable soil testing solutions that support safe construction and long-term structural stability.",
    },
    ourServices: {
      heading: "Our Soil Testing Services",
      body: "GeoDesign provides comprehensive Soil Testing for Construction in Chennai to help ensure safe foundation design and long-term structural stability. Our geotechnical engineers conduct detailed site investigations using modern equipment and industry-standard testing methods to evaluate subsurface conditions accurately.",
      listHeading: "Our Services Include:",
      items: [
        { title: "Site Investigation & Borehole Drilling", description: "Soil exploration, borehole drilling, and sample collection." },
        { title: "Soil Sampling & Laboratory Testing", description: "Analysis of soil properties such as moisture content, density, strength, and compaction characteristics." },
        { title: "Standard Penetration Test (SPT)", description: "Evaluation of soil strength and bearing characteristics." },
        { title: "Soil Bearing Capacity Test", description: "Determination of safe load-bearing capacity for foundation design." },
        { title: "Plate Load Test", description: "Assessment of soil settlement and allowable bearing pressure." },
        { title: "Groundwater Investigation", description: "Evaluation of groundwater levels and their impact on foundation performance." },
        { title: "Geotechnical Reports", description: "Detailed reports including borehole logs, test results, soil profile, bearing capacity, and foundation recommendations." },
        { title: "Engineering Consultation", description: "Expert guidance on foundation selection, pile foundations, and ground improvement solutions." },
      ],
      closing: "Our Soil Testing in Chennai services provide reliable geotechnical data that helps engineers, architects, builders, and property owners make informed construction decisions while reducing project risks.",
    },
    types: {
      heading: "Types of Soil Tests We Offer",
      body: "GeoDesign provides a wide range of Soil Testing for Construction in Chennai to evaluate soil strength, bearing capacity, groundwater conditions, and foundation requirements. Based on the project type and site conditions, our engineers recommend the most suitable geotechnical tests.",
      listHeading: "Our Soil Testing Services Include:",
      items: [
        { title: "Standard Penetration Test (SPT)", description: "Evaluates soil strength and density for foundation design." },
        { title: "Soil Bearing Capacity Test", description: "Determines the safe load-bearing capacity of the soil." },
        { title: "Borehole Drilling & Soil Sampling", description: "Assesses subsurface soil conditions and collects samples for analysis." },
        { title: "Plate Load Test", description: "Measures soil settlement and load-bearing performance." },
        { title: "Laboratory Soil Testing", description: "Includes moisture content, grain size analysis, Atterberg limits, compaction, permeability, shear strength, and other engineering tests." },
        { title: "Groundwater Investigation", description: "Evaluates groundwater levels and their impact on foundation stability." },
        { title: "Geotechnical Investigation", description: "Provides complete soil analysis and foundation recommendations." },
      ],
      closing: "Our soil testing solutions provide accurate geotechnical data to support safe, economical, and reliable construction projects.",
    },
    industries: {
      heading: "Industries & Projects We Serve",
      body: "GeoDesign provides Soil Testing for Construction in Chennai across a wide range of residential, commercial, industrial, and infrastructure projects. Our geotechnical investigations help ensure safe foundation design and long-term structural performance.",
      listHeading: "We Serve:",
      items: [
        { title: "Residential Projects", description: "Houses, villas, apartments, and gated communities." },
        { title: "Commercial & Institutional Buildings", description: "Offices, schools, colleges, hospitals, hotels, and shopping complexes." },
        { title: "Industrial Projects", description: "Factories, warehouses, manufacturing units, and logistics facilities." },
        { title: "Infrastructure Projects", description: "Roads, bridges, flyovers, railways, metro projects, and government developments." },
        { title: "Real Estate & Renewable Energy Projects", description: "Layouts, township developments, solar plants, and utility infrastructure." },
      ],
      closing: "Our experienced team delivers accurate soil investigation reports and engineering recommendations tailored to each project's requirements.",
    },
    technicalDeepDive: {
      slug: 'drilling-sampling',
      label: 'Drilling & Sampling',
      note: 'For the full methodology behind each field test — SPT, auger boring, core drilling, CPT, DCPT, and trial pits — see our technical reference.',
    },
    areas: {
      region: 'chennai',
      heading: "Areas We Serve in Chennai",
      lead: "GeoDesign provides professional Soil Testing for Construction in Chennai for residential, commercial, industrial, and infrastructure projects across Chennai and surrounding regions.",
      closing: "We also provide Soil Testing in Chennai and geotechnical investigation services across Tamil Nadu based on project requirements.",
    },
    faqs: [
      { question: "Is soil testing mandatory before construction?", answer: "Yes. Soil testing for construction in Chennai is highly recommended before starting any building project. It helps determine soil strength, bearing capacity, and the most suitable foundation for safe and durable construction." },
      { question: "How long does soil testing take?", answer: "Most residential soil testing in Chennai projects are completed within 1–3 days, depending on the site conditions, drilling depth, and the number of boreholes required." },
      { question: "What is Soil Bearing Capacity (SBC)?", answer: "Soil Bearing Capacity (SBC) is the maximum load the ground can safely support without excessive settlement or failure. GeoDesign determines the SBC through professional geotechnical investigations to support accurate foundation design" },
      { question: "Is soil testing required for individual house construction?", answer: "Yes. GeoDesign recommends soil testing for construction in Chennai for individual houses to identify the appropriate foundation type, improve structural safety, and minimize future settlement issues." },
      { question: "What does the soil investigation report include?", answer: "GeoDesign provides a comprehensive soil investigation report that includes bore logs, soil profile, laboratory test results, Soil Bearing Capacity (SBC), groundwater observations, and foundation recommendations for safe construction." },
      { question: "Which standards are followed during soil testing?", answer: "GeoDesign performs soil testing in Chennai in accordance with applicable Indian Standards (IS Codes) and established geotechnical engineering practices to ensure accurate and reliable results." },
    ],
    ctaHeading: "Contact us for Professional Soil Testing in Chennai",
    ctaBody: "Planning a construction project? GeoDesign offers reliable soil testing for construction in Chennai with accurate geotechnical investigations, laboratory testing, Soil Bearing Capacity (SBC) evaluation, and detailed engineering reports. Our experienced team provides dependable soil testing in Chennai for residential, commercial, industrial, and infrastructure projects. Contact us today to schedule your soil investigation and build on a strong foundation.",
    related: ['plate-load-test', 'pile-foundation', 'laboratory-tests'],
  },

  // ────────────────────────────────────────────────────────── pile foundation
          {
    slug: "pile-foundation",
    tier: 'commercial',
    title: "Pile Foundation in Chennai",
    navLabel: "Pile Foundation & Design",
    iconKey: "pile",
    reviewStatus: 'applied-from-client-document-verbatim',
    shortDescription: "Foundation design and construction supervision — from soil investigation through pile specification, load test verification, and quality assurance.",
    metaTitle: "Pile Foundation Design & Supervision | Foundation Engineering",
    metaDescription: "GeoDesign provides pile foundation design and construction supervision — soil investigation, pile specification, load test verification, and IS Code-compliant documentation.",
    keywords: "pile foundation design, foundation design, deep foundation design, pile design consultant, foundation engineering, construction supervision",
    intro: [
      "Every successful construction project begins with a strong and properly engineered foundation. At GeoDesign, we provide professional Pile Foundation in Chennai and Foundation Design in Chennai for residential, commercial, industrial, and infrastructure projects. Our experienced geotechnical and structural engineers design safe, economical, and durable foundation systems based on detailed soil investigation, structural loads, and site conditions.",
      "From footing foundation design for individual houses to complex deep foundation systems for high-rise buildings and industrial facilities, we deliver complete engineering solutions that ensure long-term structural stability and compliance with Indian Standards (IS Codes).",
    ],
    whyImportant: {
      heading: "Why Pile Foundations are Important in Chennai",
      body: "Chennai's soil conditions, including soft clay, loose sand, reclaimed land, and high groundwater levels, often require deep foundation systems. A professionally designed Pile Foundation in Chennai transfers structural loads to stronger soil layers, improving stability, reducing settlement, and ensuring long-term structural safety.",
      listHeading: "Pile foundations are commonly recommended for:",
      items: [
        "Residential buildings, villas, and apartments",
        "Commercial complexes and office buildings",
        "Industrial facilities and warehouses",
        "Bridges, flyovers, and infrastructure projects",
        "Coastal developments and heavy machinery foundations",
      ],
      closing: "Choosing the right Pile Foundation in Chennai improves load-bearing capacity, enhances structural durability, and ensures the long-term performance of your building.",
    },
    whyChooseUs: {
      heading: "Why Choose GeoDesign for Pile Foundation in Chennai",
      body: "Choosing the right foundation contractor is essential for the long-term safety, stability, and durability of any structure. At GeoDesign, we provide professionally engineered Pile Foundation in Chennai by combining extensive geotechnical expertise, advanced soil investigation, and modern piling techniques. Our solutions are designed to meet the unique requirements of residential, commercial, industrial, and infrastructure projects across Chennai. Our experienced engineers carefully analyze soil conditions, structural loads, groundwater levels, and project specifications before recommending the most suitable pile foundation system. This engineering-driven approach ensures optimal load distribution, minimizes settlement, and provides a strong foundation for long-lasting structural performance.",
      listHeading: "Why clients choose GeoDesign:",
      items: [
        "Experienced geotechnical and foundation engineering team",
        "Customized pile foundation solutions based on soil investigation",
        "Modern equipment and industry-standard construction practices",
        "Timely project execution with strict quality control",
        "Reliable support for residential, commercial, industrial, and infrastructure projects",
      ],
      closing: "With a strong focus on quality, safety, and engineering precision, GeoDesign delivers dependable Pile Foundation in Chennai that ensures structural stability and long-term value for every project.",
    },
    ourServices: {
      heading: "Our Pile Foundation Services",
      body: "At GeoDesign, we provide end-to-end Pile Foundation Services in Chennai, managing every stage of the project from site investigation to foundation construction. Our engineering team develops customized foundation solutions based on soil conditions, structural loads, and project requirements to ensure safe and durable results.",
      listHeading: "Our services include:",
      items: [
        { title: "Site Investigation & Soil Testing", description: "Detailed geotechnical investigations to evaluate soil properties and foundation requirements." },
        { title: "Pile Foundation Design & Engineering", description: "Customized pile foundation designs based on structural analysis and soil reports." },
        { title: "Pile Installation & Construction", description: "Professional execution of bore piles, cast-in-situ piles, and RCC pile foundations using modern equipment." },
        { title: "Load Testing & Quality Inspection", description: "Comprehensive testing and quality checks to verify strength, stability, and compliance with engineering standards." },
        { title: "Foundation Support & Technical Documentation", description: "Foundation strengthening solutions, engineering consultation, and complete project reports for smooth execution." },
      ],
      closing: "Our experienced engineers ensure every Pile Foundation in Chennai is designed and constructed to meet safety standards while delivering long-term structural stability and performance.",
    },
    types: {
      heading: "Types of Pile Foundations We Offer",
      body: "Every construction project has unique engineering requirements. At GeoDesign, we provide a wide range of Pile Foundation in Chennai to suit different soil conditions, building loads, and project specifications.",
      listHeading: "Our pile foundation solutions include:",
      items: [
        { title: "Bore Pile Foundation", description: "Suitable for high-rise buildings, commercial complexes, and projects requiring deep foundation support." },
        { title: "Cast-in-Situ Piles", description: "Constructed directly at the project site, these piles offer flexibility for varying ground conditions and are widely used for residential and commercial developments." },
        { title: "RCC Pile Foundation", description: "Designed for heavy structural loads, RCC piles provide exceptional durability and long-term stability." },
        { title: "End Bearing Piles", description: "These piles transfer structural loads directly to hard rock or dense soil layers, making them ideal for large buildings and industrial structures." },
        { title: "Friction Piles", description: "Used where hard strata are located at greater depths, friction piles distribute building loads through the surrounding soil." },
      ],
      closing: "Our engineers recommend the most suitable pile foundation system based on detailed geotechnical analysis and structural calculations.",
    },
    process: {
      heading: "Our Pile Foundation Process",
      body: "At GeoDesign, every Pile Foundation in Chennai follows a systematic engineering process to ensure precision, safety, and long-term structural reliability.",
      steps: [
        { title: "Site Inspection", description: "Our engineers evaluate the project site, structural requirements, and surrounding conditions." },
        { title: "Soil Investigation", description: "Detailed geotechnical investigations determine soil strength, groundwater conditions, and bearing capacity." },
        { title: "Foundation Design", description: "Based on engineering analysis, we prepare customized pile foundation designs suitable for the project." },
        { title: "Pile Installation", description: "Using modern equipment and proven construction techniques, our team installs piles with precision and quality control." },
        { title: "Load Testing", description: "Pile load tests verify the performance and load-bearing capacity before structural construction begins." },
        { title: "Final Quality Inspection", description: "Our engineers conduct comprehensive inspections to ensure the foundation meets engineering standards and project specifications." },
      ],
    },
    industries: {
      heading: "Industries & Projects We Serve",
      body: "At GeoDesign, we provide reliable Pile Foundation in Chennai for a wide range of construction projects. Our experienced engineering team delivers customized foundation solutions based on soil conditions, structural requirements, and industry standards, ensuring safe and durable foundations for every project.",
      listHeading: "We work with:",
      items: [
        { title: "Residential Projects", description: "Individual homes, villas, and apartment buildings." },
        { title: "Commercial Buildings", description: "Office complexes, shopping malls, hotels, hospitals, and educational institutions." },
        { title: "Industrial Facilities", description: "Manufacturing plants, factories, warehouses, and heavy industrial structures." },
        { title: "Infrastructure Projects", description: "Bridges, government developments, IT parks, and other large-scale infrastructure works." },
      ],
      closing: "With extensive experience across multiple sectors, GeoDesign ensures every pile foundation is designed and executed with a strong focus on quality, safety, and long-term structural performance.",
    },
    technicalDeepDive: {
      slug: 'foundation-recommendations',
      label: 'Foundation Recommendations',
      note: 'For the engineering background on shallow foundations, ground improvement, and deep foundation selection, see our technical reference.',
    },
    areas: {
      region: 'chennai',
      heading: "Areas We Serve in Chennai",
      lead: "GeoDesign offers professional Pile Foundation in Chennai for residential, commercial, industrial, and infrastructure projects across the city and surrounding regions.",
      closing: "We also undertake pile foundation projects across Tamil Nadu based on project requirements.",
    },
    faqs: [
      { question: "What is a pile foundation?", answer: "A pile foundation is a deep foundation system that transfers structural loads to stronger soil or rock layers beneath weak surface soils. It is widely used for Pile Foundation in Chennai to improve stability, reduce settlement, and support long-lasting structures." },
      { question: "When is a pile foundation required?", answer: "A pile foundation is recommended when the soil has low bearing capacity, groundwater levels are high, or the project involves heavy structures. GeoDesign evaluates site conditions to recommend the most suitable foundation solution for your project." },
      { question: "How is the right foundation design selected?", answer: "The right Foundation Design in Chennai depends on soil conditions, structural loads, groundwater levels, and project requirements. GeoDesign conducts soil testing and geotechnical analysis to design a safe and reliable foundation system." },
      { question: "How long does pile foundation construction take?", answer: "The construction time depends on the project size, soil conditions, pile depth, and the number of piles required. After the site assessment, GeoDesign provides a clear project schedule and estimated completion timeline." },
      { question: "Do you provide soil testing before pile foundation work?", answer: "Yes. GeoDesign provides professional soil testing and geotechnical investigation before starting any Pile Foundation in Chennai. This helps determine the soil's bearing capacity and the most suitable foundation design." },
      { question: "Why choose GeoDesign for Pile Foundation in Chennai?", answer: "GeoDesign combines experienced engineers, advanced piling techniques, and customized Foundation Design in Chennai to deliver safe, durable, and cost-effective foundation solutions. We serve residential, commercial, industrial, and infrastructure projects across Chennai." },
    ],
    ctaHeading: "Contact Us for Pile Foundation in Chennai",
    ctaBody: "Looking for reliable Pile Foundation in Chennai? GeoDesign provides professional foundation engineering solutions for residential, commercial, industrial, and infrastructure projects. From soil investigation and pile foundation design to pile installation and engineering consultation, our experienced team delivers safe, durable, and cost-effective solutions tailored to your project requirements.",
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
    slug: "bridge-load-test",
    tier: 'commercial',
    title: "Bridge Load Test in Chennai",
    navLabel: "Bridge Load Test",
    iconKey: "bridge",
    reviewStatus: 'applied-from-client-document-verbatim',
    shortDescription: "Static and dynamic load testing of bridges, flyovers, and culverts — verifying structural capacity, deflection, and strain under controlled load.",
    metaTitle: "Bridge Load Test | Static, Dynamic & Proof Load Testing",
    metaDescription: "GeoDesign provides bridge load testing — static and dynamic testing, deflection monitoring, and strain measurement for road bridges, railway bridges, and flyovers.",
    keywords: "bridge load test, static load test, dynamic load test, proof load test, bridge deflection monitoring, structural load testing",
    intro: [
      "Every bridge must be evaluated to ensure it can safely withstand the loads it is designed to carry. At GeoDesign, we provide professional Bridge Load Test in Chennai for road bridges, railway bridges, flyovers, culverts, and other infrastructure projects. Our experienced structural and geotechnical engineers conduct comprehensive load testing to assess the strength, stability, and performance of bridge structures under controlled loading conditions.",
      "From newly constructed bridges to existing structures requiring safety assessments, we deliver accurate load testing solutions that help verify structural integrity, ensure compliance with engineering standards, and support long-term public safety. Using advanced testing equipment and industry-approved methodologies, GeoDesign provides reliable bridge load testing services for government, private, and infrastructure projects.",
    ],
    whyImportant: {
      heading: "Why Bridge Load Test in Chennai is Important",
      body: "Bridge load testing is an essential part of structural evaluation that verifies whether a bridge can safely support its intended design loads. With increasing traffic volumes and ageing infrastructure, conducting a professional Bridge Load Test in Chennai helps identify structural performance, load-carrying capacity, and potential weaknesses before they become safety concerns.",
      listHeading: "Bridge load testing is commonly recommended for:",
      items: [
        "Newly constructed bridges before commissioning",
        "Existing bridges requiring structural assessment",
        "Road and highway bridges",
        "Railway bridges",
        "Flyovers and overpasses",
        "Culverts and pedestrian bridges",
        "Bridge rehabilitation and strengthening projects",
      ],
      closing: "Choosing a professional Bridge Load Test in Chennai helps verify structural safety, improve public confidence, support maintenance planning, and ensure compliance with engineering standards.",
    },
    whyChooseUs: {
      heading: "Why Choose GeoDesign for Bridge Load Test in Chennai",
      body: "Choosing an experienced engineering consultant is crucial for obtaining accurate bridge load testing results. At GeoDesign, we provide professional Bridge Load Test in Chennai by combining experienced structural engineers, advanced load testing equipment, and scientifically proven testing procedures. Our services help government agencies, contractors, consultants, and infrastructure developers evaluate bridge performance with confidence. Our engineers carefully assess bridge specifications, structural design, loading requirements, and site conditions before planning the testing procedure. Every load test is carried out following relevant Indian Standards and engineering guidelines to ensure reliable and accurate results.",
      listHeading: "Why clients choose GeoDesign:",
      items: [
        "Experienced structural and geotechnical engineering team",
        "Advanced bridge load testing equipment",
        "Accurate structural performance evaluation",
        "IS Code-compliant testing procedures",
        "Comprehensive load test reports",
        "Timely project execution with strict quality control",
        "Reliable support for government and private infrastructure projects",
      ],
      closing: "With a strong focus on quality, safety, and engineering precision, GeoDesign delivers dependable Bridge Load Test in Chennai services that ensure structural reliability and long-term bridge performance.",
    },
    ourServices: {
      heading: "Our Bridge Load Testing Services",
      body: "At GeoDesign, we provide end-to-end Bridge Load Test in Chennai, managing every stage of the testing process from site inspection to structural performance evaluation. Our engineering team develops customized testing plans based on bridge type, structural design, loading requirements, and project specifications to ensure accurate and dependable results.",
      listHeading: "Our services include:",
      items: [
        { title: "Static Load Testing", description: "Evaluation of bridge performance under controlled static loads." },
        { title: "Dynamic Load Testing", description: "Assessment of bridge behavior under moving vehicle loads." },
        { title: "Structural Deflection Monitoring", description: "Measurement of bridge deflection during load application." },
        { title: "Strain and Stress Monitoring", description: "Recording structural strain and stress responses during testing." },
        { title: "Bridge Performance Evaluation", description: "Comprehensive analysis of structural behaviour and load-carrying capacity." },
        { title: "Engineering Reports & Technical Documentation", description: "Detailed testing reports with observations, analysis, and recommendations." },
      ],
      closing: "Our experienced engineers ensure every Bridge Load Test in Chennai is performed with precision, accuracy, and compliance with engineering standards to support safe and reliable infrastructure.",
    },
    types: {
      heading: "Types of Bridge Load Tests We Offer",
      body: "GeoDesign provides various Bridge Load Test in Chennai services to evaluate structural performance, safety, and load-carrying capacity. Based on the bridge type and project requirements, our engineers recommend the most suitable testing method.",
      listHeading: "Our Testing Services Include:",
      items: [
        { title: "Static Load Test", description: "Evaluates bridge performance under controlled stationary loads." },
        { title: "Dynamic Load Test", description: "Assesses bridge behavior under moving traffic and live loads." },
        { title: "Proof Load Test", description: "Verifies the bridge's ability to safely carry its design load." },
        { title: "Deflection Measurement Test", description: "Measures structural deflection under loading conditions." },
        { title: "Strain Monitoring Test", description: "Monitors stress and strain in structural members during testing." },
      ],
      closing: "Our experienced engineers ensure every Bridge Load Test in Chennai is conducted accurately and in accordance with relevant engineering standards.",
    },
    process: {
      heading: "Our Bridge Load Testing Process",
      body: "GeoDesign follows a systematic approach to deliver accurate and reliable Bridge Load Test in Chennai results.",
      listHeading: "Process:",
      steps: [
        { title: "Site Inspection", description: "Assessment of bridge condition and project requirements." },
        { title: "Test Planning", description: "Preparation of loading methodology and testing procedures." },
        { title: "Instrument Installation", description: "Setup of monitoring equipment for structural measurements." },
        { title: "Load Application", description: "Controlled loading and performance monitoring." },
        { title: "Data Analysis", description: "Evaluation of structural response and load-carrying capacity." },
        { title: "Final Report", description: "Detailed results with engineering observations and recommendations." },
      ],
      closing: "This structured process ensures safe, accurate, and standards-compliant bridge load testing.",
    },
    industries: {
      heading: "Industries & Projects We Serve",
      body: "At GeoDesign, we provide reliable Bridge Load Test in Chennai for a wide range of infrastructure and transportation projects. Our experienced engineering team delivers accurate load testing solutions that ensure structural safety and regulatory compliance.",
      listHeading: "We work with:",
      items: [
        { title: "Road Bridges", description: "National highways, state highways, and municipal road bridges." },
        { title: "Railway Bridges", description: "Rail overbridges, railway crossings, and transport infrastructure." },
        { title: "Flyovers & Overpasses", description: "Urban flyovers, grade separators, and elevated corridors." },
        { title: "Pedestrian Bridges", description: "Foot overbridges and pedestrian crossings." },
        { title: "Government Infrastructure Projects", description: "Public works, transport departments, and civic infrastructure." },
        { title: "Bridge Rehabilitation Projects", description: "Structural assessment before repair, strengthening, or rehabilitation." },
      ],
      closing: "With extensive experience across infrastructure projects, GeoDesign ensures every bridge load test is carried out with precision, safety, and engineering excellence.",
    },
    technicalDeepDive: {
      slug: 'tests-on-rock',
      label: 'Tests On Rock',
      note: 'Where bridge foundations bear on rock, our rock testing reference covers the strength and quality parameters involved.',
    },
    areas: {
      region: 'chennai',
      heading: "Areas We Serve in Chennai",
      lead: "GeoDesign provides professional Bridge Load Test in Chennai for government, commercial, and infrastructure projects across the city and surrounding regions.",
      closing: "We also undertake Bridge Load Test projects across Tamil Nadu based on project requirements.",
    },
    faqs: [
      { question: "What is a Bridge Load Test?", answer: "A Bridge Load Test is a structural assessment performed to evaluate a bridge's load-carrying capacity, stability, and overall performance. It verifies whether the bridge can safely withstand the design loads before being opened for use or after rehabilitation." },
      { question: "When is a Bridge Load Test required?", answer: "A Bridge Load Test in Chennai is commonly required for newly constructed bridges, existing bridges undergoing structural assessment, bridge rehabilitation projects, and before commissioning major infrastructure developments. It helps ensure the bridge meets safety and engineering standards." },
      { question: "What types of bridges can be load tested?", answer: "GeoDesign conducts Bridge Load Test in Chennai for various bridge structures, including road bridges, railway bridges, flyovers, pedestrian bridges, culverts, overpasses, and other transportation infrastructure." },
      { question: "How long does a Bridge Load Test take?", answer: "The duration depends on the bridge size, testing method, and project requirements. Most bridge load tests can be completed within a day, while larger or more complex structures may require additional time for testing and engineering analysis." },
      { question: "Do you provide bridge load testing reports?", answer: "Yes. GeoDesign provides detailed bridge load testing reports that include testing methodology, load arrangements, instrument readings, deflection measurements, structural analysis, observations, and engineering recommendations." },
      { question: "Why choose GeoDesign for Bridge Load Test in Chennai?", answer: "GeoDesign combines experienced structural engineers, advanced load testing equipment, and industry-standard testing procedures to deliver accurate and reliable Bridge Load Test in Chennai. We provide professional testing services for government, commercial, and infrastructure projects across Chennai." },
    ],
    ctaHeading: "Contact GeoDesign for Professional Bridge Load Testing in Chennai",
    ctaBody: "Planning a new bridge, structural assessment, or rehabilitation project? GeoDesign provides reliable Bridge Load Test in Chennai services with accurate load testing, structural performance evaluation, deflection monitoring, strain measurement, and comprehensive engineering reports. Our experienced team conducts professional bridge load testing for road bridges, railway bridges, flyovers, pedestrian bridges, and other infrastructure projects to ensure safety, stability, and compliance with engineering standards. Contact us today to schedule your bridge load test and verify the structural performance of your bridge with confidence.",
    related: ['pile-load-test', 'plate-load-test', 'soil-testing'],
  },

  // ────────────────────────────────────────────── electrical resistivity test
          {
    slug: "electrical-resistivity-test",
    tier: 'commercial',
    title: "Electrical Resistivity Test in Chennai",
    navLabel: "Electrical Resistivity Test",
    iconKey: "resistivity",
    reviewStatus: 'applied-from-client-document-verbatim',
    shortDescription: "Non-destructive geophysical survey mapping subsurface soil, rock, and groundwater — for earthing design, borewell siting, and site investigation.",
    metaTitle: "Electrical Resistivity Test | Soil Resistivity & Geophysical Survey",
    metaDescription: "GeoDesign provides electrical resistivity testing — VES, resistivity tomography, groundwater exploration, and earthing design surveys across Tamil Nadu.",
    keywords: "electrical resistivity test, soil resistivity test, vertical electrical sounding, VES, resistivity tomography, groundwater survey, earthing design",
    intro: [
      "Every successful construction project begins with a thorough understanding of the subsurface conditions. At GeoDesign, we provide professional Electrical Resistivity Test in Chennai for residential, commercial, industrial, and infrastructure projects. Our experienced geotechnical engineers use advanced resistivity testing methods to assess underground soil and rock conditions, groundwater availability, and subsurface formations with high accuracy.",
      "From individual house construction to large-scale infrastructure developments, our Electrical Resistivity Test helps identify suitable foundation conditions, groundwater potential, rock depth, and soil strata before construction begins. We deliver reliable investigation reports that support safe foundation design and informed engineering decisions while complying with industry standards.",
    ],
    whyImportant: {
      heading: "Why Electrical Resistivity Test in Chennai is Important",
      body: "Understanding subsurface soil and rock conditions is essential before any construction project. Due to Chennai’s diverse soil profiles, coastal conditions, and varying groundwater levels, an Electrical Resistivity Test in Chennai helps engineers accurately assess underground conditions without extensive excavation. This test is widely used to identify soil layers, rock formations, groundwater zones, fractures, and other subsurface features that influence foundation design and site development.",
      listHeading: "Common Applications:",
      items: [
        "Residential and commercial buildings",
        "Industrial and infrastructure projects",
        "High-rise construction",
        "Groundwater exploration and borewell location",
        "Geological and site investigations",
      ],
      closing: "A professional Electrical Resistivity Test in Chennai helps improve planning, reduce construction risks, and support safe foundation design.",
    },
    whyChooseUs: {
      heading: "Why Choose GeoDesign for Electrical Resistivity Test in Chennai",
      body: "GeoDesign provides professional Electrical Resistivity Test in Chennai using advanced survey equipment and proven geophysical investigation methods. Our experienced engineers conduct accurate subsurface assessments to support construction, groundwater exploration, and infrastructure projects.",
      listHeading: "Why Clients Choose Us:",
      items: [
        "Experienced geotechnical and geophysical engineering team",
        "Advanced electrical resistivity survey equipment",
        "Accurate underground soil, rock, and groundwater analysis",
        "Detailed interpretation and reporting",
        "Customized solutions for project-specific requirements",
        "Timely project execution and technical support",
        "Services for residential, commercial, industrial, and infrastructure projects",
      ],
      closing: "Our commitment to quality and accuracy helps clients make informed engineering decisions with confidence.",
    },
    ourServices: {
      heading: "Our Electrical Resistivity Testing Services",
      body: "GeoDesign provides professional Electrical Resistivity Test in Chennai to evaluate underground soil, rock, and groundwater conditions for construction, groundwater exploration, and infrastructure projects. Using advanced resistivity survey equipment and modern investigation techniques, we deliver accurate subsurface data for effective project planning. Our services include electrical resistivity surveys, groundwater investigations, subsurface geological mapping, foundation investigations, rock depth identification, and geophysical data interpretation. We also provide expert engineering recommendations to support safe construction and informed decision-making. Our experienced team ensures every survey is conducted with accuracy, reliability, and industry-standard practices to deliver dependable results.",
    },
    types: {
      heading: "Types of Electrical Resistivity Tests We Offer",
      body: "GeoDesign provides a range of Electrical Resistivity Test in Chennai solutions based on project requirements and site conditions.",
      listHeading: "Our Testing Services Include:",
      items: [
        { title: "Vertical Electrical Sounding (VES)", description: "Identifies soil layers, rock depth, and groundwater zones." },
        { title: "Electrical Resistivity Tomography (ERT)", description: "Provides detailed subsurface imaging for engineering and infrastructure projects." },
        { title: "Groundwater Exploration Survey", description: "Locates potential groundwater-bearing zones for borewell development." },
        { title: "Subsurface Geological Investigation", description: "Maps underground soil, rock formations, fractures, and cavities." },
        { title: "Foundation Investigation Survey", description: "Supports safe and economical foundation planning." },
      ],
      closing: "Our engineers recommend the most suitable testing method based on project objectives and site conditions.",
    },
    process: {
      heading: "Our Electrical Resistivity Testing Process",
      body: "We follow a systematic approach to deliver accurate and reliable Electrical Resistivity Test in Chennai results.",
      listHeading: "Process:",
      steps: [
        { title: "Site Inspection", description: "Assessment of project requirements and site conditions." },
        { title: "Survey Planning", description: "Selection of survey locations and testing methodology." },
        { title: "Field Data Collection", description: "Resistivity measurements using advanced equipment." },
        { title: "Data Analysis", description: "Interpretation of subsurface conditions using specialized software." },
        { title: "Report Preparation", description: "Detailed findings with engineering recommendations." },
        { title: "Technical Consultation", description: "Expert guidance for construction and groundwater projects." },
      ],
      closing: "This structured process ensures dependable geophysical data for informed decision-making.",
    },
    industries: {
      heading: "Industries & Projects We Serve",
      body: "GeoDesign provides Electrical Resistivity Test in Chennai for residential, commercial, industrial, infrastructure, and groundwater exploration projects.",
      listHeading: "We Serve:",
      items: [
        { title: "Groundwater and borewell development projects", description: "Our geophysical investigations help clients make informed decisions for safe and efficient project execution." },
      ],
      strItems: [
        "Residential buildings and apartments",
        "Commercial complexes, hospitals, and educational institutions",
        "Industrial facilities and warehouses",
        "Roads, bridges, metro, and government infrastructure projects",
      ],
    },
    technicalDeepDive: {
      slug: 'specialised-field-testing',
      label: 'Specialised Field Testing',
      note: 'Resistivity sits alongside vane shear, permeability, plate load, and chemical analysis in our field testing reference.',
    },
    areas: {
      region: 'chennai',
      heading: "Areas We Serve in Chennai",
      lead: "GeoDesign provides professional Electrical Resistivity Test in Chennai for residential, commercial, industrial, and infrastructure projects across the city and surrounding regions.",
      closing: "We also undertake Electrical Resistivity Test projects across Tamil Nadu based on project requirements.",
    },
    faqs: [
      { question: "What is an Electrical Resistivity Test?", answer: "An Electrical Resistivity Test is a geophysical survey used to evaluate underground soil, rock formations, and groundwater conditions. It helps engineers understand subsurface characteristics before construction or borewell drilling." },
      { question: "Why is an Electrical Resistivity Test important before construction?", answer: "An Electrical Resistivity Test in Chennai helps identify underground conditions that may affect foundation design and construction. The test supports safer planning and reduces potential project risks." },
      { question: "Where is an Electrical Resistivity Test commonly used?", answer: "Electrical Resistivity Testing is widely used for residential, commercial, industrial, infrastructure, and groundwater exploration projects. It is also commonly used for borewell location and geological investigations." },
      { question: "How long does an Electrical Resistivity Test take?", answer: "The duration depends on the survey area and project requirements. Most Electrical Resistivity Test projects can be completed within a day, followed by data analysis and report preparation." },
      { question: "Do you provide a detailed Electrical Resistivity Test report?", answer: "Yes, GeoDesign provides detailed reports that include survey findings, subsurface interpretation, groundwater observations, and engineering recommendations for project planning." },
      { question: "Why choose GeoDesign for Electrical Resistivity Test in Chennai?", answer: "GeoDesign offers professional Electrical Resistivity Test in Chennai using advanced survey equipment and experienced engineers. Our team delivers accurate investigations and reliable reports for construction and groundwater projects." },
    ],
    ctaHeading: "Contact us  Electrical Resistivity Testing in Chennai",
    ctaBody: "Looking for a reliable Electrical Resistivity Test in Chennai? GeoDesign provides professional geophysical investigation services for residential, commercial, industrial, and infrastructure projects. From groundwater exploration and subsurface investigations to foundation assessment and engineering consultation, our experienced team delivers accurate, reliable, and cost-effective solutions tailored to your project requirements.",
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
