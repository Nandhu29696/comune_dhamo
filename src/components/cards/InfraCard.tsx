import { Icon } from '@/components/ui/Icon';

interface InfraCardProps {
  src: string;
  alt: string;
  onOpen?: () => void;
}

/** Reference `.infra-card`: 400px cover image, scale 1.07 + brand overlay with zoom icon on hover. */
export function InfraCard({ src, alt, onOpen }: InfraCardProps) {
  return (
    <div
      className="infra-card"
      role={onOpen ? 'button' : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (onOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <img src={src} alt={alt} loading="lazy" />
      <div className="infra-card-hover" aria-hidden="true">
        <Icon name="zoom-in" size={36} className="text-white" />
      </div>
    </div>
  );
}
