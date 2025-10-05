export default function AboutHero() {
  return (
    <section className='relative w-full h-screen'>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='w-full h-full object-cover'
      >
        <source src='/match-cut.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Fade transition overlay */}
      <div 
        className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none transition-colors duration-300'
        style={{ 
          background: `linear-gradient(to top, var(--color-background), transparent)`
        }}
      ></div>
    </section>
  );
}
