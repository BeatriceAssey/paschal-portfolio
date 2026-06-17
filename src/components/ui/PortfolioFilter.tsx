import { motion } from 'framer-motion'

interface Props {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}

const PortfolioFilter = ({ categories, active, onChange }: Props) => (
  <div className="flex flex-wrap gap-3 justify-center mb-12">
    {categories.map(cat => (
      <motion.button
        key={cat}
        onClick={() => onChange(cat)}
        className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-colors ${
          active === cat
            ? 'bg-brand-gold text-black'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {cat}
      </motion.button>
    ))}
  </div>
)

export default PortfolioFilter
