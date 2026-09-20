import { site, SITE_URL } from '@/config/site';
import type { FaqItem } from '@/types';

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '');

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${site.logo}`,
  contactPoint: site.phones.map((p) => ({
    '@type': 'ContactPoint',
    telephone: p.label,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'Hindi'],
  })),
});

export const localBusinessLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  image: `${SITE_URL}${site.logo}`,
  url: `${SITE_URL}/`,
  telephone: site.phones[0].label,
  email: site.emails[0].label,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addresses[0].lines,
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380026',
    addressCountry: 'IN',
  },
});

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: `${SITE_URL}/`,
});

export const webPageLd = (name: string, path: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  url: `${SITE_URL}${path}`,
  description,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', name: site.name, url: `${SITE_URL}/` },
});

export const faqLd = (faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question.replace(/^\d+\.\s*/, ''),
    acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.answer) },
  })),
});
