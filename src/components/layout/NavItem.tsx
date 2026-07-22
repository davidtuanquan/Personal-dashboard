import type { ReactNode } from 'react'

export function NavItem({
  label,
  icon,
  active,
  onClick,
  orientation = 'vertical',
}: {
  label: string
  icon: ReactNode
  active: boolean
  onClick: () => void
  orientation?: 'vertical' | 'horizontal'
}) {
  const base =
    orientation === 'vertical'
      ? 'flex items-center gap-3 rounded-control px-3 py-2 text-sm font-medium w-full'
      : 'flex flex-1 flex-col items-center gap-1 py-2 text-xs font-medium'

  return (
    <button
      onClick={onClick}
      className={`${base} transition-colors ${
        active ? 'bg-tasks-bg text-tasks' : 'text-ink-muted hover:text-ink'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
