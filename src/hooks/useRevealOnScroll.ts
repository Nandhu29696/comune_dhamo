import { useEffect, useRef } from 'react';

/**
 * Reproduces the template's `.ftco-animate` waypoint behaviour: elements start
 * invisible and fade-in-up once they scroll into view (offset 95 % → threshold
 * near the bottom of the viewport), staggered 50 ms apart.
 */
export function useRevealOnScroll<T extends HTMLElement>(effect: 'fadeInUp' | 'fadeIn' = 'fadeInUp') {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Graceful fallback: no observer support → content simply stays visible.
    if (typeof IntersectionObserver === 'undefined') return;
    el.style.opacity = '0';
    el.style.visibility = 'hidden';

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(el.dataset.revealIndex ?? 0);
          window.setTimeout(() => {
            el.style.visibility = 'visible';
            el.style.opacity = '';
            el.style.animation = `${effect} 1s both`;
          }, 100 + index * 50);
          io.disconnect();
        });
      },
      { rootMargin: '0px 0px -5% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [effect]);

  return ref;
}
