'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  CodeBracketIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CodeBracketIcon,
    title: 'Technical Resources',
    description:
      'Access comprehensive tutorials, code examples, and best practices from industry experts.',
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Community',
    description:
      'Connect with experienced developers, get mentorship, and collaborate on projects.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning Paths',
    description:
      'Structured learning journeys designed to take you from beginner to advanced levels.',
  },
];

export default function FeaturesSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className='py-24 relative overflow-hidden transition-colors duration-300'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header - Left Aligned */}
        <div
          ref={headerRef}
          className={`mb-20 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-left transition-colors duration-300'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Why Choose{' '}
            <span className='bg-yellow-600 bg-clip-text text-transparent'>
              CRACKED
            </span>
            ?
          </h2>
          <p 
            className='text-xl md:text-2xl max-w-4xl leading-relaxed text-left transition-colors duration-300'
            style={{ color: 'var(--color-text-secondary)' }}
          >
            We provide comprehensive resources, expert guidance, and a
            supportive community to accelerate your technical career and
            personal growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-on-scroll ${
                isSectionVisible ? 'animated' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                backgroundColor: 'var(--color-background-secondary)',
                borderColor: 'var(--color-border)'
              }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className='w-8 h-8 text-white' />
              </div>

              {/* Content */}
              <h3 
                className='relative text-2xl font-bold mb-4 transition-colors duration-300'
                style={{ color: 'var(--color-text-primary)' }}
              >
                {feature.title}
              </h3>
              <p 
                className='relative leading-relaxed mb-6 transition-colors duration-300'
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {feature.description}
              </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
