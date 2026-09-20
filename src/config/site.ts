/**
 * Single place for brand / contact / navigation data.
 * All placeholder values here replace the reference site's proprietary
 * business information — change them to your own before going live.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? 'http://localhost:5173';

export const site = {
  name: 'Dhamo Industries',
  shortName: 'Dhamo',
  tagline: 'Mfg & Exporter of Cast Iron Powder',
  founder: 'Shree Ramanbhai M. Patel',
  foundedYear: 1988,
  logo: '/images/Ambica-logo.webp',
  logoMark: '/images/logo-mark.svg',
  phones: [
    { label: '+91-9876543210', href: 'tel:+91-9876543210' },
    { label: '+91-6300000000', href: 'tel:+91-6300000000' },
  ],
  emails: [
    { label: 'info@dhamoindustries.example', href: 'mailto:info@dhamoindustries.example' },
    { label: 'sales@dhamoindustries.example', href: 'mailto:sales@dhamoindustries.example' },
  ],
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '919876543210',
  addresses: [
    {
      title: 'Dhamo Industries',
      lines:
        'Plot No. 25, 26, 27 & 30, Khodiyar Industrial Estate, CTM – Ramol Road, Near Subhash Industrial Estate, Behind Nilkanth Bridge, CTM, Amraiwadi, Ahmedabad – 380026, Gujarat, India',
      mapUrl: 'https://maps.google.com/?q=Amraiwadi,Ahmedabad',
    },
    {
      title: 'Daskroi Factory',
      lines:
        'Shed No. 120 to 125, J.K. Industrial Park, Amba Hotel Char Rasta, Ahmedabad–Indore Highway, Village: Chandial, Ta.: Daskroi, Ahmedabad – 382433, Gujarat, India',
      mapUrl: 'https://maps.google.com/?q=Daskroi,Ahmedabad',
    },
  ],
  mapEmbedUrl: 'https://maps.google.com/maps?q=CTM%20Amraiwadi%20Ahmedabad%20Gujarat&z=13&output=embed',
  seoAgency: { name: 'Your SEO Partner', href: '#' },
  groupCompanies: ['Swastik Alloys', 'Precision Powder Products', 'Ambika Industries'],
  parentCompanies: [
    { name: 'Swastik Alloys', href: '#', logo: '/images/parent/group-logo-1.svg', width: 338 },
    { name: 'Precision Powder Products', href: '#', logo: '/images/parent/group-logo-2.svg', width: 350 },
  ],
} as const;

export interface NavItem {
  label: string;
  to: string;
  title?: string;
  children?: { label: string; to: string }[];
}

export const productLinks: { label: string; to: string }[] = [
  { label: 'Iron Powder Manufacturer', to: '/iron-powder-manufacturer' },
  { label: 'Reduction Grade Iron Powder Manufacturer', to: '/reduction-grade-iron-powder-manufacturer' },
  { label: 'Iron Metal Powder Manufacturers', to: '/iron-metal-powder-manufacturer' },
  { label: 'Black Iron Powder Manufacturer', to: '/black-iron-powder' },
];

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/', title: 'Cast Iron Powder Manufacturer in India' },
  { label: 'About us', to: '/about', title: `${site.name} Cast Iron Powder Manufacturer` },
  { label: 'Products', to: '/products', children: productLinks },
  { label: 'Quality', to: '/quality', title: 'Quality' },
  { label: 'Achievement', to: '/achievement', title: 'Achievements' },
  { label: 'Blog', to: '/blog', title: 'Blog' },
  { label: 'Contact Us', to: '/contact', title: 'Contact Us' },
];

export const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Quality', to: '/quality' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export const productOptions = [
  'Cast Iron Powder 10-30 Mesh',
  'Cast Iron Powder 30-60 Mesh',
  'Cast Iron Powder 60-100 Mesh',
  'Cast Iron Powder -100 Mesh',
  'Cast Iron Powder -120 Mesh',
];
