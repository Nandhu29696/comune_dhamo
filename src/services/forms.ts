import type { EnquiryPayload } from '@/types';
import { post } from './api';
import { getRecaptchaToken } from './recaptcha';

const endpoints: Record<EnquiryPayload['source'], string> = {
  contact: '/api/contact',
  sample: '/api/sample',
  enquiry: '/api/enquiry',
};

/** Submits a form to the API, attaching a reCAPTCHA v3 token when configured. */
export async function submitEnquiry(payload: Omit<EnquiryPayload, 'recaptchaToken' | 'page'>) {
  const recaptchaToken = await getRecaptchaToken('submit');
  return post(endpoints[payload.source], {
    ...payload,
    page: typeof window !== 'undefined' ? window.location.pathname : undefined,
    recaptchaToken,
  });
}

export const PHONE_RULE = /^\d{10}$/;
export const PHONE_ERROR = 'Please provide 10 digits only.';
