import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { Goal } from '../../lib/types/database'

export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGoals = useCallback(async () => {
    const { data, error } = await supabase.from('goals').select('*').order('target_date', { ascending: true })
    if (!error && data) setGoals(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchGoals()
    const channel = supabase
      .channel('goals-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'goals' }, fetchGoals)
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchGoals])

  async function upsertGoal(input: { id?: string; type: string; target_value: number; target_date?: string | null }) {
    if (input.id) {
      await supabase
        .from('goals')
        .update({ type: input.type, target_value: input.target_value, target_date: input.target_date ?? null })
        .eq('id', input.id)
    } else {
      await supabase.from('goals').insert({
        type: input.type,
        target_value: input.target_value,
        target_date: input.target_date ?? null,
      })
    }
    fetchGoals()
  }

  return { goals, loading, upsertGoal, refetch: fetchGoals }
}
