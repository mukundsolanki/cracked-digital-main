"use client";

import { useState } from 'react';
import { useTheme } from '@/context/ThemeProvider';
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
    <header
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm'
      style={{
        backgroundColor: 'var(--color-background, rgba(255,255,255,0.9))',
        borderBottom: '1px solid var(--color-border, rgba(226,232,240,0.6))',
      }}
    >
      <div className='max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <Link href='/' className='flex items-center'>
            <span
              className='text-2xl font-bold'
              style={{ fontFamily: 'RelationshipMelodrame, serif', color: 'var(--color-text-primary)' }}
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
                  : ''
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif', color: pathname === '/' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              href='/about'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/about' ? 'border-b-2 border-yellow-600 pb-1' : ''
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif', color: pathname === '/about' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              href='/community'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/community' ? 'border-b-2 border-yellow-600 pb-1' : ''
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif', color: pathname === '/community' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              onClick={handleNavClick}
            >
              Community
            </Link>
            <Link
              href='/contact'
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/contact' ? 'border-b-2 border-yellow-600 pb-1' : ''
              }`}
              style={{ fontFamily: 'CreatoDisplay, sans-serif', color: pathname === '/contact' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </nav>

          {/* Theme toggle */}
          <div className='hidden md:flex items-center ml-4'>
            {/* ThemeToggle button */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-gray-600 hover:text-black transition-colors duration-200'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX className='w-5 h-5' /> : <FiMenu className='w-5 h-5' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className='md:hidden backdrop-blur-sm'
            style={{
              borderTop: '1px solid var(--color-border, rgba(226,232,240,0.6))',
              backgroundColor: 'var(--color-background, rgba(255,255,255,0.95))',
            }}
          >
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

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className='inline-flex items-center justify-center w-9 h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors'
    >
      {theme === 'dark' ? (
        // Sun icon for light
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 text-yellow-400' aria-hidden>
          <path fill='currentColor' d='M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 1.05l1.79-1.8-1.79-1.79-1.8 1.79 1.8 1.8zM17 13h3v-2h-3v2zM12 7a5 5 0 100 10 5 5 0 000-10zm4.24 9.16l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79zM11 23h2v-3h-2v3zM4.22 18.36l1.79 1.79 1.8-1.79-1.8-1.8-1.79 1.8z' />
        </svg>
      ) : (
        // Moon icon for dark
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 text-gray-700' aria-hidden>
          <path fill='currentColor' d='M21.64 13.01A9 9 0 0110.99 2.36 7 7 0 1019 20.07a9 9 0 002.64-7.06z' />
        </svg>
      )}
    </button>
  );
}
