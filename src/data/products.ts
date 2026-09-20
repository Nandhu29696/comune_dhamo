import type { Achievement, FeatureItem, Product, TeamMember } from '@/types';

/** Products page gallery: row 1 has three items, row 2 has two (matches the reference). */
export const productGalleryRows: Product[][] = [
  [
    { slug: 'mesh-120', name: 'Cast Iron Powder -120 Mesh', image: '/images/products/Mash-size-120.png' },
    { slug: 'mesh-100', name: 'Cast Iron Powder -100 Mesh', image: '/images/products/Mash-size-100.png' },
    { slug: 'mesh-60-100', name: 'Cast Iron Powder 60 to 100 Mesh', image: '/images/products/Mash-size-60-100.png' },
  ],
  [
    { slug: 'mesh-30-60', name: 'Cast Iron Powder 30 to 60 Mesh', image: '/images/products/Mash-size-30-60.png' },
    { slug: 'mesh-10-30', name: 'Cast Iron Powder 10 to 30 Mesh', image: '/images/products/cast-Iron-powder-10-30gr-new.webp' },
  ],
];

export const gradesTableImage = '/images/products/Cast-Iron-Powder-Grades.png';

export const homeFeatures: FeatureItem[] = [
  {
    icon: '/images/high-quality.png',
    title: 'High-Quality Cast Iron Powder',
    text: 'With more than a decade of experience, we deliver premium <b>cast iron powder</b> valued for its quality, consistency and dependable performance in industry.',
  },
  {
    icon: '/images/Expertise-Experience.png',
    title: 'Expertise and Experience',
    text: 'Our depth of experience in cast iron powder manufacturing lets us engineer tailored solutions that fit the specific needs of every client.',
  },
  {
    icon: '/images/quick.png',
    title: 'Quick & Efficient',
    text: 'We focus on fast dispatch and efficient processing, giving you quick access to cast iron powder without compromising quality or your production schedule.',
    extraBreak: true,
  },
  {
    icon: '/images/Dedicated-Support.png',
    title: 'Dedicated Support',
    text: 'Our team is always on hand, providing dedicated support so that your orders are processed smoothly and delivered on time.',
    extraBreak: true,
  },
];

export const achievements: Achievement[] = [
  { title: 'ISO 9001:2015 Certificate', image: '/images/achievement/ISO-9001-2015-UKAF-1.jpg' },
  { title: 'Export House Certificate', image: '/images/achievement/export-house-certificate.webp' },
  { title: 'ISO 9001:2015 Accreditation', image: '/images/achievement/ISO-9001-2015-UKAF.webp' },
  { title: 'GMP Certificate', image: '/images/achievement/WHO-GMP.webp' },
  { title: 'ISO 14001:2015 Certificate', image: '/images/achievement/ISO-14001-2015-UKAF.webp' },
  { title: 'MSME Rating Certificate', image: '/images/achievement/export-certificate.webp' },
];

export const teamMembers: TeamMember[] = [
  { name: 'Suresh Patel', role: 'Managing Director', image: '/images/Snehal R patel.jpg' },
  { name: 'Dev Patel', role: 'Managing Director', image: '/images/Darvin S Patel.jpg' },
  { name: 'Bhavesh Patel', role: 'Production Manager', image: '/images/Bhavik.jpg' },
  { name: 'Mahesh Shah', role: 'Senior Accountant', image: '/images/Mayur.jpg' },
  { name: 'Kiran Desai', role: 'Senior Accountant', image: '/images/Kantilal.jpg' },
  { name: 'Anil Rathod', role: 'Laboratory Technician', image: '/images/Arvind.jpg' },
  { name: 'Nilesh Joshi', role: 'Maintenance In-charge', image: '/images/Nandlal.jpg' },
];

export const infraImages = [
  { src: '/images/products/cast-iron-infra.jpeg', alt: 'Production Unit' },
  { src: '/images/products/cast-iron-infrastructure.jpeg', alt: 'Modern Machinery' },
];
