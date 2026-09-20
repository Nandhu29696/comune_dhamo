import { Link } from 'react-router-dom';
import { PageBanner } from '@/components/PageBanner';
import { InfraCard } from '@/components/cards/InfraCard';
import { TeamCard } from '@/components/cards/TeamCard';
import { Lightbox, useLightbox } from '@/components/ui/Lightbox';
import { FaqSection } from '@/sections/FaqSection';
import { site } from '@/config/site';
import { contentService } from '@/services/content';
import { useSeo } from '@/hooks/useSeo';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { faqLd, webPageLd } from '@/utils/jsonLd';

const description = `Learn about ${site.name}, an ISO-certified cast iron powder manufacturer and exporter based in Ahmedabad, India, with four production lines and an in-house laboratory.`;

export function AboutPage() {
  const faqs = contentService.faqs.about;
  const infra = contentService.infra();
  const lightbox = useLightbox();
  const welcomeRef = useRevealOnScroll<HTMLDivElement>();
  const infraRef = useRevealOnScroll<HTMLDivElement>();
  const teamRef = useRevealOnScroll<HTMLDivElement>();

  useSeo({
    title: `About Us | ${site.name} – Cast Iron Powder Manufacturer`,
    description,
    jsonLd: [webPageLd('About Us', '/about', description), faqLd(faqs)],
  });

  return (
    <>
      <PageBanner title="About Us" crumbs={[{ label: 'Home', to: '/' }, { label: 'About us' }]} />

      {/* Welcome */}
      <section className="ftco-section !pt-0 !pb-0 mt-[80px]">
        <div className="container md:px-0">
          <div className="row">
            <div className="col md:w-1/3">
              <img src="/images/about/intro.svg" alt={site.name} className="w-full h-auto object-contain" width={1600} height={1187} />
            </div>
            <div className="col md:w-2/3 md:pl-12">
              <div className="row justify-start">
                <div ref={welcomeRef} className="col text-justify-copy">
                  <h2 className="mb-6 text-[28px] md:text-[30px] font-bold">WELCOME TO {site.name.toUpperCase()}</h2>
                  <p>
                    We at {site.name} are based in Ahmedabad (Gujarat), India. Our father {site.founder} founded the business in{' '}
                    {site.foundedYear}. We manufacture Cast Iron Powder together with Steel and Mild Steel Castings. In the field of
                    Cast Iron Powder we are the largest manufacturer and exporter in India.
                  </p>
                  <p>
                    We run four separate production lines for the manufacture of{' '}
                    <Link to="/">
                      <b>Cast Iron Powder</b>
                    </Link>
                    , giving us a capacity of 1500 tons per month. Around 60% of our output is sold within the domestic market and
                    the remaining 40% is exported overseas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            We are a Government-approved Export House and an ISO 9001:2015 certified company, and we also hold ISO 14001:2015,
            D&amp;B D-U-N-S and GMP Compliance certification. Our in-house laboratory tests the chemical and physical properties of
            the metal, and an in-house spectrometer verifies chemical composition. We hold every government approval required for
            manufacturing, including Pollution Control certificates, ESI and PF registration, and our company is approved by the
            Excise Department for in-house self-stuffing of containers. Steel castings (SS &amp; MS) are produced by our sister
            concern {site.groupCompanies[0]}. We have three sister-concern companies.
          </p>
          {site.groupCompanies.map((g) => (
            <p key={g}>{g}</p>
          ))}
          <p>
            Our group companies are committed to providing quality and quantity satisfaction to our customers. We manufacture every
            mesh size of material according to each customer's requirement.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="ftco-section !pt-0 !pb-0 mt-[60px]">
        <div className="container md:px-0">
          <div className="col">
            <div className="row justify-start">
              <div ref={infraRef} className="text-justify-copy w-full">
                <h2 className="mb-6 text-[28px] md:text-[30px] font-bold">OUR MANUFACTURING INFRASTRUCTURE</h2>
                <p>
                  At {site.name}, our advanced manufacturing infrastructure ensures high-quality <strong>cast iron powder</strong>{' '}
                  production with precision and consistency. Equipped with modern machinery, in-house testing and efficient production
                  systems, we deliver reliable quality, high capacity and on-time supply that meets industrial standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mt-[30px] mb-10">
                  {infra.map((img, i) => (
                    <InfraCard key={img.src} src={img.src} alt={img.alt} onOpen={() => lightbox.openAt(i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ftco-section !pt-0 !pb-0 mt-[30px]">
        <div className="container md:px-0">
          <div className="col">
            <div className="row justify-start">
              <div ref={teamRef} className="text-justify-copy w-full">
                <h2 className="mb-6 text-[28px] md:text-[30px] font-bold">MEET OUR EXPERT TEAM</h2>
                <p>
                  Our skilled team of professionals is committed to delivering high-quality <strong>cast iron powder solutions</strong>{' '}
                  with a focus on quality, innovation and customer satisfaction. From production specialists to quality-control and
                  logistics experts, every team member ensures reliable products and efficient service.
                </p>
                <div className="bg-white py-[30px] px-1">
                  <div className="grid grid-cols-1 min-[421px]:grid-cols-2 min-[701px]:grid-cols-4 gap-[14px] min-[701px]:gap-5">
                    {contentService.team().map((m) => (
                      <TeamCard key={m.name} member={m} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent company */}
      <section className="mb-6 pb-6">
        <div className="text-center mt-6 container md:px-0">
          <div className="text-center">
            <h2 className="mb-6 text-[28px] md:text-[30px] font-bold">OUR PARENT COMPANY</h2>
          </div>
          <div className="md:flex justify-center text-center md:pt-6">
            {site.parentCompanies.map((c) => (
              <a
                key={c.name}
                className="flex m-auto justify-center md:justify-start pt-12 md:pt-0"
                target="_blank"
                rel="noopener noreferrer"
                href={c.href}
              >
                <img src={c.logo} alt={c.name} className="max-w-full h-auto" width={c.width} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Our company */}
      <section>
        <div className="container">
          <div className="w-full text-center">
            <h2>Our Company</h2>
            <br />
            <img src="/images/about/company-team.svg" alt={`${site.name} team`} className="max-w-full h-auto inline-block" width={1280} height={720} />
          </div>
        </div>
      </section>

      <FaqSection items={faqs} />

      <Lightbox images={infra.map((i) => ({ src: i.src, alt: i.alt }))} index={lightbox.index} onClose={lightbox.close} onIndexChange={lightbox.setIndex} />
    </>
  );
}
