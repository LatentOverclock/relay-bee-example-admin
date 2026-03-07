import { isDemoAuthenticated, isDemoMode, setDemoAuthenticated } from '../../util/env'

export default function HomePage() {
  const demo = isDemoMode

  return (
    <div className="page">
      <h1>relay-bee example admin</h1>
      <p>Public example project based on private admin implementation patterns.</p>

      {demo ? (
        <div className="panel">
          <h2>Demo mode is enabled</h2>
          <p>
            This project now includes a local, backend-free workflow so it can be explored right away.
          </p>
          <p>
            <a href="/demo">Open demo dashboard</a>
            {' · '}
            {!isDemoAuthenticated() ? (
              <a href="/login">Sign in (demo)</a>
            ) : (
              <button
                className="link-button"
                onClick={() => {
                  setDemoAuthenticated(false)
                  window.location.href = '/login'
                }}
              >
                Sign out (demo)
              </button>
            )}
          </p>
        </div>
      ) : null}

      <ul>
        <li>EnvironmentProvider + PeerRelayEnvironmentProvider wiring</li>
        <li>Found router + PeerRouterProvider integration</li>
        <li>relay-bee LoginForm flow (non-demo mode)</li>
      </ul>
    </div>
  )
}
