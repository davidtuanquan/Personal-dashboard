import { useState } from 'react'
import type { TaskCategory } from '../../lib/types/database'
import { useTasks } from './useTasks'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card } from '../../components/ui/Card'
import { AddTaskForm } from './AddTaskForm'
import { TaskList } from './TaskList'

const FILTERS: { id: TaskCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'running', label: 'Running' },
  { id: 'cooking', label: 'Cooking' },
  { id: 'selling', label: 'Selling' },
]

export function TasksView() {
  const [filter, setFilter] = useState<TaskCategory | 'all'>('all')
  const { tasks, loading, addTask, toggleDone, removeTask } = useTasks(
    filter === 'all' ? {} : { category: filter },
  )

  return (
    <div>
      <SectionHeading title="Tasks" subtitle="Everything on your plate, in one list." />
      <Card>
        <AddTaskForm onAdd={addTask} />
        <div className="mt-4 flex flex-wrap gap-2 border-b border-border-soft pb-4">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-control px-3 py-1 text-sm font-medium ${
                filter === f.id ? 'bg-tasks-bg text-tasks' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {loading ? (
          <p className="py-6 text-center text-sm text-ink-muted">Loading…</p>
        ) : (
          <TaskList tasks={tasks} onToggle={toggleDone} onRemove={removeTask} />
        )}
      </Card>
    </div>
  )
}
