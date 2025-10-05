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
    <div 
      className='group relative p-8 rounded-3xl border hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
      style={{ 
        backgroundColor: 'var(--color-background-secondary)',
        borderColor: 'var(--color-border)'
      }}
    >
      {/* Header with Icon, Date, and Title */}
      <div className='flex items-start gap-6 mb-6'>
        {/* Icon */}
        <div className='relative w-16 h-16 rounded-2xl bg-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0'>
          <span className='text-2xl'>{emoji}</span>
        </div>

        {/* Date and Title */}
        <div className='flex-1 min-w-0'>
          {/* Date */}
          <div 
            className='text-sm mb-2 transition-colors duration-300'
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            {date}
          </div>

          {/* Title */}
          <h3 
            className='relative text-2xl font-bold transition-colors duration-300 leading-tight'
            style={{ color: 'var(--color-text-primary)' }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p 
        className='relative leading-relaxed mb-4 transition-colors duration-300'
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {description}
      </p>

      {/* Highlights section */}
      <div className='relative'>
        <div 
          className='text-sm font-semibold mb-3 transition-colors duration-300'
          style={{ color: 'var(--color-text-primary)' }}
        >
          Highlights:
        </div>
        <ul className='space-y-2'>
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className='text-sm flex items-start gap-2 transition-colors duration-300'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <span 
                className='mt-1 transition-colors duration-300'
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                •
              </span>
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
