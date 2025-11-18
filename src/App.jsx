import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Brands from './components/Brands'
import WhyChoose from './components/WhyChoose'
import Stats from './components/Stats'
import Promo from './components/Promo'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-slate-900">Simdi</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#brands" className="hover:text-slate-900">Brands</a>
            <a href="#" className="hover:text-slate-900">Categories</a>
            <a href="#" className="hover:text-slate-900">Why Us</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-teal-700 transition">Become a Partner</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Categories />
        <Brands />
        <WhyChoose />
        <Stats />
        <Promo />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Simdi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
