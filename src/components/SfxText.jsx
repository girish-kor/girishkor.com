import { useIntersection } from '../hooks/useIntersection'

export default function SfxText({
  text,
  size = 'text-8xl',
  color = 'text-accent',
  delay = 0,
}) {
  const [ref, visible] = useIntersection()

  return (
    <span
      ref={ref}
      className={`font-manga ${size} ${color} sfx-text select-none transition-all duration-500 inline-block ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  )
}
