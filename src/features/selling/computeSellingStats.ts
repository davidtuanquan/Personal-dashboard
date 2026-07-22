import type { Listing } from '../../lib/types/database'

export interface SellingStatsResult {
  soldThisMonth: number
  revenueThisMonth: number
  avgSellDays: number | null
}

export function computeSellingStats(listings: Listing[]): SellingStatsResult {
  const now = new Date()
  const soldThisMonth = listings.filter((l) => {
    if (l.status !== 'sold' || !l.sold_date) return false
    const soldAt = new Date(l.sold_date)
    return soldAt.getFullYear() === now.getFullYear() && soldAt.getMonth() === now.getMonth()
  })

  const revenueThisMonth = soldThisMonth.reduce((sum, l) => sum + Number(l.price), 0)

  const sellDurations = soldThisMonth
    .filter((l) => l.listed_date && l.sold_date)
    .map((l) => {
      const listed = new Date(l.listed_date!).getTime()
      const sold = new Date(l.sold_date!).getTime()
      return (sold - listed) / (1000 * 60 * 60 * 24)
    })

  const avgSellDays =
    sellDurations.length > 0 ? sellDurations.reduce((a, b) => a + b, 0) / sellDurations.length : null

  return { soldThisMonth: soldThisMonth.length, revenueThisMonth, avgSellDays }
}
