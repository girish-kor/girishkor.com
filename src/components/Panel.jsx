import { useIntersection } from '../hooks/useIntersection'

export default function Panel({ children, className = '', delay = 0, rotate = 0 }) {
  const [ref, visible] = useIntersection()

  return (
    <div
      ref={ref}
      className={`manga-panel overflow-hidden transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible
          ? `rotate(${rotate}deg)`
          : `translateY(40px) rotate(${rotate - 1}deg)`,
      }}
    >
      {children}
    </div>
  )
}
