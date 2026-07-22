import type { GroceryItem as GroceryItemType } from '../../lib/types/database'
import { Checkbox } from '../../components/ui/Checkbox'

export function GroceryItem({
  item,
  onToggle,
  onRemove,
}: {
  item: GroceryItemType
  onToggle: (id: string, checked: boolean) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border-soft py-2 last:border-b-0">
      <Checkbox checked={item.checked} onChange={(checked) => onToggle(item.id, checked)} label={item.name} />
      <button onClick={() => onRemove(item.id)} className="text-ink-muted hover:text-ink" aria-label="Delete item">
        ×
      </button>
    </div>
  )
}
