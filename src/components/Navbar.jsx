import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'HOME', sfx: 'START!' },
  { path: '/projects', label: 'PROJECTS', sfx: 'GO!' },
  { path: '/about', label: 'ABOUT', sfx: 'READ!' },
  { path: '/contact', label: 'CONTACT', sfx: 'HIT!' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-sm border-b-2 border-paper/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent border-2 border-paper flex items-center justify-center font-manga text-xl text-paper group-hover:rotate-6 transition-transform">
            GK
          </div>
          <span className="font-manga text-2xl tracking-widest text-paper flicker sfx-text animate-flicker">
            GIRISHKOR.COM
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-manga text-lg tracking-widest relative group transition-colors duration-200 ${
                location.pathname === path
                  ? 'text-accent'
                  : 'text-paper hover:text-accent'
              }`}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${
                menuOpen && i === 0
                  ? 'rotate-45 translate-y-2'
                  : menuOpen && i === 1
                    ? 'opacity-0'
                    : menuOpen && i === 2
                      ? '-rotate-45 -translate-y-2'
                      : ''
              }`}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink/98 border-t-2 border-paper/20 px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map(({ path, label, sfx }) => (
            <Link
              key={path}
              to={path}
              className={`font-manga text-3xl tracking-widest ${
                location.pathname === path ? 'text-accent' : 'text-paper'
              }`}
            >
              <span className="text-gold text-sm mr-3">{sfx}</span>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
