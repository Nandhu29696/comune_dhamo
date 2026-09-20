import { useParams } from 'react-router-dom';
import { PageBanner } from '@/components/PageBanner';
import { ContentBlocks } from '@/components/ContentBlocks';
import { FaqSection } from '@/sections/FaqSection';
import { site } from '@/config/site';
import { contentService } from '@/services/content';
import { useSeo } from '@/hooks/useSeo';
import { faqLd, webPageLd } from '@/utils/jsonLd';
import { NotFoundPage } from './NotFoundPage';

export function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = contentService.blog.get(slug);

  useSeo({
    title: post ? `${post.title} | ${site.name}` : 'Article not found',
    description: post?.excerpt ?? '',
    jsonLd: post ? [webPageLd(post.title, `/blog/${post.slug}`, post.excerpt), faqLd(post.faqs)] : [],
  });

  if (!post) return <NotFoundPage />;

  return (
    <>
      <PageBanner title={post.title} crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} compactTitle fluid />

      <section className="ftco-section !pt-0 !pb-0 mt-[80px]">
        <div className="container-fluid">
          <section className="relative text-center mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="block mx-auto !mt-10 w-full max-w-blog-hero h-auto border border-brand"
              width={1672}
              height={941}
            />
          </section>
          <section className="blog-content max-w-article mx-auto px-gutter pb-[60px]">
            <ContentBlocks blocks={post.body} />
          </section>
        </div>
      </section>

      <FaqSection items={post.faqs} narrow />
    </>
  );
}
