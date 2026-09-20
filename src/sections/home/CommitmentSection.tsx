import { Link } from 'react-router-dom';
import { site } from '@/config/site';

/** Reference `.Our_Commitment_section`: 70px padding, brand H3, two paragraphs with inline contact link. */
export function CommitmentSection() {
  return (
    <section className="py-[70px]">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="font-semibold text-brand pb-[10px]">Our Commitment to Quality</h3>
            <p>
              We are committed to supplying the best <b>cast iron powder</b> with consistent quality so that your production runs
              without interruption. From sourcing the finest raw materials to applying advanced manufacturing techniques, we make
              sure every batch of cast iron powder meets industry standards.
            </p>
            <p>
              <b>
                <Link to="/contact">Contact us</Link>
              </b>{' '}
              today for premium cast iron powder at competitive rates. Whether you work in manufacturing, construction, automotive or
              any other industry, trust {site.name} for high-quality cast iron powder solutions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
