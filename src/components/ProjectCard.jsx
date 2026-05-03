import Panel from './Panel'

export default function ProjectCard({ project, index }) {
  const delay = index * 120

  return (
    <Panel
      delay={delay}
      rotate={index % 2 === 0 ? 0.5 : -0.5}
      className="group cursor-pointer"
    >
      <div className="relative p-6 h-full">
        <div className="speed-burst opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <span className="font-manga text-5xl text-accent/20 select-none leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs font-mono text-gold border border-gold px-2 py-0.5">
              {project.stack}
            </span>
          </div>
          <h3 className="font-manga text-2xl text-paper mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-paper/70 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-accent text-paper font-manga tracking-widest text-sm hover:bg-accent/80 transition-colors border-2 border-accent"
              >
                DEMO!
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 border-2 border-paper text-paper font-manga tracking-widest text-sm hover:bg-paper hover:text-ink transition-colors"
              >
                CODE
              </a>
            )}
          </div>
        </div>
      </div>
    </Panel>
  )
}
