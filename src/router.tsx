import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { QualityPage } from '@/pages/QualityPage';
import { AchievementPage } from '@/pages/AchievementPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { ContactPage } from '@/pages/ContactPage';
import { FreeSamplePage } from '@/pages/FreeSamplePage';
import { ThankYouPage } from '@/pages/ThankYouPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

/** The reference uses `.html` URLs; strip the extension so old links keep working. */
function LegacyRedirect() {
  const { pathname, search } = useLocation();
  if (/\.html$/i.test(pathname)) {
    const clean = pathname.replace(/\.html$/i, '').replace(/^\/index$/, '/');
    return <Navigate to={clean + search} replace />;
  }
  return <NotFoundPage />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'iron-powder-manufacturer', element: <ProductDetailPage slug="iron-powder-manufacturer" /> },
      { path: 'reduction-grade-iron-powder-manufacturer', element: <ProductDetailPage slug="reduction-grade-iron-powder-manufacturer" /> },
      { path: 'iron-metal-powder-manufacturer', element: <ProductDetailPage slug="iron-metal-powder-manufacturer" /> },
      { path: 'black-iron-powder', element: <ProductDetailPage slug="black-iron-powder" /> },
      { path: 'quality', element: <QualityPage /> },
      { path: 'achievement', element: <AchievementPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'get-free-sample', element: <FreeSamplePage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
      { path: '*', element: <LegacyRedirect /> },
    ],
  },
]);
