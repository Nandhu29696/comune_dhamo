import { useState } from 'react';
import type { FaqItem } from '@/types';
import { cn } from '@/utils/cn';

interface FaqAccordionProps {
  items: FaqItem[];
  idPrefix?: string;
}

/**
 * Reference FAQ: brand-coloured full-width buttons with a "+" / "−" icon;
 * opening one closes the others; answers toggle without animation.
 */
export function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        return (
          <div className="faq mb-[15px]" key={item.question}>
            <button
              type="button"
              className={cn('faq-question', open && 'active')}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {open ? '−' : '+'}
              </span>
            </button>
            <div id={panelId} className={cn('faq-answer', open && 'show')} role="region">
              <div className="[&>p:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: item.answer.startsWith('<') ? item.answer : `<p>${item.answer}</p>` }} />
            </div>
          </div>
        );
      })}
    </>
  );
}
