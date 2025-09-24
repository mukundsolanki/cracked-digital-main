'use client';

import { FiArrowUpRight } from 'react-icons/fi';
import ScrollingCodeSnippet from './ScrollingCodeSnippet';

export default function HeroSection() {
  return (
    <section className='relative min-h-screen bg-white flex items-end pb-20 overflow-hidden'>
        {/* Subtle Grid Background */}
        <div className='absolute inset-0 opacity-30'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Binary Code - Top Left */}
        <div className='absolute top-32 left-20 opacity-15'>
          <div className='text-black font-mono text-sm leading-relaxed'>
            <div>01001000 01100101 01101100 01101100 01101111</div>
            <div>01010111 01101111 01110010 01101100 01100100</div>
            <div>
              01000011 01110010 01100001 01100011 01101011 01100101 01100100
            </div>
          </div>
        </div>

        {/* Scrolling Code Snippet - Right Side */}
        <ScrollingCodeSnippet />

        <div className='relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
          <div className='text-left'>
            {/* Main Heading - Bold and Eye-catching */}
            <div className='mb-8'>
              <div
                className='text-3xl md:text-4xl lg:text-5xl text-black mb-8 tracking-widest uppercase font-light'
                style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
              >
                Welcome to
              </div>
              <h1
                className='text-9xl md:text-[10rem] lg:text-[13rem] xl:text-[16rem] font-light leading-none text-black relative inline-block'
                style={{ fontFamily: 'RelationshipMelodrame, serif' }}
              >
                <span className='relative z-10'>CRACKED</span>
                <div className='absolute inset-0 bg-yellow-300/45 -z-10 rounded-s'></div>
              </h1>

              {/* Join Community Text with Arrow */}
              <div className='mt-8'>
                <a
                  href='https://chat.whatsapp.com/GUzd9aSDewzIb3hL458Cz3?mode=ems_copy_t'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4'
                >
                  <span
                    className='text-2xl md:text-3xl text-black font-light underline decoration-dotted underline-offset-8 transition-all duration-300'
                    style={{ fontFamily: 'CreatoDisplay, sans-serif' }}
                  >
                    Join our community today
                  </span>
                  <FiArrowUpRight className='w-10 h-10 text-black transition-all duration-300  group-hover:translate-x-1 group-hover:-translate-y-1' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
