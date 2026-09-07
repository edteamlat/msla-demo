import type { NavItem } from '../../types/nav-item'

type HeaderNavLinkProps = {
  item: NavItem
  isActive: boolean
  onNavigate?: () => void
}

export function HeaderNavLink({ item, isActive, onNavigate }: HeaderNavLinkProps) {
  return (
    <a
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? 'page' : undefined}
      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? 'bg-paper text-bloom' : 'text-navy hover:text-bloom'
      }`}
    >
      {item.label}
    </a>
  )
}
