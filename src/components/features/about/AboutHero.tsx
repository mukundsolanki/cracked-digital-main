export default function AboutHero() {
  return (
    <section className="relative w-full h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/match-cut.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fade transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
