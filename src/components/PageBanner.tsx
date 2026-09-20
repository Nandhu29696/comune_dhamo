import { Breadcrumbs, type Crumb } from './ui/Breadcrumbs';
import { cn } from '@/utils/cn';

interface PageBannerProps {
  title: string;
  crumbs: Crumb[];
  /** `.new-page-h1` variant used on product/blog article pages (40px, 35px ≤576). */
  compactTitle?: boolean;
  /** Product/blog pages use `.container-fluid` instead of `.container`. */
  fluid?: boolean;
}

/**
 * Reference `.hero-wrap.hero-wrap-2`: 200px tall banner image (cover, top
 * centre; centre centre <1200px) with a 30 % black overlay, text aligned to
 * the bottom with `pb-5`, entering with the heroFadeUp animation.
 */
export function PageBanner({ title, crumbs, compactTitle, fluid }: PageBannerProps) {
  return (
    <section
      className="relative w-full h-banner bg-cover bg-no-repeat bg-[position:top_center] max-xl:!bg-center"
      style={{ backgroundImage: "url('/images/head.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className={cn(fluid ? 'container-fluid' : 'container', 'relative')}>
        <div className="flex flex-wrap items-end justify-center h-banner">
          <div className="w-full md:w-3/4 pb-12 text-center hero-animate">
            <h1
              className={cn(
                'text-white font-bold leading-[1.2] mb-4',
                compactTitle ? 'text-[35px] sm:text-[40px]' : 'text-[40px]',
              )}
            >
              {title}
            </h1>
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
      </div>
    </section>
  );
}
