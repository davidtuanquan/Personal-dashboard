import type { SelectHTMLAttributes } from 'react'

export function Select({
  className = '',
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`rounded-control border border-border-soft bg-card px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-tasks ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
