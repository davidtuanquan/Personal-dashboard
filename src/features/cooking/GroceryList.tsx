import type { GroceryItem as GroceryItemType } from '../../lib/types/database'
import { GroceryItem } from './GroceryItem'
import { EmptyState } from '../../components/ui/EmptyState'

export function GroceryList({
  items,
  onToggle,
  onRemove,
}: {
  items: GroceryItemType[]
  onToggle: (id: string, checked: boolean) => void
  onRemove: (id: string) => void
}) {
  if (items.length === 0) return <EmptyState message="Grocery list is empty." />

  return (
    <div>
      {items.map((item) => (
        <GroceryItem key={item.id} item={item} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  )
}
