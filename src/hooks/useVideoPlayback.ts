import { useEffect, useRef, useState } from 'react'

export const useVideoPlayback = (threshold: number = 0.5) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsPlaying(true))
        } else {
          video.pause()
          setIsPlaying(false)
        }
      },
      { threshold }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isPlaying }
}
