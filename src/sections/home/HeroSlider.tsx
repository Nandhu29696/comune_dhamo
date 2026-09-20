import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils/cn';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: '/images/slider/test.jpg',
    title: 'Cast Iron Powder',
    subtitle: 'Production capacity of 1500 tons per month',
  },
];

/**
 * Reference `#minimal-bootstrap-carousel`: fade carousel, min-height 500px,
 * cover background, centred caption (75px title, 27px letter-spaced subtitle)
 * animated with fadeInUp at 0.5s / 1.5s delays. The prev/next controls exist
 * in the markup but are `display:none` — only rendered when there is >1 slide.
 */
export function HeroSlider() {
  const [active, setActive] = useState(0);
  const multi = slides.length > 1;

  useEffect(() => {
    if (!multi) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => window.clearInterval(t);
  }, [multi]);

  return (
    <div id="minimal-bootstrap-carousel" className="relative mt-0 overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Highlights">
      <div className="relative">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={cn(
              'min-h-hero w-full bg-[#222] bg-cover bg-center bg-no-repeat transition-opacity duration-[600ms] ease-in-out',
              i === active ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none',
            )}
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden={i !== active}
          >
            <div className="absolute inset-0 p-0 text-right">
              <div className="table w-full h-full max-w-[720px] lg:max-w-[960px] xl:max-w-container mx-auto text-center">
                <div className="table-cell align-middle text-left">
                  <div className="relative z-[9] text-center">
                    <h3
                      key={`t-${active}`}
                      className="m-0 font-display text-hero-title font-semibold text-white animate-fadeInUp [animation-delay:.5s]"
                    >
                      {s.title}
                    </h3>
                    <p
                      key={`p-${active}`}
                      className="m-0 mt-5 font-display text-hero-sub font-semibold text-white animate-fadeInUp [animation-delay:1.5s]"
                    >
                      {s.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {multi && (
        <>
          <button
            type="button"
            className="absolute left-[1%] top-1/2 -translate-y-1/2 z-[99] w-[50px] h-[50px] border border-white text-white text-[36px] leading-[48px] hover:bg-brand-alt hover:border-brand-alt transition-all duration-500"
            onClick={() => setActive((a) => (a - 1 + slides.length) % slides.length)}
            aria-label="Previous"
          >
            <Icon name="long-arrow-left" size={28} />
          </button>
          <button
            type="button"
            className="absolute right-[1%] top-1/2 -translate-y-1/2 z-[99] w-[50px] h-[50px] border border-white text-white text-[36px] leading-[48px] hover:bg-brand-alt hover:border-brand-alt transition-all duration-500"
            onClick={() => setActive((a) => (a + 1) % slides.length)}
            aria-label="Next"
          >
            <Icon name="long-arrow-right" size={28} />
          </button>
        </>
      )}
    </div>
  );
}
