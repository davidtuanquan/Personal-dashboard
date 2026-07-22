import { useState } from 'react'
import { TextInput } from '../../components/ui/TextInput'
import { Button } from '../../components/ui/Button'
import { parseDurationToSeconds } from './pace'
import { todayISO } from '../../lib/date'

export function AddRunForm({
  onAdd,
}: {
  onAdd: (input: { date: string; distance_km: number; duration_seconds: number; notes?: string | null }) => void
}) {
  const [date, setDate] = useState(todayISO())
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [notes, setNotes] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const distanceKm = parseFloat(distance)
    if (!distanceKm || !duration) return
    onAdd({
      date,
      distance_km: distanceKm,
      duration_seconds: parseDurationToSeconds(duration),
      notes: notes || null,
    })
    setDistance('')
    setDuration('')
    setNotes('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
      <TextInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <TextInput
        placeholder="Distance (km)"
        type="number"
        step="0.01"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className="w-32"
      />
      <TextInput
        placeholder="mm:ss"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-24"
      />
      <TextInput
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="min-w-32 flex-1"
      />
      <Button type="submit">Log run</Button>
    </form>
  )
}
