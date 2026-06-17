import { useState } from 'react'
import Button from '../ui/Button'

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // No backend
  }

  if (submitted) return <div className="text-center text-2xl text-brand-gold py-20">Thanks! I'll get back to you.</div>

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" placeholder="Name" required className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-white" />
        <input type="email" placeholder="Email" required className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-white" />
      </div>
      <input type="text" placeholder="Phone" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white" />
      <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white">
        <option>Project Type</option>
        <option>Commercial</option>
        <option>Documentary</option>
        <option>Event</option>
        <option>Other</option>
      </select>
      <textarea rows={5} placeholder="Message" required className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white" />
      <Button variant="primary" className="w-full">Send Message</Button>
    </form>
  )
}

export default ContactForm
