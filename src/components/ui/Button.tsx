import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'pill' | 'about' | 'nav' | 'submit' | 'submit-dark';

const variantClass: Record<Variant, string> = {
  /** Bootstrap `.btn.btn-primary` with the brand colour (blog "Read More" without pill). */
  primary: 'btn btn-primary',
  /** Blog "Read More": `btn btn-primary rounded-pill text-white py-2 px-4`. */
  pill: 'btn btn-primary rounded-pill text-white py-2 px-6',
  /** Home "Know More About Us". */
  about: 'about-btn',
  /** Header "Get Free Sample". */
  nav: 'nav-btn',
  /** Product page enquiry "Send Enquiry": `.btn-submit w-100`. */
  submit: 'btn w-full bg-brand text-white rounded-md p-[10px] text-[15px] hover:bg-brand hover:text-white',
  /** Contact page "Send Message" (`btn-primary` with inline `#113d48`). */
  'submit-dark': 'btn btn-primary !bg-submit-dark !border-submit-dark',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = 'primary', className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={cn(variantClass[variant], className)} {...rest} />;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  to: string;
}

export function LinkButton({ variant = 'primary', className, to, ...rest }: LinkButtonProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(to);
  if (isExternal) {
    return <a href={to} className={cn(variantClass[variant], className)} {...rest} />;
  }
  return <Link to={to} className={cn(variantClass[variant], className)} {...rest} />;
}
