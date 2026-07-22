type IconProps = { className?: string }

const base = 'h-5 w-5'

export function HomeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TasksIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 6h6M4 12h6M4 18h6" strokeLinecap="round" />
      <path d="M14 6l2 2 4-4M14 16l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function RunningIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="15.5" cy="5" r="1.8" />
      <path
        d="M6 20l3.5-4 2.5-2-1-4-3 1.5M13 10l1.5 3 4 1M9 8l3-2 3 1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CookingIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 11a8 8 0 0116 0" strokeLinecap="round" />
      <path d="M3 11h18M5 11l1 8h12l1-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SellingIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 8l2-4h12l2 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12a3 3 0 006 0" strokeLinecap="round" />
    </svg>
  )
}
