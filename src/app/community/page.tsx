import { Metadata } from 'next';
import EventsSection from '@/components/features/community/EventsSection';
import PastEventsSection from '@/components/features/community/PastEventsSection';
import SocialShare from '@/components/ui/SocialShare';

export const metadata: Metadata = {
  title: 'Community Events - CRACKED Technical Community',
  description:
    'Join CRACKED community events! Register for upcoming tech events, workshops, and networking sessions. Connect with fellow developers and grow your career.',
  keywords:
    'CRACKED events, tech events, developer workshops, networking, community events, tech meetups, LinkedIn sessions',
  openGraph: {
    title: '🚀 Join CRACKED Community Events',
    description:
      'Register for upcoming tech events, workshops, and networking sessions. Connect with fellow developers and grow your career!',
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
    description:
      'Register for upcoming tech events, workshops, and networking sessions. Connect with fellow developers and grow your career!',
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
              Join us on November 16th for an 8-hour hackathon — build,
              collaborate, and compete for exciting prizes!
            </p>

            {/* Event Share Section */}
            <div className='flex justify-center mb-8'>
              {/* <SocialShare
                title='⏱️ Join the CRACKED 8-Hour Hackathon'
                description='Get ready for a marathon of creativity and problem-solving! Build, collaborate, and win exciting prizes on November 16th.'
                hashtags={[
                  'CrackedHackathon',
                  'TechCommunity',
                  'Innovation',
                  'Teamwork',
                  'CodingChallenge',
                ]}
                variant='dropdown'
              /> */}
            </div>
          </div>

          <div className='flex justify-center'>
            {/* <iframe
              src='https://luma.com/embed/event/evt-NEW_EVENT_ID/simple' // Replace with actual Luma embed link
              width='600'
              height='450'
              frameBorder='1'
              style={{ border: '1px solid #bfcbda88', borderRadius: '14px' }}
              allow='fullscreen; payment'
              aria-hidden='false'
              tabIndex={0}
              className='w-full max-w-2xl'
            /> */}
            <div className='text-center border border-gray-300 rounded-xl p-10 max-w-2xl w-full bg-gray-50'>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4'>
                Registration Opening Soon 🚀
              </h3>
              <p className='text-lg text-gray-600'>
                Stay tuned — registrations will be open shortly! 😊
              </p>
            </div>
          </div>
        </div>
      </section>

      <EventsSection />
      <PastEventsSection />
    </main>
  );
}
