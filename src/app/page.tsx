import HeroSection from '@/components/features/home/HeroSection';
import FeaturesSection from '@/components/features/home/FeaturesSection';
import CommunityStats from '@/components/features/home/CommunityStats';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';
import CTASection from '@/components/features/home/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <CommunityStats />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
