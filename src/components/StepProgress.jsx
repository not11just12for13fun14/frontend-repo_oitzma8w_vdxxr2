import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function StepProgress() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20 })
  const dotY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[auto,1fr] gap-8">
          <div className="relative">
            <div className="sticky top-24 h-[60vh]">
              <div className="relative h-full w-1 rounded bg-slate-200 overflow-hidden">
                <motion.div className="absolute left-0 top-0 h-full bg-gradient-to-b from-teal-500 to-sky-500" style={{ scaleY: scaleX, originY: 0 }} />
                <motion.div className="absolute -left-2 w-5 h-5 rounded-full bg-teal-600 ring-4 ring-white shadow" style={{ y: dotY }} />
              </div>
            </div>
          </div>
          <div className="space-y-16">
            {[1,2,3,4].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-3xl ring-1 ring-slate-200 bg-white">
                <h3 className="text-xl font-semibold text-slate-900">Milestone {i}</h3>
                <p className="mt-2 text-slate-600">Narrative block describing a meaningful checkpoint in your partner journey. Replace this with your real story.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
