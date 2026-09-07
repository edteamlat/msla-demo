import type { NavItem } from '../../types/nav-item'
import { HeaderNavLink } from './HeaderNavLink'

type HeaderMobileMenuProps = {
  items: NavItem[]
  activeId: string
  isOpen: boolean
  onNavigate: () => void
}

export function HeaderMobileMenu({
  items,
  activeId,
  isOpen,
  onNavigate,
}: HeaderMobileMenuProps) {
  if (!isOpen) {
    return null
  }

  return (
    <nav
      id="menu-principal-movil"
      aria-label="Principal"
      className="border-t border-line bg-white px-4 py-3 md:hidden"
    >
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <HeaderNavLink
              item={item}
              isActive={activeId === item.id}
              onNavigate={onNavigate}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
