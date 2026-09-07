import { Menu, X } from 'lucide-react'

type HeaderMenuToggleProps = {
  isOpen: boolean
  onToggle: () => void
}

export function HeaderMenuToggle({ isOpen, onToggle }: HeaderMenuToggleProps) {
  const Icon = isOpen ? X : Menu
  const label = isOpen ? 'Cerrar menú' : 'Abrir menú'

  return (
    <button
      type="button"
      className="inline-flex size-10 items-center justify-center rounded-md text-navy md:hidden"
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls="menu-principal-movil"
      onClick={onToggle}
    >
      <Icon size={22} />
    </button>
  )
}
