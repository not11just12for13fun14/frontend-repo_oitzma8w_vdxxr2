import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative w-full min-h-[80vh] lg:min-h-[88vh] overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/10 text-teal-700 text-sm backdrop-blur-sm ring-1 ring-teal-600/20">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Maldives Distribution Excellence
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Your Trusted Beverage & FMCG Distributor in the Maldives
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl">
            We bring world-class brands to every island and resort — with reliability, care, and an unmatched partner network.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#brands" className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-medium shadow-sm shadow-teal-600/20 hover:bg-teal-700 transition">Explore Brands</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-teal-700 ring-1 ring-teal-600/20 bg-white/80 hover:bg-white transition">Become a Partner</a>
          </div>
        </motion.div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center text-slate-500">
          <span className="text-sm">Scroll</span>
          <div className="mt-2 w-[2px] h-8 bg-slate-300 rounded-full overflow-hidden">
            <motion.div className="w-[2px] h-3 bg-teal-500" animate={{ y: [0, 20, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
