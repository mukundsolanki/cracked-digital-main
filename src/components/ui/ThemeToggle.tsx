'use client';

import { useTheme } from '@/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 w-9 h-9">
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <FiSun
          className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
        {/* Moon icon */}
        <FiMoon
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
    </button>
  );
}
