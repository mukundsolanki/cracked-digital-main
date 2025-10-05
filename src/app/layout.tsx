import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MaskTransition from '@/components/ui/MaskTransition';
import { ClientProviders } from '@/components/provider/ClientProviders';

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme || systemTheme;
                
                // Apply theme classes
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
                
                // Set data attribute for additional styling if needed
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                document.documentElement.classList.add('light');
                document.documentElement.setAttribute('data-theme', 'light');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
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

          <MaskTransition maskType='jagged-mask' delay={200} duration={2000}>
            <Header />
            {children}
            <Footer />
          </MaskTransition>
        </ClientProviders>
      </body>
    </html>
  );
}
