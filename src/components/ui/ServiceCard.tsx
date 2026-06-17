import { motion } from 'framer-motion'

interface Props {
  title: string
  description: string
  deliverables: string[]
  icon: string
}

const ServiceCard = ({ title, description, deliverables, icon }: Props) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-gold transition-colors shadow-sm"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    <ul className="space-y-2">
      {deliverables.map(d => (
        <li key={d} className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-2">
          <span className="text-brand-gold">✓</span> {d}
        </li>
      ))}
    </ul>
  </motion.div>
)

export default ServiceCard
