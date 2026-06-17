import Button from '../ui/Button'

const HeroVideo = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/showreel.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
        Paschal William
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Cinematic storytelling for brands, NGOs & documentaries.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button onClick={() => window.location.href = '/portfolio'}>View Work</Button>
        <Button variant="secondary" onClick={() => window.location.href = '/contact'}>Get in Touch</Button>
      </div>
    </div>
  </section>
)

export default HeroVideo
