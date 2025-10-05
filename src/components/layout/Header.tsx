'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle navigation item clicks
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu on item click
  };

  return (
    <header 
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300'
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderColor: 'var(--nav-border)'
      }}
    >
      <div className='max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <Link href='/' className='flex items-center'>
            <span
              className='text-2xl font-bold transition-colors duration-300'
              style={{ 
                fontFamily: 'RelationshipMelodrame, serif',
                color: 'var(--nav-text)'
              }}
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
                  ? 'border-b-2 border-yellow-600 pb-1'
                  : 'hover:opacity-80'
              }`}
              style={{ 
                fontFamily: 'CreatoDisplay, sans-serif',
                color: pathname === '/' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
              }}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              href='/about'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/about'
                  ? 'border-b-2 border-yellow-600 pb-1'
                  : 'hover:opacity-80'
              }`}
              style={{ 
                fontFamily: 'CreatoDisplay, sans-serif',
                color: pathname === '/about' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
              }}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              href='/community'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/community'
                  ? 'border-b-2 border-yellow-600 pb-1'
                  : 'hover:opacity-80'
              }`}
              style={{ 
                fontFamily: 'CreatoDisplay, sans-serif',
                color: pathname === '/community' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
              }}
              onClick={handleNavClick}
            >
              Community
            </Link>
            <Link
              href='/contact'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/contact'
                  ? 'border-b-2 border-yellow-600 pb-1'
                  : 'hover:opacity-80'
              }`}
              style={{ 
                fontFamily: 'CreatoDisplay, sans-serif',
                color: pathname === '/contact' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
              }}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg'
              style={{ color: 'var(--nav-text-hover)' }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FiX className='w-5 h-5' /> : <FiMenu className='w-5 h-5' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className='md:hidden border-t backdrop-blur-sm'
            style={{
              borderColor: 'var(--nav-border)',
              backgroundColor: 'var(--nav-bg)'
            }}
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                href='/'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                  pathname === '/'
                    ? 'bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ 
                  fontFamily: 'CreatoDisplay, sans-serif',
                  color: pathname === '/' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
                }}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link
                href='/about'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                  pathname === '/about'
                    ? 'bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ 
                  fontFamily: 'CreatoDisplay, sans-serif',
                  color: pathname === '/about' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
                }}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link
                href='/community'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                  pathname === '/community'
                    ? 'bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ 
                  fontFamily: 'CreatoDisplay, sans-serif',
                  color: pathname === '/community' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
                }}
                onClick={handleNavClick}
              >
                Community
              </Link>
              <Link
                href='/contact'
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                  pathname === '/contact'
                    ? 'bg-yellow-600/10 border-l-4 border-yellow-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ 
                  fontFamily: 'CreatoDisplay, sans-serif',
                  color: pathname === '/contact' ? 'var(--nav-text)' : 'var(--nav-text-hover)'
                }}
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
