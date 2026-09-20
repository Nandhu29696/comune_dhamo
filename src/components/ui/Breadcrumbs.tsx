import { Link } from 'react-router-dom';
import { Icon } from './Icon';

export interface Crumb {
  label: string;
  to?: string;
}

/** Reference `.breadcrumbs`: "Home ›  Current" with 50 % / 70 % white text. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <p className="breadcrumbs text-[16px] font-normal mb-5 text-center z-[99] relative">
      {items.map((c, i) => (
        <span key={c.label + i} className={i < items.length - 1 ? 'mr-2 text-white/50' : 'text-white/50'}>
          {c.to ? (
            <Link to={c.to} className="text-white/70 hover:text-brand focus:text-brand group">
              {c.label} <Icon name="arrow-forward" className="text-white/30 group-hover:text-brand" />
            </Link>
          ) : (
            c.label
          )}
        </span>
      ))}
    </p>
  );
}
