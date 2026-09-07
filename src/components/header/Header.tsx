import { DEFAULT_SECTION_ID, NAV_ITEMS, SECTION_IDS } from '../../data/nav-items'
import { useActiveSection } from '../../hooks/use-active-section'
import { useMobileMenu } from '../../hooks/use-mobile-menu'
import { HeaderLogo } from './HeaderLogo'
import { HeaderMenuToggle } from './HeaderMenuToggle'
import { HeaderMobileMenu } from './HeaderMobileMenu'
import { HeaderNav } from './HeaderNav'

export function Header() {
  const mobileMenu = useMobileMenu()
  const activeId = useActiveSection(SECTION_IDS, DEFAULT_SECTION_ID)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <HeaderLogo />
        <HeaderNav items={NAV_ITEMS} activeId={activeId} />
        <HeaderMenuToggle isOpen={mobileMenu.isOpen} onToggle={mobileMenu.toggle} />
      </div>
      <HeaderMobileMenu
        items={NAV_ITEMS}
        activeId={activeId}
        isOpen={mobileMenu.isOpen}
        onNavigate={mobileMenu.close}
      />
    </header>
  )
}
