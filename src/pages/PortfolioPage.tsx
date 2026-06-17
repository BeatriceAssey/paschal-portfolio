import { useState } from 'react'
import { projects } from '../data/projects'
import PortfolioFilter from '../components/ui/PortfolioFilter'
import VideoThumbnail from '../components/ui/VideoThumbnail'
import AnimatedSection from '../components/ui/AnimatedSection'

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

const PortfolioPage = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-heading text-brand-gold text-center mb-12">Portfolio</h1>
      <PortfolioFilter categories={categories} active={active} onChange={setActive} />
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map(project => (
          <VideoThumbnail
            key={project.id}
            src={project.videoUrl || '/videos/placeholder.mp4'}
            poster={project.thumbnail}
            title={project.title}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default PortfolioPage
