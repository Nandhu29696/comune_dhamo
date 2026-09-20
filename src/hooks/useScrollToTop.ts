import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Multi-page sites start each page at the top; replicate that for client-side routing. */
export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
}
