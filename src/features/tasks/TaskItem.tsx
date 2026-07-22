import type { Task } from '../../lib/types/database'
import { Checkbox } from '../../components/ui/Checkbox'
import { CategoryTag } from '../../components/ui/CategoryTag'
import { formatDateLabel } from '../../lib/date'

export function TaskItem({
  task,
  onToggle,
  onRemove,
}: {
  task: Task
  onToggle: (id: string, done: boolean) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border-soft py-3 last:border-b-0">
      <Checkbox checked={task.done} onChange={(done) => onToggle(task.id, done)} label={task.text} />
      <div className="flex shrink-0 items-center gap-2">
        {task.due_date && <span className="text-xs text-ink-muted">{formatDateLabel(task.due_date)}</span>}
        <CategoryTag category={task.category} />
        <button
          onClick={() => onRemove(task.id)}
          className="text-ink-muted hover:text-ink"
          aria-label="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  )
}
