export interface FaqItem {
  question: string;
  answer: string; // may contain a small amount of inline HTML (b, a)
}

export interface Product {
  slug: string;
  name: string;
  image: string;
}

export interface Achievement {
  title: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  text: string;
  /** Reference inserts an extra <br/> under some titles to equalise card heights */
  extraBreak?: boolean;
}

export interface ContentBlock {
  type: 'p' | 'h2' | 'h3' | 'ol' | 'ul' | 'table';
  html?: string; // for p / h2 / h3
  items?: string[]; // for ol / ul (inline HTML allowed)
  rows?: string[][]; // for table
}

export interface ProductPage {
  slug: string;
  navLabel: string;
  title: string; // banner H1
  metaTitle: string;
  metaDescription: string;
  image: string;
  intro: string[]; // paragraphs beside the image
  leadHeading: string; // H2 beside enquiry form
  leadBlocks: ContentBlock[]; // copy beside the form
  bodyBlocks: ContentBlock[]; // copy under the form row
  faqs: FaqItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string; // ISO date
  body: ContentBlock[];
  faqs: FaqItem[];
}

export interface CountryCode {
  code: string;
  country: string;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  product: string;
  message: string;
  source: 'contact' | 'sample' | 'enquiry';
  page?: string;
  recaptchaToken?: string;
}

export interface ApiResponse<T = unknown> {
  ok: boolean;
  message?: string;
  data?: T;
}
