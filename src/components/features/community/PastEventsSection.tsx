'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const pastEvents = [
  {
    id: 1,
    date: '27th September 2025',
    title: 'LinkedIn Profile Building Workshop',
    description:
      'Interactive session on creating compelling LinkedIn profiles that attract recruiters and build professional networks.',
    attendees: 50,
    duration: '1 hours',
    highlights: [
      'Profile optimization techniques',
      'Personal branding strategies',
      'Networking best practices',
      'Live Q&A with industry experts',
    ],
    images: [
      '/images/image-7.jpeg',
      '/images/image-8.jpeg',
      '/images/image-9.jpeg',
      '/images/image-10.jpeg',
      '/images/image-11.jpeg',
    ],
    emoji: '💼',
  },
  {
    id: 2,
    date: '4th October 2025',
    title: 'Zero to Hero: Open Source Workshop',
    description:
      'Hands-on workshop guiding beginners through their first open-source contributions on GitHub.',
    attendees: 25,
    duration: '3 hours',
    highlights: [
      'Git and GitHub fundamentals',
      'Making your first PR',
      'Open source best practices',
      'Hacktoberfest preparation',
    ],
    images: [
      '/images/img-9.jpg',
      '/images/img-4.jpg',
      '/images/img-6.jpg',
      '/images/img-7.jpg',
      '/images/img-8.jpg',
      '/images/img-1.jpg',
      '/images/img-2.jpg',
      '/images/img-3.jpg',
      '/images/img-5.jpg',
    ],
    emoji: '🚀',
  },
];

export default function PastEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (eventId: number, imageIndex: number = 0) => {
    setSelectedEvent(eventId);
    setSelectedImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedEvent) {
      const event = pastEvents.find(e => e.id === selectedEvent);
      if (event) {
        setSelectedImageIndex(prev =>
          prev === event.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      const event = pastEvents.find(e => e.id === selectedEvent);
      if (event) {
        setSelectedImageIndex(prev =>
          prev === 0 ? event.images.length - 1 : prev - 1
        );
      }
    }
  };

  const selectedEventData = pastEvents.find(e => e.id === selectedEvent);

  return (
    <>
      <section className='py-24 bg-gray-50 relative overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 right-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 left-20 w-80 h-80 bg-black rounded-full blur-3xl'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
          {/* Section Header */}
          <div className='mb-20'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-left'>
              Past
              <span className='text-yellow-600'> Events</span>
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 leading-relaxed text-left'>
              Relive the amazing moments from our previous events. See what you
              missed and get excited for what&apos;s coming next!
            </p>
          </div>

          {/* Past Events Grid */}
          <div className='space-y-16'>
            {pastEvents.map(event => (
              <div
                key={event.id}
                className='bg-white rounded-3xl p-8 shadow-2xl border border-gray-200'
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  {/* Event Info */}
                  <div>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className='w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center shadow-lg'>
                        <span className='text-2xl'>{event.emoji}</span>
                      </div>
                      <div>
                        <div className='text-sm text-gray-500 mb-1'>
                          {event.date}
                        </div>
                        <h3 className='text-2xl font-bold text-black'>
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <p className='text-gray-600 leading-relaxed mb-6'>
                      {event.description}
                    </p>

                    {/* Event Stats */}
                    <div className='flex gap-6 mb-6'>
                      <div className='text-center'>
                        <div className='text-2xl font-bold text-yellow-600'>
                          {event.attendees}+
                        </div>
                        <div className='text-sm text-gray-500'>Attendees</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold text-yellow-600'>
                          {event.duration}
                        </div>
                        <div className='text-sm text-gray-500'>Duration</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className='font-semibold text-gray-700 mb-3'>
                        Event Highlights:
                      </h4>
                      <ul className='space-y-2'>
                        {event.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className='text-gray-600 text-sm flex items-start gap-2'
                          >
                            <span className='text-yellow-600 mt-1'>•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Event Images */}
                  <div>
                    <h4 className='font-semibold text-gray-700 mb-4'>
                      Event Gallery:
                    </h4>
                    <div className='grid grid-cols-2 gap-4'>
                      {event.images.slice(0, 4).map((image, index) => (
                        <div
                          key={index}
                          className='relative aspect-video rounded-xl overflow-hidden cursor-pointer group'
                          onClick={() => openGallery(event.id, index)}
                        >
                          <Image
                            src={image}
                            alt={`${event.title} - Image ${index + 1}`}
                            fill
                            className='object-cover group-hover:scale-110 transition-transform duration-300'
                          />
                          <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300' />
                          {index === 3 && event.images.length > 4 && (
                            <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
                              <span className='text-white font-bold text-lg'>
                                +{event.images.length - 4} more
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedEvent && selectedEventData && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
          <div className='relative max-w-4xl w-full'>
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className='absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300'
            >
              <XMarkIcon className='w-6 h-6' />
            </button>

            {/* Navigation Arrows */}
            {selectedEventData.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className='absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300'
                >
                  <ChevronLeftIcon className='w-6 h-6' />
                </button>
                <button
                  onClick={nextImage}
                  className='absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300'
                >
                  <ChevronRightIcon className='w-6 h-6' />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className='relative aspect-video w-full rounded-lg overflow-hidden'>
              <Image
                src={selectedEventData.images[selectedImageIndex]}
                alt={`${selectedEventData.title} - Image ${
                  selectedImageIndex + 1
                }`}
                fill
                className='object-cover'
              />
            </div>

            {/* Image Counter */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm'>
              {selectedImageIndex + 1} / {selectedEventData.images.length}
            </div>

            {/* Thumbnail Navigation */}
            {selectedEventData.images.length > 1 && (
              <div className='flex justify-center gap-2 mt-4 overflow-x-auto pb-2'>
                {selectedEventData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                      index === selectedImageIndex
                        ? 'ring-2 ring-yellow-600'
                        : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
