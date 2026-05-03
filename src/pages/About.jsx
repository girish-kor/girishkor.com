import Panel from '../components/Panel'
import SfxText from '../components/SfxText'

const TIMELINE = [
  { year: '2017', event: '10th grade from Maharashtra State Board.', sfx: 'SPARK!' },
  { year: '2019', event: '12th grade Science from MSBSHSE.', sfx: 'WOAH!' },
  { year: '2021', event: 'Diploma in Civil Engineering from MSBTE.', sfx: 'SURGE!' },
  {
    year: '2024',
    event: 'Computer Science & Engineering from Mumbai University.',
    sfx: 'BOOM!',
  },
  {
    year: '2025',
    event: 'Workforce at Connectia Technology as a full-stack developer.',
    sfx: 'MAX!',
  },
]

export default function About() {
  return (
    <main className="relative z-10 pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Chapter 03 — Origin Story
          </p>
          <SfxText text="ABOUT ME!" size="text-6xl md:text-8xl" color="text-paper" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <Panel delay={0}>
              <div className="p-8 relative">
                <div className="speed-burst" />
                <div className="relative z-10">
                  <p className="font-manga text-3xl text-accent mb-4">THE PROTAGONIST</p>
                  <p className="font-body text-paper/80 leading-relaxed text-lg">
                    A software developer obsessed with the craft. I approach every
                    codebase like a artist approaches a new arc — with intention, pacing,
                    and an eye for the dramatic payoff.
                  </p>
                </div>
              </div>
            </Panel>

            <Panel delay={100} rotate={-0.5}>
              <div className="p-8">
                <p className="font-manga text-3xl text-gold mb-4">BATTLE STYLE</p>
                <ul className="space-y-3 font-body text-paper/80">
                  {[
                    'Performance-first engineering',
                    'Clean, documented code architecture',
                    'Obsessive attention to UX detail',
                    'Open-source community contributor',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rotate-45 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </div>

          <div className="space-y-4">
            <p className="font-manga text-2xl text-paper/60 mb-6">— STORY ARC —</p>
            {TIMELINE.map(({ year, event, sfx }, i) => (
              <Panel key={year} delay={i * 100} rotate={i % 2 === 0 ? 0.3 : -0.3}>
                <div className="p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 text-right">
                    <p className="font-manga text-2xl text-accent">{year}</p>
                    <p className="font-manga text-xs text-gold">{sfx}</p>
                  </div>
                  <div className="w-px bg-paper/20 self-stretch mx-2" />
                  <p className="font-body text-paper/80 text-sm leading-relaxed pt-1">
                    {event}
                  </p>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
