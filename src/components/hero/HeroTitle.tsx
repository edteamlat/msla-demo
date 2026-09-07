import { HERO_LETTERS } from '../../data/hero-letters'
import { HeroLetter } from './HeroLetter'

export function HeroTitle() {
  return (
    <h1 className="flex flex-wrap items-center justify-center gap-x-1 font-semibold leading-none tracking-tight text-navy text-[18vw] sm:gap-x-2 md:text-[14vw] lg:text-[12rem]">
      <span className="sr-only">MSLA-ID</span>
      {HERO_LETTERS.map((letter, index) => (
        <HeroLetter key={`${letter.char}-${index}`} letter={letter} />
      ))}
    </h1>
  )
}
