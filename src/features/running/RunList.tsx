import type { Run } from '../../lib/types/database'
import { RunItem } from './RunItem'
import { EmptyState } from '../../components/ui/EmptyState'

export function RunList({ runs, onRemove }: { runs: Run[]; onRemove: (id: string) => void }) {
  if (runs.length === 0) return <EmptyState message="No runs logged yet." />

  return (
    <div>
      {runs.map((run) => (
        <RunItem key={run.id} run={run} onRemove={onRemove} />
      ))}
    </div>
  )
}
