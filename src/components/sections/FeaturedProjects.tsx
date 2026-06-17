import { projects } from '../../data/projects'
import VideoThumbnail from '../ui/VideoThumbnail'
import AnimatedSection from '../ui/AnimatedSection'

const FeaturedProjects = () => (
  <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-heading text-center text-brand-gold mb-12">Featured Work</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.slice(0, 3).map(project => (
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

export default FeaturedProjects
