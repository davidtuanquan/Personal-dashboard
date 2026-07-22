import { useState } from 'react'
import { TextInput } from '../../components/ui/TextInput'
import { Button } from '../../components/ui/Button'

export function AddGroceryItemForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    onAdd(name.trim())
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <TextInput
        placeholder="Add grocery item…"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
