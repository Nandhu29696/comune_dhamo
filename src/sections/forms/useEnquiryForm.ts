import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHONE_RULE, submitEnquiry } from '@/services/forms';
import type { EnquiryPayload } from '@/types';

export interface EnquiryFormState {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  product: string;
  message: string;
}

const initial: EnquiryFormState = { name: '', email: '', countryCode: '+91', phone: '', product: '', message: '' };

/**
 * Shared state/validation for the Contact, Get Free Sample and product
 * Enquiry forms. Mirrors the reference: the phone must be exactly 10 digits
 * (live error while typing), and a successful POST redirects to /thank-you.
 */
export function useEnquiryForm(source: EnquiryPayload['source']) {
  const [values, setValues] = useState<EnquiryFormState>(initial);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const phoneInvalid = phoneTouched && !PHONE_RULE.test(values.phone);

  const set = <K extends keyof EnquiryFormState>(key: K) => (value: EnquiryFormState[K]) => {
    if (key === 'phone') setPhoneTouched(true);
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhoneTouched(true);
    if (!PHONE_RULE.test(values.phone)) {
      setError('Please enter a valid phone number with 10 digits.');
      return;
    }
    setError(null);
    setStatus('submitting');
    try {
      await submitEnquiry({ ...values, source });
      navigate('/thank-you', { state: { source } });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return { values, set, phoneInvalid, status, error, onSubmit };
}
