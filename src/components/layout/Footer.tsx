

const Footer = () => (
  <footer className="bg-white dark:bg-brand-black border-t border-gray-200 dark:border-white/10 py-8">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-center text-gray-600 dark:text-gray-400 text-sm">
      <div>
        <p className="text-brand-gold font-heading font-bold text-lg">PCinematics</p>
        <p>© {new Date().getFullYear()} Paschal William</p>
      </div>

      {/* Middle column now empty – kept for grid alignment */}
      <div />

      <div className="text-right space-x-4">
        <a href="mailto:paschal@example.com" className="hover:text-brand-gold">Email</a>
        <a href="#" className="hover:text-brand-gold">LinkedIn</a>
        <a href="#" className="hover:text-brand-gold">Instagram</a>
      </div>
    </div>
  </footer>
)

export default Footer
