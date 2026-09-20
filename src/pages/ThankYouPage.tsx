import { Link, useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { useSeo } from '@/hooks/useSeo';

/** Reference `.thank-you`: centred brand H2 (3rem/700) and 20px paragraph with 10 % vertical padding. */
export function ThankYouPage() {
  const { state } = useLocation() as { state?: { source?: string } };
  useSeo({ title: `Thank You | ${site.name}`, description: 'Your message has been received.' });

  const label = state?.source === 'sample' ? 'sample request' : state?.source === 'enquiry' ? 'enquiry' : 'message';

  return (
    <section className="text-center py-[10%] px-gutter">
      <h2 className="text-brand text-[3rem] font-bold">Thank You!</h2>
      <p className="text-center text-[20px]">
        Your {label} has been received. Our team will get back to you shortly.
      </p>
      <p className="text-center text-[20px]">
        <Link to="/">Return to the home page</Link>
      </p>
    </section>
  );
}
