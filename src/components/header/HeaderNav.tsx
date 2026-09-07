import type { NavItem } from '../../types/nav-item'
import { HeaderNavLink } from './HeaderNavLink'

type HeaderNavProps = {
  items: NavItem[]
  activeId: string
}

export function HeaderNav({ items, activeId }: HeaderNavProps) {
  return (
    <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
      {items.map((item) => (
        <HeaderNavLink key={item.id} item={item} isActive={activeId === item.id} />
      ))}
    </nav>
  )
}
