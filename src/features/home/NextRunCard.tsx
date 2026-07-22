import { useRuns } from '../running/useRuns'
import { useGoals } from '../running/useGoals'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'
import { formatDuration, formatPace } from '../running/pace'
import { formatDateLabel } from '../../lib/date'

export function NextRunCard() {
  const { runs, loading } = useRuns()
  const { goals } = useGoals()
  const lastRun = runs[0]
  const goal = goals.find((g) => g.type === '5k_time')

  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Last run</p>
      {loading ? (
        <p className="mt-2 text-sm text-ink-muted">Loading…</p>
      ) : !lastRun ? (
        <EmptyState message="No runs logged yet." />
      ) : (
        <div className="mt-2">
          <p className="font-display text-xl text-ink">
            {lastRun.distance_km} km · {formatDuration(lastRun.duration_seconds)}
          </p>
          <p className="text-xs text-ink-muted">
            {formatDateLabel(lastRun.date)} · {formatPace(lastRun.distance_km, lastRun.duration_seconds)}
          </p>
        </div>
      )}
      {goal && <p className="mt-2 text-xs text-ink-muted">5K goal: {formatDuration(goal.target_value)}</p>}
    </Card>
  )
}
