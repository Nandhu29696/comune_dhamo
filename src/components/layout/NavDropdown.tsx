import { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import type { NavItem } from '@/config/site';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils/cn';

/**
 * Reference behaviour: the parent link's first click is swallowed and the
 * second click navigates (main.js adds an `open` class on first tap). Set to
 * false for a conventional single-click link.
 */
const SWALLOW_FIRST_CLICK = true;

interface NavDropdownProps {
  item: NavItem;
  isMobile: boolean;
  onNavigate: () => void;
}

export function NavDropdown({ item, isMobile, onNavigate }: NavDropdownProps) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const armed = useRef(false);
  const navigate = useNavigate();

  // Mobile: the reference forces the dropdown to `display:block !important`.
  const open = isMobile || hoverOpen;

  return (
    <li
      className="relative"
      onMouseEnter={() => !isMobile && setHoverOpen(true)}
      onMouseLeave={() => {
        if (isMobile) return;
        setHoverOpen(false);
        armed.current = false;
      }}
    >
      <NavLink
        to={item.to}
        id="productsDropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded={open}
        className={({ isActive }) => cn('nav-link', isActive && 'active')}
        onClick={(e) => {
          if (SWALLOW_FIRST_CLICK && !armed.current) {
            e.preventDefault();
            armed.current = true;
            if (!isMobile) setHoverOpen(true);
            return;
          }
          armed.current = false;
          onNavigate();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHoverOpen(true);
          }
          if (e.key === 'Enter' && armed.current) {
            e.preventDefault();
            armed.current = false;
            onNavigate();
            navigate(item.to);
          }
        }}
      >
        {item.label}
        <Icon name="chevron-down" size={14} className="ml-1" />
      </NavLink>
      <ul className={cn('dropdown-menu', open ? 'block' : 'hidden')} aria-labelledby="productsDropdown">
        {item.children?.map((c) => (
          <li key={c.to}>
            <NavLink
              to={c.to}
              className={({ isActive }) => cn('dropdown-item', isActive && 'active')}
              onClick={onNavigate}
            >
              {c.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}
