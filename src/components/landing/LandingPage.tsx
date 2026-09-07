import { LANDING_SECTIONS } from '../../data/landing-sections'
import { Header } from '../header/Header'
import { Hero } from '../hero/Hero'
import { LandingSection } from './LandingSection'

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-paper">
      <Header />
      <main>
        <Hero />
        {LANDING_SECTIONS.map((section) => (
          <LandingSection key={section.id} section={section} />
        ))}
      </main>
    </div>
  )
}
