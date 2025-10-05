'use client';

import { useState } from 'react';
import { EnvelopeIcon, PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ContactHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 2000);
  };

  return (
    <section 
      className='py-24 relative overflow-hidden transition-colors duration-300'
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-black rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h1 
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-colors duration-300'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Contact
            <span className='text-yellow-600'> Us</span>
          </h1>
          <p 
            className='text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300'
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Have questions or need help? We&apos;re here to assist you. Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div 
          id='contact-form' 
          className='rounded-3xl p-8 md:p-12 shadow-lg border transition-colors duration-300'
          style={{ 
            backgroundColor: 'var(--color-background-secondary)',
            borderColor: 'var(--color-border)'
          }}
        >
          {isSubmitted ? (
            <div className='text-center py-12'>
              <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <CheckCircleIcon className='w-10 h-10 text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Message Sent Successfully!
              </h3>
              <p className='text-gray-600'>
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-semibold text-gray-700 mb-2'
                  >
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                    placeholder='Enter your full name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-gray-700 mb-2'
                  >
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                    placeholder='Enter your email address'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell us more about your inquiry...'
                />
              </div>

              <div className='flex justify-center pt-4'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='group bg-yellow-600 text-white px-12 py-4 rounded-xl font-semibold hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-3'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Partnership Section Component
export function PartnershipSection() {
  return (
    <section 
      className='py-24 relative overflow-hidden transition-colors duration-300'
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-black rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-colors duration-300'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Partner With
            <span className='text-yellow-600'> CRACKED</span>
          </h2>
          <p 
            className='text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300'
            style={{ color: 'var(--color-text-secondary)' }}
          >
            At CRACKED, we&apos;re more than just a community — we&apos;re a movement of developers, hackers, and innovators who are shaping the future of technology together.
          </p>
        </div>

        {/* Why Sponsor Us */}
        <div className='mb-16'>
          <h3 
            className='text-3xl md:text-4xl font-bold mb-12 text-center transition-colors duration-300'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Why Sponsor Us?
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Reach the Right Audience */}
            <div 
              className='group p-8 rounded-3xl border hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
              style={{ 
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className='w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h4 
                className='text-xl font-bold mb-4 transition-colors duration-300'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Reach the Right Audience
              </h4>
              <p 
                className='leading-relaxed transition-colors duration-300'
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Connect with hundreds of developers, students, cybersecurity enthusiasts, and tech leaders.
              </p>
              <div className='absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            {/* Showcase Your Brand */}
            <div 
              className='group p-8 rounded-3xl border hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
              style={{ 
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className='w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <span className='text-2xl'>🌟</span>
              </div>
              <h4 
                className='text-xl font-bold mb-4 transition-colors duration-300'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Showcase Your Brand
              </h4>
              <p 
                className='leading-relaxed transition-colors duration-300'
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Get featured in our events, workshops, hackathons, and community content.
              </p>
              <div className='absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            {/* Build Future Talent */}
            <div 
              className='group p-8 rounded-3xl border hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
              style={{ 
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className='w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <span className='text-2xl'>🚀</span>
              </div>
              <h4 
                className='text-xl font-bold mb-4 transition-colors duration-300'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Build Future Talent
              </h4>
              <p 
                className='leading-relaxed transition-colors duration-300'
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Support the next generation of developers and security professionals.
              </p>
              <div className='absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            {/* Collaborate on Innovation */}
            <div 
              className='group p-8 rounded-3xl border hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
              style={{ 
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className='w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <span className='text-2xl'>💡</span>
              </div>
              <h4 
                className='text-xl font-bold mb-4 transition-colors duration-300'
                style={{ color: 'var(--color-text-primary)' }}
              >
                Collaborate on Innovation
              </h4>
              <p 
                className='leading-relaxed transition-colors duration-300'
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Work with our community on real-world projects and open-source initiatives.
              </p>
              <div className='absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          </div>
        </div>

        {/* Sponsor Contact */}
        <div className='text-center mt-16'>
          <h3 
            className='text-3xl md:text-4xl font-bold mb-8 transition-colors duration-300'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Get in Touch
          </h3>
          <p 
            className='text-xl mb-8 max-w-3xl mx-auto transition-colors duration-300'
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Want to make an impact with us?
          </p>
          <div className='bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 max-w-2xl mx-auto'>
            <p className='text-lg text-gray-600 mb-6'>
              Reach out directly for partnership opportunities
            </p>
            <a
              href='mailto:partners@cracked.digital'
              className='inline-flex items-center gap-3 bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-yellow-700 shadow-lg text-lg'
            >
              <EnvelopeIcon className='w-6 h-6' />
              <p>admin@cracked.digital</p>
            </a>
          </div>
          <div className='mt-8 max-w-4xl mx-auto'>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Together, we can empower thousands of developers and push innovation forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
