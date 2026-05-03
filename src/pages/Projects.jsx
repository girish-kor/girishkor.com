import ProjectCard from '../components/ProjectCard'
import SfxText from '../components/SfxText'

const PROJECTS = [
  {
    title: 'STOOFERS',
    description:
      'STOOFERS.in `India`s No.1 Students Discount App` marketing website — a static SPA that showcases product and partner listings, screenshots, GIFs and marketing pages.',
    stack: 'React / Vite',
    live: 'https://www.stoofers.com/',
    repo: 'https://github.com/girish-kor/STOOFERS.in',
  },
  {
    title: 'STFR',
    description:
      'STAY THE **** REAL STFR.in is a small React frontend (Vite) for an anonymous messaging platform. The UI lets visitors send anonymous messages to a username derived from the URL path (for example: `/alice` sends messages to `alice`).',
    stack: 'React / Vite',
    live: 'https://stfr.in/',
    repo: 'https://github.com/girish-kor/STFR.in',
  },
  {
    title: 'STOOMART DASHBOARD',
    description:
      'A modern React application for vendor management with support for both restaurant and non-restaurant businesses. The application uses MUI Joy`s design system with custom theming in src/theme/joyTheme.js.',
    stack: 'React / Vite',
    live: null,
    repo: 'https://github.com/girish-kor/STOOMART.in',
  },
  {
    title: '@sholder/roles',
    description:
      'Roles are first-class agents that can be registered, composed via dependency metadata, planned by the execution engine, and executed by the orchestrator or runtime. Enterprise role orchestration • workflow automation • deterministic agent framework — CEO, CTO, CFO, COO, CMO, AEO, Architect, Planner, Analyst, Reviewer, Executor.',
    stack: 'NPM / Node.js',
    live: 'https://www.npmjs.com/package/@sholder/roles',
    repo: 'https://github.com/girish-kor/sholder-roles',
  },
  {
    title: '@nodude/code',
    description:
      'Npm dependency for reducing Node.js backend code by 80–100%. Define models, routes, and services. Everything else is automatic.',
    stack: 'NPM / Node.js',
    live: 'https://www.npmjs.com/package/@nodude/code',
    repo: 'https://github.com/girish-kor/nodude-code',
  },
  {
    title: 'Ads Guru',
    description:
      'A next-gen Manifest V3 Browser extension that combines advanced data structures (Bloom filters, Tries, Aho-Corasick) with layered URL evaluation to deliver fast, reliable ads and tracking blocking. Supports EasyList, EasyPrivacy, uBlock, and AdGuard filter lists with automatic 24-hour refreshes.',
    stack: 'JavaScript / Chrome',
    live: null,
    repo: 'https://github.com/girish-kor/ads-guru-extension',
  },
]

export default function Projects() {
  return (
    <main className="relative z-10 pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="font-mono text-gold text-sm tracking-[0.3em] uppercase">
            Chapter 02 — Saga of Creation
          </p>
          <div className="flex items-end gap-6 flex-wrap">
            <SfxText text="PROJECTS!" size="text-6xl md:text-8xl" color="text-paper" />
            <SfxText text="×{6}" size="text-3xl" color="text-accent" delay={200} />
          </div>
          <p className="font-body text-paper/60 max-w-xl">
            Each project forged in the heat of battle. Zero shortcuts. Maximum power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
