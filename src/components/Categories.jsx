import { FadeItem, Section } from './Section'
import { Coffee, Wine, Droplet, Boxes, UtensilsCrossed } from 'lucide-react'

const categories = [
  { title: 'Beverages', icon: Droplet, color: 'from-teal-500 to-sky-500' },
  { title: 'FMCG', icon: Boxes, color: 'from-emerald-500 to-teal-500' },
  { title: 'Wines & Spirits', icon: Wine, color: 'from-indigo-500 to-blue-500' },
  { title: 'Coffee & Equipment', icon: Coffee, color: 'from-amber-500 to-orange-500' },
  { title: 'Hospitality Supplies', icon: UtensilsCrossed, color: 'from-slate-500 to-slate-700' }
]

export default function Categories() {
  return (
    <Section className="bg-white" delay={0.1}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Key Product Categories</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <FadeItem key={c.title} delay={i * 0.05}>
              <div className="group rounded-3xl p-6 bg-white ring-1 ring-slate-200 hover:shadow-xl transition overflow-hidden">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center mb-4 shadow-sm`}> 
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="text-slate-600 mt-1">Premium selection curated for the Maldives market.</p>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>
    </Section>
  )
}
