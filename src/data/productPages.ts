import type { ProductPage } from '@/types';
import { site } from '@/config/site';

const N = site.name;
const IMG = '/images/products/detail.svg';

export const productPages: ProductPage[] = [
  {
    slug: 'iron-powder-manufacturer',
    navLabel: 'Iron Powder Manufacturer',
    title: 'Iron Powder Manufacturer in India',
    metaTitle: `Iron Powder Manufacturer in India | ${N}`,
    metaDescription: `${N} is a trusted iron powder manufacturer in India supplying high-purity, black and specialised iron powders for metallurgy, automotive and chemical industries.`,
    image: IMG,
    intro: [
      'Iron powder is an essential raw material across many industries, from metallurgy and automotive to electronics and chemical processing. It is used mainly to produce high-grade components for powder metallurgy, additive manufacturing and magnetic material production. Prized for its purity, density and versatility, iron powder is among the most sought-after industrial materials on the market.',
      `In India, where industrial growth continues at pace, demand for high-quality iron powder has risen sharply. Among the producers serving this need, ${N} has built a strong reputation. As a dependable <b>iron powder manufacturer in India,</b> ${N} produces a broad range of iron powders including high-purity iron powder, black iron powder and other specialised variants.`,
    ],
    leadHeading: `High Purity Iron Powder by ${N}`,
    leadBlocks: [
      { type: 'p', html: `At ${N} we are proud to rank among the leading <b>iron powder manufacturers in India</b>. Our high-purity iron powder is one of the most requested products in our range. Made under tight quality controls, our <b>high purity iron powder</b> offers outstanding consistency, quality and performance.` },
      { type: 'p', html: `We use modern technology and precision machinery to produce <b>pure iron powder</b> that is exceptionally uniform in particle size and chemical composition. Whether you need iron powder online or in bulk, ${N} is your reliable <b>iron powder supplier</b> in India.` },
      { type: 'h3', html: 'Wide Range of Iron Powder Products' },
      { type: 'p', html: `As an established <b>iron powder manufacturer,</b> ${N} offers a diverse selection of iron powder products to match the varied needs of our customers. Our principal products include:` },
    ],
    bodyBlocks: [
      {
        type: 'ol',
        items: [
          '<strong>Pure Iron Powder:</strong><p>Our flagship product, engineered to satisfy the demanding requirements of powder metallurgy, magnetic material production and additive manufacturing.</p>',
          '<strong>Black Iron Powder:</strong><p>Widely used in magnets, friction materials and many other industrial applications. It is produced with a carefully controlled particle size and uniform distribution for optimum performance.</p>',
          '<strong>High Purity Iron Powder:</strong><p>Ideal wherever ultra-pure iron is required to create highly precise components with excellent mechanical properties.</p>',
          '<strong>Iron Powder for Additive Manufacturing:</strong><p>With 3D printing on the rise, our <b>iron powder for additive manufacturing</b> has become increasingly popular. It is formulated to flow smoothly through the additive process and yield high-quality printed parts.</p>',
          '<strong>Iron Powder for Metallurgy:</strong><p>Our powders are also used extensively in powder metallurgy, where high density and specific flow properties are essential for component production.</p>',
        ],
      },
      { type: 'h3', html: 'Quality Assurance and Manufacturing Process' },
      { type: 'p', html: `At ${N} we understand how critical quality is in iron powder manufacturing. As a top-tier <b>iron powder supplier in India</b>, we follow the strictest standards so that every batch meets or exceeds industry expectations. Each lot passes rigorous quality checks at every stage of production.` },
      { type: 'p', html: 'The process starts with careful selection of raw material — only iron of the highest quality and purity enters production. We then apply advanced processing techniques such as atomisation, reduction and crushing to convert the iron into powder form. The result is a fine, highly uniform, high-performance powder suited to a wide array of applications.' },
      { type: 'h3', html: 'Iron Powder for Multiple Industries' },
      {
        type: 'ol',
        items: [
          '<strong>Powder Metallurgy:</strong> Iron powder is widely used to manufacture parts with high strength, wear resistance and dimensional accuracy.',
          '<strong>Additive Manufacturing (3D Printing):</strong> Iron powder has become a staple for producing strong, lightweight parts in aerospace, automotive and electronics.',
          '<strong>Magnetic Materials:</strong> Iron powder plays a key role in magnetic cores, inductors and transformers.',
          '<strong>Friction Materials:</strong> The automotive industry uses iron powder in brake pads and other friction materials for its strength and durability.',
          '<strong>Chemical Industries:</strong> Iron powder also serves in catalyst production and as a reducing agent in many chemical reactions.',
        ],
      },
      { type: 'h3', html: `Why Choose ${N} for Iron Powder?` },
      { type: 'p', html: `As one of the leading <b>iron powder manufacturers in India,</b> ${N} is committed to delivering top-quality products with unmatched consistency and reliability. Here is why customers choose us as their <b>iron powder supplier</b>:` },
      {
        type: 'ol',
        items: [
          '<strong>High Purity and Consistency:</strong> Our <b>high purity iron powder</b> meets the strictest standards so your processes run smoothly and efficiently.',
          '<strong>Diverse Product Range:</strong> We provide a wide selection of <b>iron powders</b> tailored to different industrial needs, including <b>black iron powder, pure iron powder,</b> and <b>iron powder for additive manufacturing.</b>',
          '<strong>Advanced Manufacturing Techniques:</strong> We employ the latest technology and processes so that our products meet industry specifications.',
          '<strong>Competitive Pricing:</strong> We know cost-effectiveness matters. We offer premium iron powder at competitive prices that deliver real value.',
          '<strong>On-Time Delivery:</strong> A robust distribution network ensures timely delivery of <b>iron powder online</b> or in bulk, keeping your projects on schedule.',
          '<strong>Customer Satisfaction:</strong> Our team is always ready to assist, answer questions and advise on the right <b>iron powder</b> for your application.',
        ],
      },
      { type: 'p', html: `If you are looking for a reliable <b>iron powder manufacturer in India,</b> ${N} is your trusted partner. With our commitment to quality, a diverse product range and a customer-first approach, we have become a leading name in the iron powder industry. Whether you need <b>pure iron powder, high purity iron powder,</b> or <b>black iron powder,</b> we are here to fulfil your requirements.` },
      { type: 'p', html: `<strong>Choose ${N}</strong> as your <b>iron powder supplier in India</b> and experience the best in quality and service. <b><a href="/contact">Contact us today</a></b> for more information, or explore our range of products online to place your order!` },
    ],
    faqs: [
      { question: '1. What is iron powder, and how is it produced?', answer: 'Iron powder is finely divided iron used in applications such as powder metallurgy, welding and cosmetics. It is produced through methods such as atomisation, reduction and electrolysis.' },
      { question: '2. What are the primary types of iron powder?', answer: '<ul><li><strong>Atomised Iron Powder:</strong> Made by atomising molten iron; uniform particle size and high purity.</li><li><strong>Reduced Iron Powder:</strong> Produced by reducing iron oxide with hydrogen; high purity for a wide range of uses.</li><li><strong>Electrolytic Iron Powder:</strong> Produced through electrolysis; very high purity and fine particle size, ideal for uses such as food fortification.</li></ul>' },
      { question: '3. What are the main uses of iron powder?', answer: 'Iron powder is used in automotive parts, metallurgy, chemical processes, construction, friction materials, coatings and welding. Custom grades are also supplied for research and small-scale applications.' },
      { question: `4. What products does ${N} offer?`, answer: `${N} specialises in manufacturing <b><a href="/">cast iron powder</a></b> in several mesh sizes to meet diverse industrial needs. Available grades include:<ul><li>Cast Iron Powder 10–30 Mesh</li><li>Cast Iron Powder 30–60 Mesh</li><li>Cast Iron Powder 60–100 Mesh</li><li>Cast Iron Powder 100 Mesh</li><li>Cast Iron Powder 120 Mesh</li></ul>These products are widely used in automotive, metallurgy and construction.` },
      { question: '5. How do manufacturers in India ensure the quality of iron powder?', answer: `Trusted suppliers such as ${N} use advanced spectrometers, in-house testing and strict <b><a href="/quality">quality</a></b> checks on every batch to maintain consistency, purity and performance.` },
    ],
  },
  {
    slug: 'reduction-grade-iron-powder-manufacturer',
    navLabel: 'Reduction Grade Iron Powder Manufacturer',
    title: 'Reduction Grade Iron Powder Manufacturer in India',
    metaTitle: `Reduction Grade Iron Powder Manufacturer in India | ${N}`,
    metaDescription: `${N} manufactures reduction grade iron powder in India for sintered components, chemical and industrial applications with consistent purity and particle size.`,
    image: IMG,
    intro: [
      'Reduction grade iron powder is produced by reducing iron oxide or mill scale at high temperature, yielding a sponge-like particle with excellent compressibility and green strength. These properties make it the preferred feedstock for sintered components, self-lubricating bearings and many chemical processes.',
      `${N} has invested in dedicated reduction furnaces and screening lines so that every lot of <b>reduction grade iron powder</b> leaves our Ahmedabad facility within a tightly controlled specification. As a leading <b>reduction grade iron powder manufacturer in India,</b> we supply both domestic and export customers with consistent, well-documented material.`,
    ],
    leadHeading: 'What is Reduction Grade Iron Powder?',
    leadBlocks: [
      { type: 'p', html: 'Reduction grade iron powder — often called sponge iron powder — is made by heating iron oxide in the presence of a reducing agent such as carbon or hydrogen. Oxygen is stripped from the oxide, leaving porous iron particles that are then crushed, annealed and sieved into precise mesh fractions.' },
      { type: 'p', html: 'Because the particles are irregular and porous, they interlock under pressure. This gives compacts made from <b>reduced iron powder</b> a high green strength and makes the powder ideal for structural parts produced by press-and-sinter methods.' },
      { type: 'h3', html: `Why Choose ${N} for Reduction Grade Iron Powder?` },
      { type: 'p', html: 'Our in-house laboratory verifies apparent density, flow rate, hydrogen loss and sieve analysis on every batch, so you receive material that behaves the same way from one delivery to the next. Key advantages of working with us include:' },
    ],
    bodyBlocks: [
      {
        type: 'ol',
        items: [
          '<strong>Controlled Purity:</strong><p>Low residual oxygen and carefully managed carbon levels give a clean, reactive powder suited to both metallurgical and chemical use.</p>',
          '<strong>Consistent Particle Size:</strong><p>Multi-deck screening lines deliver mesh fractions from 10–30 down to -120 with minimal batch-to-batch variation.</p>',
          '<strong>Excellent Compressibility:</strong><p>The sponge structure of our reduced powder compacts readily, producing dense, strong green parts with fewer press defects.</p>',
          '<strong>Large Capacity:</strong><p>Four production lines and a combined output of around 1500 tons a month let us support high-volume programmes without delay.</p>',
          '<strong>Documented Quality:</strong><p>Every consignment ships with a test certificate covering chemistry, sieve analysis and physical properties.</p>',
        ],
      },
      { type: 'h3', html: 'Applications of Reduction Grade Iron Powder' },
      { type: 'p', html: 'Reduction grade iron powder is used wherever strength, purity and predictable behaviour matter. Typical applications include:' },
      {
        type: 'ol',
        items: [
          '<strong>Sintered Structural Parts:</strong> Gears, sprockets, bushes and other components produced by powder metallurgy.',
          '<strong>Self-Lubricating Bearings:</strong> Porous bearings that retain oil thanks to the powder\'s natural porosity.',
          '<strong>Welding Electrodes and Fluxes:</strong> Iron powder coatings improve deposition rates and arc stability.',
          '<strong>Chemical Reduction:</strong> Used as a reducing agent in the manufacture of dyes, pigments and pharmaceuticals.',
          '<strong>Soil and Water Treatment:</strong> Reactive iron for remediation and oxygen-scavenging products.',
        ],
      },
      { type: 'h3', html: `Why ${N} is the Best Choice for Your Iron Powder Needs` },
      { type: 'p', html: `With more than three decades in metal powders, ${N} combines scale with attention to detail. Our customers benefit from:` },
      {
        type: 'ol',
        items: [
          '<strong>Certified Systems:</strong> ISO 9001:2015 and ISO 14001:2015 certified operations, with GMP compliance for sensitive applications.',
          '<strong>Custom Grades:</strong> Special mesh fractions, blends and packing options developed around your process.',
          '<strong>Export Expertise:</strong> Government-recognised export house with experience shipping to Europe, North America and Asia.',
          '<strong>Competitive Pricing:</strong> Efficient production keeps costs predictable, even for large contracts.',
          '<strong>Responsive Support:</strong> A technical team that answers quickly and helps you troubleshoot on the shop floor.',
        ],
      },
      { type: 'p', html: `Looking for a dependable <b>reduction grade iron powder manufacturer in India</b>? <b><a href="/contact">Contact ${N}</a></b> for samples, test reports and a quotation tailored to your requirement.` },
    ],
    faqs: [
      { question: '1. What is reduction grade iron powder?', answer: 'It is iron powder produced by reducing iron oxide at high temperature, giving porous sponge-like particles with high compressibility and green strength.' },
      { question: '2. How is it different from atomised iron powder?', answer: 'Atomised powder is made by breaking up molten iron with water or gas jets and has rounder particles. Reduced powder is more irregular and porous, which improves green strength but slightly lowers apparent density.' },
      { question: '3. Which mesh sizes are available?', answer: `${N} supplies reduction grade iron powder in 10–30, 30–60, 60–100, -100 and -120 mesh, with custom fractions on request.` },
      { question: '4. Do you supply test certificates?', answer: 'Yes. Every consignment ships with a certificate covering chemical composition, sieve analysis, apparent density and flow rate.' },
      { question: '5. Can I get a sample before ordering?', answer: `Yes. Use the <b><a href="/get-free-sample">Get Free Sample</a></b> form and our team will dispatch a sample of the grade you require.` },
    ],
  },
  {
    slug: 'iron-metal-powder-manufacturer',
    navLabel: 'Iron Metal Powder Manufacturers',
    title: 'Iron Metal Powder Manufacturers in India',
    metaTitle: `Iron Metal Powder Manufacturers in India | ${N}`,
    metaDescription: `${N} is among the leading iron metal powder manufacturers in India, supplying consistent grades for automotive, metallurgy, magnetic and chemical applications.`,
    image: IMG,
    intro: [
      'Iron metal powder is the backbone of modern powder metallurgy. From the sintered gears in a gearbox to the soft-magnetic cores inside electric motors, finely divided iron gives engineers a way to make complex, near-net-shape parts with very little waste.',
      `${N} has been producing iron metal powder in Ahmedabad since ${site.foundedYear}. Our plant combines melting, crushing, reduction and precision screening under one roof, which is why buyers across India and overseas count us among the most dependable <b>iron metal powder manufacturers in India</b>.`,
    ],
    leadHeading: 'What is Iron Metal Powder?',
    leadBlocks: [
      { type: 'p', html: 'Iron metal powder is elemental iron in particulate form, typically ranging from a few microns up to two millimetres. It can be produced by atomisation, reduction, electrolysis or mechanical crushing, and each route gives particles with a distinct shape, density and purity.' },
      { type: 'p', html: 'The powder is then classified into mesh fractions and, where required, annealed or blended with alloying additions. The resulting material is pressed, sintered, sprayed or reacted depending on the end use.' },
      { type: 'h3', html: 'Applications of Iron Metal Powder Across Industries' },
      { type: 'p', html: 'Because iron is inexpensive, strong and magnetically soft, its powder finds its way into an unusually wide range of products. Our customers typically use it for:' },
    ],
    bodyBlocks: [
      {
        type: 'ol',
        items: [
          '<strong>Automotive Components:</strong><p>Sintered gears, connecting rods, valve seats and brake friction materials.</p>',
          '<strong>Electrical and Magnetic Parts:</strong><p>Soft-magnetic composites for motors, inductors and sensors.</p>',
          '<strong>Welding and Cutting:</strong><p>Iron powder electrodes, flux-cored wires and thermal-lance consumables.</p>',
          '<strong>Chemical Processing:</strong><p>Catalyst supports, reducing agents and oxygen absorbers for packaging.</p>',
          '<strong>Construction and Tooling:</strong><p>Heavy-weight concrete, radiation shielding and metal-bond diamond tools.</p>',
        ],
      },
      { type: 'h3', html: `Why Choose ${N} for Iron Metal Powder?` },
      { type: 'p', html: 'A good metal powder supplier does more than ship material. We support your process with data, samples and rapid technical answers. Our strengths include:' },
      {
        type: 'ol',
        items: [
          '<strong>Integrated Production:</strong> Four lines with a combined capacity of roughly 1500 tons per month.',
          '<strong>In-House Laboratory:</strong> Spectrometer, sieve shakers and Hall flowmeters for complete batch testing.',
          '<strong>Certified Quality:</strong> ISO 9001:2015, ISO 14001:2015 and GMP-compliant systems.',
          '<strong>Export Ready:</strong> Government-approved export house with customs-approved self-stuffing facilities.',
          '<strong>Flexible Packing:</strong> 25 kg bags, 50 kg drums or 1-ton jumbo bags, palletised and shrink-wrapped.',
        ],
      },
      { type: 'h3', html: 'The Growing Demand for Metal Powder Manufacturers in India' },
      { type: 'p', html: 'India\'s automotive, electrical and infrastructure sectors are expanding rapidly, and every one of them consumes more powder metallurgy parts each year. Government initiatives supporting domestic manufacturing have further increased demand for reliable local powder suppliers who can match international specifications.' },
      { type: 'h3', html: `Innovation at ${N}` },
      { type: 'p', html: 'We continually refine our screening and annealing processes to tighten particle-size distribution and lower residual oxygen. Recent investments in closed-loop dust collection and energy-efficient furnaces have also reduced the environmental footprint of every ton we ship.' },
      { type: 'h3', html: 'Why Iron Metal Powder is the Future of Manufacturing' },
      { type: 'p', html: 'Powder metallurgy uses up to 97 % of its raw material, compared with as little as 50 % for machining from bar stock. As manufacturers look for lighter, cheaper and more sustainable parts, iron metal powder will remain one of the most important engineering materials of the coming decade.' },
      { type: 'p', html: `Partner with one of the most trusted <b>iron metal powder manufacturers in India</b>. <b><a href="/contact">Get in touch with ${N}</a></b> to discuss your specification.` },
    ],
    faqs: [
      { question: '1. What is iron metal powder used for?', answer: 'Iron metal powder is used in sintered automotive parts, magnetic cores, welding consumables, chemical reduction, heavy concrete and diamond tooling.' },
      { question: '2. Which production method gives the best powder?', answer: 'It depends on the application. Reduced powder offers high green strength, atomised powder gives high density and electrolytic powder provides the highest purity.' },
      { question: '3. What packaging options are available?', answer: '25 kg bags, 50 kg drums and 1-ton jumbo bags, palletised and shrink-wrapped for safe transport.' },
      { question: '4. Do you export iron metal powder?', answer: `Yes. ${N} is a government-recognised export house and ships regularly to Europe, North America, the Middle East and Southeast Asia.` },
      { question: '5. How quickly can you deliver?', answer: 'Standard grades are usually stocked and dispatched within days. Custom grades typically take two to three weeks depending on quantity.' },
    ],
  },
  {
    slug: 'black-iron-powder',
    navLabel: 'Black Iron Powder Manufacturer',
    title: 'Black Iron Powder Manufacturer in India',
    metaTitle: `Black Iron Powder Manufacturer in India | ${N}`,
    metaDescription: `${N} manufactures black iron powder in India for magnets, friction materials, welding and chemical applications, with consistent particle size and purity.`,
    image: IMG,
    intro: [
      'Black iron powder is a dark, fine-grained iron powder valued for its uniform particle distribution and reactive surface. It is a key ingredient in magnets, friction materials, welding consumables and a range of chemical products.',
      `At ${N} we produce black iron powder on dedicated lines to keep colour, particle size and chemistry consistent. Our position as a leading <b>black iron powder manufacturer in India</b> is built on decades of experience and an uncompromising approach to quality control.`,
    ],
    leadHeading: 'What is Black Iron Powder?',
    leadBlocks: [
      { type: 'p', html: 'Black iron powder is produced by grinding and screening cast iron or reduced iron, followed by controlled surface treatment that gives the particles their characteristic dark colour. The powder is then classified into mesh fractions ranging from coarse (10–30 mesh) to very fine (-120 mesh).' },
      { type: 'p', html: 'The combination of higher carbon content and a fine, irregular particle shape makes <b>black iron powder</b> hard-wearing and easy to bond with resins, which is why it is favoured in friction and magnetic applications.' },
      { type: 'h3', html: 'Diverse Applications of Black Iron Powder' },
      { type: 'p', html: 'Our customers use black iron powder in a surprising variety of products. The most common applications are:' },
    ],
    bodyBlocks: [
      {
        type: 'ol',
        items: [
          '<strong>Magnets and Magnetic Composites:</strong><p>Bonded magnets, magnetic inks and toner formulations.</p>',
          '<strong>Friction Materials:</strong><p>Brake pads, clutch facings and industrial brake linings where wear resistance is critical.</p>',
          '<strong>Welding Consumables:</strong><p>Electrode coatings and fluxes that need a high iron content.</p>',
          '<strong>Chemical Applications:</strong><p>Oxygen scavengers, hand-warmers and reducing agents.</p>',
          '<strong>Pyrotechnics and Coatings:</strong><p>Spark effects, anti-slip coatings and radiation shielding compounds.</p>',
        ],
      },
      { type: 'h3', html: 'Quality Control and Manufacturing Excellence' },
      { type: 'p', html: 'Every batch of black iron powder is sampled and tested in our in-house laboratory for chemistry, sieve analysis, apparent density and moisture. Our spectrometer confirms carbon and trace-element levels, and we retain reference samples for full traceability.' },
      { type: 'p', html: 'Production runs on four independent lines, allowing us to dedicate capacity to specific grades and avoid cross-contamination between products.' },
      { type: 'h3', html: `Why Choose ${N} for Black Iron Powder?` },
      {
        type: 'ol',
        items: [
          '<strong>Consistent Colour and Size:</strong> Controlled processing keeps every lot visually and physically uniform.',
          '<strong>Wide Mesh Range:</strong> From 10–30 mesh to -120 mesh, plus custom fractions.',
          '<strong>Certified Operations:</strong> ISO 9001:2015, ISO 14001:2015 and GMP-compliant manufacturing.',
          '<strong>Reliable Supply:</strong> Around 1500 tons per month of combined capacity across our lines.',
          '<strong>Technical Support:</strong> Help selecting the right grade and troubleshooting your process.',
          '<strong>Competitive Pricing:</strong> Efficient, high-volume production keeps costs down.',
        ],
      },
      { type: 'h3', html: 'Order Black Iron Powder Online' },
      { type: 'p', html: `Ordering is simple: tell us the grade, quantity and destination using the enquiry form above or our <b><a href="/contact">contact page</a></b>, and we will respond with a quotation and lead time. Samples are available through the <b><a href="/get-free-sample">Get Free Sample</a></b> page.` },
      { type: 'p', html: `<strong>Choose ${N}</strong>, the <b>black iron powder manufacturer in India</b> that industry professionals trust for quality, consistency and service.` },
    ],
    faqs: [
      { question: '1. What is black iron powder?', answer: 'Black iron powder is a fine, dark iron powder with a slightly higher carbon content, valued for its uniform particle distribution and reactive surface.' },
      { question: '2. What is it used for?', answer: 'Magnets, brake friction materials, welding consumables, oxygen scavengers, hand-warmers, pyrotechnics and protective coatings.' },
      { question: '3. Is black iron powder the same as magnetite?', answer: 'No. Magnetite is an iron oxide mineral, whereas black iron powder is metallic iron with a dark surface finish.' },
      { question: '4. Which mesh sizes do you supply?', answer: '10–30, 30–60, 60–100, -100 and -120 mesh as standard, with custom fractions available on request.' },
      { question: '5. How should black iron powder be stored?', answer: 'Keep it sealed in a cool, dry place away from moisture and strong oxidisers to preserve its reactivity and colour.' },
    ],
  },
];

export const getProductPage = (slug: string) => productPages.find((p) => p.slug === slug);
