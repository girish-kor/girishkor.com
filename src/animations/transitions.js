export const EASE_MANGA = [0.16, 1, 0.3, 1]

export const PANEL_VARIANTS = {
  hidden: { opacity: 0, y: 40, rotate: -1 },
  visible: { opacity: 1, y: 0, rotate: 0 },
}

export const stagger = (count, baseDelay = 0, step = 120) =>
  Array.from({ length: count }, (_, i) => baseDelay + i * step)
