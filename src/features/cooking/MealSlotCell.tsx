import { useState } from 'react'
import type { Meal, MealSlot } from '../../lib/types/database'
import { MealForm } from './MealForm'

export function MealSlotCell({
  date,
  slot,
  meal,
  onSave,
  onRemove,
  onAddGroceryItem,
}: {
  date: string
  slot: MealSlot
  meal: Meal | undefined
  onSave: (input: { id?: string; date: string; slot: MealSlot; dish_name: string }) => void
  onRemove: (id: string) => void
  onAddGroceryItem: (mealId: string, dishName: string) => void
}) {
  const [editing, setEditing] = useState(false)

  if (editing) {
    return (
      <MealForm
        initialDishName={meal?.dish_name}
        onSave={(dishName) => {
          onSave({ id: meal?.id, date, slot, dish_name: dishName })
          setEditing(false)
        }}
        onCancel={() => setEditing(false)}
      />
    )
  }

  if (!meal) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="w-full rounded-control py-1 text-left text-xs text-ink-muted hover:text-ink"
      >
        + Add
      </button>
    )
  }

  return (
    <div className="group flex items-start justify-between gap-1">
      <button onClick={() => setEditing(true)} className="flex-1 text-left text-xs text-ink">
        {meal.dish_name}
      </button>
      <div className="hidden shrink-0 gap-1 group-hover:flex">
        <button
          onClick={() => onAddGroceryItem(meal.id, meal.dish_name)}
          className="text-xs text-ink-muted hover:text-ink"
          title="Add grocery item for this meal"
        >
          +🛒
        </button>
        <button onClick={() => onRemove(meal.id)} className="text-xs text-ink-muted hover:text-ink">
          ×
        </button>
      </div>
    </div>
  )
}
