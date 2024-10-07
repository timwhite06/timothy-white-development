'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SideMenu = ({ tabs, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <button className="btn btn-ghost md:hidden" onClick={handleClick}>
        <i className="fa fa-bars text-xl text-white"></i>
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-full flex p-4 items-center justify-between">
          <div>
            <Image
              src="/images/logo.png"
              alt="Timothy White Logo"
              width={60}
              height={60}
              priority
            />
          </div>

          <button className="btn btn-ghost md:hidden" onClick={handleClick}>
            <i className="fa-solid fa-xmark text-3xl text-white"></i>
          </button>
        </div>

        <nav className="flex flex-col items-center h-full mt-10">
          {tabs.map((t, i) => (
            <Link
              href={t.route}
              key={`${t.name}_${i}`}
              className={`text-2xl mb-4 ${
                pathname === t.route ? 'text-black' : 'text-white'
              } hover:text-black`}
              onClick={handleClick}
            >
              {t.name}
            </Link>
          ))}

          {/* GitHub Icon at the bottom */}
          <div
            className=" 
          mt-auto mb-[150px]"
          >
            <Link
              href="https://github.com/timwhite06"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-white text-3xl"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
