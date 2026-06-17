import { motion } from 'framer-motion'

interface Step {
  title: string
  description: string
  icon: string
}

const Timeline = ({ steps }: { steps: Step[] }) => (
  <div className="relative">
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2" />
    {steps.map((step, i) => (
      <motion.div
        key={step.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        className={`relative flex items-center mb-12 ${
          i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div className="flex-1 md:w-1/2" />
        <div className="w-8 h-8 rounded-full bg-brand-gold text-black flex items-center justify-center font-bold absolute left-4 md:left-1/2 md:-translate-x-1/2">
          {step.icon}
        </div>
        <div className="flex-1 md:w-1/2 md:px-8 ml-12 md:ml-0">
          <h4 className="text-xl font-heading text-white">{step.title}</h4>
          <p className="text-gray-400">{step.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
)

export default Timeline
