export default function AboutHero() {
  return (
    <section className="w-full h-screen">
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
    </section>
  );
}
