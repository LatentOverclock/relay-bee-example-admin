import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { AlertContextProvider, AlertList, EndlessScrollContainer, useRouter } from 'relay-bee'
import Sidebar from '../components/sidebar/Sidebar'
import { isDemoMode } from '../util/env'
import { isDemoAuthenticated } from '../util/demoAuth'

export default function NavigationLayout({ children }: { children: ReactNode }) {
  const { router } = useRouter()

  useEffect(() => {
    if (!isDemoMode) {
      return
    }

    const atLogin = window.location.pathname.startsWith('/login')
    if (!atLogin && !isDemoAuthenticated()) {
      router.push('/login')
    }
  }, [router])

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
