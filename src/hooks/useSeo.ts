import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/config/site';

interface SeoOptions {
  title: string;
  description: string;
  /** Extra JSON-LD objects for this page (Organization/WebSite are always included by the layout). */
  jsonLd?: object[];
  canonicalPath?: string;
}

function upsertMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Sets <title>, meta description, canonical link and page JSON-LD — the reference site's per-page SEO head. */
export function useSeo({ title, description, jsonLd = [], canonicalPath }: SeoOptions) {
  const { pathname } = useLocation();
  const path = canonicalPath ?? pathname;
  const ldKey = JSON.stringify(jsonLd);

  useEffect(() => {
    document.title = title;
    upsertMeta('description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path === '/' ? '/' : path}`);

    const scripts: HTMLScriptElement[] = (JSON.parse(ldKey) as object[]).map((obj) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.dataset.pageLd = 'true';
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
      return s;
    });
    return () => scripts.forEach((s) => s.remove());
  }, [title, description, path, ldKey]);
}
