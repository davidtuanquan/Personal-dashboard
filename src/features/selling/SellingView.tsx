import { useState } from 'react'
import type { ListingStatus } from '../../lib/types/database'
import { useListings } from './useListings'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card } from '../../components/ui/Card'
import { SellingStats } from './SellingStats'
import { ListingForm } from './ListingForm'
import { ListingsList } from './ListingsList'

const FILTERS: { id: ListingStatus | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'draft', label: 'Draft' },
  { id: 'listed', label: 'Listed' },
  { id: 'sold', label: 'Sold' },
  { id: 'shipped', label: 'Shipped' },
]

export function SellingView() {
  const [filter, setFilter] = useState<ListingStatus | 'all'>('all')
  const { listings, loading, addListing, updateStatus, removeListing } = useListings(
    filter === 'all' ? {} : { status: [filter] },
  )

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Selling" subtitle="Vinted and eBay listings, all in one place." />
      <SellingStats listings={listings} />
      <Card>
        <ListingForm onAdd={addListing} />
        <div className="mt-4 flex flex-nowrap gap-1 overflow-x-auto border-b border-border-soft pb-4">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-control px-2 py-1 text-xs font-medium ${
                filter === f.id ? 'bg-selling-bg text-selling' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {loading ? (
          <p className="py-6 text-center text-sm text-ink-muted">Loading…</p>
        ) : (
          <ListingsList listings={listings} onStatusChange={updateStatus} onRemove={removeListing} />
        )}
      </Card>
    </div>
  )
}
