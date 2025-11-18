import { Section } from './Section'

export default function Promo() {
  return (
    <Section className="bg-white" delay={0.1}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-gradient-to-br from-teal-600 to-sky-600 text-white p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold">Seasonal Promotions</h3>
            <p className="mt-2 text-white/90">Discover limited-time offers and campaign highlights tailored for resorts and retailers.</p>
            <div className="mt-6 inline-flex rounded-full bg-white/10 px-5 py-3 hover:bg-white/20 transition">Explore Current Offers →</div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>
    </Section>
  )
}
