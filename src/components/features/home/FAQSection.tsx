'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is CRACKED?',
    answer: 'CRACKED is a developer-driven community where tech enthusiasts, hackers, and innovators come together to learn, share knowledge, work on real projects, and grow their careers.'
  },
  {
    question: 'Who can join?',
    answer: 'Anyone passionate about technology — developers, designers, students, cybersecurity learners, and even beginners — is welcome.'
  },
  {
    question: 'Is it free to join?',
    answer: 'Yes! CRACKED is completely free to join. Some premium workshops or hackathons may have a small fee, but most events are free.'
  },
  {
    question: 'What kind of events do you host?',
    answer: 'We host virtual and in-person events including:\n\n• Developer workshops\n• Hackathons\n• Open-source contribution drives (like Hacktoberfest)\n• Career-building sessions (LinkedIn, resumes, mock interviews)'
  },
  {
    question: 'How can I participate in upcoming events?',
    answer: 'Just check our Upcoming Events section on the website and register. You\'ll also get updates in our community group/Discord/Telegram.'
  },
  {
    question: 'Can I collaborate on projects?',
    answer: 'Absolutely! We encourage collaboration. You can join ongoing projects or propose your own ideas — we love community-led initiatives.'
  },
  {
    question: 'Do I need to be an expert?',
    answer: 'Not at all. CRACKED is beginner-friendly and has mentors to guide you through learning and project building.'
  },
  {
    question: 'How can I contribute to the community?',
    answer: 'You can:\n\n• Share resources and tutorials\n• Mentor others\n• Help organize events\n• Build tools or open-source projects with us'
  },
  {
    question: 'Where can I contact the team?',
    answer: 'Reach out via the Contact Us page or join our community chat for instant connection.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <h2 
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-colors duration-300'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Frequently Asked
            <span className='text-yellow-600'> Questions</span>
          </h2>
          <p 
            className='text-xl md:text-2xl leading-relaxed transition-colors duration-300'
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Everything you need to know about CRACKED and our community
          </p>
        </div>

        {/* FAQ Items - Two Columns */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Column */}
          <div className='space-y-4'>
            {faqs.slice(0, 5).map((faq, index) => (
              <div
                key={index}
                className='group rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden'
                style={{ 
                  backgroundColor: 'var(--color-background-secondary)',
                  borderColor: 'var(--color-border)',
                  border: '1px solid'
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200'
                  style={{ 
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-background-tertiary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <h3 
                    className='text-lg font-semibold pr-4 transition-colors duration-300'
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {faq.question}
                  </h3>
                  <div className='flex-shrink-0'>
                    <ChevronDownIcon className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index
                        ? 'text-yellow-600 rotate-180'
                        : 'text-gray-400 group-hover:text-yellow-600 rotate-0'
                    }`} />
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className='px-6 pb-5'>
                    <div 
                      className='border-t pt-4'
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <p 
                        className='leading-relaxed whitespace-pre-line text-sm transition-colors duration-300'
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className='space-y-4'>
            {faqs.slice(5).map((faq, index) => (
              <div
                key={index + 5}
                className='group rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden'
                style={{ 
                  backgroundColor: 'var(--color-background-secondary)',
                  borderColor: 'var(--color-border)',
                  border: '1px solid'
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index + 5)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200'
                  style={{ 
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-background-tertiary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <h3 
                    className='text-lg font-semibold pr-4 transition-colors duration-300'
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {faq.question}
                  </h3>
                  <div className='flex-shrink-0'>
                    <ChevronDownIcon className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index + 5
                        ? 'text-yellow-600 rotate-180'
                        : 'text-gray-400 group-hover:text-yellow-600 rotate-0'
                    }`} />
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index + 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className='px-6 pb-5'>
                    <div 
                      className='border-t pt-4'
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <p 
                        className='leading-relaxed whitespace-pre-line text-sm transition-colors duration-300'
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
