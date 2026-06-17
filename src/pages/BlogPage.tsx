import { blogPosts } from '../data/blogPosts'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/ui/AnimatedSection'

const BlogPage = () => (
  <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
    <h1 className="text-5xl font-heading text-brand-gold text-center mb-12">Blog</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map(post => (
        <Link to={`/blog/${post.slug}`} key={post.slug} className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img src={post.cover} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-brand-gold">{post.title}</h3>
          <p className="text-gray-400 mt-2">{post.excerpt}</p>
          <span className="text-sm text-gray-500">{post.date}</span>
        </Link>
      ))}
    </div>
  </AnimatedSection>
)

export default BlogPage
