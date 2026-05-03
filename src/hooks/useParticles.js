import { useEffect } from 'react'

export function useParticles() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      if (typeof window.particlesJS === 'function') {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 900 } },
            color: { value: ['#e63946', '#ffd60a', '#f5f0e8'] },
            shape: { type: 'circle' },
            opacity: { value: 0.25, random: true },
            size: { value: 2, random: true },
            line_linked: {
              enable: true,
              distance: 120,
              color: '#e63946',
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'push' },
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.4 } },
              push: { particles_nb: 3 },
            },
          },
          retina_detect: true,
        })
      }
    }
    document.body.appendChild(script)
    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((dom) => dom.pJS.fn.vendors.destroypJS())
        window.pJSDom = []
      }
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])
}
