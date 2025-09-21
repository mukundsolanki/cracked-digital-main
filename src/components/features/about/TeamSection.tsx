import { EnvelopeIcon } from '@heroicons/react/24/outline';

const teamMembers = [
  {
    name: 'Daksh Kitukale',
    bio: 'Flair Media Production - Visionary Founder',
    avatar: '/teams/Daksh_Kitukale.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/daksh-kitukale',
      twitter: 'https://twitter.com/dakshkitukale',
      email: 'daksh@cracked.digital',
    },
  },
  {
    name: 'Dhiraj Chaoudhary',
    bio: 'Flair Media Production - Adhyaksh',
    avatar: '/teams/Dhiraj_profile.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/dhiraj',
      twitter: 'https://twitter.com/dhiraj',
      email: 'dhiraj@cracked.digital',
    },
  },
  {
    name: 'Deepansh Jain',
    bio: 'SIH 2024 - Lead',
    avatar: '/teams/Deepansh_ProfilePhoto.HEIC',
    social: {
      linkedin: 'https://linkedin.com/in/deepansh',
      twitter: 'https://twitter.com/deepansh',
      email: 'deepansh@cracked.digital',
    },
  },

  {
    name: 'Mukund Solanki',
    bio: 'Flair Media Production - Technical Head',
    avatar: '/teams/Mukund_Solanki.png',
    social: {
      linkedin: 'https://linkedin.com/in/deepansh',
      twitter: 'https://twitter.com/deepansh',
      email: 'deepansh@cracked.digital',
    },
  },
];

export default function TeamSection() {
  return (
    <section className='py-24 bg-gray-900 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header - Left Aligned */}
        <div className='mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-left'>
            Meet Our
            <span className='text-yellow-600'> Team</span>
          </h2>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed text-left'>
            The passionate individuals behind CRACKED, dedicated to empowering
            developers worldwide.
          </p>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='group relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
            >
              {/* Avatar */}
              <div className='relative mb-6'>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className='w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-600/30 group-hover:border-yellow-600 transition-all duration-300'
                />
                <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full'></div>
              </div>

              {/* Content */}
              <div className='text-center'>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-yellow-600 transition-colors duration-300'>
                  {member.name}
                </h3>

                <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className='flex justify-center space-x-4'>
                  <a
                    href={member.social.linkedin}
                    className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-black transition-all duration-300'
                    aria-label='LinkedIn'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-black transition-all duration-300'
                    aria-label='Twitter'
                  >
                    <svg
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-black transition-all duration-300'
                    aria-label='Email'
                  >
                    <EnvelopeIcon className='w-4 h-4' />
                  </a>
                </div>
              </div>

              {/* Decorative Element */}
              <div className='absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className='text-center mt-20'>
          <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto border border-white/20'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Want to Join Our Team?
            </h3>
            <p className='text-xl text-gray-300 mb-8'>
              We&apos;re always looking for passionate individuals who share our
              vision of empowering developers worldwide.
            </p>
            <a
              href='mailto:admin@cracked.digital'
              className='inline-flex items-center gap-2 bg-yellow-600 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-700 transition-all duration-300 hover:scale-105'
            >
              Write us an email
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
