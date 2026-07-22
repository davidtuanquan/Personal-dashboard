import type { ReactNode } from 'react'
import { useAuth } from './useAuth'
import { LoginForm } from './LoginForm'

export function AuthGate({ children }: { children: ReactNode }) {
  const { session, loading } = useAuth()

  if (loading) {
    return <div className="flex min-h-svh items-center justify-center bg-cream text-ink-muted">Loading…</div>
  }

  if (!session) {
    return <LoginForm />
  }

  return <>{children}</>
}
