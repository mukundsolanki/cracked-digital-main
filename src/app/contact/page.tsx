import { Metadata } from 'next';
import ContactHero, { PartnershipSection } from '@/components/features/contact/ContactHero';

export const metadata: Metadata = {
  title: 'Contact Us - CRACKED Technical Community',
  description: 'Get in touch with CRACKED community. Contact us for partnerships, collaborations, questions, or support. We\'d love to hear from you!',
  keywords: 'contact CRACKED, community contact, partnerships, collaborations, support, get in touch',
  openGraph: {
    title: 'Contact CRACKED - Let\'s Connect',
    description: 'Get in touch with CRACKED community. Contact us for partnerships, collaborations, questions, or support. We\'d love to hear from you!',
    type: 'website',
    images: [
      {
        url: '/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact CRACKED Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact CRACKED - Let\'s Connect',
    description: 'Get in touch with CRACKED community. Contact us for partnerships, collaborations, questions, or support.',
    images: ['/hero-background.jpg'],
  },
};

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-black'>
      <ContactHero />
      <PartnershipSection />
    </main>
  );
}
