import type { Listing, ListingStatus } from '../../lib/types/database'
import { ListingItem } from './ListingItem'
import { EmptyState } from '../../components/ui/EmptyState'

export function ListingsList({
  listings,
  onStatusChange,
  onRemove,
}: {
  listings: Listing[]
  onStatusChange: (id: string, status: ListingStatus) => void
  onRemove: (id: string) => void
}) {
  if (listings.length === 0) return <EmptyState message="No listings here yet." />

  return (
    <div>
      {listings.map((listing) => (
        <ListingItem key={listing.id} listing={listing} onStatusChange={onStatusChange} onRemove={onRemove} />
      ))}
    </div>
  )
}
