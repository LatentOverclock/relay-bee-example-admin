import { FormEvent, useState } from 'react'
import { LoginForm, useRouter } from 'relay-bee'
import { isDemoMode, setDemoAuthenticated } from '../../util/env'

export default function LoginPage() {
  const { router } = useRouter()
  const demo = isDemoMode
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      return
    }

    setDemoAuthenticated(true)
    router.push('/demo')
  }

  return (
    <div className="page">
      <h1>Login</h1>

      {demo ? (
        <div className="panel">
          <p>Demo login is local-only and does not call a backend.</p>
          <form className="form-grid" onSubmit={handleDemoSubmit}>
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
            <button type="submit">Sign in (demo)</button>
          </form>
        </div>
      ) : (
        <>
          <p>Uses relay-bee LoginForm and redirects to / after success.</p>
          <LoginForm onSuccess={() => router.push('/')} />
        </>
      )}
    </div>
  )
}
