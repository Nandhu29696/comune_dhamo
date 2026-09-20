/**
 * Content access layer. Data currently ships with the bundle (src/data) so the
 * site can be deployed as a static build; swap these functions for fetch calls
 * against the API if content is later moved to a CMS or database.
 */
import { blogPosts, getBlogPost, BLOG_PAGE_SIZE } from '@/data/blog';
import { productPages, getProductPage } from '@/data/productPages';
import { productGalleryRows, achievements, teamMembers, homeFeatures, infraImages, gradesTableImage } from '@/data/products';
import { homeFaqs, aboutFaqs } from '@/data/faqs';

export const contentService = {
  blog: {
    list: () => blogPosts,
    get: getBlogPost,
    pageSize: BLOG_PAGE_SIZE,
  },
  products: {
    galleryRows: () => productGalleryRows,
    gradesTableImage,
    pages: () => productPages,
    page: getProductPage,
  },
  achievements: () => achievements,
  team: () => teamMembers,
  infra: () => infraImages,
  homeFeatures: () => homeFeatures,
  faqs: { home: homeFaqs, about: aboutFaqs },
};
