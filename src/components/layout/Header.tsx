import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import DarkModeToggle from '../ui/DarkModeToggle'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-brand-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-heading font-bold text-brand-gold">
          PCinematics
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest font-medium ${
                location.pathname === link.path
                  ? 'text-brand-gold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-brand-gold'
              } transition-colors relative`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-brand-black border-t border-gray-200 dark:border-white/10"
          >
            <div className="flex flex-col p-4 space-y-3">
              {links.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-brand-gold"
                >
                  {link.name}
                </Link>
              ))}
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header
