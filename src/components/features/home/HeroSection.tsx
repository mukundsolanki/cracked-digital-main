import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.jpg"
          alt="CRACKED Community Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">Join 10,000+ developers worldwide</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="text-sm md:text-base text-white/70 mb-4 tracking-widest uppercase">
              Welcome to
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight font-serif text-white">
              CRACKED
            </h1>
          </div>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            The ultimate destination for technical excellence, community support, and career growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/60 text-sm">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/60 text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60 text-sm">Mentors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}