export type Category = 'general' | 'running' | 'cooking' | 'selling'

const CATEGORY_STYLES: Record<Category, { label: string; text: string; bg: string }> = {
  general: { label: 'General', text: 'text-tasks', bg: 'bg-tasks-bg' },
  running: { label: 'Running', text: 'text-running', bg: 'bg-running-bg' },
  cooking: { label: 'Cooking', text: 'text-cooking', bg: 'bg-cooking-bg' },
  selling: { label: 'Selling', text: 'text-selling', bg: 'bg-selling-bg' },
}

export function CategoryTag({ category }: { category: Category }) {
  const style = CATEGORY_STYLES[category]
  return (
    <span
      className={`inline-flex items-center rounded-control px-2 py-0.5 text-xs font-medium ${style.text} ${style.bg}`}
    >
      {style.label}
    </span>
  )
}
