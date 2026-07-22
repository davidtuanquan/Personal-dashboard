import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-ink text-cream hover:opacity-90',
  secondary: 'bg-card border border-border-soft text-ink hover:bg-cream',
  ghost: 'text-ink-muted hover:text-ink',
}

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`rounded-control px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  )
}
