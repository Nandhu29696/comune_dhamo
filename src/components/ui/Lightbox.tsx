import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './Icon';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

/**
 * Recreates the Magnific Popup "image gallery with zoom" used on the
 * Products and Achievement pages: dark 80 % backdrop, 300 ms zoom-in,
 * prev/next navigation, close on image click / Esc / backdrop.
 */
export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;
  const [visible, setVisible] = useState(false);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return;
    }
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, prev, next]);

  if (!open) return null;
  const img = images[index];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-[1043] flex items-center justify-center transition-opacity duration-300 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#0b0b0b]" style={{ opacity: visible ? 0.8 : 0, transition: 'opacity .3s ease-out' }} />
      <button
        type="button"
        aria-label="Close"
        className="absolute top-2 right-2 z-[2] w-11 h-11 text-white/70 hover:text-white flex items-center justify-center"
        onClick={onClose}
      >
        <Icon name="close" size={28} />
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-[2] w-14 h-24 text-white/80 hover:text-white flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <Icon name="chevron-left" size={40} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-[2] w-14 h-24 text-white/80 hover:text-white flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <Icon name="chevron-right" size={40} />
          </button>
        </>
      )}
      <figure className="relative z-[1] m-0 max-w-[100vw] max-h-[100vh] px-0 md:px-16">
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="block max-h-[100vh] max-w-full mx-auto bg-white cursor-zoom-out"
          style={{ transform: visible ? 'scale(1)' : 'scale(0.8)', transition: 'transform .3s ease-out' }}
        />
        <figcaption className="absolute left-0 right-0 -bottom-0 md:bottom-0 px-3 py-1 text-[12px] leading-[18px] text-[#f3f3f3] bg-black/40 md:bg-transparent">
          {img.alt}
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div className="absolute right-4 bottom-3 z-[2] text-white/70 text-[12px]">
          {index + 1} of {images.length}
        </div>
      )}
    </div>,
    document.body,
  );
}

/** Small helper hook so pages only need `{open, openAt, close, setIndex}`. */
export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    openAt: (i: number) => setIndex(i),
    close: () => setIndex(null),
    setIndex: (i: number) => setIndex(i),
  };
}
