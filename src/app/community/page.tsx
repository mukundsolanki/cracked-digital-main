import { Metadata } from 'next';
import EventsSection from '@/components/features/community/EventsSection';
import SocialShare from '@/components/ui/SocialShare';

export const metadata: Metadata = {
  title: 'Community Events - CRACKED Technical Community',
  description: 'Join CRACKED community events! Register for upcoming tech events, workshops, and networking sessions. Connect with fellow developers and grow your career.',
  keywords: 'CRACKED events, tech events, developer workshops, networking, community events, tech meetups, LinkedIn sessions',
  openGraph: {
    title: '🚀 Join CRACKED Community Events',
    description: 'Register for upcoming tech events, workshops, and networking sessions. Connect with fellow developers and grow your career!',
    type: 'website',
    images: [
      {
        url: '/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'CRACKED Community Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚀 Join CRACKED Community Events',
    description: 'Register for upcoming tech events, workshops, and networking sessions. Connect with fellow developers and grow your career!',
    images: ['/hero-background.jpg'],
  },
};

export default function CommunityPage() {
  return (
    <main className='min-h-screen bg-black'>
      {/* Luma Event Registration Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8'>
              Register for Our
              <span className='text-yellow-600'> Upcoming Event</span>
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8'>
              Join us on September 27th for an interactive session on LinkedIn
              profile building. Register now to secure your spot!
            </p>
            
            {/* Event Share Section */}
            <div className='flex justify-center mb-8'>
              <SocialShare 
                title="🚀 Join CRACKED Community Event - LinkedIn Profile Building Session"
                description="Interactive session on LinkedIn profile building. Learn from experts and connect with fellow developers!"
                hashtags={['CrackedEvent', 'LinkedInTips', 'TechCommunity', 'CareerGrowth', 'Networking']}
                variant="dropdown"
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <iframe
              src='https://luma.com/embed/event/evt-cHBtbFCQHNN2brM/simple'
              width='600'
              height='450'
              frameBorder='1'
              style={{ border: '1px solid #bfcbda88', borderRadius: '14px' }}
              allow='fullscreen; payment'
              aria-hidden='false'
              tabIndex={0}
              className='w-full max-w-2xl'
            />
          </div>
        </div>
      </section>

      <EventsSection />
    </main>
  );
}
