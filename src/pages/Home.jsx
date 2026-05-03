import { Link } from 'react-router-dom'
import SfxText from '../components/SfxText'
import Panel from '../components/Panel'
import { useIntersection } from '../hooks/useIntersection'

const SKILLS = [
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'Go',
  'PostgreSQL',
  'Docker',
  'AWS',
]

function SkillTag({ skill, index }) {
  const [ref, visible] = useIntersection()
  return (
    <span
      ref={ref}
      className={`inline-block px-3 py-1 border-2 border-paper font-mono text-sm text-paper transition-all duration-400 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {skill}
    </span>
  )
}

export default function Home() {
  return (
    <main className="relative z-10">
      <section className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-gold text-sm tracking-[0.3em] uppercase">
                Chapter 01 — Introduction
              </p>
              <div className="speech-bubble inline-block mb-6">
                <p className="font-body text-ink font-bold text-sm">
                  I build things for the web!
                </p>
              </div>
              <h1 className="font-manga text-7xl md:text-9xl leading-none text-paper">
                FULL
                <br />
                <span className="text-accent">STACK</span>
                <br />
                DEV
              </h1>
            </div>
            <p className="font-body text-paper/70 text-lg leading-relaxed max-w-md">
              Crafting digital experiences with the precision of a artist and the speed of
              a shonen protagonist.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="font-manga text-lg tracking-widest px-8 py-3 bg-accent text-paper border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 sfx-text"
              >
                MY WORK!
              </Link>
              <Link
                to="/contact"
                className="font-manga text-lg tracking-widest px-8 py-3 border-2 border-paper text-paper hover:bg-paper hover:text-ink transition-all duration-300"
              >
                HIRE ME
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 border border-paper/10 rotate-3" />
            <div className="manga-panel p-8 -rotate-2">
              <div className="speed-burst" />
              <div className="relative z-10 space-y-6">
                <SfxText text="WHOOSH!" size="text-6xl" color="text-gold" />
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square border border-paper/20 flex items-center justify-center"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: ['#e63946', '#ffd60a', '#f5f0e8', '#1a1a2e'][
                            i % 4
                          ],
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="font-mono text-xs text-paper/40 tracking-widest">
                  — LOADING PROTAGONIST STATS —
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t-2 border-paper/10">
        <div className="max-w-7xl mx-auto">
          <Panel className="mb-16" delay={0}>
            <div className="p-8 text-center">
              <SfxText text="SKILLS!" size="text-6xl" color="text-accent" />
            </div>
          </Panel>
          <div className="flex flex-wrap gap-3 justify-center">
            {SKILLS.map((skill, i) => (
              <SkillTag key={skill} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-panel/50 clip-diagonal">
        <div className="max-w-7xl mx-auto text-center space-y-8 pt-8">
          <SfxText text="POWER UP!" size="text-5xl md:text-7xl" color="text-gold" />
          <p className="font-body text-paper/70 text-xl max-w-2xl mx-auto">
            Currently available for freelance and full-time opportunities. Let&apos;s
            build something legendary.
          </p>
          <Link
            to="/contact"
            className="inline-block font-manga text-xl tracking-widest px-12 py-4 bg-accent text-paper border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 sfx-text"
          >
            START QUEST!
          </Link>
        </div>
      </section>
    </main>
  )
}
