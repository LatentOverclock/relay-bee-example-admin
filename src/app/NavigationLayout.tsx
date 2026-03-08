import type { ReactNode } from 'react'
import { useEffect, useMemo } from 'react'
import { AlertContextProvider, AlertList, EndlessScrollContainer } from 'relay-bee'
import Sidebar from '../components/sidebar/Sidebar'
import { isDemoMode } from '../util/env'
import { isDemoAuthenticated } from '../util/demoAuth'

export default function NavigationLayout({ children }: { children: ReactNode }) {
  const needsAuthRedirect = useMemo(() => {
    const atLogin = window.location.pathname.includes('/login')
    return isDemoMode && !atLogin && !isDemoAuthenticated()
  }, [])

  useEffect(() => {
    if (needsAuthRedirect) {
      window.location.replace('/login')
    }
  }, [needsAuthRedirect])

  if (needsAuthRedirect) {
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
