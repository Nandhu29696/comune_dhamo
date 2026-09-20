import type { BlogPost, ContentBlock, FaqItem } from '@/types';
import { site } from '@/config/site';

const N = site.name;

/** Titles are original but cover the same topics as the reference blog, in the same order. */
const titles: [slug: string, title: string, topic: string][] = [
  ['cast-iron-powder-grades-guide', 'Cast Iron Powder Grades: A Practical Guide to Picking the Right One', 'cast iron powder grades'],
  ['bulk-density-of-cast-iron-powder', 'Bulk Density of Cast Iron Powder: Why It Matters on the Shop Floor', 'bulk density'],
  ['cast-iron-powder-chemical-composition-checklist', "Cast Iron Powder Chemical Composition: A Buyer's Checklist", 'chemical composition'],
  ['testing-cast-iron-powder-before-bulk-orders', 'Testing Cast Iron Powder Before You Commit to a Bulk Order', 'pre-purchase testing'],
  ['custom-mesh-sizes-for-special-applications', 'Custom Mesh Sizes: How Leading Iron Powder Suppliers Serve Specialised Applications', 'custom mesh sizes'],
  ['why-in-house-lab-testing-matters', 'Consistent Quality: Why In-House Laboratory Testing Matters for Iron Powder', 'in-house laboratory testing'],
  ['choosing-an-iso-certified-indian-supplier', 'Global Procurement Made Simple: Why Pick an ISO-Certified Indian Supplier?', 'ISO-certified suppliers'],
  ['sourcing-high-purity-iron-powder', 'Sourcing High-Purity Iron Powder for Demanding Industrial Applications', 'high-purity iron powder'],
  ['iron-powder-mesh-size-by-industry', 'Iron Powder Mesh Size Guide: Which Grade Suits Your Industry?', 'mesh size by industry'],
  ['iron-powder-in-diamond-tools', 'The Role of Iron Powder in Diamond Tool Manufacturing', 'diamond tool manufacturing'],
  ['iron-powder-and-brake-pad-performance', 'How Iron Powder Improves Brake Pad Performance and Service Life', 'brake pad performance'],
  ['powder-metallurgy-and-iron-powder', 'The Powder Metallurgy Process: Where Iron Powder Fits in Modern Manufacturing', 'powder metallurgy'],
  ['stop-wasting-batches-pick-the-right-mesh', 'Cast Iron Powder Mesh Size: Stop Wasting Batches and Pick the Right Grade', 'mesh size selection'],
  ['importing-cast-iron-powder-from-india', 'Importing Cast Iron Powder from India? Everything You Need to Know', 'importing from India'],
  ['cast-iron-powder-in-the-welding-industry', 'Why the Welding Industry Relies on Cast Iron Powder: A Complete Guide', 'welding applications'],
  ['signs-of-low-quality-cast-iron-powder', "5 Warning Signs You're Buying Low-Quality Cast Iron Powder (and How to Avoid Them)", 'low-quality powder'],
  ['particle-shape-and-powder-performance', 'How Particle Shape Affects Cast Iron Powder Performance in Industrial Use', 'particle shape'],
  ['global-demand-for-cast-iron-powder', 'Global Demand for Cast Iron Powder: Trends, Growth Drivers and Forecast', 'global demand'],
  ['atomized-vs-reduced-iron-powder', "Atomized vs Reduced Iron Powder: A Buyer's Plain-Language Guide", 'atomised vs reduced powder'],
  ['cast-iron-powder-explained', 'Cast Iron Powder Explained: Grades, Uses, Pricing and Choosing a Supplier', 'cast iron powder basics'],
  ['iron-powder-in-construction', 'Iron Powder in Construction: Concrete, Flooring and Heavy Infrastructure', 'construction applications'],
  ['seven-quality-tests-for-iron-powder', 'How to Check Iron Powder Quality Before Buying: 7 Simple Tests', 'quality tests'],
  ['exporting-iron-powder-from-india', 'Exporting Iron Powder from India: Regulations, Packaging and Supplier Selection', 'export regulations'],
  ['cast-iron-powder-in-automotive-parts', 'How Cast Iron Powder Powers the Next Generation of Automotive Parts', 'automotive parts'],
  ['what-is-reduction-grade-iron-powder', 'What Is Reduction Grade Iron Powder? Properties, Uses and Where to Buy', 'reduction grade powder'],
  ['free-sample-before-bulk-order-2026', 'Cast Iron Powder Manufacturer in India: Get a Free Sample Before Your Bulk Order (2026 Guide)', 'free samples'],
  ['top-10-factors-choosing-a-manufacturer', 'Top 10 Factors to Weigh When Choosing a Cast Iron Powder Manufacturer in India', 'choosing a manufacturer'],
  ['iron-powder-market-trends-2026', 'Iron Powder Market Trends 2026: Automotive and Additive Manufacturing Growth', 'market trends'],
  ['cast-iron-powder-vs-iron-powder', 'Cast Iron Powder vs Iron Powder: Making the Right Choice', 'cast iron vs iron powder'],
  ['reduction-grade-powder-for-high-purity-uses', "Reduction Grade Iron Powder: Why It's Essential for High-Purity Applications", 'high-purity reduction powder'],
  ['what-is-cast-iron-powder', 'What Is Cast Iron Powder? Types, Production and Key Benefits', 'cast iron powder fundamentals'],
];

