export function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-pill border border-border-soft bg-card peer-checked:bg-running peer-checked:border-running transition-colors"
        aria-hidden
      >
        {checked && (
          <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-white stroke-2">
            <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label && (
        <span className={checked ? 'text-ink-muted line-through' : 'text-ink'}>{label}</span>
      )}
    </label>
  )
}
