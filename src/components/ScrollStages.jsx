import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollStages() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0.1])

  const stages = [
    {
      title: 'Source',
      desc: 'We partner with global manufacturers and heritage brands.',
    },
    {
      title: 'Ship',
      desc: 'Cold-chain and ambient logistics across ocean routes.',
    },
    {
      title: 'Store',
      desc: 'Climate-aware storage with rigorous QA protocols.',
    },
    {
      title: 'Serve',
      desc: 'Last-mile delivery to islands, resorts, and retailers.',
    },
  ]

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-teal-50"
        style={{ y: bgY, opacity: ringOpacity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="sticky top-16 z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">From source to serve</h2>
          <p className="mt-3 max-w-2xl text-slate-600">An end-to-end distribution flow designed for the Maldives.</p>
        </div>

        <div className="mt-12 space-y-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.title}
              className="grid md:grid-cols-2 gap-8 items-start"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative p-8 rounded-3xl ring-1 ring-slate-200 bg-white">
                <div className="absolute -z-10 -inset-px rounded-3xl bg-gradient-to-br from-teal-600/10 to-sky-600/10 blur-2xl" />
                <div className="text-sm font-semibold text-teal-700/90">Stage {String(i + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">{s.title}</div>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
              <motion.div
                className="h-56 rounded-3xl ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="h-full w-full flex items-center justify-center text-slate-400">Visual placeholder</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
