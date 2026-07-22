import { useListings } from '../selling/useListings'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'

export function ActiveListingsCard() {
  const { listings, loading } = useListings({ status: ['draft', 'listed'] })

  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Active listings</p>
      <div className="mt-2">
        {loading ? (
          <p className="text-sm text-ink-muted">Loading…</p>
        ) : listings.length === 0 ? (
          <EmptyState message="No active listings." />
        ) : (
          listings.map((listing) => (
            <p key={listing.id} className="border-b border-border-soft py-1.5 text-sm text-ink last:border-b-0">
              {listing.item_name} <span className="text-ink-muted">· £{Number(listing.price).toFixed(2)}</span>
            </p>
          ))
        )}
      </div>
    </Card>
  )
}
