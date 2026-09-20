import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { mainNav, site } from '@/config/site';
import { Icon } from '@/components/ui/Icon';
import { useIsMobileNav } from '@/hooks/useMediaQuery';
import { useFixedOnScroll } from '@/hooks/useFixedOnScroll';
import { NavDropdown } from './NavDropdown';
import { cn } from '@/utils/cn';

/**
 * Reference `#ftco-navbar`: brand-coloured sticky bar with centred uppercase
 * links and a white pill CTA. Below 992px it turns white, shows a hamburger
 * + 40px logo, and the links collapse into a vertical list.
 */
export function Navbar() {
  const isMobile = useIsMobileNav();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // A multi-page site closes the menu on navigation; do the same on route change.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const close = () => setOpen(false);
  const { anchorRef, barRef, fixed, height } = useFixedOnScroll<HTMLElement>();

  return (
    <>
      {/* In-flow anchor: marks the bar's natural position and becomes a spacer while the bar is fixed. */}
      <div ref={anchorRef} aria-hidden="true" style={{ height: fixed ? height : 0 }} />
    <nav
      id="ftco-navbar"
      ref={barRef}
      className={cn(
        'relative z-[1020] w-full bg-brand p-0',
        'max-lg:!bg-white max-lg:py-[10px] max-lg:px-gutter',
        fixed && 'sticky-nav !fixed top-0 left-0',
      )}
      aria-label="Main navigation"
    >
      <div className="container-fluid flex flex-wrap items-center justify-between max-lg:px-0">
        <button
          type="button"
          className="lg:hidden text-[32px] leading-none text-[#222] uppercase tracking-[.1em] py-1 pl-3 pr-0 border-0 bg-transparent cursor-pointer"
          aria-controls="ftco-nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name="bars" size={32} />
        </button>
        <div className="lg:hidden">
          <Link to="/" aria-label={`${site.name} home`}>
            <img src={site.logo} alt={`${site.name} logo`} className="h-[40px] w-auto" height={40} width={120} />
          </Link>
        </div>

        <div
          id="ftco-nav"
          className={cn(
            'basis-full grow lg:flex lg:basis-auto lg:grow',
            'max-lg:grid max-lg:transition-[grid-template-rows] max-lg:duration-[350ms] max-lg:ease-in-out',
            isMobile && (open ? 'max-lg:grid-rows-[1fr]' : 'max-lg:grid-rows-[0fr]'),
          )}
        >
          <div className="max-lg:overflow-hidden max-lg:min-h-0 lg:flex lg:w-full">
          <ul className={cn('flex flex-col lg:flex-row list-none pl-0 mb-0 lg:mx-auto', 'max-lg:pb-[10px]')}>
            {mainNav.map((item) =>
              item.children ? (
                <NavDropdown key={item.to} item={item} isMobile={isMobile} onNavigate={close} />
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    title={item.title}
                    end={item.to === '/'}
                    className={({ isActive }) => cn('nav-link', isActive && 'active')}
                    onClick={close}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
            <li>
              <Link to="/get-free-sample" className="nav-btn" onClick={close}>
                Get Free Sample
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
