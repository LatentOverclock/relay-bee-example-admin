import type { ReactNode } from 'react'
import { AlertContextProvider, AlertList, EndlessScrollContainer } from 'relay-bee'
import Sidebar from '../components/sidebar/Sidebar'
import { isDemoMode } from '../util/env'
import { isDemoAuthenticated } from '../util/demoAuth'

export default function NavigationLayout({ children }: { children: ReactNode }) {
  const atLogin = window.location.pathname.includes('/login')
  const needsAuthRedirect = isDemoMode && !atLogin && !isDemoAuthenticated()

  if (needsAuthRedirect) {
    window.location.replace('/login')
    return null
  }

  return (
    <AlertContextProvider>
      <AlertList />
      <div className="shell">
        <div className="shell-sidebar">
          <Sidebar />
        </div>
        <EndlessScrollContainer className="shell-content">
          <div className="content-inner">{children}</div>
        </EndlessScrollContainer>
      </div>
    </AlertContextProvider>
  )
}
