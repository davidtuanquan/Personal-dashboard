import { useState } from 'react'
import { useAuth } from './useAuth'
import { Card } from '../components/ui/Card'
import { TextInput } from '../components/ui/TextInput'
import { Button } from '../components/ui/Button'

export function LoginForm() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const { error } = await signIn(email, password)
    if (error) setError(error.message)
    setSubmitting(false)
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-cream px-4">
      <Card className="w-full max-w-sm">
        <h1 className="font-display text-2xl font-medium text-ink">Personal Dashboard</h1>
        <p className="mt-1 text-sm text-ink-muted">Sign in to continue</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <TextInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
