'use client';

import { useState } from 'react';
import Link from 'next/link';
import { colors } from '@/lib/colors';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                   style={{ background: `linear-gradient(135deg, ${colors.primary[600]}, ${colors.secondary[600]})` }}>
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">CRACKED</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/community" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Community
            </Link>
            <Link href="/resources" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/join"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Join Community
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm border-t border-white/10">
              <Link href="/" className="text-white block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Community
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <Link
                href="/join"
                className="bg-blue-600 text-white block px-3 py-2 text-base font-medium rounded-lg mt-4 text-center"
              >
                Join Community
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
