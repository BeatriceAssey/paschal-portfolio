import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import AnimatedSection from '../components/ui/AnimatedSection'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <div className="text-center py-20 text-2xl">Project not found</div>

  return (
    <AnimatedSection className="py-20 px-6 max-w-5xl mx-auto">
      <div className="aspect-video rounded-xl overflow-hidden mb-12">
        <video controls poster={project.thumbnail} className="w-full h-full object-cover">
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      </div>
      <h1 className="text-4xl md:text-5xl font-heading text-brand-gold mb-4">{project.title}</h1>
      <div className="flex flex-wrap gap-4 text-gray-400 mb-8">
        <span>{project.client}</span> <span>{project.category}</span> <span>{project.duration}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Challenge</h3>
          <p className="text-gray-300">{project.challenge}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Concept</h3>
          <p className="text-gray-300">{project.concept}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Production</h3>
          <p className="text-gray-300">{project.production}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Post-Production</h3>
          <p className="text-gray-300">{project.postProduction}</p>
        </div>
      </div>
      {project.gallery.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {project.gallery.map((img, i) => (
            <img key={i} src={img} alt="" className="rounded-lg hover:scale-105 transition-transform" />
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tools.map(tool => (
          <span key={tool} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tool}</span>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ProjectDetailPage
