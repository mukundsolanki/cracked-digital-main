import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-black overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/hero-background.jpg'
          alt='CRACKED Community Background'
          fill
          className='object-cover opacity-90'
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80'></div>

      {/* Subtle Blur Overlay */}
      <div className='absolute inset-0 backdrop-blur-[3px] pointer-events-none'></div>

      {/* Fade transition overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-20'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8'>
            <div className='w-2 h-2 bg-green-400 rounded-full'></div>
            <span className='text-sm font-medium text-white/90'>
              Join 10,000+ developers worldwide
            </span>
          </div>

          {/* Main Heading */}
          <div className='mb-8'>
            <div
              className='text-sm md:text-base text-white/70 mb-4 tracking-widest uppercase'
              style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
            >
              Welcome to
            </div>
            <h1
              className='text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white'
              style={{ fontFamily: 'RelationshipMelodrame, serif' }}
            >
              CRACKED
            </h1>
          </div>

          {/* Subheading */}
          <p
            className='text-xl md:text-2xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed font-light'
            style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
          >
            The ultimate destination for technical excellence, community
            support, and career growth.
          </p>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div
                className='text-3xl md:text-4xl font-bold text-white mb-2'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                10K+
              </div>
              <div
                className='text-white/60 text-sm'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                Active Members
              </div>
            </div>
            <div className='text-center'>
              <div
                className='text-3xl md:text-4xl font-bold text-white mb-2'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                500+
              </div>
              <div
                className='text-white/60 text-sm'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                Articles
              </div>
            </div>
            <div className='text-center'>
              <div
                className='text-3xl md:text-4xl font-bold text-white mb-2'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                50+
              </div>
              <div
                className='text-white/60 text-sm'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                Mentors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
