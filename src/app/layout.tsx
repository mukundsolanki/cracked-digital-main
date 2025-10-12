import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MaskTransition from '@/components/ui/MaskTransition';

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
    'technical community, developers, programming, software engineering, mentorship, career growth, CRACKED community, tech events',
  authors: [{ name: 'CRACKED Community' }],
  metadataBase: new URL('https://cracked-community.vercel.app'),
  openGraph: {
    title: 'CRACKED - Technical Community',
    description:
      'Join the ultimate technical community for developers, engineers, and tech enthusiasts. Access expert resources, mentorship, and career growth opportunities.',
    type: 'website',
    locale: 'en_US',
    url: 'https://cracked-community.vercel.app',
    siteName: 'CRACKED Community',
    images: [
      {
        url: '/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'CRACKED - Technical Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRACKED - Technical Community',
    description:
      'Join the ultimate technical community for developers, engineers, and tech enthusiasts. Access expert resources, mentorship, and career growth opportunities.',
    images: ['/hero-background.jpg'],
    creator: '@CrackedCommunity',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      </body>
    </html>
  );
}
