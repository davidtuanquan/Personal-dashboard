import { DailyFocusCard } from './DailyFocusCard'
import { TasksDueTodayCard } from './TasksDueTodayCard'
import { NextRunCard } from './NextRunCard'
import { WeekMealsCard } from './WeekMealsCard'
import { ActiveListingsCard } from './ActiveListingsCard'

export function HomeView() {
  return (
    <div className="flex flex-col gap-4">
      <DailyFocusCard />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TasksDueTodayCard />
        <NextRunCard />
        <WeekMealsCard />
        <ActiveListingsCard />
      </div>
    </div>
  )
}