/** Blog cover images, in the same order as `titles`. */
const images: string[] = [
  '/images/blog/cast-iron-powder-grades.png',
  '/images/blog/cast-iron-powder-bulk-density-why-it-matters.png',
  '/images/blog/cast-iron-powder-chemical-composition.png',
  '/images/blog/cast-iron-powder-quality-testing.png',
  '/images/blog/custom-iron-powder-mesh-sizes.png',
  '/images/blog/iron-powder-quality-testing.png',
  '/images/blog/iso-certified-indian-iron-powder-supplier.png',
  '/images/blog/high-purity-iron-powder-supplier.png',
  '/images/blog/iron-powder-mesh-size-guide.png',
  '/images/blog/role-of-iron-powder-in-diamond-tool-manufacturing.png',
  '/images/blog/how-iron-powder-improves-brake-pad-performance.png',
  '/images/blog/powder-metallurgy-process-iron-powder-manufacturing.png',
  '/images/blog/Cast-iron-powder-mesh-size-guide-by-Comune-Industries.png',
  '/images/blog/Importing-cast-iron-powder-from-trusted-Indian-manufacturers.png',
  '/images/blog/Cast-iron-powder-used-in-industrial-welding-applications.jpg',
  '/images/blog/low-quality-cast-iron-powder-warning-signs-inspection.jpg',
  '/images/blog/cast-iron-powder-particle-shape.jpg',
  '/images/blog/global-demand-of-cast-iron-powder.jpg',
  '/images/blog/Difference-Between-Atomized-and-reduced-iron-powder.jpg',
  '/images/blog/cast-iron-powder-grades-and-industrial-uses.jpg',
  '/images/blog/Iron-powder-for-construction-concrete-and-flooring.jpg',
  '/images/blog/Iron-powder-quality-testing-before-buying.jpg',
  '/images/blog/Iron-powder-export-from-India-packaging-and-regulations.jpg',
  '/images/blog/Cast Iron Powder Is Powering Next-Gen Automotive Parts.jpg',
  '/images/blog/High-purity reduction iron powder for industrial use.png',
  '/images/blog/Industrial cast iron powder free sample India.jpg',
  '/images/blog/Cast iron powder supplier selection factors.jpg',
  '/images/blog/Liquid Glucose in Confectionery.jpg',
  '/images/blog/Cast Iron Powder vs Iron Powder The Right Choice.jpg',
  "/images/blog/Reduction Grade Iron Powder Why It's Essential for High-Purity Applications.jpg",
  '/images/blog/cast-iron-powder-types-production-benefits.jpg',
];

