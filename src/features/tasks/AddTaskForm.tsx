import { useState } from 'react'
import type { TaskCategory } from '../../lib/types/database'
import { TextInput } from '../../components/ui/TextInput'
import { Select } from '../../components/ui/Select'
import { Button } from '../../components/ui/Button'

export function AddTaskForm({
  onAdd,
}: {
  onAdd: (input: { text: string; category: TaskCategory; due_date?: string | null }) => void
}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState<TaskCategory>('general')
  const [dueDate, setDueDate] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    onAdd({ text: text.trim(), category, due_date: dueDate || null })
    setText('')
    setDueDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
      <TextInput
        placeholder="Add a task…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-w-40 flex-1"
      />
      <Select value={category} onChange={(e) => setCategory(e.target.value as TaskCategory)}>
        <option value="general">General</option>
        <option value="running">Running</option>
        <option value="cooking">Cooking</option>
        <option value="selling">Selling</option>
      </Select>
      <TextInput type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <Button type="submit">Add</Button>
    </form>
  )
}
