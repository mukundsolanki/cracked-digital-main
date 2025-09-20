import Image from 'next/image';

export default function CommunityHero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-black overflow-hidden'>
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

      <div className='relative z-10 text-center'>
        <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8'>
          Coming Soon
        </h1>
        <p className='text-2xl md:text-3xl text-white/70'>Stay Tuned</p>
      </div>
    </section>
  );
}
