import HeroSection from '@/components/features/home/HeroSection';
import FeaturesSection from '@/components/features/home/FeaturesSection';
import CommunityStats from '@/components/features/home/CommunityStats';
import FAQSection from '@/components/features/home/FAQSection';

export default function Home() {
  return (
    <main 
      className='min-h-screen transition-colors duration-300'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <HeroSection />
      <FeaturesSection />
      <CommunityStats />
      <FAQSection />
    </main>
  );
}
