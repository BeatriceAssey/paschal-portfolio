import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../../data/faq'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-5 flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <span className="font-medium">{faq.question}</span>
            <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }}>+</motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-5 text-gray-400"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default FAQ
