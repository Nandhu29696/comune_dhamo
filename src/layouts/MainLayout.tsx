import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Loader } from '@/components/ui/Loader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { organizationLd, websiteLd, localBusinessLd } from '@/utils/jsonLd';

/** Shared chrome for every page: top bar + nav, page content, footer, chat widget, loader. */
export function MainLayout() {
  useScrollToTop();

  // Site-wide JSON-LD (Organization / WebSite / LocalBusiness) — present on every reference page.
  useEffect(() => {
    const scripts = [organizationLd(), websiteLd(), localBusinessLd()].map((obj) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
      return s;
    });
    return () => scripts.forEach((s) => s.remove());
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Loader />
    </>
  );
}
