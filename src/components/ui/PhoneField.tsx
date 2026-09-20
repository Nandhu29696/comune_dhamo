import { countryCodes } from '@/data/countryCodes';
import { PHONE_ERROR } from '@/services/forms';
import { cn } from '@/utils/cn';

interface PhoneFieldProps {
  id: string;
  label?: string;
  countryCode: string;
  phone: string;
  onCountryCodeChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  /** true once the user has typed something that is not 10 digits (reference shows the error live). */
  invalid: boolean;
  placeholder?: string;
  /** `compact` = product-page enquiry box (country select limited to 90px). */
  compact?: boolean;
}

/** Country-code select + 10-digit phone input, as on every reference form. */
export function PhoneField({
  id,
  label,
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  invalid,
  placeholder = 'Phone',
  compact,
}: PhoneFieldProps) {
  return (
    <div className="form-group">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex w-full items-stretch">
        <select
          className={cn('form-control w-auto flex-none', compact ? 'max-w-[90px]' : 'max-w-[110px]')}
          name="country_code"
          aria-label="Country code"
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          required
        >
          {countryCodes.map((c) => (
            <option key={c.code + c.country} value={c.code}>
              {c.code}
            </option>
          ))}
        </select>
        <input
          type="tel"
          id={id}
          name="phone"
          className={cn('form-control flex-1 min-w-0', invalid && 'invalid')}
          placeholder={placeholder}
          maxLength={10}
          inputMode="numeric"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          required
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? `${id}-error` : undefined}
        />
      </div>
      <small id={`${id}-error`} className={cn('text-red-600 text-[80%]', invalid ? 'block' : 'hidden')}>
        {PHONE_ERROR}
      </small>
    </div>
  );
}
