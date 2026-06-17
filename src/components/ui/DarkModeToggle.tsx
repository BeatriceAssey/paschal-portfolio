import { useDarkMode } from '../../hooks/useDarkMode'
import { motion } from 'framer-motion'

const DarkModeToggle = () => {
  const { dark, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        animate={{ rotate: dark ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {dark ? (
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        ) : (
          <circle cx="12" cy="12" r="5" />
        )}
      </motion.svg>
    </button>
  )
}

export default DarkModeToggle
