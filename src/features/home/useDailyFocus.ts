import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { todayISO } from '../../lib/date'

export function useDailyFocus() {
  const date = todayISO()
  const [oneThingText, setOneThingText] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchFocus = useCallback(async () => {
    const { data } = await supabase.from('daily_focus').select('*').eq('date', date).maybeSingle()
    setOneThingText(data?.one_thing_text ?? '')
    setLoading(false)
  }, [date])

  useEffect(() => {
    fetchFocus()
  }, [fetchFocus])

  async function save(text: string) {
    setOneThingText(text)
    await supabase.from('daily_focus').upsert({ date, one_thing_text: text })
  }

  return { oneThingText, loading, save }
}