const specTable: string[][] = [
  ['<strong>Specification</strong>', '<strong>Why It Matters</strong>'],
  ['Grade / mesh size', 'Sets the particle-size range and suitability for the application'],
  ['Chemical composition', 'Confirms material grade and batch consistency'],
  ['Bulk density', 'Affects handling, storage and volume calculations'],
  ['Particle size distribution', 'Influences packing behaviour and process consistency'],
  ['Moisture content', 'Impacts handling, storage and reactivity'],
  ['Flowability', 'Important for feeding and dosing in automated processes'],
  ['Testing method', 'Ensures results are comparable and repeatable'],
  ['Batch / lot information', 'Enables traceability and consistency checks'],
];

/** Full article for the first post (mirrors the depth of the reference article). */
const gradesGuideBody: ContentBlock[] = [
  { type: 'p', html: 'Cast iron powder is used across a wide range of industrial processes, from powder metallurgy and friction materials to welding, brazing and chemical applications. Yet not every powder is the same. Choosing the wrong grade can lead to poor flow, inconsistent compaction, off-spec parts and wasted batches.' },
  { type: 'p', html: 'This guide breaks down the different <strong>types of cast iron powder</strong>, explains how each <strong>cast iron powder grade</strong> is classified, and walks through a practical method for selecting the right material for your process.' },
  { type: 'h2', html: '<strong>What Are Cast Iron Powder Grades?</strong>' },
  { type: 'p', html: 'A cast iron powder grade generally refers to the particle-size classification of the powder, usually expressed as a mesh size. Mesh size indicates how many openings a sieve has per linear inch: the higher the number, the finer the powder that passes through.' },
  { type: 'p', html: 'Grading matters because particle size directly influences how a powder behaves during handling, mixing, compacting and sintering. A grade suited to one application may perform poorly in another.' },
  { type: 'p', html: 'Manufacturers typically classify <strong>cast iron powder grades</strong> into ranges rather than single fixed sizes, since a controlled distribution of particle sizes usually gives the best process behaviour.' },
  { type: 'h3', html: '<strong>Why Grading Matters in Industrial Applications</strong>' },
  { type: 'ul', items: ['<strong>Consistency</strong> – a defined grade ensures every batch behaves the same way in your process.', '<strong>Compatibility</strong> – feeders, dies and mixers are calibrated for specific particle-size ranges.', '<strong>Performance</strong> – particle size affects density, flow and how particles bond under pressure.', '<strong>Cost efficiency</strong> – the correct grade reduces material waste and rework caused by processing issues.'] },
  { type: 'h2', html: '<strong>Common Types of Cast Iron Powder by Mesh Size</strong>' },
  { type: 'p', html: 'Cast iron powder is generally supplied across five standard mesh ranges, moving from coarse to fine.' },
  { type: 'h3', html: '<strong>Cast Iron Powder 10 to 30 Mesh</strong>' },
  { type: 'p', html: 'A coarse grade made up of comparatively large particles. It is commonly used where a free-flowing material is preferred, such as foundry additives and some welding fluxes.' },
  { type: 'h3', html: '<strong>Cast Iron Powder 30 to 60 Mesh</strong>' },
  { type: 'p', html: 'A mid-coarse grade that balances flow with a moderate particle size. It is often selected for processes that need a manageable, consistent feed.' },
  { type: 'h3', html: '<strong>Cast Iron Powder 60 to 100 Mesh</strong>' },
  { type: 'p', html: 'An intermediate grade used where a tighter particle-size distribution is needed for more controlled processing, such as friction materials.' },
  { type: 'h3', html: '<strong>Cast Iron Powder -100 Mesh</strong>' },
  { type: 'p', html: 'A fine grade where all particles pass a 100-mesh sieve. Finer powders have more surface area relative to volume, which changes how they pack and react.' },
  { type: 'h3', html: '<strong>Cast Iron Powder -120 Mesh</strong>' },
  { type: 'p', html: 'The finest standard grade. Very fine grades are chosen for applications that need dense packing, uniform distribution or a smooth surface finish.' },
  { type: 'p', html: '<a href="/products"><em>See the full range of cast iron powder grades →</em></a>' },
  { type: 'h2', html: '<strong>Other Ways Cast Iron Powder Is Classified</strong>' },
  { type: 'p', html: 'While mesh size is the most common classification, powders may also be described by other characteristics that affect performance.' },
  { type: 'h3', html: '<strong>By Production Method</strong>' },
  { type: 'ul', items: ['<strong>Reduced iron powder</strong> – produced through reduction processes; generally high purity with controlled particle characteristics. <a href="/reduction-grade-iron-powder-manufacturer">Learn more.</a>', '<strong>Atomised iron powder</strong> – produced by atomising molten metal, often giving more spherical particles.'] },
  { type: 'h3', html: '<strong>By Colour and Composition</strong>' },
  { type: 'ul', items: ['<strong>Black iron powder</strong> – a widely used variant known for consistent particle size, common in magnets and friction materials. <a href="/black-iron-powder">Explore black iron powder.</a>', '<strong>Pure / high-purity iron powder</strong> – used where chemical consistency is critical. <a href="/iron-powder-manufacturer">Explore high-purity powder.</a>'] },
  { type: 'h2', html: '<strong>How to Choose Cast Iron Powder: Step-by-Step</strong>' },
  { type: 'p', html: "Selecting the correct grade isn't just about picking a mesh size — it's about matching the powder's characteristics to your process." },
  { type: 'h3', html: '<strong>Step 1 – Define Your Application Requirements</strong>' },
  { type: 'p', html: 'Identify what the powder needs to do. Are you compacting it into components, using it as a friction material, blending it into a flux or using it in a chemical reaction?' },
  { type: 'h3', html: '<strong>Step 2 – Identify the Required Particle Size Range</strong>' },
  { type: 'p', html: 'Coarser grades (10–30, 30–60 mesh) suit applications needing free flow; finer grades (-100, -120 mesh) suit dense packing and uniform distribution.' },
  { type: 'h3', html: '<strong>Step 3 – Check Chemical Composition and Purity</strong>' },
  { type: 'p', html: 'Confirm carbon content, trace elements and purity levels against your specification, since they affect how the powder behaves in your process.' },
  { type: 'h3', html: '<strong>Step 4 – Review Physical Properties</strong>' },
  { type: 'p', html: 'Look at bulk density, flowability and moisture content alongside the grade. Two powders in the same mesh range can behave differently if these differ.' },
  { type: 'h3', html: '<strong>Step 5 – Request Samples and Test Reports</strong>' },
  { type: 'p', html: 'Before committing to a bulk order, request a sample and its test report so you can validate the grade in your own process.' },
  { type: 'h3', html: '<strong>Step 6 – Confirm Consistency Across Batches</strong>' },
  { type: 'p', html: 'Ask how the supplier maintains batch-to-batch consistency. A grade is only useful if it performs the same way every time you reorder.' },
  { type: 'h2', html: '<strong>Cast Iron Powder Specifications: What Buyers Should Check</strong>' },
  { type: 'p', html: 'When evaluating <strong>cast iron powder specifications</strong>, look beyond mesh size alone. A complete specification typically includes:' },
  { type: 'table', rows: specTable },
  { type: 'p', html: 'Having this information documented — ideally in a formal test report — lets buyers compare suppliers on a like-for-like basis.' },
  { type: 'h2', html: '<strong>Matching Cast Iron Powder Grades to Applications</strong>' },
  { type: 'ul', items: ['<strong>Coarser grades (10–30, 30–60 mesh):</strong> general industrial use where free flow and larger particle size are preferred.', '<strong>Mid-range grades (60–100 mesh):</strong> friction materials and compacting applications requiring a controlled particle size.', '<strong>Finer grades (-100, -120 mesh):</strong> dense packing, uniform distribution or fine surface characteristics.'] },
  { type: 'p', html: 'Always confirm the exact grade requirement with your process engineer or the relevant industry specification before finalising an order.' },
  { type: 'h2', html: '<strong>Common Mistakes When Selecting a Cast Iron Powder Grade</strong>' },
  { type: 'ul', items: ['Choosing a grade on mesh size alone, without checking chemistry or physical properties.', 'Assuming all suppliers test and classify grades the same way.', 'Overlooking batch-to-batch consistency when scaling from sample to bulk order.', 'Not requesting a test report or specification sheet before purchase.', 'Ignoring how moisture content or bulk density can affect performance within a grade.', 'Failing to match the grade to the actual process requirement rather than what is available.'] },
  { type: 'h2', html: '<strong>Conclusion</strong>' },
  { type: 'p', html: "Choosing the right <strong>cast iron powder grade</strong> comes down to understanding your application's requirements and matching them against particle size, chemistry and physical properties." },
  { type: 'p', html: `At <strong>${N}</strong> we manufacture cast iron powder across all standard grades — from 10–30 mesh to -120 mesh — with consistent quality backed by in-house testing. <a href="/contact">Contact us</a> for samples and specification sheets.` },
];

