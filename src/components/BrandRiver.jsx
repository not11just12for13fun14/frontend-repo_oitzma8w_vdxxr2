import { motion, useAnimationControls } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/5/5a/Moet-Hennessy_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5b/Red_Bull.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/Lavazza_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/09/Perrier_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2b/Nestle_textlogo_blue.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2b/Heineken_International_logo.svg',
]

function Row({ direction = 1, speed = 60 }) {
  const controls = useAnimationControls()
  const content = [...logos, ...logos]
  const distance = 100 // percent

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: direction > 0 ? [0, -distance + '%'] : [0, distance + '%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        onHoverStart={() => controls.stop()}
      >
        {content.map((src, i) => (
          <img
            key={i + src}
            src={src}
            alt="Brand"
            className="h-10 w-auto opacity-80 hover:opacity-100 transition grayscale hover:grayscale-0 will-change-transform"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function BrandRiver() {
  return (
    <section aria-label="Brand partners" className="bg-gradient-to-b from-white to-teal-50/40">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Trusted by leading brands</h2>
        </div>
        <div className="space-y-6">
          <Row direction={1} speed={55} />
          <Row direction={-1} speed={65} />
        </div>
      </div>
    </section>
  )
}
