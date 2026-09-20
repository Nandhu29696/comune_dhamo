import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types';
import { LinkButton } from '@/components/ui/Button';

/**
 * Reference blog card: 200px cover image, light body with a centred bold
 * title, a spacer line, a pill "Read More" button, and a brand-light panel
 * that sweeps up from the bottom on hover while the text turns white.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  const to = `/blog/${post.slug}`;
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <Link to={to}>
          <img src={post.image} alt={post.title} className="w-full" loading="lazy" width={1672} height={941} />
        </Link>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-content-inner">
          <h5 className="mb-4 font-bold">{post.title}</h5>
          <br />
          <LinkButton to={to} variant="pill" className="mt-auto self-center">
            Read More
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
