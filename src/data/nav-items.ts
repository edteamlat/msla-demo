import type { NavItem } from '../types/nav-item'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
]

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id)
export const DEFAULT_SECTION_ID = 'home'

