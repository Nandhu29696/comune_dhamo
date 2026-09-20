import { PageBanner } from '@/components/PageBanner';
import { ContactForm } from '@/sections/forms/ContactForm';
import { site } from '@/config/site';
import { useSeo } from '@/hooks/useSeo';
import { webPageLd } from '@/utils/jsonLd';

const description = `Contact ${site.name}, cast iron powder manufacturer in Ahmedabad, India, for quotations, samples and technical support.`;

export function ContactPage() {
  useSeo({
    title: `Contact Us | ${site.name}`,
    description,
    jsonLd: [webPageLd('Contact us', '/contact', description)],
  });

  return (
    <>
      <PageBanner title="Contact us" crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact us' }]} />

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-center">
            <div className="col">
              <div className="w-full">
                <div className="row no-gutters">
                  <div className="col md:w-7/12">
                    <ContactForm heading="Contact Us" source="contact" />
                  </div>
                  <div className="col md:w-5/12 flex items-stretch">
                    <iframe
                      title={`${site.name} location map`}
                      src={site.mapEmbedUrl}
                      className="w-full min-h-[630px] border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
