import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import Timeline from '../components/ui/Timeline'
import Counter from '../components/ui/Counter'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { equipment } from '../data/equipment'

// ---------- INLINE DATA ----------

const philosophyCards = [
  {
    title: 'Story First',
    desc: 'Every successful video begins with a compelling narrative.',
  },
  {
    title: 'Purposeful Visuals',
    desc: 'Every shot must contribute to the message.',
  },
  {
    title: 'Emotion Matters',
    desc: 'People remember feelings more than information.',
  },
]

const timelineSteps = [
  { title: 'Started Filmmaking', description: 'Bought my first DSLR and began shooting short films.', icon: '🎬' },
  { title: 'First Client Project', description: 'Directed a promotional video for a local brand.', icon: '📺' },
  { title: 'Expanded Services', description: 'Added drone cinematography and motion graphics.', icon: '🚁' },
  { title: 'Worked with Organizations', description: 'Partnered with NGOs and universities.', icon: '🏛️' },
  { title: 'Professional Filmmaker', description: 'Full‑time freelance, delivering cinematic stories worldwide.', icon: '🎥' },
]

const expertiseCards = [
  { title: 'Cinematography', desc: 'Composition, lighting, camera movement.' },
  { title: 'Video Editing', desc: 'Narrative editing, pacing, color correction.' },
  { title: 'Color Grading', desc: 'Film‑like looks, mood creation.' },
  { title: 'Motion Graphics', desc: 'Animated titles, explainer elements.' },
  { title: 'Drone Operations', desc: 'Licensed pilot, cinematic aerial footage.' },
  { title: 'Documentary Production', desc: 'Research, interview, field production.' },
]

const personalityItems = [
  { icon: '✈️', label: 'Travel' },
  { icon: '🌿', label: 'Nature' },
  { icon: '💻', label: 'Technology' },
  { icon: '📖', label: 'Storytelling' },
  { icon: '🎨', label: 'Creative Learning' },
  { icon: '📸', label: 'Photography' },
]

// ---------- PARALLAX HOOK ----------
const useParallax = (ref: React.RefObject<HTMLDivElement>) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setOffset({ x, y })
    }
    const handleMouseLeave = () => setOffset({ x: 0, y: 0 })
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])
  return offset
}

// ---------- PARALLAX IMAGE COMPONENT (Hero) ----------
const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const offset = useParallax(ref)
  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden rounded-3xl">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        animate={{ x: offset.x * 30, y: offset.y * 30 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      />
    </div>
  )
}

// ---------- ABOUT PAGE ----------
const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <main className="bg-white dark:bg-brand-black text-gray-900 dark:text-white">
      {/* ========== SECTION 1: HERO INTRODUCTION ========== */}
      <section className="min-h-[calc(100vh-5rem)] flex items-start relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 pt-12 pb-20">
          {/* Left Text */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-widest text-brand-gold mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6"
            >
              Filmmaker. <br />
              Storyteller. <br />
              <span className="text-brand-gold">Visual Creator.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Helping brands, organizations, and people tell meaningful stories through cinematic video production.
            </motion.p>
          </div>

          {/* Right – YOUR profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[500px] lg:h-[600px]"
          >
            <ParallaxImage
              src="/images/profile.jpg"
              alt="Paschal William – Filmmaker"
            />
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 2: MY STORY ========== */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-heading font-bold mb-8">My Story</h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                My passion for filmmaking started with a small handheld camera, capturing moments with friends. That curiosity quickly grew into a deep love for visual storytelling.
              </p>
              <p>
                I spent years learning the craft — from camera work to editing, lighting, and sound design. Each project taught me something new, and I began working with local businesses, NGOs, and creative agencies.
              </p>
              <p>
                Today, I create cinematic videos for brands, universities, and organisations that want to connect with their audiences on a deeper level. Every project is a chance to tell a story that matters.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1527266237114-8e60a53c5be2?q=80&w=800"
              alt="Behind the scenes filming"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ========== SECTION 3: PROFESSIONAL PORTRAIT SHOWCASE ========== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1600"
          alt="Directing a scene"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <AnimatedSection className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-2xl md:text-4xl font-heading italic text-white leading-snug">
            “Every frame should serve a purpose. <br /> Every story should leave an impact.”
          </p>
        </AnimatedSection>
      </section>

      {/* ========== SECTION 4: CREATIVE PHILOSOPHY ========== */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">My Creative Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-brand-gold">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ========== SECTION 5: EXPERIENCE TIMELINE ========== */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">My Journey</h2>
          <Timeline steps={timelineSteps} />
        </div>
      </AnimatedSection>

      {/* ========== SECTION 6: EXPERTISE & SKILLS ========== */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Expertise & Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCards.map((skill) => (
              <motion.div
                key={skill.title}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-heading font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ========== SECTION 7: TOOLS & EQUIPMENT ========== */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Tools & Equipment</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ========== SECTION 8: ACHIEVEMENTS ========== */}
      <AnimatedSection className="py-20">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter value={100} label="Projects Completed" />
          <Counter value={50} label="Clients Served" />
          <Counter value={1} label="Views Generated (M)" />
          <Counter value={5} label="Years Experience" />
        </div>
      </AnimatedSection>

      {/* ========== SECTION 9: PERSONALITY ========== */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Beyond The Camera</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {personalityItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl p-6 w-32 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <span className="text-3xl mb-2">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ========== SECTION 10: FINAL CTA ========== */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-brand-black text-white text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's Create Something Remarkable Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a story that needs to be told? Let's bring it to life with cinematic visuals that move audiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/contact')}>Start a Project</Button>
            <Button variant="secondary" onClick={() => navigate('/portfolio')}>
              View Portfolio
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}

export default AboutPage
