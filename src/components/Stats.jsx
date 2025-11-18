import { useEffect, useState } from 'react'
import { Section } from './Section'

function useCounter(target, duration = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start
    let raf
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(p * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

export default function Stats() {
  const years = useCounter(30)
  const brands = useCounter(120)
  const islands = useCounter(200)
  const partners = useCounter(500)

  const items = [
    { label: 'Years in business', value: years },
    { label: 'Brands', value: brands },
    { label: 'Island-wide coverage', value: islands + '+' },
    { label: 'Partner resorts / outlets', value: partners + '+' },
  ]

  return (
    <Section className="bg-gradient-to-b from-white to-teal-50/50" delay={0.1}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.label} className="rounded-3xl p-6 bg-white ring-1 ring-slate-200 text-center">
              <div className="text-4xl font-extrabold text-slate-900 tracking-tight">{i.value}</div>
              <div className="mt-1 text-slate-600">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
