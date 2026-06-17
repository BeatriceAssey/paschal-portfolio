import { motion } from 'framer-motion'

interface Props {
  quote: string
  name: string
  role: string
  avatar: string
}

const TestimonialCard = ({ quote, name, role, avatar }: Props) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
  >
    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">“{quote}”</p>
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  </motion.div>
)

export default TestimonialCard
