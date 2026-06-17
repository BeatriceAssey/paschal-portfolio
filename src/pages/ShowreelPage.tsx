import AnimatedSection from '../components/ui/AnimatedSection'

const ShowreelPage = () => (
  <AnimatedSection className="py-20 px-6 max-w-5xl mx-auto">
    <h1 className="text-5xl font-heading text-brand-gold text-center mb-12">Showreel</h1>
    <div className="aspect-video rounded-xl overflow-hidden mb-8">
      <video controls className="w-full h-full object-cover">
        <source src="/videos/showreel.mp4" type="video/mp4" />
      </video>
    </div>
    <p className="text-center text-gray-400">A curated selection of my best work across genres.</p>
  </AnimatedSection>
)

export default ShowreelPage
