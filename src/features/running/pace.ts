export function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function parseDurationToSeconds(mmss: string): number {
  const [minutes, seconds] = mmss.split(':').map(Number)
  return (minutes || 0) * 60 + (seconds || 0)
}

export function formatPace(distanceKm: number, durationSeconds: number): string {
  if (distanceKm <= 0) return '—'
  const secondsPerKm = durationSeconds / distanceKm
  return `${formatDuration(Math.round(secondsPerKm))} /km`
}
