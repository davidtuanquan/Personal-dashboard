import { useEffect, useState } from 'react'
import { useDailyFocus } from './useDailyFocus'
import { Card } from '../../components/ui/Card'
import { todayISO, formatDateLabel } from '../../lib/date'

export function DailyFocusCard() {
  const { oneThingText, loading, save } = useDailyFocus()
  const [draft, setDraft] = useState('')

  useEffect(() => {
    setDraft(oneThingText)
  }, [oneThingText])

  return (
    <Card>
      <p className="font-display text-lg text-ink-muted">{formatDateLabel(todayISO())}</p>
      <p className="mt-1 text-sm font-medium text-ink-muted">Today's one thing</p>
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => draft !== oneThingText && save(draft)}
        placeholder={loading ? 'Loading…' : "What's the one thing today?"}
        className="mt-2 w-full border-none bg-transparent font-display text-2xl text-ink placeholder:text-ink-muted focus:outline-none"
      />
    </Card>
  )
}
