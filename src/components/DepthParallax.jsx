import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { useRef } from 'react'

export default function DepthParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const layerFar = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const layerMid = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const layerFore = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <section ref={ref} className="relative h-[120vh] bg-gradient-to-b from-white via-teal-50 to-white overflow-hidden">
      <div className="sticky top-0 h-screen">
        <motion.div className="absolute inset-0" style={{ y: layerFar, opacity: 0.7 }}>
          <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" />
        </motion.div>
        <motion.div className="absolute inset-0" style={{ y: layerMid }}>
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),transparent_60%)]" />
        </motion.div>
        <motion.div className="absolute inset-0" style={{ y: layerFore }}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-6 ring-1 ring-white/60">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">A Depth Story</h2>
              <p className="mt-3 max-w-xl text-slate-700">Experience a subtle multi-layer parallax that guides the eye and makes the hero feel alive without overwhelming performance.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
