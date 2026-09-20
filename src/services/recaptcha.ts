/**
 * Google reCAPTCHA v3 helper. The reference site executes reCAPTCHA v3 on
 * form submit and appends the token as `g-recaptcha-response`. When no site
 * key is configured the helpers resolve to `undefined` and forms still work.
 */
const SITE_KEY = (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) ?? '';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let loading: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (!SITE_KEY) return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('reCAPTCHA failed to load'));
    document.head.appendChild(s);
  });
  return loading;
}

export async function getRecaptchaToken(action: string): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  try {
    await loadRecaptcha();
    const g = window.grecaptcha;
    if (!g) return undefined;
    await new Promise<void>((r) => g.ready(r));
    return await g.execute(SITE_KEY, { action });
  } catch {
    return undefined;
  }
}
