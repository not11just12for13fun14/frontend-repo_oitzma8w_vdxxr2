import { Section } from './Section'
import { motion } from 'framer-motion'

const brands = [
  'https://upload.wikimedia.org/wikipedia/commons/5/5a/Moet-Hennessy_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5b/Red_Bull.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/Lavazza_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/09/Perrier_Logo.svg',
]

export default function Brands() {
  return (
    <Section className="bg-white" delay={0.1}>
      <div id="brands" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Brand Partners</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {brands.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-teal-300 hover:bg-teal-50/50 transition"
            >
              <img src={src} alt="Brand" className="w-full h-10 object-contain grayscale hover:grayscale-0 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
