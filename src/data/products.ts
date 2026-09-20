import type { Achievement, FeatureItem, Product, TeamMember } from '@/types';

/** Products page gallery: row 1 has three items, row 2 has two (matches the reference). */
export const productGalleryRows: Product[][] = [
  [
    { slug: 'mesh-120', name: 'Cast Iron Powder -120 Mesh', image: '/images/products/mesh-120.svg' },
    { slug: 'mesh-100', name: 'Cast Iron Powder -100 Mesh', image: '/images/products/mesh-100.svg' },
    { slug: 'mesh-60-100', name: 'Cast Iron Powder 60 to 100 Mesh', image: '/images/products/mesh-60-100.svg' },
  ],
  [
    { slug: 'mesh-30-60', name: 'Cast Iron Powder 30 to 60 Mesh', image: '/images/products/mesh-30-60.svg' },
    { slug: 'mesh-10-30', name: 'Cast Iron Powder 10 to 30 Mesh', image: '/images/products/mesh-10-30.svg' },
  ],
];

export const gradesTableImage = '/images/grades-table.svg';

export const homeFeatures: FeatureItem[] = [
  {
    icon: '/images/icons/high-quality.svg',
    title: 'High-Quality Cast Iron Powder',
    text: 'With more than a decade of experience, we deliver premium <b>cast iron powder</b> valued for its quality, consistency and dependable performance in industry.',
  },
  {
    icon: '/images/icons/expertise.svg',
    title: 'Expertise and Experience',
    text: 'Our depth of experience in cast iron powder manufacturing lets us engineer tailored solutions that fit the specific needs of every client.',
  },
  {
    icon: '/images/icons/quick.svg',
    title: 'Quick & Efficient',
    text: 'We focus on fast dispatch and efficient processing, giving you quick access to cast iron powder without compromising quality or your production schedule.',
    extraBreak: true,
  },
  {
    icon: '/images/icons/support.svg',
    title: 'Dedicated Support',
    text: 'Our team is always on hand, providing dedicated support so that your orders are processed smoothly and delivered on time.',
    extraBreak: true,
  },
];

export const achievements: Achievement[] = [
  { title: 'ISO 9001:2015 Certificate', image: '/images/achievement/cert-1.svg' },
  { title: 'Export House Certificate', image: '/images/achievement/cert-2.svg' },
  { title: 'ISO 9001:2015 Accreditation', image: '/images/achievement/cert-3.svg' },
  { title: 'GMP Certificate', image: '/images/achievement/cert-4.svg' },
  { title: 'ISO 14001:2015 Certificate', image: '/images/achievement/cert-5.svg' },
  { title: 'MSME Rating Certificate', image: '/images/achievement/cert-6.svg' },
];

export const teamMembers: TeamMember[] = [
  { name: 'Suresh Patel', role: 'Managing Director', image: '/images/team/member-1.svg' },
  { name: 'Dev Patel', role: 'Managing Director', image: '/images/team/member-2.svg' },
  { name: 'Bhavesh Patel', role: 'Production Manager', image: '/images/team/member-3.svg' },
  { name: 'Mahesh Shah', role: 'Senior Accountant', image: '/images/team/member-4.svg' },
  { name: 'Kiran Desai', role: 'Senior Accountant', image: '/images/team/member-5.svg' },
  { name: 'Anil Rathod', role: 'Laboratory Technician', image: '/images/team/member-6.svg' },
  { name: 'Nilesh Joshi', role: 'Maintenance In-charge', image: '/images/team/member-7.svg' },
];

export const infraImages = [
  { src: '/images/about/infra-1.svg', alt: 'Production Unit' },
  { src: '/images/about/infra-2.svg', alt: 'Modern Machinery' },
];
