import { Icon } from '@/components/ui/Icon';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface GalleryCardProps {
  image: string;
  alt: string;
  /** Products page: caption paragraph under the card. */
  caption?: string;
  /** Achievement page: title overlaid at the bottom of the card. */
  overlayTitle?: string;
  onOpen: () => void;
  revealIndex?: number;
  className?: string;
}

/**
 * Reference `.gallery`: 300px box, background `contain` top-centre; hover
 * darkens (50 %) and reveals a 70px white circle with an expand icon.
 */
export function GalleryCard({ image, alt, caption, overlayTitle, onOpen, revealIndex = 0, className }: GalleryCardProps) {
  const ref = useRevealOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} data-reveal-index={revealIndex} className={className}>
      <div className="gallery flex items-end" style={{ backgroundImage: `url("${image}")` }} role="img" aria-label={alt}>
        <a
          href={image}
          className="gallery-icon"
          aria-label={`View ${alt}`}
          onClick={(e) => {
            e.preventDefault();
            onOpen();
          }}
        >
          <Icon name="expand" size={22} className="text-black" />
        </a>
        {overlayTitle && (
          <div className="desc w-full px-6">
            <div className="text w-full mb-4">
              <h2>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpen();
                  }}
                >
                  {overlayTitle}
                </a>
              </h2>
            </div>
          </div>
        )}
      </div>
      {caption && <p className="text-center">{caption}</p>}
    </div>
  );
}
