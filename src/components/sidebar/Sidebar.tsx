import { Link } from 'relay-bee'
import { navigationElements } from './navigationElements'
import { clearDemoAuthenticated } from '../../util/demoAuth'

export default function Sidebar() {
  const isActive = (to: string) => {
    if (to === '/') {
      return window.location.pathname === '/'
    }
    return window.location.pathname.startsWith(to)
  }

  return (
    <aside className="sidebar">
      <Link className="sidebar-brand" to="/">
        relay-bee admin
      </Link>

      <nav>
        <ul className="sidebar-list">
          {navigationElements.map((item) => (
            <li key={item.name}>
              <Link className={`sidebar-link ${isActive(item.to) ? 'active' : ''}`} to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="sidebar-logout"
        onClick={() => {
          clearDemoAuthenticated()
          window.location.href = '/login'
        }}
      >
        Logout (demo)
      </button>
    </aside>
  )
}
