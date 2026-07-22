import { useState } from 'react'
import type { ListingPlatform, ListingStatus } from '../../lib/types/database'
import { TextInput } from '../../components/ui/TextInput'
import { Select } from '../../components/ui/Select'
import { Button } from '../../components/ui/Button'
import { todayISO } from '../../lib/date'

export function ListingForm({
  onAdd,
}: {
  onAdd: (input: {
    item_name: string
    platform: ListingPlatform
    price: number
    status: ListingStatus
    listed_date?: string | null
  }) => void
}) {
  const [itemName, setItemName] = useState('')
  const [platform, setPlatform] = useState<ListingPlatform>('vinted')
  const [price, setPrice] = useState('')
  const [status, setStatus] = useState<ListingStatus>('draft')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const priceValue = parseFloat(price)
    if (!itemName.trim() || !priceValue) return
    onAdd({
      item_name: itemName.trim(),
      platform,
      price: priceValue,
      status,
      listed_date: status === 'listed' || status === 'sold' || status === 'shipped' ? todayISO() : null,
    })
    setItemName('')
    setPrice('')
    setStatus('draft')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
      <TextInput
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="min-w-40 flex-1"
      />
      <Select value={platform} onChange={(e) => setPlatform(e.target.value as ListingPlatform)}>
        <option value="vinted">Vinted</option>
        <option value="ebay">eBay</option>
      </Select>
      <TextInput
        placeholder="Price"
        type="number"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-28"
      />
      <Select value={status} onChange={(e) => setStatus(e.target.value as ListingStatus)}>
        <option value="draft">Draft</option>
        <option value="listed">Listed</option>
        <option value="sold">Sold</option>
        <option value="shipped">Shipped</option>
      </Select>
      <Button type="submit">Add</Button>
    </form>
  )
}
