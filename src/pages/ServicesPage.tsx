import ServiceGrid from '../components/sections/ServiceGrid'
import AnimatedSection from '../components/ui/AnimatedSection'

const ServicesPage = () => (
  <main>
    <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl font-heading text-brand-gold mb-6">Professional Video Production Services</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">From concept to final cut, I deliver cinematic quality across every format.</p>
    </AnimatedSection>
    <ServiceGrid />
  </main>
)

export default ServicesPage
