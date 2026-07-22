import { useMeals } from '../cooking/useMeals'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'
import { startOfWeek, endOfWeek, formatDateLabel } from '../../lib/date'

export function WeekMealsCard() {
  const { meals, loading } = useMeals({ start: startOfWeek(), end: endOfWeek() })

  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">This week's meals</p>
      <div className="mt-2">
        {loading ? (
          <p className="text-sm text-ink-muted">Loading…</p>
        ) : meals.length === 0 ? (
          <EmptyState message="Nothing planned yet." />
        ) : (
          meals.slice(0, 5).map((meal) => (
            <p key={meal.id} className="border-b border-border-soft py-1.5 text-sm text-ink last:border-b-0">
              <span className="text-ink-muted">{formatDateLabel(meal.date)} · {meal.slot}</span> — {meal.dish_name}
            </p>
          ))
        )}
      </div>
    </Card>
  )
}
