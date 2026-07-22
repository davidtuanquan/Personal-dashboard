import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { Task, TaskCategory } from '../../lib/types/database'

export interface TaskFilters {
  category?: TaskCategory
  done?: boolean
  dueOnOrBefore?: string
}

export function useTasks(filters: TaskFilters = {}) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTasks = useCallback(async () => {
    let query = supabase.from('tasks').select('*').order('created_at', { ascending: false })
    if (filters.category) query = query.eq('category', filters.category)
    if (filters.done !== undefined) query = query.eq('done', filters.done)
    if (filters.dueOnOrBefore) query = query.lte('due_date', filters.dueOnOrBefore)
    const { data, error } = await query
    if (!error && data) setTasks(data)
    setLoading(false)
  }, [filters.category, filters.done, filters.dueOnOrBefore])

  useEffect(() => {
    fetchTasks()
    const channel = supabase
      .channel('tasks-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, fetchTasks)
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchTasks])

  async function addTask(input: { text: string; category: TaskCategory; due_date?: string | null }) {
    await supabase.from('tasks').insert({
      text: input.text,
      category: input.category,
      due_date: input.due_date ?? null,
    })
    fetchTasks()
  }

  async function toggleDone(id: string, done: boolean) {
    await supabase.from('tasks').update({ done }).eq('id', id)
    fetchTasks()
  }

  async function removeTask(id: string) {
    await supabase.from('tasks').delete().eq('id', id)
    fetchTasks()
  }

  return { tasks, loading, addTask, toggleDone, removeTask, refetch: fetchTasks }
}
