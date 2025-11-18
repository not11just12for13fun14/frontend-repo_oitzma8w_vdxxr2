import { Section } from './Section'

export default function Contact() {
  return (
    <Section className="bg-white" delay={0.1}>
      <div id="contact" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-600">Trade inquiries and partnership opportunities. We usually respond within one business day.</p>
          <div className="mt-8 rounded-3xl overflow-hidden ring-1 ring-slate-200">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.7%2C-1%2C74.5%2C6.5&layer=mapnik"
              className="w-full h-72"
              loading="lazy"
            />
          </div>
        </div>
        <form className="bg-white rounded-3xl ring-1 ring-slate-200 p-6 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-500 focus:border-teal-500" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-500 focus:border-teal-500" type="email" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea className="mt-1 w-full rounded-xl border-slate-300 focus:ring-teal-500 focus:border-teal-500" rows="4" placeholder="Tell us about your needs" />
          </div>
          <button type="button" className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 transition">Send inquiry</button>
        </form>
      </div>
    </Section>
  )
}
