import EquipmentShowcase from '../components/sections/EquipmentShowcase'
import AnimatedSection from '../components/ui/AnimatedSection'

const EquipmentPage = () => (
  <main>
    <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl font-heading text-brand-gold mb-6">My Gear</h1>
      <p className="text-xl text-gray-400">The tools I trust for every production.</p>
    </AnimatedSection>
    <EquipmentShowcase />
  </main>
)

export default EquipmentPage
