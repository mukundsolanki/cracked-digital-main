import AboutHero from '@/components/features/about/AboutHero';
import AboutSection from '@/components/features/about/AboutSection';
import TeamSection from '@/components/features/about/TeamSection';

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-black'>
      <AboutHero />
      <AboutSection />
      <TeamSection />
    </main>
  );
}
