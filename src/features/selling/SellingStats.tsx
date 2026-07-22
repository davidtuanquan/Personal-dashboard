import type { Listing } from '../../lib/types/database'
import { computeSellingStats } from './computeSellingStats'
import { Card } from '../../components/ui/Card'

export function SellingStats({ listings }: { listings: Listing[] }) {
  const stats = computeSellingStats(listings)

  return (
    <div className="grid grid-cols-3 gap-3">
      <Card className="text-center">
        <p className="font-display text-2xl text-ink">{stats.soldThisMonth}</p>
        <p className="text-xs text-ink-muted">Sold this month</p>
      </Card>
      <Card className="text-center">
        <p className="font-display text-2xl text-ink">£{stats.revenueThisMonth.toFixed(2)}</p>
        <p className="text-xs text-ink-muted">Revenue</p>
      </Card>
      <Card className="text-center">
        <p className="font-display text-2xl text-ink">
          {stats.avgSellDays !== null ? `${stats.avgSellDays.toFixed(1)}d` : '—'}
        </p>
        <p className="text-xs text-ink-muted">Avg. sell time</p>
      </Card>
    </div>
  )
}
