import { useEffect, useState } from 'react'

export const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (end === 0) return
    let startTimestamp: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration])

  return count
}
