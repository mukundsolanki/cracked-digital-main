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
    registrationUrl: 'https://luma.com/event/evt-cHBtbFCQHNN2brM',
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
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-black rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header */}
        <div className='mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-left'>
            Community
            <span className='text-yellow-600'> Events</span>
          </h2>
          <p className='text-xl md:text-2xl text-gray-600 leading-relaxed text-left'>
            Join our community events and level up your skills with hands-on
            workshops, hackathons, and networking opportunities. Connect with
            like-minded developers and accelerate your growth in the tech
            industry.
          </p>
        </div>

        {/* Events Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              highlights={event.highlights}
              emoji={event.emoji}
              registrationUrl={event.registrationUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
