'use client';

import { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedin, FaDiscord, FaInstagram } from 'react-icons/fa';
import ScrollingCodeSnippet from './ScrollingCodeSnippet';

export default function HeroSection() {
  const tags = [
    'Devs',
    'Students',
    'Founders',
    'Entrepreneurs',
    'Hackers',
    'Designers',
    'Open-Source Enthusiasts',
    'Builders',
    'Innovators',
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentTag = tags[index];
    let currentIndex = 0;

    // Clear text first
    setDisplayText('');

    // Type out the current tag
    const typeInterval = setInterval(() => {
      if (currentIndex < currentTag.length) {
        setDisplayText(currentTag.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);

        setTimeout(() => {
          setIndex(prev => (prev + 1) % tags.length);
        }, 2000);
      }
    }, 100); // Typing speed: 100ms per character

    return () => {
      clearInterval(typeInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .typing-cursor {
          animation: blink 1s infinite;
        }
      `}</style>
      <section 
        className='relative min-h-screen flex items-center justify-center md:items-end md:justify-start pb-20 overflow-hidden transition-colors duration-300'
        style={{ backgroundColor: 'var(--color-background)' }}
      >
      {/* Subtle Grid Background */}
      <div className='absolute inset-0 opacity-30'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Binary Code */}
      <div className='absolute top-25 left-20 opacity-15 hidden md:block'>
        <div 
          className='font-mono text-sm leading-relaxed transition-colors duration-300'
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <div>01001000 01100101 01101100 01101100 01101111</div>
          <div>01010111 01101111 01110010 01101100 01100100</div>
          <div>
            01000011 01110010 01100001 01100011 01101011 01100101 01100100
          </div>
        </div>
      </div>

      {/* Scrolling Code Snippet */}
      <ScrollingCodeSnippet />

      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 md:pt-16 sm:pt-24 md:pt-32'>
        <div className='flex flex-col items-center md:items-start'>
          {/* Main Heading */}
           <div
             className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 font-light transition-all duration-300'
             style={{ 
               fontFamily: 'CreatoDisplay, sans-serif',
               color: 'var(--color-text-primary)'
             }}
           >
             Welcome{' '}
             <span className='text-yellow-500 font-medium transition-opacity duration-500 ease-in-out'>
               {'{'}
               {displayText}
               <span className='inline-block w-0.5 bg-yellow-500 ml-1 typing-cursor' style={{ height: '1em', verticalAlign: 'text-bottom', transform: 'translateY(-2px)' }}></span>
               {'}'}
             </span>{' '}
             to
           </div>

          <h1
            className='text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[13rem] 2xl:text-[16rem] font-light leading-none relative inline-block transition-colors duration-300'
            style={{ 
              fontFamily: 'RelationshipMelodrame, serif',
              color: 'var(--color-text-primary)'
            }}
          >
            <span className='relative z-10'>CRACKED</span>
            <div className='absolute inset-0 bg-yellow-300/45 -z-10 rounded-s'></div>
          </h1>

          {/* Join Community Text */}
          <div className='mt-6 sm:mt-8'>
            <a
              href='https://chat.whatsapp.com/GUzd9aSDewzIb3hL458Cz3?mode=ems_copy_t'
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center justify-center md:justify-start gap-2 sm:gap-3 transition-all duration-300 hover:gap-3 sm:hover:gap-4'
            >
              <span
                className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-light underline decoration-dotted underline-offset-4 sm:underline-offset-6 md:underline-offset-8 transition-all duration-300'
                style={{ 
                  fontFamily: 'CreatoDisplay, sans-serif',
                  color: 'var(--color-text-primary)'
                }}
              >
                Join our community today
              </span>
              <FiArrowUpRight 
                className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' 
                style={{ color: 'var(--color-text-primary)' }}
              />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className='mt-6 sm:mt-8 flex justify-center md:justify-start gap-4 sm:gap-6'>
            <a
              href='https://linkedin.com/company/cracked-community'
              target='_blank'
              rel='noopener noreferrer'
              className='group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110'
            >
              <FaLinkedin className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300' />
            </a>
            <a
              href='https://discord.gg/cracked-community'
              target='_blank'
              rel='noopener noreferrer'
              className='group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110'
            >
              <FaDiscord className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300' />
            </a>
            <a
              href='https://instagram.com/cracked.community'
              target='_blank'
              rel='noopener noreferrer'
              className='group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110'
            >
              <FaInstagram className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300' />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
