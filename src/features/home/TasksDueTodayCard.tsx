import { useTasks } from '../tasks/useTasks'
import { Card } from '../../components/ui/Card'
import { Checkbox } from '../../components/ui/Checkbox'
import { EmptyState } from '../../components/ui/EmptyState'
import { todayISO } from '../../lib/date'

export function TasksDueTodayCard() {
  const { tasks, loading, toggleDone } = useTasks({ done: false, dueOnOrBefore: todayISO() })

  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Tasks due today</p>
      <div className="mt-2">
        {loading ? (
          <p className="text-sm text-ink-muted">Loading…</p>
        ) : tasks.length === 0 ? (
          <EmptyState message="Nothing due today." />
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="border-b border-border-soft py-2 last:border-b-0">
              <Checkbox checked={task.done} onChange={(done) => toggleDone(task.id, done)} label={task.text} />
            </div>
          ))
        )}
      </div>
    </Card>
  )
}
