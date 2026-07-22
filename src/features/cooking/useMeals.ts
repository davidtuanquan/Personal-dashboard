import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { Meal, MealSlot } from '../../lib/types/database'

export function useMeals(dateRange: { start: string; end: string }) {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMeals = useCallback(async () => {
    const { data, error } = await supabase
      .from('meals')
      .select('*')
      .gte('date', dateRange.start)
      .lte('date', dateRange.end)
      .order('date', { ascending: true })
    if (!error && data) setMeals(data)
    setLoading(false)
  }, [dateRange.start, dateRange.end])

  useEffect(() => {
    fetchMeals()
    const channel = supabase
      .channel('meals-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'meals' }, fetchMeals)
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchMeals])

  async function upsertMeal(input: { id?: string; date: string; slot: MealSlot; dish_name: string; notes?: string | null }) {
    if (input.id) {
      await supabase
        .from('meals')
        .update({ dish_name: input.dish_name, notes: input.notes ?? null })
        .eq('id', input.id)
    } else {
      await supabase.from('meals').insert({
        date: input.date,
        slot: input.slot,
        dish_name: input.dish_name,
        notes: input.notes ?? null,
      })
    }
    fetchMeals()
  }

  async function removeMeal(id: string) {
    await supabase.from('meals').delete().eq('id', id)
    fetchMeals()
  }

  return { meals, loading, upsertMeal, removeMeal, refetch: fetchMeals }
}
