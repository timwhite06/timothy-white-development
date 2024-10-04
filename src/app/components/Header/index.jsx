'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position and change the header's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Timothy White</div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="/" className="hover:text-cyan-400">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
