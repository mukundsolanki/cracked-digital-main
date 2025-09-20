export default function ContactHero() {
  return (
    <section className='py-24 bg-white relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header - Left Aligned */}
        <div className='mb-20'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-left'>
            Contact
            <span className='text-blue-600'> Us</span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed text-left'>
            Ready to collaborate? We're always looking for mentors, speakers,
            and passionate individuals to join our community and help developers
            grow.
          </p>
        </div>
      </div>
    </section>
  );
}
