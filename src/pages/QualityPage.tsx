import { Link } from 'react-router-dom';
import { PageBanner } from '@/components/PageBanner';
import { site } from '@/config/site';
import { useSeo } from '@/hooks/useSeo';
import { webPageLd } from '@/utils/jsonLd';

const description = `${site.name} maintains strict quality control across every batch of cast iron powder manufactured in Ahmedabad, backed by in-house laboratory testing.`;

export function QualityPage() {
  useSeo({
    title: `Quality | ${site.name} – Cast Iron Powder Manufacturer in Ahmedabad`,
    description,
    jsonLd: [webPageLd('Quality', '/quality', description)],
  });

  return (
    <>
      <PageBanner title="Quality" crumbs={[{ label: 'Home', to: '/' }, { label: 'Quality' }]} />

      <section className="ftco-section !pt-0 !pb-0 mt-4">
        <div className="container md:px-0">
          <br />
          <br />
          <div className="row no-gutters">
            <div className="w-full">
              <h2>
                <b>{site.name}: Your Trusted Cast Iron Powder Manufacturer in Ahmedabad</b>
              </h2>
              <p>
                Welcome to {site.name}, your first choice for high-quality{' '}
                <b>
                  <Link to="/">Cast Iron Powder</Link>
                </b>{' '}
                solutions. Based in Ahmedabad, we are proud to be the largest manufacturer of iron powder in India, serving a
                diverse clientele with excellence and innovation.
              </p>
              <p>
                At {site.name} we have established ourselves as pioneers in <b>Cast Iron Powder manufacturing in Ahmedabad.</b> With a
                robust infrastructure and up-to-date technology we have set new benchmarks for the industry. Our modern facility in
                Ahmedabad houses several production lines dedicated to producing cast iron powder of the highest quality and
                standard.
              </p>
              <p>
                What sets us apart is our commitment to precision and reliability. We apply stringent quality-control measures at
                every production stage, ensuring each batch of cast iron powder meets and exceeds industry standards. This
                dedication has earned us the trust and loyalty of customers across many sectors, from automotive to construction and
                beyond.
              </p>
              <p>
                As the largest manufacturer of iron powder in India, we take pride in our capacity to meet the changing demands of the
                market. Our production capabilities let us deliver consistently high volumes of cast iron powder without compromising
                quality, so clients receive timely deliveries even for large-scale projects.
              </p>
              <h3>
                <b>Leaders in Cast Iron Powder Manufacturing</b>
              </h3>
              <p>
                {site.name} operates from an advanced manufacturing facility in Ahmedabad, equipped with modern technology and supported
                by a skilled workforce. This infrastructure lets us maintain the highest standards of production efficiency and
                product quality. Our dedication to excellence has earned us the reputation of being the largest manufacturer of iron
                powder in India, serving a wide range of industrial applications.
              </p>
              <h3>
                <b>Diverse Applications</b>
              </h3>
              <p>
                {site.name}'s <b>iron powder in Ahmedabad</b> is used extensively across industries including automotive, construction,
                metallurgy and more. Known for superior metallurgical properties and durability, our powder improves the performance
                and longevity of end products. Whether used in automotive parts, structural components or as a key ingredient in
                metallurgical processes, our products deliver consistently exceptional results.
              </p>
              <h3>
                <b>Customised Solutions</b>
              </h3>
              <p>
                Recognising that every customer has unique requirements, we offer tailored solutions for specific applications. Our
                experienced team works closely with clients to develop custom formulations and adjust particle sizes as needed. This
                personalised approach ensures optimum performance and cost-effectiveness, making {site.name} a preferred partner for
                industries seeking reliable cast iron powder.
              </p>
              <h3>
                <b>Commitment to Sustainability</b>
              </h3>
              <p>
                {site.name} is committed to sustainable practices and environmental responsibility. We integrate eco-friendly
                technologies and processes into our operations to minimise environmental impact and conserve resources. By
                prioritising sustainability we contribute to a cleaner environment while maintaining the integrity and quality of our
                products.
              </p>
              <h3>
                <b>Global Presence, Local Expertise</b>
              </h3>
              <p>
                With a strong global presence and deep local expertise in Ahmedabad, {site.name} efficiently serves a diverse clientele
                across India and beyond. Our strategic location enables timely deliveries and responsive customer support, ensuring
                seamless operations for our valued partners.
              </p>
              <p>
                {site.name} sets the benchmark for excellence in cast{' '}
                <b>
                  <Link to="/iron-powder-manufacturer">iron powder manufacturing in Ahmedabad</Link>
                </b>{' '}
                and across India. With a robust infrastructure, dedication to quality and a customer-centric approach, we continue to
                redefine industry standards. Partner with {site.name} and unlock the potential of superior cast iron powder solutions
                that move your business forward. Your success is our priority, and we look forward to serving you with our expertise
                and passion for excellence.
              </p>
              <p> </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
