import { useEffect, useState } from 'react'

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: '-40% 0px -50% 0px',
  threshold: 0,
}

export function useActiveSection(sectionIds: string[], fallbackId: string): string {
  const [activeId, setActiveId] = useState(fallbackId)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      const nextId = visible[0]?.target.id
      if (nextId) {
        setActiveId(nextId)
      }
    }, OBSERVER_OPTIONS)

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [sectionIds, fallbackId])

  return activeId
}
