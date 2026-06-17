import { useRef, useState } from 'react'

interface Props {
  src: string
  poster: string
  title: string
}

const VideoThumbnail = ({ src, poster, title }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    videoRef.current?.play()
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    videoRef.current?.pause()
    setIsHover(false)
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl aspect-video cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isHover && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-medium">{title}</h3>
      </div>
    </div>
  )
}

export default VideoThumbnail
