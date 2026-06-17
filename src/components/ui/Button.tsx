import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const base = 'px-8 py-3 rounded-full font-medium tracking-wider uppercase text-sm transition-all duration-200'
  const variants = {
    primary: 'bg-brand-gold text-black hover:bg-white',
    secondary: 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default Button
