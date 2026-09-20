import { PageBanner } from '@/components/PageBanner';
import { GalleryCard } from '@/components/cards/GalleryCard';
import { Lightbox, useLightbox } from '@/components/ui/Lightbox';
import { site } from '@/config/site';
import { contentService } from '@/services/content';
import { useSeo } from '@/hooks/useSeo';
import { webPageLd } from '@/utils/jsonLd';

const description = `Certifications and achievements of ${site.name}: ISO 9001:2015, ISO 14001:2015, GMP, Export House recognition and more.`;

export function AchievementPage() {
  const items = contentService.achievements();
  const lightbox = useLightbox();

  useSeo({
    title: `Achievements & Certifications | ${site.name}`,
    description,
    jsonLd: [webPageLd('Achievement', '/achievement', description)],
  });

  return (
    <>
      <PageBanner title="Achievement" crumbs={[{ label: 'Home', to: '/' }, { label: 'Achievement' }]} />

      <section className="ftco-section !pt-0 !pb-0 mt-4">
        <div className="container md:px-0">
          <div className="row no-gutters">
            {items.map((a, i) => (
              <GalleryCard
                key={a.title + i}
                className="col md:w-1/3"
                image={a.image}
                alt={a.title}
                overlayTitle={a.title}
                revealIndex={i % 3}
                onOpen={() => lightbox.openAt(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={items.map((a) => ({ src: a.image, alt: a.title }))} index={lightbox.index} onClose={lightbox.close} onIndexChange={lightbox.setIndex} />
    </>
  );
}
