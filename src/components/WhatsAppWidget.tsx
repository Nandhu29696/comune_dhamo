import { useState } from 'react';
import { site } from '@/config/site';
import { Icon } from './ui/Icon';
import { cn } from '@/utils/cn';

/**
 * First-party recreation of the WATI WhatsApp chat widget on the reference:
 * green round button (bottom-right, 30px margins) that opens a small chat card
 * with brand header, greeting bubble and a "Speak With Our Expert" CTA that
 * deep-links to WhatsApp with a pre-filled message.
 */
export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const message = `Hi, I would like to speak with your growth advisor ${typeof window !== 'undefined' ? window.location.href : ''}`;
  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[999] flex flex-col items-end gap-3">
      <div
        className={cn(
          'w-[320px] max-w-[calc(100vw-40px)] bg-white shadow-widget overflow-hidden transition-all duration-300 origin-bottom-right',
          open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-90 invisible pointer-events-none',
        )}
        role="dialog"
        aria-label="WhatsApp chat"
        aria-hidden={!open}
      >
        <div className="relative flex items-center bg-white border-b border-black/10 py-3">
          <img src={site.logoMark} alt="" className="ml-5 h-[50px] w-auto shadow-widget" width={50} height={50} />
          <div className="ml-5 text-black">
            <div className="font-semibold leading-tight text-[16px]">{site.name}</div>
            <div className="text-[12px] text-black/60 leading-tight">{site.tagline}</div>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            className="absolute right-[17px] top-[20px] w-6 h-6 rounded-full bg-black text-white flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <Icon name="close" size={14} />
          </button>
        </div>
        <div className="bg-[#e5ddd5] p-4">
          <div className="inline-block bg-white rounded-lg px-3 py-2 text-[14px] text-black shadow-sm whitespace-pre-line leading-snug">
            {'Hi there!\nHow can I help you?'}
          </div>
        </div>
        <div className="p-3 bg-white">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white font-semibold text-[15px] py-3 hover:brightness-95 !text-white"
          >
            <Icon name="whatsapp" size={20} />
            Speak With Our Expert
          </a>
        </div>
      </div>
      <button
        type="button"
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        aria-expanded={open}
        className="w-[60px] h-[60px] rounded-[25px] bg-whatsapp text-white flex items-center justify-center shadow-widget transition-transform hover:scale-105"
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="whatsapp" size={34} />
      </button>
    </div>
  );
}
