import { FeatureCard } from '@/components/cards/FeatureCard';
import { contentService } from '@/services/content';

/** Reference `.Home-Manufacturer`: H1 + paragraph, then four feature columns. */
export function ManufacturerIntro() {
  return (
    <section>
      <div className="container pt-[70px] pb-[50px]">
        <h1 className="text-center font-semibold text-[40px] text-brand">Cast Iron Powder Manufacturer in India</h1>
        <p>
          As an established <b>cast iron powder manufacturer in India,</b> we specialise in supplying high-grade cast iron powder that
          meets the varied needs of many industries. Using efficient manufacturing methods and years of hands-on experience, we
          produce powder that is dependable, hard-wearing and performs consistently across a broad range of applications. Our
          focus on quality means every product meets recognised industry standards, delivering excellent value for both
          large-scale and specialised industrial use.
        </p>
        <div className="row py-[35px]">
          {contentService.homeFeatures().map((f) => (
            <FeatureCard key={f.title} item={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
