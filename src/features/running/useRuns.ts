import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { Run } from '../../lib/types/database'

export function useRuns() {
  const [runs, setRuns] = useState<Run[]>([])
  const [loading, setLoading] = useState(true)

  const fetchRuns = useCallback(async () => {
    const { data, error } = await supabase.from('runs').select('*').order('date', { ascending: false })
    if (!error && data) setRuns(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchRuns()
    const channel = supabase
      .channel('runs-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'runs' }, fetchRuns)
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchRuns])

  async function addRun(input: { date: string; distance_km: number; duration_seconds: number; notes?: string | null }) {
    await supabase.from('runs').insert({
      date: input.date,
      distance_km: input.distance_km,
      duration_seconds: input.duration_seconds,
      notes: input.notes ?? null,
    })
    fetchRuns()
  }

  async function removeRun(id: string) {
    await supabase.from('runs').delete().eq('id', id)
    fetchRuns()
  }

  return { runs, loading, addRun, removeRun, refetch: fetchRuns }
}
