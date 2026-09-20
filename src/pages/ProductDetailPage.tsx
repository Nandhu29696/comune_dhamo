import { PageBanner } from '@/components/PageBanner';
import { ContentBlocks } from '@/components/ContentBlocks';
import { EnquiryForm } from '@/sections/forms/EnquiryForm';
import { FaqSection } from '@/sections/FaqSection';
import { contentService } from '@/services/content';
import { useSeo } from '@/hooks/useSeo';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { faqLd, webPageLd } from '@/utils/jsonLd';
import { NotFoundPage } from './NotFoundPage';

export function ProductDetailPage({ slug }: { slug: string }) {
  const page = contentService.products.page(slug);
  const introRef = useRevealOnScroll<HTMLDivElement>();

  useSeo({
    title: page?.metaTitle ?? 'Product',
    description: page?.metaDescription ?? '',
    jsonLd: page ? [webPageLd(page.title, `/${page.slug}`, page.metaDescription), faqLd(page.faqs)] : [],
  });

  if (!page) return <NotFoundPage />;

  return (
    <>
      <PageBanner title={page.title} crumbs={[{ label: 'Home', to: '/' }, { label: 'Product' }]} compactTitle fluid />

      {/* Intro: image + two paragraphs */}
      <section className="ftco-section !pt-0 !pb-0 mt-[80px] mb-10">
        <div className="container">
          <div className="row">
            <div className="col md:w-1/2 flex">
              <div
                className="w-full self-stretch bg-contain bg-no-repeat bg-center my-[35px] max-md:h-[400px]"
                style={{ backgroundImage: `url("${page.image}")` }}
                role="img"
                aria-label={page.title}
              />
            </div>
            <div className="col md:w-1/2">
              <div className="row justify-start">
                <div ref={introRef} className="col text-justify-copy">
                  {page.intro.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copy + enquiry form */}
      <section className="relative py-6">
        <div className="container">
          <div className="row">
            <div className="col lg:w-2/3">
              <h2 className="mb-4 font-bold">
                <b>{page.leadHeading}</b>
              </h2>
              <div className="text-justify-copy">
                <ContentBlocks blocks={page.leadBlocks} />
              </div>
            </div>
            <div className="col lg:w-1/3">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Remaining long-form copy */}
      <section className="ftco-section !pt-0 !pb-0 mb-10">
        <div className="container md:px-0">
          <div className="row">
            <div className="col [&_ol>li>p]:mb-4">
              <ContentBlocks blocks={page.bodyBlocks} />
              <p> </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={page.faqs} />
    </>
  );
}
