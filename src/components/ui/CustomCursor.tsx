import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 1024px)').matches) return

    const onMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const style = window.getComputedStyle(target)
      setIsPointer(
        style.cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        !!target.closest('button') ||
        !!target.closest('a')
      )
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - (isPointer ? 20 : 8),
        y: position.y - (isPointer ? 20 : 8),
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div
        className={`rounded-full border-2 border-white ${
          isPointer ? 'w-10 h-10 bg-white/20' : 'w-4 h-4'
        }`}
      />
    </motion.div>
  )
}

export default CustomCursor
