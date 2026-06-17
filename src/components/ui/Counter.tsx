import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

const Counter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (isInView) setStart(true)
  }, [isInView])

  const count = useCountUp(start ? value : 0, 2000)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-heading font-bold text-brand-gold">{count}+</div>
      <div className="text-gray-400 uppercase text-sm mt-2">{label}</div>
    </div>
  )
}

export default Counter
