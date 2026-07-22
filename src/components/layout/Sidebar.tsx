import type { Section } from './sections'
import { SECTIONS } from './sections'
import { NavItem } from './NavItem'

export function Sidebar({
  active,
  onSelect,
}: {
  active: Section
  onSelect: (section: Section) => void
}) {
  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r border-border-soft bg-cream px-4 py-6 md:flex">
      <p className="font-display px-3 text-lg font-medium text-ink">Dashboard</p>
      <nav className="mt-8 flex flex-col gap-1">
        {SECTIONS.map((s) => (
          <NavItem
            key={s.id}
            label={s.label}
            icon={<s.icon />}
            active={active === s.id}
            onClick={() => onSelect(s.id)}
          />
        ))}
      </nav>
    </aside>
  )
}
