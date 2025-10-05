import ContactHero, { PartnershipSection } from '@/components/features/contact/ContactHero';

export default function ContactPage() {
  return (
    <main 
      className='min-h-screen transition-colors duration-300'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <ContactHero />
      <PartnershipSection />
    </main>
  );
}
