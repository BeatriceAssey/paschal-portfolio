import { motion } from 'framer-motion'

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.section>
)

export default AnimatedSection
