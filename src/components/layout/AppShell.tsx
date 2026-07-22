import { useState } from 'react'
import type { Section } from './sections'
import { Sidebar } from './Sidebar'
import { BottomTabBar } from './BottomTabBar'
import { HomeView } from '../../features/home/HomeView'
import { TasksView } from '../../features/tasks/TasksView'
import { RunningView } from '../../features/running/RunningView'
import { CookingView } from '../../features/cooking/CookingView'
import { SellingView } from '../../features/selling/SellingView'

const VIEWS: Record<Section, () => React.ReactElement> = {
  home: HomeView,
  tasks: TasksView,
  running: RunningView,
  cooking: CookingView,
  selling: SellingView,
}

export function AppShell() {
  const [active, setActive] = useState<Section>('home')
  const ActiveView = VIEWS[active]

  return (
    <div className="flex min-h-svh bg-cream">
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-6 md:px-10 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-3xl">
          <ActiveView />
        </div>
      </main>
      <BottomTabBar active={active} onSelect={setActive} />
    </div>
  )
}
