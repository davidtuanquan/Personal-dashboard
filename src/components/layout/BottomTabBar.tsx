import type { Section } from './sections'
import { SECTIONS } from './sections'
import { NavItem } from './NavItem'

export function BottomTabBar({
  active,
  onSelect,
}: {
  active: Section
  onSelect: (section: Section) => void
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 flex border-t border-border-soft bg-card pb-[env(safe-area-inset-bottom)] md:hidden">
      {SECTIONS.map((s) => (
        <NavItem
          key={s.id}
          label={s.label}
          icon={<s.icon />}
          active={active === s.id}
          onClick={() => onSelect(s.id)}
          orientation="horizontal"
        />
      ))}
    </nav>
  )
}
