import ContactForm from '../components/sections/ContactForm'
import FAQ from '../components/sections/FAQ'
import AnimatedSection from '../components/ui/AnimatedSection'

const ContactPage = () => (
  <main>
    <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl font-heading text-brand-gold mb-6">Let's Create Something Amazing</h1>
      <p className="text-xl text-gray-400 mb-12">Have a project in mind? Reach out.</p>
      <ContactForm />
    </AnimatedSection>
    <AnimatedSection className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-heading text-brand-gold text-center mb-8">Frequently Asked Questions</h2>
        <FAQ />
      </div>
    </AnimatedSection>
  </main>
)

export default ContactPage
