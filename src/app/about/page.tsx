import { Metadata } from 'next';
import AboutHero from '@/components/features/about/AboutHero';
import AboutSection from '@/components/features/about/AboutSection';
import TeamSection from '@/components/features/about/TeamSection';
import Testimonials from '@/components/features/about/Testimonials';
export const metadata: Metadata = {
  title: 'About Us - CRACKED Technical Community',
  description:
    "Learn about CRACKED's mission to democratize technical education and create a supportive ecosystem for developers worldwide. Discover our story, values, and team.",
  keywords:
    'about CRACKED, technical education, developer community, tech story, community values, developer ecosystem',
  openGraph: {
    title: 'About CRACKED - Our Story & Mission',
    description:
      'Discover our story and mission to democratize technical education and create a supportive ecosystem for developers worldwide.',
    type: 'website',
    images: [
      {
        url: '/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'About CRACKED Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CRACKED - Our Story & Mission',
    description:
      'Discover our story and mission to democratize technical education and create a supportive ecosystem for developers worldwide.',
    images: ['/hero-background.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-black'>
      <AboutHero />
      <AboutSection />
      <Testimonials />
      <TeamSection />
    </main>
  );
}
