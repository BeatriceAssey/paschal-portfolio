import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import TestimonialsClientsPage from './pages/TestimonialsClientsPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import ShowreelPage from './pages/ShowreelPage'
import EquipmentPage from './pages/EquipmentPage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-brand-black text-white z-50">
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl mb-4"
        >
          🎬
        </motion.div>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-heading font-bold text-brand-gold"
        >
          PCinematics
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-brand-gold mt-4 rounded-full"
        />
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300">
        <ScrollProgress />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/showreel" element={<ShowreelPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
