import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageBanner } from '@/components/PageBanner';
import { BlogCard } from '@/components/cards/BlogCard';
import { Pagination } from '@/components/ui/Pagination';
import { site } from '@/config/site';
import { contentService } from '@/services/content';
import { useSeo } from '@/hooks/useSeo';
import { webPageLd } from '@/utils/jsonLd';

const description = `Articles and guides on cast iron powder grades, quality testing, applications and sourcing from ${site.name}.`;

export function BlogPage() {
  const posts = contentService.blog.list();
  const pageSize = contentService.blog.pageSize;
  const totalPages = Math.ceil(posts.length / pageSize);

  const [params, setParams] = useSearchParams();
  const pageParam = Number(params.get('page') ?? 1);
  const page = Number.isFinite(pageParam) && pageParam >= 1 && pageParam <= totalPages ? pageParam : 1;
  const [animKey, setAnimKey] = useState(0);

  useSeo({
    title: `Blog | ${site.name}`,
    description,
    jsonLd: [webPageLd('Blog', '/blog', description)],
    canonicalPath: '/blog',
  });

  const visible = useMemo(() => posts.slice((page - 1) * pageSize, page * pageSize), [posts, page, pageSize]);

  useEffect(() => setAnimKey((k) => k + 1), [page]);

  const onPageChange = (p: number) => {
    setParams(p === 1 ? {} : { page: String(p) });
    // Reference re-renders the list in place; keep the user near the top of the grid.
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageBanner title="Blog" crumbs={[{ label: 'Home', to: '/' }, { label: 'blog' }]} />

      <section className="ftco-section !pt-0 !pb-0 mt-[80px]">
        <div className="container-fluid">
          <div id="blog-grid" className="scroll-mt-20">
            <div className="container">
              {visible.length === 0 ? (
                <p className="text-center py-12">No articles found.</p>
              ) : (
                <div className="row justify-center" key={animKey}>
                  {visible.map((post) => (
                    <div key={post.slug} className="col md:w-1/2 lg:w-1/3 mt-[30px] animate-fadeIn">
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="container text-center mt-6">
            <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
          </div>
        </div>
      </section>
    </>
  );
}
