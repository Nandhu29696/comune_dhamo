import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';

/**
 * Reference `#ftco-loader.fullscreen`: white full-screen layer with a
 * rotating brand-coloured ring, hidden as soon as the page script runs.
 * Here it shows on first mount and for a beat on each route change.
 */
export function Loader() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const t = window.setTimeout(() => setShow(false), 250);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      id="ftco-loader"
      aria-hidden={!show}
      className={cn(
        'fixed inset-0 z-[1000] bg-white transition-opacity',
        show ? 'opacity-100 visible duration-[400ms] ease-out' : 'opacity-0 invisible duration-200 ease-out',
      )}
    >
      <svg className="absolute left-[calc(50%-24px)] top-[calc(50%-24px)] block animate-loaderRotate" width="48" height="48">
        <circle cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#a04838"
          strokeLinecap="round"
          className="animate-loaderDash"
        />
      </svg>
    </div>
  );
}
