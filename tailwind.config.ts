import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'sans': ['CreatoDisplay', 'var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
        'display': ['CreatoDisplay', 'var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        'serif': ['RelationshipMelodrame', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          green: 'var(--color-accent-green)',
          orange: 'var(--color-accent-orange)',
          pink: 'var(--color-accent-pink)',
          indigo: 'var(--color-accent-indigo)',
        },
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
          shadow: 'var(--glass-shadow)',
        },
        nav: {
          bg: 'var(--nav-bg)',
          text: 'var(--nav-text)',
          'text-hover': 'var(--nav-text-hover)',
          border: 'var(--nav-border)',
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up-fade': 'slide-up-fade 0.8s ease-out forwards',
        'stagger-fade-in': 'stagger-fade-in 0.6s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'text-reveal': 'text-reveal 1s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'bounce-in': 'bounce-in 0.6s ease-out forwards',
        'mask-reveal': 'mask-reveal 1.2s ease-in-out forwards',
        'mask-slide-up': 'mask-slide-up 1s ease-out forwards',
        'mask-scale-out': 'mask-scale-out 1.5s ease-out forwards',
        'jagged-mask': 'jagged-mask-reveal 2s ease-in-out forwards',
        'star-burst': 'star-burst-reveal 2.5s ease-in-out forwards',
        'lightning-reveal': 'lightning-reveal 2.2s ease-in-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'gradient': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(59, 130, 246, 0.6)',
          },
        },
        'slide-up-fade': {
          '0%': {
            transform: 'translateY(60px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'stagger-fade-in': {
          '0%': {
            transform: 'translateY(40px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 5px rgba(59, 130, 246, 0.2)',
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)',
          },
        },
        'text-reveal': {
          '0%': {
            'clip-path': 'inset(0 100% 0 0)',
          },
          '100%': {
            'clip-path': 'inset(0 0% 0 0)',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'bounce-in': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'shimmer': {
          '0%': {
            'background-position': '-200% 0',
          },
          '100%': {
            'background-position': '200% 0',
          },
        },
        'glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
