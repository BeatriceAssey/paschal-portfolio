import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'
import AnimatedSection from '../ui/AnimatedSection'

const ServiceGrid = () => (
  <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-heading text-center text-brand-gold mb-12">What I Offer</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </div>
  </AnimatedSection>
)

export default ServiceGrid
