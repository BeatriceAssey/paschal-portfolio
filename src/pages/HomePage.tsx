import HeroHome from '../components/sections/HeroHome'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import ServiceGrid from '../components/sections/ServiceGrid'
import ClientLogos from '../components/sections/ClientLogos'
import TestimonialsSlider from '../components/sections/TestimonialsSlider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <main>
      <HeroHome />
      <FeaturedProjects />
      <ServiceGrid />
      <ClientLogos />
      <TestimonialsSlider />
      <AnimatedSection className="py-16 text-center bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-heading text-brand-gold mb-6">
          Ready to start your project?
        </h2>
        <Button onClick={() => navigate('/contact')}>Let's Talk</Button>
      </AnimatedSection>
    </main>
  )
}

export default HomePage
