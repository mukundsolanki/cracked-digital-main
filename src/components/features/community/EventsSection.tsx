import Image from 'next/image';
import EventCard from './EventCard';

const events = [
  {
    date: '27th September',
    title: 'Virtual Event: LinkedIn Profile Building',
    description:
      'Learn how to create a killer LinkedIn profile that gets noticed by recruiters and industry pros.',
    highlights: [
      'Profile optimization tips',
      'Personal branding hacks',
      'Networking strategies',
    ],
    emoji: '📅',
  },
  {
    date: '4th October',
    title: 'Hacktoberfest 2025',
    description:
      'Join us in celebrating open-source with the global Hacktoberfest community!',
    highlights: [
      'Learn how to contribute to open-source',
      'Get mentorship for your first PR',
      'Earn cool Hacktoberfest swag',
    ],
    emoji: '🎉',
  },
  {
    date: '29th October',
    title: '10-Hour Hackathon',
    description: 'Get ready for a marathon of creativity and problem-solving!',
    highlights: [
      'Build projects in real-time',
      'Work with a team or solo',
      'Win exciting prizes and recognition',
    ],
    emoji: '⏱️',
  },
  {
    date: 'November',
    title: 'IoT + Hacking Workshop',
    description:
      'Explore the intersection of IoT and cybersecurity in this hands-on workshop.',
    highlights: [
      'Learn IoT fundamentals',
      'Ethical hacking for connected devices',
      'Live demos & hands-on practice',
    ],
    emoji: '🛠️',
  },
];

export default function EventsSection() {
  return (
    <section className='relative min-h-screen py-20 px-4 bg-black overflow-hidden'>
      {/* Blackhole Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/blackhole.jpeg'
          alt='Blackhole Background'
          fill
          className='object-cover opacity-60'
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80'></div>
      <div className='absolute inset-0 backdrop-blur-[3px] pointer-events-none'></div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Events
          </h2>
          <p className='text-xl text-white/70 max-w-2xl mx-auto'>
            Join our community events and level up your skills with hands-on
            workshops, hackathons, and networking opportunities.
          </p>
        </div>

        <div className='mb-12'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center'>
            Upcoming Events
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {events.map((event, index) => (
              <EventCard
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
                highlights={event.highlights}
                emoji={event.emoji}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
