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
      <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50'></div>

      {/* Subtle Blur Overlay */}
      <div className='absolute inset-0 backdrop-blur-[3px] pointer-events-none'></div>

      {/* Fade transition overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-20'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        <div className='text-center'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 mt-16'>
            <div className='w-2 h-2 bg-green-400 rounded-full'></div>
            <span className='text-sm font-medium text-white/90'>
              Join and collaborate with developers worldwide
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
            className='text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light'
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
                100+
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
                10+
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
                7
              </div>
              <div
                className='text-white/60 text-sm'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                Mentors
              </div>
            </div>
          </div>

          {/* Join Community Button */}
          <div className='mt-12 mb-8'>
            <a
              href='https://chat.whatsapp.com/GUzd9aSDewzIb3hL458Cz3?mode=ems_copy_t'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/10'
              style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
            >
              {/* Shiny effect */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300'></div>

              {/* Button Content */}
              <div className='relative z-10 flex items-center gap-3'>
                {/* WhatsApp Icon */}
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488'/>
                </svg>

                <span>Join Community</span>

                {/* Arrow Icon */}
                <svg
                  className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </div>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
