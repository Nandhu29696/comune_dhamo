import { PageBanner } from '@/components/PageBanner';
import { ContactForm } from '@/sections/forms/ContactForm';
import { site } from '@/config/site';
import { useSeo } from '@/hooks/useSeo';
import { webPageLd } from '@/utils/jsonLd';

const description = `Request a free sample of cast iron powder from ${site.name} before placing a bulk order. Choose your mesh size and we will dispatch a sample.`;

export function FreeSamplePage() {
  useSeo({
    title: `Get Free Sample | ${site.name}`,
    description,
    jsonLd: [webPageLd('Get Free Sample', '/get-free-sample', description)],
  });

  return (
    <>
      <PageBanner title="Get Free Sample" crumbs={[{ label: 'Home', to: '/' }, { label: 'Get Free Sample' }]} />

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-center">
            <div className="col">
              <div className="w-full">
                {/* Reference: `.no-gutters { justify-content: center }` on this page, map column commented out */}
                <div className="row no-gutters justify-center">
                  <div className="col md:w-7/12">
                    <ContactForm heading="Get Free Sample" source="sample" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
