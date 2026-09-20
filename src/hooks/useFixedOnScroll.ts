import { useEffect, useRef, useState } from 'react';

/**
 * Reference `window.onscroll` behaviour: once the page is scrolled past the
 * navbar's original position, the bar gets `.sticky` (position: fixed; top: 0;
 * width: 100%). Returns a ref for an in-flow anchor placed just before the bar
 * (used to know the bar's original offset), the fixed state and the bar
 * height (used for a spacer so the content does not jump when the bar leaves
 * the document flow).
 */
export function useFixedOnScroll<TBar extends HTMLElement>() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<TBar>(null);
  const [fixed, setFixed] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const anchor = anchorRef.current;
    const bar = barRef.current;
    if (!anchor || !bar) return;

    const measure = () => setHeight(bar.offsetHeight);
    const onScroll = () => {
      const top = anchor.getBoundingClientRect().top + window.scrollY;
      setFixed(window.scrollY >= top);
    };

    measure();
    onScroll();
    const ro = new ResizeObserver(measure);
    ro.observe(bar);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { anchorRef, barRef, fixed, height };
}
