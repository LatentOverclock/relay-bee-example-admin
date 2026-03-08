import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { AlertContextProvider, AlertList, EndlessScrollContainer } from 'relay-bee'
import Sidebar from '../components/sidebar/Sidebar'
import { isDemoMode } from '../util/env'
import { isDemoAuthenticated } from '../util/demoAuth'

export default function NavigationLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!isDemoMode) {
      return
    }

    const atLogin = window.location.pathname.includes('/login')
    if (!atLogin && !isDemoAuthenticated()) {
      window.location.assign('/login')
    }
  }, [])

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
