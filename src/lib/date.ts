export function todayISO(): string {
  return new Date().toLocaleDateString('en-CA') // yyyy-mm-dd, local time
}

export function startOfWeek(date = new Date()): string {
  const d = new Date(date)
  const day = d.getDay() // 0 = Sunday
  const diff = day === 0 ? -6 : 1 - day // shift to Monday
  d.setDate(d.getDate() + diff)
  return d.toLocaleDateString('en-CA')
}

export function endOfWeek(date = new Date()): string {
  const start = new Date(startOfWeek(date))
  start.setDate(start.getDate() + 6)
  return start.toLocaleDateString('en-CA')
}

export function formatDateLabel(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}
