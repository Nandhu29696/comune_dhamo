import { useSeo } from '@/hooks/useSeo';
import { site } from '@/config/site';
import { contentService } from '@/services/content';
import { faqLd, webPageLd } from '@/utils/jsonLd';
import { HeroSlider } from '@/sections/home/HeroSlider';
import { ManufacturerIntro } from '@/sections/home/ManufacturerIntro';
import { WelcomeSection } from '@/sections/home/WelcomeSection';
import { WhyChooseSection } from '@/sections/home/WhyChooseSection';
import { CommitmentSection } from '@/sections/home/CommitmentSection';
import { FaqSection } from '@/sections/FaqSection';

const description = `${site.name} is a leading cast iron powder manufacturer in India, offering high-quality cast iron powder trusted for durability and reliable supply.`;

export function HomePage() {
  const faqs = contentService.faqs.home;
  useSeo({
    title: `Cast Iron Powder Manufacturer in India | ${site.name}`,
    description,
    jsonLd: [webPageLd(`${site.name} – Leading Iron Powder Manufacturer in India`, '/', description), faqLd(faqs)],
  });

  return (
    <>
      <HeroSlider />
      <ManufacturerIntro />
      <WelcomeSection />
      <WhyChooseSection />
      <CommitmentSection />
      <FaqSection items={faqs} />
    </>
  );
}
