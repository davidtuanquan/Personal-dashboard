import { useState } from 'react'
import type { Goal } from '../../lib/types/database'
import { Card } from '../../components/ui/Card'
import { TextInput } from '../../components/ui/TextInput'
import { Button } from '../../components/ui/Button'
import { formatDuration, parseDurationToSeconds } from './pace'

export function GoalCard({
  goal,
  onSave,
}: {
  goal: Goal | undefined
  onSave: (input: { id?: string; type: string; target_value: number; target_date?: string | null }) => void
}) {
  const [editing, setEditing] = useState(false)
  const [target, setTarget] = useState(goal ? formatDuration(goal.target_value) : '')
  const [targetDate, setTargetDate] = useState(goal?.target_date ?? '')

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    onSave({
      id: goal?.id,
      type: '5k_time',
      target_value: parseDurationToSeconds(target),
      target_date: targetDate || null,
    })
    setEditing(false)
  }

  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">5K goal</p>
      {editing ? (
        <form onSubmit={handleSave} className="mt-2 flex flex-wrap gap-2">
          <TextInput
            placeholder="mm:ss"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-24"
          />
          <TextInput type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
          <Button type="submit">Save</Button>
        </form>
      ) : (
        <div className="mt-1 flex items-center justify-between">
          <p className="font-display text-2xl text-ink">
            {goal ? formatDuration(goal.target_value) : 'No goal set'}
          </p>
          <Button variant="secondary" onClick={() => setEditing(true)}>
            {goal ? 'Edit' : 'Set goal'}
          </Button>
        </div>
      )}
    </Card>
  )
}
