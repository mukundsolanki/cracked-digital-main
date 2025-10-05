import EventsSection from '@/components/features/community/EventsSection';

export default function CommunityPage() {
  return (
    <main 
      className='min-h-screen transition-colors duration-300'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Luma Event Registration Section */}
      <section 
        className='py-24 transition-colors duration-300'
        style={{ backgroundColor: 'var(--color-background-secondary)' }}
      >
        <div className='max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
          <div className='text-center mb-12'>
            <h2 
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-colors duration-300'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Register for Our
              <span className='text-yellow-600'> Upcoming Event</span>
            </h2>
            <p 
              className='text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Join us on September 27th for an interactive session on LinkedIn
              profile building. Register now to secure your spot!
            </p>
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
