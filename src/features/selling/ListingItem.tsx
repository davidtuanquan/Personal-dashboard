import type { Listing, ListingStatus } from '../../lib/types/database'
import { Select } from '../../components/ui/Select'

const PLATFORM_LABEL: Record<Listing['platform'], string> = { vinted: 'Vinted', ebay: 'eBay' }

export function ListingItem({
  listing,
  onStatusChange,
  onRemove,
}: {
  listing: Listing
  onStatusChange: (id: string, status: ListingStatus) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border-soft py-3 last:border-b-0">
      <div>
        <p className="text-sm font-medium text-ink">{listing.item_name}</p>
        <p className="text-xs text-ink-muted">
          {PLATFORM_LABEL[listing.platform]} · £{Number(listing.price).toFixed(2)}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Select
          value={listing.status}
          onChange={(e) => onStatusChange(listing.id, e.target.value as ListingStatus)}
        >
          <option value="draft">Draft</option>
          <option value="listed">Listed</option>
          <option value="sold">Sold</option>
          <option value="shipped">Shipped</option>
        </Select>
        <button onClick={() => onRemove(listing.id)} className="text-ink-muted hover:text-ink" aria-label="Delete listing">
          ×
        </button>
      </div>
    </div>
  )
}
