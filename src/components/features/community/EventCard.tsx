interface EventCardProps {
  date: string;
  title: string;
  description: string;
  highlights: string[];
  emoji: string;
}

export default function EventCard({
  date,
  title,
  description,
  highlights,
  emoji,
}: EventCardProps) {
  return (
    <div className='group relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-2xl p-6 hover:border-gray-500/80 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer overflow-hidden'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

      {/* Subtle border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm'></div>

      <div className='relative z-10'>
        <div className='flex items-start gap-5'>
          {/* Enhanced emoji container */}
          <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg'>
            {emoji}
          </div>

          <div className='flex-1 min-w-0'>
            {/* Enhanced date badge */}
            <div className='inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300 mb-3 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300'>
              📅 {date}
            </div>

            {/* Enhanced title */}
            <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300 leading-tight'>
              {title}
            </h3>

            {/* Enhanced description */}
            <p className='text-gray-300 mb-5 leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>
              {description}
            </p>

            {/* Enhanced highlights section */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                <span className='text-lg'>🎯</span>
                <span>Highlights:</span>
              </div>
              <ul className='space-y-2'>
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className='text-gray-300 text-sm flex items-start gap-3 group-hover:text-gray-200 transition-colors duration-300'
                  >
                    <div className='flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300'></div>
                    <span className='leading-relaxed'>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
