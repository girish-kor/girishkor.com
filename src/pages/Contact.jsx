import { useState } from 'react'
import SfxText from '../components/SfxText'
import Panel from '../components/Panel'

const SOCIAL = [
  { label: 'GITHUB', href: '#', handle: '@devhero' },
  { label: 'TWITTER', href: '#', handle: '@devhero_x' },
  { label: 'LINKEDIN', href: '#', handle: 'in/devhero' },
  { label: 'EMAIL', href: 'mailto:hello@GIRISHKOR.COM', handle: 'hello@GIRISHKOR.COM' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="relative z-10 pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Chapter 04 — Final Boss
          </p>
          <SfxText text="CONTACT!" size="text-6xl md:text-8xl" color="text-paper" />
          <p className="font-body text-paper/60 mt-4 max-w-xl">
            Ready to collaborate? Drop a message. I respond faster than a villain&apos;s
            monologue ends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Panel delay={0}>
            <div className="p-8">
              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <SfxText text="SENT!!" size="text-7xl" color="text-accent" />
                  <p className="font-body text-paper/70">
                    Message delivered. Expect a reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-manga text-sm text-paper/60 block mb-2 tracking-widest">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-2 border-paper/30 focus:border-accent outline-none px-4 py-3 font-body text-paper transition-colors"
                      placeholder="Hero Name..."
                    />
                  </div>
                  <div>
                    <label className="font-manga text-sm text-paper/60 block mb-2 tracking-widest">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-2 border-paper/30 focus:border-accent outline-none px-4 py-3 font-body text-paper transition-colors"
                      placeholder="hero@world.com"
                    />
                  </div>
                  <div>
                    <label className="font-manga text-sm text-paper/60 block mb-2 tracking-widest">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-2 border-paper/30 focus:border-accent outline-none px-4 py-3 font-body text-paper transition-colors resize-none"
                      placeholder="Describe your mission..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent border-2 border-accent font-manga text-xl tracking-widest text-paper hover:bg-transparent hover:text-accent transition-all duration-300 sfx-text"
                  >
                    SEND IT!!
                  </button>
                </form>
              )}
            </div>
          </Panel>

          <div className="space-y-4">
            <p className="font-manga text-xl text-paper/40 tracking-widest">
              — OR FIND ME AT —
            </p>
            {SOCIAL.map(({ label, href, handle }, i) => (
              <Panel key={label} delay={i * 80} rotate={i % 2 === 0 ? 0.4 : -0.4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 group"
                >
                  <span className="font-manga text-2xl text-paper group-hover:text-accent transition-colors">
                    {label}
                  </span>
                  <span className="font-mono text-sm text-paper/50 group-hover:text-gold transition-colors">
                    {handle}
                  </span>
                </a>
              </Panel>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
