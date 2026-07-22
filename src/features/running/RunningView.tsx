import { useRuns } from './useRuns'
import { useGoals } from './useGoals'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card } from '../../components/ui/Card'
import { AddRunForm } from './AddRunForm'
import { RunList } from './RunList'
import { GoalCard } from './GoalCard'

export function RunningView() {
  const { runs, loading, addRun, removeRun } = useRuns()
  const { goals, upsertGoal } = useGoals()
  const activeGoal = goals.find((g) => g.type === '5k_time')

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Running" subtitle="Log runs and track your 5K goal." />
      <GoalCard goal={activeGoal} onSave={upsertGoal} />
      <Card>
        <AddRunForm onAdd={addRun} />
        <div className="mt-4">
          {loading ? (
            <p className="py-6 text-center text-sm text-ink-muted">Loading…</p>
          ) : (
            <RunList runs={runs} onRemove={removeRun} />
          )}
        </div>
      </Card>
    </div>
  )
}
