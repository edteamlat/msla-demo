import { HeroTitle } from './HeroTitle'

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden px-4 py-16"
    >
      <HeroTitle />
    </section>
  )
}
