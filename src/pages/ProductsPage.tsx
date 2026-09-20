import { PageBanner } from '@/components/PageBanner';
import { GalleryCard } from '@/components/cards/GalleryCard';
import { Lightbox, useLightbox } from '@/components/ui/Lightbox';
import { site } from '@/config/site';
import { contentService } from '@/services/content';
import { useSeo } from '@/hooks/useSeo';
import { webPageLd } from '@/utils/jsonLd';

const description = `Cast iron powder products by ${site.name}: -120, -100, 60–100, 30–60 and 10–30 mesh grades manufactured in Ahmedabad, India.`;

export function ProductsPage() {
  const rows = contentService.products.galleryRows();
  const flat = rows.flat();
  const lightbox = useLightbox();

  useSeo({
    title: `Cast Iron Powder Products | ${site.name}`,
    description,
    jsonLd: [webPageLd('Products', '/products', description)],
  });

  return (
    <>
      <PageBanner title="Products" crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />

      <section className="ftco-section !pt-0 !pb-0 mt-4">
        {rows.map((row, r) => (
          <div key={r}>
            {r > 0 && (
              <div className="container md:px-0">
                <hr className="h-[2px] border-0 bg-gray-500 my-4" />
              </div>
            )}
            <div className="container md:px-0">
              <div className="row no-gutters">
                {row.map((p, i) => {
                  const flatIndex = rows.slice(0, r).reduce((n, rr) => n + rr.length, 0) + i;
                  return (
                    <GalleryCard
                      key={p.slug}
                      className={`col md:w-1/3 ${i === 0 ? 'md:pr-2' : 'md:pl-2'}`}
                      image={p.image}
                      alt={p.name}
                      caption={p.name}
                      revealIndex={i}
                      onOpen={() => lightbox.openAt(flatIndex)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center">
          <h2 className="text-center mt-[50px] mb-[5px] mx-0">We are manufacturing different grades as under</h2>
          <img
            id="table-image"
            src={contentService.products.gradesTableImage}
            alt="Cast iron powder grades"
            className="inline-block mt-[10px] mb-[50px] max-w-full h-auto max-xl:h-[270px] max-[1024px]:h-[150px] max-[480px]:h-[100px]"
            width={1196}
            height={344}
          />
        </div>
      </section>

      <Lightbox images={flat.map((p) => ({ src: p.image, alt: p.name }))} index={lightbox.index} onClose={lightbox.close} onIndexChange={lightbox.setIndex} />
    </>
  );
}
