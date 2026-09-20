import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { Icon } from '@/components/ui/Icon';

/**
 * Reference `.top-contant`: phone (left third), logo centred on the page,
 * e-mail right-aligned. Hidden below 992px.
 */
export function TopBar() {
  return (
    <div className="container pt-4 hidden lg:block">
      <div className="row justify-between">
        <div className="col md:w-2/3 md:order-last">
          <div className="row">
            <div className="col md:w-1/2 text-center">
              <Link to="/" className="inline-block leading-none mb-[10px]" aria-label={`${site.name} home`}>
                <img src={site.logo} alt={`${site.name} logo`} className="inline-block h-[60px] w-auto" height={60} width={180} />
              </Link>
            </div>
            <div className="col md:w-1/2 md:flex md:justify-end mb-4 md:mb-0 mt-[17px]">
              <p className="mb-0">
                <a href={site.emails[0].href} className="text-brand">
                  <Icon name="envelope" className="mr-2" />
                  <span>{site.emails[0].label}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col md:w-1/3 flex">
          <p className="mb-0 flex mt-[17px]">
            <a href={site.phones[0].href} className="text-brand">
              <Icon name="phone" className="mr-2" />
              <span>{site.phones[0].label}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
