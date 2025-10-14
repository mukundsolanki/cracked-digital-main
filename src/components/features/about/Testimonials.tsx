'use client';
import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Nidhi Agrawal',
    role: 'Computer Science Student',
    company: 'CDGI',
    image: '/images/testi-1.jpg',
    content:
      'The LinkedIn workshop was a game-changer for me. Gayatri’s tips on building a strong profile and networking effectively helped me land multiple internship offers. Her actionable advice really works!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Satyam Gupta',
    role: 'Software Engineering Student',
    company: 'VIT',
    image: '/images/testi-2.jpg',
    content:
      'The open-source workshop was incredible! I went from knowing nothing about GitHub to making my first contribution to an open-source project. The hands-on approach made it so easy to follow.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Abhijeet Giri ',
    role: 'Tech Enthusiast & Student',
    company: 'RGPV',
    image: '/images/testi-3.jpg',
    content:
      'The LinkedIn session was super insightful! I now have a stronger profile and a much better understanding of how to network effectively. The live Q&A was extremely helpful too!',
    rating: 4,
  },
  {
    id: 4,
    name: 'Avinash Dwivedi ',
    role: 'Aspiring Open-Source Contributor',
    company: 'AITR',
    image: '/images/testi-4.jpg',
    content:
      'Zero to Hero Open-Source was exactly what I needed! I learned the basics of Git, GitHub, and made my first meaningful contribution. I feel much more confident to continue contributing to open-source projects.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Piyush Mishra ',
    role: 'Junior Developer & Student',
    company: 'IIST',
    image: '/images/testi-5.jpg',
    content:
      'I was completely lost in the open-source world, but this workshop guided me step by step. I’m now excited to keep contributing and have already joined Hacktoberfest. It’s a fantastic start!',
    rating: 3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className='py-24 bg-gray-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-80 h-80 bg-black rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6'>
            What Our
            <span className='text-yellow-600'> Community</span> Says
          </h2>
          <p className='text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            Hear from developers who have transformed their careers with
            CRACKED. Their success stories inspire and guide our mission
            forward.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className='relative'>
          {/* Main Testimonial Display */}
          <div className='overflow-hidden rounded-3xl'>
            <div
              className='flex transition-transform duration-700 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className='w-full flex-shrink-0 px-6'>
                  <div className='bg-white rounded-3xl p-10 md:p-14 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 mx-auto max-w-4xl'>
                    {/* Stars */}
                    <div className='flex justify-center mb-6'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className='w-6 h-6 text-yellow-500' />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className='text-xl md:text-2xl text-gray-800 leading-relaxed text-center mb-8 font-medium'>
                      {testimonial.content}
                    </blockquote>

                    {/* Author Info */}
                    <div className='flex items-center justify-center space-x-4'>
                      <div className='w-16 h-16 rounded-full bg-gray-200 overflow-hidden'>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='text-center'>
                        <h4 className='text-lg font-bold text-black'>
                          {testimonial.name}
                        </h4>
                        <p className='text-gray-600'>{testimonial.role}</p>
                        <p className='text-yellow-600 font-medium'>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center space-x-3 mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
