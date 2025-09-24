'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle navigation item clicks
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu on item click
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50'>
      <div className='max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <Link href='/' className='flex items-center'>
            <span
              className='text-2xl font-bold text-black'
              style={{ fontFamily: 'RelationshipMelodrame, serif' }}
            >
              CRACKED
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-black border-b-2 border-yellow-600 pb-1'
                  : 'text-gray-600 hover:text-black'
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              href='/about'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/about'
                  ? 'text-black border-b-2 border-yellow-600 pb-1'
                  : 'text-gray-600 hover:text-black'
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              href='/community'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/community'
                  ? 'text-black border-b-2 border-yellow-600 pb-1'
                  : 'text-gray-600 hover:text-black'
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              onClick={handleNavClick}
            >
              Community
            </Link>
            <Link
              href='/contact'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/contact'
                  ? 'text-black border-b-2 border-yellow-600 pb-1'
                  : 'text-gray-600 hover:text-black'
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-gray-600 hover:text-black transition-colors duration-200'
          >
            {isMenuOpen ? <FiX className='w-5 h-5' /> : <FiMenu className='w-5 h-5' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-sm'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                href='/'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  pathname === '/'
                    ? 'text-black bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link
                href='/about'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'text-black bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link
                href='/community'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  pathname === '/community'
                    ? 'text-black bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
                onClick={handleNavClick}
              >
                Community
              </Link>
              <Link
                href='/contact'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  pathname === '/contact'
                    ? 'text-black bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
