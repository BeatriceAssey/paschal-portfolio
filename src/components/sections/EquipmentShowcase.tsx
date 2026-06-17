import { equipment } from '../../data/equipment'
import AnimatedSection from '../ui/AnimatedSection'

const EquipmentShowcase = () => (
  <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-heading text-center text-brand-gold mb-12">The Gear</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {equipment.map((item, i) => (
        <div key={i} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  </AnimatedSection>
)

export default EquipmentShowcase
