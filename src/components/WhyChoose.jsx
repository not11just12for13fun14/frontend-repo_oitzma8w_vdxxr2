import { Section, FadeItem } from './Section'
import { ShieldCheck, Globe2, Layers, Handshake } from 'lucide-react'

const pillars = [
  { title: 'Reliable Distribution Network', icon: Globe2, desc: 'Island-wide logistics designed for speed, care, and consistency.' },
  { title: 'Premium Global Brands', icon: Layers, desc: 'A curated portfolio trusted by luxury resorts and retailers.' },
  { title: 'Decades of Experience', icon: ShieldCheck, desc: 'Deep market knowledge and a commitment to long-term partnerships.' },
  { title: 'Strong Hospitality Partnerships', icon: Handshake, desc: 'Collaborations with leading hotels, cafes, and venues.' }
]

export default function WhyChoose() {
  return (
    <Section className="bg-white" delay={0.1}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">Why Choose Simdi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <FadeItem key={p.title} delay={i * 0.05}>
              <div className="rounded-3xl p-6 bg-white ring-1 ring-slate-200 hover:shadow-xl transition h-full">
                <div className="w-12 h-12 rounded-xl bg-teal-600/10 text-teal-700 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 mt-2">{p.desc}</p>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </Section>
  )
}
