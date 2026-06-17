import { clients } from '../../data/clients'
import AnimatedSection from '../ui/AnimatedSection'

const ClientLogos = () => (
  <AnimatedSection className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-heading text-center text-brand-gold mb-12">Trusted By</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map(client => (
          <img
            key={client.name}
            src={client.logo}
            alt={client.name}
            className="h-20 md:h-24 object-contain"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.5))',
            }}
          />
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default ClientLogos
