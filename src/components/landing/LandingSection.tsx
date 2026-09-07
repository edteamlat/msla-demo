import type { LandingSectionData } from '../../types/landing-section'

type LandingSectionProps = {
  section: LandingSectionData
}

export function LandingSection({ section }: LandingSectionProps) {
  return (
    <section
      id={section.id}
      className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          {section.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-soft">{section.description}</p>
      </div>
    </section>
  )
}
