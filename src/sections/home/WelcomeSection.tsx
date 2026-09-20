import { LinkButton } from '@/components/ui/Button';
import { site } from '@/config/site';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

/**
 * Reference "WELCOME TO …" block: left half is a `contain` background image
 * that stretches to the text height (400px tall under 768px); right half has
 * `pl-md-5`, `py-5`, justified paragraphs and the pill CTA.
 */
export function WelcomeSection() {
  const ref = useRevealOnScroll<HTMLDivElement>();
  return (
    <section className="ftco-section !pt-0 !pb-0">
      <div className="container">
        <div className="row flex">
          <div className="col md:w-1/2 flex">
            <div
              className="w-full self-stretch flex items-center justify-center md:justify-end bg-contain bg-no-repeat bg-center my-[35px] max-md:h-[400px]"
              style={{ backgroundImage: 'url(/images/1.webp)' }}
              role="img"
              aria-label={`${site.name} manufacturing facility`}
            />
          </div>
          <div className="col md:w-1/2 md:pl-12">
            <div className="row justify-start py-12">
              <div ref={ref} className="col text-justify-copy">
                <h3 className="mb-6">
                  <strong>WELCOME TO {site.name.toUpperCase()}</strong>
                </h3>
                <p>
                  We at {site.name} are based in Ahmedabad (Gujarat), India. Our father {site.founder} founded the business in{' '}
                  {site.foundedYear}. We manufacture Cast Iron Powder together with Steel and Mild Steel Castings. In the field of
                  Cast Iron Powder we are the largest manufacturer and exporter in India.
                </p>
                <p>
                  We are a Government-approved Export House and an ISO 9001:2015 certified company, and we also hold ISO 14001:2015,
                  D&amp;B D-U-N-S and GMP Compliance certification. We maintain an in-house laboratory for testing the chemical and
                  physical properties of the metal, including an in-house spectrometer for chemical analysis.
                </p>
                <LinkButton to="/about" variant="about">
                  Know More About Us
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
