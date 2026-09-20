import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface BaseProps {
  label?: string;
  id?: string;
  error?: string;
  wrapperClassName?: string;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[]; placeholder?: string };
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

function Wrapper({ label, id, error, wrapperClassName, children }: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={cn('form-group', wrapperClassName)}>
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <small className="block text-red-600 text-[80%]" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}

export function TextInput({ label, id, error, wrapperClassName, className, ...rest }: InputProps) {
  return (
    <Wrapper label={label} id={id} error={error} wrapperClassName={wrapperClassName}>
      <input id={id} className={cn('form-control', error && 'invalid', className)} {...rest} />
    </Wrapper>
  );
}

export function SelectInput({ label, id, error, wrapperClassName, className, options, placeholder, ...rest }: SelectProps) {
  return (
    <Wrapper label={label} id={id} error={error} wrapperClassName={wrapperClassName}>
      <select id={id} className={cn('form-control', error && 'invalid', className)} {...rest}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value + o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export function TextareaInput({ label, id, error, wrapperClassName, className, ...rest }: TextareaProps) {
  return (
    <Wrapper label={label} id={id} error={error} wrapperClassName={wrapperClassName}>
      <textarea id={id} className={cn('form-control', error && 'invalid', className)} {...rest} />
    </Wrapper>
  );
}
