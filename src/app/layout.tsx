import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MaskTransition from '@/components/ui/MaskTransition';
import { ThemeProvider } from '@/contexts/ThemeContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CRACKED - Technical Community',
  description:
    'Join the ultimate technical community for developers, engineers, and tech enthusiasts. Access expert resources, mentorship, and career growth opportunities.',
  keywords:
    'technical community, developers, programming, software engineering, mentorship, career growth',
  authors: [{ name: 'CRACKED Community' }],
  openGraph: {
    title: 'CRACKED - Technical Community',
    description:
      'Join the ultimate technical community for developers, engineers, and tech enthusiasts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRACKED - Technical Community',
    description:
      'Join the ultimate technical community for developers, engineers, and tech enthusiasts.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id='theme-init' strategy='beforeInteractive'>
          {`
            try {
              const saved = localStorage.getItem('theme');
              const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = saved || system;
              const root = document.documentElement;
              root.classList.remove('light', 'dark');
              root.classList.add(theme);
              root.setAttribute('data-theme', theme);
            } catch {}
          `}
        </Script>
        {/* SVG Filter for Glass Distortion */}
        <svg style={{ display: 'none' }}>
          <filter id='glass-distortion'>
            <feTurbulence
              type='turbulence'
              baseFrequency='0.008'
              numOctaves='2'
              result='noise'
            />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='77' />
          </filter>
        </svg>

        <ThemeProvider>
          <MaskTransition maskType='jagged-mask' delay={200} duration={2000}>
            <Header />
            {children}
            <Footer />
          </MaskTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
