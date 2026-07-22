import { AuthGate } from './auth/AuthGate'
import { AppShell } from './components/layout/AppShell'

function App() {
  return (
    <AuthGate>
      <AppShell />
    </AuthGate>
  )
}

export default App
