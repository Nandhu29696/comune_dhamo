import { SelectInput, TextInput, TextareaInput } from '@/components/ui/FormField';
import { PhoneField } from '@/components/ui/PhoneField';
import { Button } from '@/components/ui/Button';
import { productOptions } from '@/config/site';
import { useEnquiryForm } from './useEnquiryForm';

interface ContactFormProps {
  heading: string;
  source: 'contact' | 'sample';
}

/**
 * Reference `.contact-wrap` form: labelled underline inputs in a 2-column
 * grid (name / email / phone / product), full-width message, dark submit.
 */
export function ContactForm({ heading, source }: ContactFormProps) {
  const { values, set, phoneInvalid, status, error, onSubmit } = useEnquiryForm(source);

  return (
    <div className="bg-white w-full p-6 md:p-12">
      <h2 className="mb-6">{heading}</h2>
      <div id="form-message-warning" className="mb-6 text-red-600" aria-live="polite">
        {error}
      </div>
      <div id="form-message-success" className="mb-6" aria-live="polite" />
      <form className="contactForm" onSubmit={onSubmit} noValidate={false}>
        <div className="row">
          <div className="col md:w-1/2">
            <TextInput label="Full Name" id={`${source}-name`} name="name" placeholder="Name" required value={values.name} onChange={(e) => set('name')(e.target.value)} />
          </div>
          <div className="col md:w-1/2">
            <TextInput label="Email Address" id={`${source}-email`} type="email" name="email" placeholder="Email" required value={values.email} onChange={(e) => set('email')(e.target.value)} />
          </div>
          <div className="col md:w-1/2">
            <PhoneField
              id={`${source}-phone`}
              label="Phone"
              countryCode={values.countryCode}
              phone={values.phone}
              onCountryCodeChange={set('countryCode')}
              onPhoneChange={set('phone')}
              invalid={phoneInvalid}
            />
          </div>
          <div className="col md:w-1/2">
            <SelectInput
              label="Product"
              id={`${source}-product`}
              name="product"
              required
              placeholder="Select Product"
              options={productOptions.map((p) => ({ value: p, label: p }))}
              value={values.product}
              onChange={(e) => set('product')(e.target.value)}
            />
          </div>
          <div className="col">
            <TextareaInput label="Message" id={`${source}-message`} name="message" cols={30} rows={4} placeholder="Message" required value={values.message} onChange={(e) => set('message')(e.target.value)} />
          </div>
          <div className="col">
            <div className="form-group">
              <input type="hidden" name="g-recaptcha-response" />
              <div className="submitting" />
            </div>
            <Button type="submit" variant="submit-dark" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
