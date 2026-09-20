import { Link } from 'react-router-dom';
import { footerNav, site } from '@/config/site';
import { Icon } from '@/components/ui/Icon';

/**
 * Reference `.ftco-footer`: #252525 background, 5em/3em padding, three
 * widgets (About / Services / Address), two factory addresses, copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-[16px] pt-[5em] pb-[3em] relative [&_p]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-brand">
      <div className="container">
        <div className="row mb-12">
          <div className="col lg:w-1/3">
            <div className="mb-6">
              <h3 className="text-[22px] font-medium text-white relative">About Us</h3>
              <p>
                We run four separate production lines for the manufacture of Cast Iron Powder, giving us a capacity of 1500 tons per
                month. Around 60% of our output is sold within the domestic market and the remaining 40% is exported overseas.
              </p>
            </div>
          </div>
          <div className="col md:w-1/2 lg:w-1/4">
            <div className="mb-6 md:ml-12">
              <h3 className="text-[22px] font-medium text-white relative">Services</h3>
              <ul className="list-none pl-0 mb-0">
                {footerNav.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="py-1 block">
                      <Icon name="arrow-forward" className="mr-3 text-white/70" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col md:w-1/2 lg:w-5/12">
            <div className="mb-6">
              <h3 className="text-[22px] font-medium text-white relative">Address</h3>
              <div className="mb-4">
                <ul className="list-none pl-0 mb-0">
                  {site.phones.map((p) => (
                    <li key={p.href} className="table leading-[1.5] mt-2 -mb-[3px]">
                      <a href={p.href} className="table">
                        <span className="table-cell align-top w-10 text-[18px] pt-[2px] text-white">
                          <Icon name="phone" />
                        </span>
                        <span className="table-cell align-top">{p.label}</span>
                      </a>
                    </li>
                  ))}
                  {site.emails.map((e) => (
                    <li key={e.href} className="table leading-[1.5] mt-2 -mb-[3px]">
                      <a href={e.href} className="table">
                        <span className="table-cell align-top w-10 text-[18px] pt-[2px] text-white">
                          <Icon name="envelope" />
                        </span>
                        <span className="table-cell align-top">{e.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-12">
          {site.addresses.map((a) => (
            <div key={a.title} className="col md:w-1/2 mb-6">
              <a href={a.mapUrl} target="_blank" rel="noopener noreferrer">
                <span className="text">
                  <h3 className="text-[22px] font-medium text-white relative">
                    <Icon name="map-marker" />
                    &nbsp;{a.title}
                  </h3>
                  <p>{a.lines}</p>
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col text-center">
            <p>
              © {year} Copyright {site.name.toUpperCase()} All Rights Reserved.{' '}
              <a href={site.seoAgency.href} className="!text-white" title="SEO Services">
                SEO Services
              </a>{' '}
              by {site.seoAgency.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
