import { FormEvent, useState } from 'react'
import { LoginForm } from 'relay-bee'
import { isDemoMode } from '../../util/env'
import { setDemoAuthenticated } from '../../util/demoAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      return
    }

    setDemoAuthenticated()
    window.location.assign('/')
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <h1>Sign in</h1>
        {isDemoMode ? (
          <form className="form-grid" onSubmit={onDemoSubmit}>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@example.com"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </label>
            <button type="submit">Login (demo)</button>
          </form>
        ) : (
          <LoginForm onSuccess={() => window.location.assign('/')} />
        )}
      </div>
    </div>
  )
}
