import { SelectInput, TextInput, TextareaInput } from '@/components/ui/FormField';
import { PhoneField } from '@/components/ui/PhoneField';
import { Button } from '@/components/ui/Button';
import { productOptions } from '@/config/site';
import { useEnquiryForm } from './useEnquiryForm';

/**
 * Reference `.enquiry-form-box` (product pages): white rounded box with a
 * 28px brand title, placeholder-only inputs (14px text), compact country
 * code select and a full-width brand submit button.
 */
export function EnquiryForm() {
  const { values, set, phoneInvalid, status, error, onSubmit } = useEnquiryForm('enquiry');

  return (
    <div className="enquiry-form-box bg-white px-[10px] rounded-[10px] sticky">
      <h5 className="text-center font-semibold text-[28px] mb-[15px] text-brand">Enquire Now</h5>
      <form onSubmit={onSubmit}>
        <TextInput name="name" placeholder="Full Name" required value={values.name} onChange={(e) => set('name')(e.target.value)} aria-label="Full Name" />
        <TextInput type="email" name="email" placeholder="Email Address" required value={values.email} onChange={(e) => set('email')(e.target.value)} aria-label="Email Address" />
        <PhoneField
          id="enquiry-phone"
          countryCode={values.countryCode}
          phone={values.phone}
          onCountryCodeChange={set('countryCode')}
          onPhoneChange={set('phone')}
          invalid={phoneInvalid}
          placeholder="Phone Number"
          compact
        />
        <SelectInput
          name="product"
          required
          placeholder="Select Product"
          options={productOptions.map((p) => ({ value: p, label: p }))}
          value={values.product}
          onChange={(e) => set('product')(e.target.value)}
          aria-label="Product"
        />
        <TextareaInput name="message" rows={3} placeholder="Message" value={values.message} onChange={(e) => set('message')(e.target.value)} aria-label="Message" />
        {error && (
          <p className="text-red-600 text-[14px]" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" variant="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </Button>
      </form>
    </div>
  );
}
