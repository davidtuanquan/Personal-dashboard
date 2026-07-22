import type { InputHTMLAttributes } from 'react'

export function TextInput({
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`rounded-control border border-border-soft bg-card px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-tasks ${className}`}
      {...props}
    />
  )
}
