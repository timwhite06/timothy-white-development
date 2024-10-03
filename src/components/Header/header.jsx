'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { tabs } from '@/app/tabs';
import useAppStore from '../../data_stores/app_store';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useAppStore((state) => state.isMobile);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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

  function getClassname() {
    if (!isMobile) {
      return 'transition-class bg-scrolled';
    }
    if (isScrolled) {
      return 'transition-class bg-scrolled';
    }
    if (pathname === '/') {
      return 'transition-class bg-home';
    }
    return 'transition-class bg-scrolled';
  }

  return (
    <div className={`w-full z-[100] ${getClassname()}`}>
      <div className="p-4">
        <div className="w-full flex items-center justify-between">
          <div className="navbar-start flex items-center justify-start">
            <Link
              href="/"
              className="btn btn-ghost text-xl hover:text-current hover:bg-transparent flex items-center justify-center text-center">
              <div
                className="lg:hidden tooltip tooltip-right"
                data-tip="Company Name">
                <Image
                  src="/images/logo.png"
                  alt="Company Name Logo"
                  width={45}
                  height={45}
                  priority
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/images/logo.png"
                  alt="Company Name Logo"
                  width={45}
                  height={45}
                  priority
                />
              </div>
              <div className="hidden lg:flex">Company Name</div>
            </Link>
          </div>

          <div className="navbar-end flex items-center gap-1">
            <div className="hidden md:flex">
              {tabs.map((t, i) => (
                <Link
                  href={t.route}
                  key={`${t.name}_${i}`}
                  className={`btn btn-ghost text-[1rem] mx-2 ${pathname === t.route ? 'bg-cyan-400 text-black' : ''} hover:bg-cyan-400 hover:text-black`}>
                  {t.name}
                </Link>
              ))}
            </div>
            <button
              className="btn btn-ghost md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="fa fa-bars text-xl"></i>
            </button>
          </div>
          <div>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="w-[200px] bg-[#141414] absolute flex flex-col items-center md:hidden right-1 top-15 z-[999999999] rounded-lg gap-1">
                {tabs.map((t, i) => (
                  <Link
                    href={t.route}
                    key={`${t.name}_${i}`}
                    className={`btn btn-ghost w-full text-center text-[1rem] py-2 ${pathname === t.route ? 'bg-cyan-400 text-black' : ''} hover:bg-cyan-400 hover:text-black`}
                    onClick={() => setIsMenuOpen(false)}>
                    {t.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
