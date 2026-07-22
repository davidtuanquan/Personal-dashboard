import type { Task } from '../../lib/types/database'
import { TaskItem } from './TaskItem'
import { EmptyState } from '../../components/ui/EmptyState'

export function TaskList({
  tasks,
  onToggle,
  onRemove,
}: {
  tasks: Task[]
  onToggle: (id: string, done: boolean) => void
  onRemove: (id: string) => void
}) {
  if (tasks.length === 0) return <EmptyState message="No tasks here yet." />

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  )
}
