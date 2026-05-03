export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        manga: ['"Bangers"', 'cursive'],
        body: ['"Kalam"', 'cursive'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#f5f0e8',
        accent: '#e63946',
        panel: '#1a1a2e',
        halftone: '#2d2d2d',
        gold: '#ffd60a',
      },
      animation: {
        'panel-in': 'panelIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'ink-drop': 'inkDrop 0.8s ease forwards',
        'speed-line': 'speedLine 0.4s ease-out forwards',
        flicker: 'flicker 3s infinite',
      },
      keyframes: {
        panelIn: {
          '0%': { opacity: '0', transform: 'translateY(40px) rotate(-1deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        inkDrop: {
          '0%': { clipPath: 'circle(0% at 50% 50%)' },
          '100%': { clipPath: 'circle(150% at 50% 50%)' },
        },
        speedLine: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '97%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'halftone-pattern':
          'radial-gradient(circle, #2d2d2d 1px, transparent 1px)',
        'speed-lines':
          'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(230,57,70,0.05) 2px, rgba(230,57,70,0.05) 4px)',
      },
    },
  },
  plugins: [],
}
