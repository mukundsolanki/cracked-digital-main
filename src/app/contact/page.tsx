import ContactHero from '@/components/features/contact/ContactHero';
import ContactForm from '@/components/features/contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
