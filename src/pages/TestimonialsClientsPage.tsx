import TestimonialsSlider from '../components/sections/TestimonialsSlider'
import ClientLogos from '../components/sections/ClientLogos'
import AnimatedSection from '../components/ui/AnimatedSection'

const TestimonialsClientsPage = () => (
  <main>
    <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl font-heading text-brand-gold mb-6">Trusted by Leading Brands</h1>
    </AnimatedSection>
    <TestimonialsSlider />
    <ClientLogos />
  </main>
)

export default TestimonialsClientsPage
