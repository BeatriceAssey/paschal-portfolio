import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Particle = ({ delay, duration, size, left, top, opacity }: any) => (
  <motion.div
    className="absolute rounded-full bg-white pointer-events-none"
    style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity }}
    animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
)

const HeroHome = () => {
  const navigate = useNavigate()
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)

  const springCardX = useSpring(cardX, { stiffness: 50, damping: 20 })
  const springCardY = useSpring(cardY, { stiffness: 50, damping: 20 })
  const springGlowX = useSpring(glowX, { stiffness: 30, damping: 20 })
  const springGlowY = useSpring(glowY, { stiffness: 30, damping: 20 })

  useEffect(() => {
    const moveX = (mousePos.x - 0.5) * 40
    const moveY = (mousePos.y - 0.5) * 40
    cardX.set(moveX)
    cardY.set(moveY)
    glowX.set(moveX * 0.5)
    glowY.set(moveY * 0.5)
  }, [mousePos, cardX, cardY, glowX, glowY])

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* Background Video – train.mp4 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1920"
        >
          <source src="/videos/train.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.70) 100%)',
        }}
      />

      {/* Atmospheric Particles */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <Particle
            key={i}
            delay={i * 1.2}
            duration={3 + i * 0.5}
            size={2 + Math.random() * 3}
            left={10 + Math.random() * 80}
            top={20 + Math.random() * 60}
            opacity={0.3 + Math.random() * 0.4}
          />
        ))}
      </div>

      {/* Radial Gold Glow Behind Headline */}
      <motion.div
        className="absolute z-3 w-96 h-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)',
          left: '15%',
          top: '45%',
          x: springGlowX,
          y: springGlowY,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content Area */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-10 w-full items-center">
          {/* Left Column */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight text-white mb-6"
            >
              Creating Stories <br />
              That{' '}
              <span className="text-brand-gold relative inline-block">
                Move
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </span>{' '}
              People
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg md:text-xl text-gray-200 max-w-md mb-8"
            >
              Professional video production, cinematography, editing, and
              storytelling for brands, NGOs, and organizations.
            </motion.p>

            {/* Achievement Stats – now inside a glass box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-lg"
            >
              <div className="flex gap-8 text-white">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-brand-gold">250+</p>
                  <p className="text-xs uppercase tracking-wider text-gray-200">
                    Projects Completed
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-brand-gold">50+</p>
                  <p className="text-xs uppercase tracking-wider text-gray-200">
                    Clients Served
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-brand-gold">12+</p>
                  <p className="text-xs uppercase tracking-wider text-gray-200">
                    Years Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Cinematic Card (drone.mp4) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="hidden lg:block relative"
            style={{ x: springCardX, y: springCardY }}
          >
            <div className="relative w-80 h-96 mx-auto">
              <div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
                {/* Video area – drone.mp4 */}
                <div className="relative h-2/3 bg-black/30 flex items-center justify-center overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600"
                  >
                    <source src="/videos/drone.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Card info */}
                <div className="p-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-brand-gold">
                    Featured Project
                  </span>
                  <h3 className="text-lg font-semibold mt-1">Aerial Perspectives</h3>
                  <div className="flex gap-3 text-gray-300 text-sm mt-2">
                    <span>Drone Reel</span>
                    <span>2025</span>
                    <span className="text-brand-gold">★ Cinematic Footage</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 bg-brand-gold/10 rounded-3xl blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom: only the scroll indicator */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-6 flex justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col items-center text-gray-300 text-sm"
        >
          <span className="uppercase tracking-widest mb-2">Scroll</span>
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroHome
