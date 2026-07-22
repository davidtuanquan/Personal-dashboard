export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-3xl font-medium text-ink">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
    </div>
  )
}
