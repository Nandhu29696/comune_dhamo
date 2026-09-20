import { Link } from 'react-router-dom';
import { PageBanner } from '@/components/PageBanner';
import { site } from '@/config/site';
import { useSeo } from '@/hooks/useSeo';

/** The reference has no 404 page; this one reuses the inner-page banner style (documented assumption). */
export function NotFoundPage() {
  useSeo({ title: `Page Not Found | ${site.name}`, description: 'The page you requested could not be found.' });
  return (
    <>
      <PageBanner title="Page Not Found" crumbs={[{ label: 'Home', to: '/' }, { label: '404' }]} />
      <section className="text-center py-[10%] px-gutter">
        <h2 className="text-brand text-[3rem] font-bold">404</h2>
        <p className="text-center text-[20px]">The page you are looking for does not exist or has been moved.</p>
        <p className="text-center text-[20px]">
          <Link to="/">Return to the home page</Link>
        </p>
      </section>
    </>
  );
}
