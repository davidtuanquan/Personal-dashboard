import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { GroceryItem } from '../../lib/types/database'

export function useGroceryItems() {
  const [items, setItems] = useState<GroceryItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchItems = useCallback(async () => {
    const { data, error } = await supabase.from('grocery_items').select('*').order('checked', { ascending: true })
    if (!error && data) setItems(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchItems()
    const channel = supabase
      .channel('grocery-items-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'grocery_items' }, fetchItems)
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchItems])

  async function addItem(name: string, addedFromMealId?: string | null) {
    await supabase.from('grocery_items').insert({ name, added_from_meal_id: addedFromMealId ?? null })
    fetchItems()
  }

  async function toggleChecked(id: string, checked: boolean) {
    await supabase.from('grocery_items').update({ checked }).eq('id', id)
    fetchItems()
  }

  async function removeItem(id: string) {
    await supabase.from('grocery_items').delete().eq('id', id)
    fetchItems()
  }

  return { items, loading, addItem, toggleChecked, removeItem, refetch: fetchItems }
}
