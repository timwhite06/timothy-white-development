import { tabs } from '@/app/tabs';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-transparent text-left pt-4 max-w-[1800px] w-full min-h-[100px] flex flex-col break-words overflow-x-auto sm:overflow-hidden">
      <div className="container mx-auto flex-1 flex flex-col justify-end p-4 break-words">
        <div className="min-h-[20px]"></div>

        <div className="w-full flex justify-center break-words p-1 md:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {/* Column 1 */}
            <div className="max-w-[600px] break-words flex flex-col gap-3">
              <div>
                <h1
                  className="text-[1.5rem]"
                  style={{ textDecoration: 'underline 2px #22d3ee' }}>
                  Pages
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {tabs.map((tab, index) => (
                  <div key={index} className="break-words">
                    <Link
                      href={tab.route}
                      className="text-gray-300 hover:text-[#22dee3] break-words">
                      {tab.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="break-words">
                <Link
                  href="/pages/policies/privacy-policy"
                  className="text-gray-300 hover:text-[#22dee3] break-words">
                  Privacy Policy
                </Link>{' '}
                |{' '}
                <Link
                  href="/pages/policies/terms-of-service"
                  className="text-gray-300 hover:text-[#22dee3] break-words">
                  Terms of Service
                </Link>
              </div>
            </div>
            {/* Column 2 */}
            <div className="max-w-[600px] break-words border border-solid">
              <div>
                <div>
                  <h1
                    className="text-[1.5rem]"
                    style={{ textDecoration: 'underline 2px #22d3ee' }}>
                    Find us
                  </h1>
                </div>
              </div>

              <div className="flex items-center hover:text-[#22dee3]">
                idk what to put here, look for inspiration
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 bg-black break-words">
        <p className="text-gray-200 w-full text-center break-words">
          © {new Date().getFullYear()} Company Name Ltd - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
