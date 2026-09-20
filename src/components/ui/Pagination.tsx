import { cn } from '@/utils/cn';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

/** Reference blog pagination: Prev · 1 2 3 · Next, rendered by jQuery — same markup/classes here. */
export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;
  const go = (p: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (p < 1 || p > totalPages || p === page) return;
    onChange(p);
  };
  return (
    <nav aria-label="Blog pagination" className="text-center mt-6">
      <ul id="pagination" className="pagination">
        <li className={cn('page-item', page === 1 && 'disabled')}>
          <a href="#" className="page-link" data-page="prev" onClick={go(page - 1)} aria-disabled={page === 1}>
            Prev
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <li key={p} className={cn('page-item', p === page && 'active')}>
            <a href="#" className="page-link" data-page={p} onClick={go(p)} aria-current={p === page ? 'page' : undefined}>
              {p}
            </a>
          </li>
        ))}
        <li className={cn('page-item', page === totalPages && 'disabled')}>
          <a href="#" className="page-link" data-page="next" onClick={go(page + 1)} aria-disabled={page === totalPages}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
