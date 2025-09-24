interface EventCardProps {
  date: string;
  title: string;
  description: string;
  highlights: string[];
  emoji: string;
  registrationUrl?: string;
}

export default function EventCard({
  date,
  title,
  description,
  highlights,
  emoji,
  registrationUrl,
}: EventCardProps) {
  return (
    <div className='group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'>
      {/* Header with Icon, Date, and Title */}
      <div className='flex items-start gap-6 mb-6'>
        {/* Icon */}
        <div className='relative w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0'>
          <span className='text-2xl'>{emoji}</span>
        </div>

        {/* Date and Title */}
        <div className='flex-1 min-w-0'>
          {/* Date */}
          <div className='text-sm text-gray-500 mb-2'>{date}</div>

          {/* Title */}
          <h3 className='relative text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300 leading-tight'>
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className='relative text-gray-600 leading-relaxed mb-4'>
        {description}
      </p>

      {/* Highlights section */}
      <div className='relative'>
        <div className='text-sm font-semibold text-gray-700 mb-3'>
          Highlights:
        </div>
        <ul className='space-y-2'>
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className='text-gray-600 text-sm flex items-start gap-2'
            >
              <span className='text-gray-400 mt-1'>•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Registration Button */}
      {registrationUrl && (
        <div className='relative mt-6'>
          <a
            href={registrationUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-colors duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 transform transition-transform duration-300'
          >
            Register Now
            <svg
              className='ml-2 w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
