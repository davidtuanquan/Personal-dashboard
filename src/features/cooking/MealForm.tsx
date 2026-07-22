import { useState } from 'react'
import { TextInput } from '../../components/ui/TextInput'

export function MealForm({
  initialDishName = '',
  onSave,
  onCancel,
}: {
  initialDishName?: string
  onSave: (dishName: string) => void
  onCancel: () => void
}) {
  const [dishName, setDishName] = useState(initialDishName)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!dishName.trim()) return
    onSave(dishName.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
      <TextInput
        autoFocus
        placeholder="Dish name"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
        onBlur={onCancel}
        className="w-full text-xs"
      />
    </form>
  )
}
