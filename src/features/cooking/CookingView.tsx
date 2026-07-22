import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card } from '../../components/ui/Card'
import { WeekMealPlanner } from './WeekMealPlanner'
import { GroceryList } from './GroceryList'
import { AddGroceryItemForm } from './AddGroceryItemForm'
import { useGroceryItems } from './useGroceryItems'

export function CookingView() {
  const { items, loading, addItem, toggleChecked, removeItem } = useGroceryItems()

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Cooking" subtitle="This week's meals and your grocery list." />
      <Card>
        <p className="mb-3 text-sm font-medium text-ink-muted">This week</p>
        <WeekMealPlanner onAddGroceryItem={(mealId, dishName) => addItem(dishName, mealId)} />
      </Card>
      <Card>
        <p className="mb-3 text-sm font-medium text-ink-muted">Grocery list</p>
        <AddGroceryItemForm onAdd={addItem} />
        <div className="mt-3">
          {loading ? (
            <p className="py-6 text-center text-sm text-ink-muted">Loading…</p>
          ) : (
            <GroceryList items={items} onToggle={toggleChecked} onRemove={removeItem} />
          )}
        </div>
      </Card>
    </div>
  )
}
