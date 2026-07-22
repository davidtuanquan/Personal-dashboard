import { HomeIcon, TasksIcon, RunningIcon, CookingIcon, SellingIcon } from './icons'

export type Section = 'home' | 'tasks' | 'running' | 'cooking' | 'selling'

export const SECTIONS: { id: Section; label: string; icon: typeof HomeIcon }[] = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'tasks', label: 'Tasks', icon: TasksIcon },
  { id: 'running', label: 'Running', icon: RunningIcon },
  { id: 'cooking', label: 'Cooking', icon: CookingIcon },
  { id: 'selling', label: 'Selling', icon: SellingIcon },
]
