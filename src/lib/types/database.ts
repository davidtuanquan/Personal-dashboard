export type TaskCategory = 'general' | 'running' | 'cooking' | 'selling'
export type MealSlot = 'breakfast' | 'lunch' | 'dinner'
export type ListingPlatform = 'vinted' | 'ebay'
export type ListingStatus = 'draft' | 'listed' | 'sold' | 'shipped'

export type Task = {
  id: string
  text: string
  category: TaskCategory
  done: boolean
  due_date: string | null
  created_at: string
}

export type DailyFocus = {
  date: string
  one_thing_text: string
}

export type Run = {
  id: string
  date: string
  distance_km: number
  duration_seconds: number
  notes: string | null
}

export type Goal = {
  id: string
  type: string
  target_value: number
  target_date: string | null
}

export type Meal = {
  id: string
  date: string
  slot: MealSlot
  dish_name: string
  notes: string | null
}

export type GroceryItem = {
  id: string
  name: string
  checked: boolean
  added_from_meal_id: string | null
}

export type Listing = {
  id: string
  item_name: string
  platform: ListingPlatform
  price: number
  status: ListingStatus
  listed_date: string | null
  sold_date: string | null
}

export type Database = {
  public: {
    Tables: {
      tasks: {
        Row: Task
        Insert: Omit<Task, 'id' | 'created_at' | 'done' | 'due_date'> & {
          id?: string
          done?: boolean
          due_date?: string | null
        }
        Update: Partial<Task>
        Relationships: []
      }
      daily_focus: { Row: DailyFocus; Insert: DailyFocus; Update: Partial<DailyFocus>; Relationships: [] }
      runs: {
        Row: Run
        Insert: Omit<Run, 'id'> & { id?: string }
        Update: Partial<Run>
        Relationships: []
      }
      goals: {
        Row: Goal
        Insert: Omit<Goal, 'id'> & { id?: string }
        Update: Partial<Goal>
        Relationships: []
      }
      meals: {
        Row: Meal
        Insert: Omit<Meal, 'id'> & { id?: string }
        Update: Partial<Meal>
        Relationships: []
      }
      grocery_items: {
        Row: GroceryItem
        Insert: Omit<GroceryItem, 'id' | 'checked'> & { id?: string; checked?: boolean }
        Update: Partial<GroceryItem>
        Relationships: []
      }
      listings: {
        Row: Listing
        Insert: Omit<Listing, 'id' | 'status'> & { id?: string; status?: ListingStatus }
        Update: Partial<Listing>
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
  }
}
