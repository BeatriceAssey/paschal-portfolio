import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../ui/TestimonialCard'
import AnimatedSection from '../ui/AnimatedSection'

const TestimonialsSlider = () => (
  <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-heading text-center text-brand-gold mb-12">What People Say</h2>
    <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide">
      {testimonials.map((t, i) => (
        <div key={i} className="min-w-[300px] snap-center">
          <TestimonialCard {...t} />
        </div>
      ))}
    </div>
  </AnimatedSection>
)

export default TestimonialsSlider
