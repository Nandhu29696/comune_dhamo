import { FaqAccordion } from '@/components/ui/FaqAccordion';
import type { FaqItem } from '@/types';
import { cn } from '@/utils/cn';

interface FaqSectionProps {
  items: FaqItem[];
  /** Blog articles use `.faq_section` (900px) instead of `.faq-section` (1200px). */
  narrow?: boolean;
}

export function FaqSection({ items, narrow }: FaqSectionProps) {
  return (
    <section className={cn('mx-auto p-10 rounded-lg', narrow ? 'max-w-article' : 'max-w-faq')}>
      <h3 className="text-center mb-[30px] text-brand">
        <strong>Frequently Asked Questions</strong>
      </h3>
      <FaqAccordion items={items} idPrefix={narrow ? 'article-faq' : 'faq'} />
    </section>
  );
}
