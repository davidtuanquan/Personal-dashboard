import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { Listing, ListingStatus } from '../../lib/types/database'

export function useListings(filters: { status?: ListingStatus[] } = {}) {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const statusKey = filters.status?.join(',')

  const fetchListings = useCallback(async () => {
    let query = supabase.from('listings').select('*').order('listed_date', { ascending: false })
    if (filters.status?.length) query = query.in('status', filters.status)
    const { data, error } = await query
    if (!error && data) setListings(data)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusKey])

  useEffect(() => {
    fetchListings()
    const channel = supabase
      .channel('listings-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'listings' }, fetchListings)
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchListings])

  async function addListing(input: {
    item_name: string
    platform: 'vinted' | 'ebay'
    price: number
    status: ListingStatus
    listed_date?: string | null
  }) {
    await supabase.from('listings').insert({
      item_name: input.item_name,
      platform: input.platform,
      price: input.price,
      status: input.status,
      listed_date: input.listed_date ?? null,
      sold_date: null,
    })
    fetchListings()
  }

  async function updateStatus(id: string, status: ListingStatus) {
    const patch: { status: ListingStatus; sold_date?: string } = { status }
    if (status === 'sold') patch.sold_date = new Date().toLocaleDateString('en-CA')
    await supabase.from('listings').update(patch).eq('id', id)
    fetchListings()
  }

  async function removeListing(id: string) {
    await supabase.from('listings').delete().eq('id', id)
    fetchListings()
  }

  return { listings, loading, addListing, updateStatus, removeListing, refetch: fetchListings }
}
