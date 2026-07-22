import { useState } from 'react'
import { useMeals } from './useMeals'
import { MealSlotCell } from './MealSlotCell'
import { startOfWeek, formatDateLabel } from '../../lib/date'
import type { MealSlot } from '../../lib/types/database'

const SLOTS: MealSlot[] = ['breakfast', 'lunch', 'dinner']

function weekDates(start: string): string[] {
  const dates: string[] = []
  const d = new Date(start + 'T00:00:00')
  for (let i = 0; i < 7; i++) {
    dates.push(d.toLocaleDateString('en-CA'))
    d.setDate(d.getDate() + 1)
  }
  return dates
}

export function WeekMealPlanner({
  onAddGroceryItem,
}: {
  onAddGroceryItem: (mealId: string, dishName: string) => void
}) {
  const [weekStart] = useState(startOfWeek())
  const dates = weekDates(weekStart)
  const { meals, loading, upsertMeal, removeMeal } = useMeals({ start: dates[0], end: dates[6] })

  if (loading) return <p className="py-6 text-center text-sm text-ink-muted">Loading…</p>

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-7">
      {dates.map((date) => (
        <div key={date} className="rounded-control border border-border-soft p-2">
          <p className="mb-2 text-xs font-medium text-ink-muted">{formatDateLabel(date)}</p>
          <div className="flex flex-col gap-2">
            {SLOTS.map((slot) => (
              <div key={slot}>
                <p className="text-[10px] uppercase tracking-wide text-ink-muted">{slot}</p>
                <MealSlotCell
                  date={date}
                  slot={slot}
                  meal={meals.find((m) => m.date === date && m.slot === slot)}
                  onSave={upsertMeal}
                  onRemove={removeMeal}
                  onAddGroceryItem={onAddGroceryItem}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
