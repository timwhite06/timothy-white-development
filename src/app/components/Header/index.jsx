'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideMenu from './sidemenu'; // Importing your SideMenu component
import { tabs } from '@/app/tabs'; // Assuming you have your tab links stored in a separate file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current path for active tab indication

  // Track scroll position and change the header's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Timothy White</div>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex space-x-8 text-white text-lg">
            {tabs.map((tab, i) => (
              <li key={`${tab.name}_${i}`}>
                <Link href={tab.route}>
                  <div
                    className={`hover:text-cyan-400 ${
                      pathname === tab.route ? 'text-cyan-400' : ''
                    }`}
                  >
                    {tab.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Side Menu Button */}
          <div className="block md:hidden">
            <SideMenu tabs={tabs} pathname={pathname} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
