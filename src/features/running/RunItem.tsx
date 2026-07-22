import type { Run } from '../../lib/types/database'
import { formatDuration, formatPace } from './pace'
import { formatDateLabel } from '../../lib/date'

export function RunItem({ run, onRemove }: { run: Run; onRemove: (id: string) => void }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border-soft py-3 last:border-b-0">
      <div>
        <p className="text-sm font-medium text-ink">
          {run.distance_km} km · {formatDuration(run.duration_seconds)}
        </p>
        <p className="text-xs text-ink-muted">
          {formatDateLabel(run.date)} · {formatPace(run.distance_km, run.duration_seconds)}
          {run.notes ? ` · ${run.notes}` : ''}
        </p>
      </div>
      <button onClick={() => onRemove(run.id)} className="text-ink-muted hover:text-ink" aria-label="Delete run">
        ×
      </button>
    </div>
  )
}
