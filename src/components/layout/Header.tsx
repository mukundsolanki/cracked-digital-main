'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  // Handle navigation item clicks
  const handleNavClick = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false); // Close mobile menu on item click
  };

  return (
    <header className="glass-nav-container">
      <nav className="glass-nav">
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        <div className="glass-content">
          {/* Desktop Navigation - Perfectly Centered */}
          <nav className="hidden md:block">
            <ul className="nav-list">
              <li>
                <Link 
                  href="/" 
                  className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/community" 
                  className={`nav-item ${activeItem === 'community' ? 'active' : ''}`}
                  onClick={() => handleNavClick('community')}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button - Separate container */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-item"
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <ul className="nav-list flex-col space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
                    onClick={() => handleNavClick('home')}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
                    onClick={() => handleNavClick('about')}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/community" 
                    className={`nav-item ${activeItem === 'community' ? 'active' : ''}`}
                    onClick={() => handleNavClick('community')}
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
                    onClick={() => handleNavClick('contact')}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
