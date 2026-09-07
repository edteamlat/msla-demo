import { motion, useReducedMotion } from 'framer-motion'
import type { HeroLetter as HeroLetterData } from '../../types/hero'

type HeroLetterProps = {
  letter: HeroLetterData
}

export function HeroLetter({ letter }: HeroLetterProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.span
      aria-hidden="true"
      className="inline-block"
      initial={
        prefersReducedMotion
          ? { opacity: 1, x: 0, y: 0, rotate: 0 }
          : {
              opacity: 0,
              x: letter.fromX,
              y: letter.fromY,
              rotate: letter.fromRotate,
            }
      }
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : letter.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {letter.char}
    </motion.span>
  )
}
