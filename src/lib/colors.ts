// CRACKED Community Theme Colors
// Centralized color system for consistent theming across the application

export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Secondary Brand Colors (Purple)
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7', // Main purple
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },

  // Accent Colors
  accent: {
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
  },

  // Neutral Colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Semantic Colors
  semantic: {
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
  },

  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    dark: '#0f172a',
    'dark-secondary': '#1e293b',
  },

  // Text Colors
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#64748b',
    inverse: '#ffffff',
    muted: '#94a3b8',
  },

  // Border Colors
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
    dark: '#94a3b8',
  },
} as const;

// Gradient Definitions
export const gradients = {
  primary: 'from-blue-600 to-purple-600',
  secondary: 'from-purple-600 to-indigo-600',
  accent: 'from-blue-500 to-purple-500',
  hero: 'from-blue-50 to-indigo-100',
  cta: 'from-blue-600 via-purple-600 to-indigo-700',
  card: 'from-white to-gray-50',
  dark: 'from-gray-900 to-gray-800',
} as const;

// Animation Colors for Background Effects
export const animationColors = {
  particles: [
    colors.primary[400],
    colors.secondary[400],
    colors.accent.green[400],
    colors.accent.orange[400],
    colors.accent.pink[400],
    colors.accent.indigo[400],
  ],
  floating: [
    colors.primary[200],
    colors.secondary[200],
    colors.accent.green[200],
    colors.accent.orange[200],
  ],
} as const;

// CSS Custom Properties for dynamic theming
export const cssVariables = {
  '--color-primary': colors.primary[500],
  '--color-secondary': colors.secondary[500],
  '--color-accent-green': colors.accent.green[500],
  '--color-accent-orange': colors.accent.orange[500],
  '--color-accent-pink': colors.accent.pink[500],
  '--color-accent-indigo': colors.accent.indigo[500],
  '--color-background': colors.background.primary,
  '--color-text-primary': colors.text.primary,
  '--color-text-secondary': colors.text.secondary,
  '--color-border': colors.border.light,
} as const;

// Utility function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

// Type definitions for better TypeScript support
export type ColorScale = keyof typeof colors.primary;
export type AccentColor = keyof typeof colors.accent;
export type SemanticColor = keyof typeof colors.semantic;
export type GradientName = keyof typeof gradients;
