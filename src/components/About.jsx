import { Section } from './Section'

export default function About() {
  return (
    <Section className="bg-white" delay={0.1}>
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Simdi</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            For decades, we've connected the Maldives with premium beverages, FMCG, and hospitality products. Our commitment to quality, sustainability, and dependable service has made us a trusted partner across the archipelago.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From island resorts to local retailers, we deliver world-class brands with a distribution network built for precision and care.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-100 to-sky-100">
            <img src="https://images.unsplash.com/photo-1559719809-eb1af7887d4d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMGxvZ2lzdGljc3xlbnwwfDB8fHwxNzYzNDQwNzYwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Maldives logistics" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
            <div className="absolute inset-0 ring-1 ring-black/5 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </Section>
  )
}
