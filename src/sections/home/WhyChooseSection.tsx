import { site } from '@/config/site';

const reasons: { title: string; text: string }[] = [
  {
    title: 'Industry Leadership',
    text: `As a leading manufacturer of <b>cast iron powder in India</b>, ${site.name} sets the benchmark for innovation and dependability. Our modern manufacturing facilities let us meet the varied needs of clients efficiently and consistently.`,
  },
  {
    title: 'Quality Assurance',
    text: `At ${site.name} we follow strict quality-control procedures at every stage of production. Whether you need <b>cast iron powder</b> for industrial applications or specialised uses, every product meets the highest quality and durability standards.`,
  },
  {
    title: 'Comprehensive Product Range',
    text: 'We offer a wide selection of cast iron powder products suited to industries including automotive, construction, manufacturing and more.',
  },
  {
    title: 'State-of-the-Art Manufacturing Facilities',
    text: 'Our production units use the latest technology so that our <b>cast iron powder</b> is made to the highest standards. An in-house lab tests the chemical and physical properties of every batch for consistency and quality.',
  },
  {
    title: 'Global Presence',
    text: 'We supply industries worldwide with reliable <b>cast iron powder</b> that satisfies the demands of global markets. Our attention to quality and on-time delivery makes us a trusted partner for businesses across Europe, North America and Asia.',
  },
  {
    title: 'Commitment to Sustainability',
    text: 'We are committed to sustainability and environmental responsibility. Efficient manufacturing practices and responsible resource management keep our environmental footprint low while producing high-quality products.',
  },
  {
    title: 'Customer-Centric Approach',
    text: `At ${site.name} customer satisfaction comes first. Our experts work closely with every client to understand their specific needs and deliver reliable, customised solutions that exceed expectations.`,
  },
];

/** Reference `.Why_Choose_section`: #f5f5f5 band, 70px padding, H2 + bare list items. */
export function WhyChooseSection() {
  return (
    <section className="bg-band py-[70px]">
      <div className="container">
        <h2 className="font-semibold text-brand pb-[10px]">Why Choose {site.name} for Cast Iron Powder?</h2>
        <ul className="why-list list-disc list-outside pl-0 mb-0">
          {reasons.map((r) => (
            <li key={r.title}>
              <b>{r.title}: </b>
              <span dangerouslySetInnerHTML={{ __html: r.text }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