const gradesGuideFaqs: FaqItem[] = [
  { question: '1. What is a cast iron powder grade?', answer: 'A cast iron powder grade generally refers to its particle-size classification, usually expressed as a mesh size, along with related chemical and physical characteristics.' },
  { question: '2. What are the common types of cast iron powder?', answer: 'Cast iron powder is commonly supplied in mesh-based grades such as 10–30, 30–60, 60–100, -100 and -120 mesh, along with variants such as reduced, atomised and black iron powder.' },
  { question: '3. How do I know which grade I need?', answer: 'Start from your application: coarse grades for free-flowing uses, finer grades for dense packing. Then confirm chemistry and physical properties with a sample and test report.' },
  { question: '4. Can I get a custom mesh size?', answer: `Yes. ${N} produces custom fractions and blends to match specific process requirements.` },
  { question: '5. Does mesh size affect price?', answer: 'Finer grades require additional processing and generally cost slightly more per kilogram than coarse grades. Volume also affects pricing.' },
];

/** Builds a structured, article-length body for the remaining posts. */
function buildBody(title: string, topic: string): ContentBlock[] {
  const T = topic;
  return [
    { type: 'p', html: `${title.split(':')[0]} is a subject that comes up in almost every conversation we have with buyers of cast iron powder. Understanding ${T} helps engineers avoid wasted batches, reduce rework and keep production lines running predictably.` },
    { type: 'p', html: `In this article we explain what ${T} means in practice, why it matters for industrial users, and how to evaluate a supplier's approach to it before placing an order.` },
    { type: 'h2', html: `<strong>Why ${T[0].toUpperCase() + T.slice(1)} Matters</strong>` },
    { type: 'p', html: `Cast iron powder behaves differently depending on particle size, chemistry and physical properties. When ${T} is not properly controlled, users typically see inconsistent flow, variable compaction and finished parts that drift out of specification.` },
    { type: 'ul', items: [
      `<strong>Process stability</strong> – consistent ${T} keeps feeders, mixers and presses running within their calibrated ranges.`,
      '<strong>Product quality</strong> – finished components meet density, strength and surface-finish targets.',
      '<strong>Cost control</strong> – fewer rejected batches and less rework.',
      '<strong>Traceability</strong> – documented results make it easy to compare suppliers and lots.',
    ] },
    { type: 'h2', html: '<strong>Key Factors to Consider</strong>' },
    { type: 'h3', html: '<strong>1. Particle Size and Distribution</strong>' },
    { type: 'p', html: 'Mesh size defines the range of particle sizes in a powder. Coarser grades (10–30 and 30–60 mesh) flow freely, while finer grades (-100 and -120 mesh) pack more densely and react faster. The distribution within a grade is just as important as the nominal size.' },
    { type: 'h3', html: '<strong>2. Chemical Composition</strong>' },
    { type: 'p', html: 'Carbon, silicon, manganese and trace elements all influence hardness, wear resistance and reactivity. Ask for a spectrometer report with every lot.' },
    { type: 'h3', html: '<strong>3. Physical Properties</strong>' },
    { type: 'p', html: 'Apparent density, flow rate and moisture content determine how the powder handles on the shop floor. Two powders with the same mesh size can still behave very differently if these properties differ.' },
    { type: 'h3', html: '<strong>4. Supplier Capability</strong>' },
    { type: 'p', html: `A manufacturer with an in-house laboratory, certified quality systems and sufficient capacity is far more likely to deliver consistent ${T} from one order to the next.` },
    { type: 'h2', html: '<strong>What to Check on a Specification Sheet</strong>' },
    { type: 'table', rows: specTable },
    { type: 'h2', html: `<strong>How ${N} Approaches ${T[0].toUpperCase() + T.slice(1)}</strong>` },
    { type: 'p', html: `At ${N} every batch is sampled and tested in our own laboratory before dispatch. We run four production lines with a combined capacity of around 1500 tons a month, which lets us dedicate capacity to individual grades and keep results consistent.` },
    { type: 'ul', items: [
      'ISO 9001:2015 and ISO 14001:2015 certified operations.',
      'Spectrometer analysis of chemical composition on every lot.',
      'Sieve analysis, apparent density and flow testing recorded on the test certificate.',
      'Free samples so you can validate the grade in your own process before ordering in bulk.',
    ] },
    { type: 'h2', html: '<strong>Practical Tips for Buyers</strong>' },
    { type: 'ul', items: [
      'Define the application first, then choose the grade — never the other way round.',
      'Request a sample and its test report before committing to a bulk order.',
      'Confirm how the supplier maintains batch-to-batch consistency.',
      'Agree packaging and moisture protection for transit, especially for export shipments.',
      'Keep a reference sample from each lot for comparison.',
    ] },
    { type: 'h2', html: '<strong>Conclusion</strong>' },
    { type: 'p', html: `Getting ${T} right is one of the simplest ways to protect product quality and production costs. Work with a manufacturer that tests every lot, documents the results and is willing to send samples.` },
    { type: 'p', html: `<strong>${N}</strong> manufactures cast iron powder in every standard grade with consistent, laboratory-verified quality. <a href="/contact">Contact us</a> or <a href="/get-free-sample">request a free sample</a> to get started.` },
  ];
}

function buildFaqs(topic: string): FaqItem[] {
  return [
    { question: `1. Why is ${topic} important for cast iron powder buyers?`, answer: `Because it directly affects flow, compaction and the consistency of finished parts. Controlling ${topic} reduces rejected batches and rework.` },
    { question: '2. Which grades of cast iron powder are available?', answer: `${N} supplies 10–30, 30–60, 60–100, -100 and -120 mesh, plus custom fractions on request.` },
    { question: '3. Can I test the powder before ordering in bulk?', answer: 'Yes. Request a free sample and a test certificate, then validate the grade in your own process.' },
    { question: '4. How is quality verified?', answer: 'Every lot is tested in-house for chemical composition, sieve analysis, apparent density, flow rate and moisture content.' },
    { question: '5. Do you export cast iron powder?', answer: `Yes. ${N} is a government-recognised export house and ships to customers in Europe, North America, the Middle East and Asia.` },
  ];
}

const START = new Date('2026-09-01T00:00:00Z').getTime();

export const blogPosts: BlogPost[] = titles.map(([slug, title, topic], i) => ({
  slug,
  title,
  image: images[i],
  excerpt: `A practical look at ${topic} for buyers and engineers working with cast iron powder.`,
  date: new Date(START - i * 9 * 86400000).toISOString().slice(0, 10),
  body: i === 0 ? gradesGuideBody : buildBody(title, topic),
  faqs: i === 0 ? gradesGuideFaqs : buildFaqs(topic),
}));

export const BLOG_PAGE_SIZE = 12;

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
