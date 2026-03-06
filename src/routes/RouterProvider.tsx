import type { ReactNode } from 'react'
import { PeerRouterProvider } from 'relay-bee'
import { useRouter } from 'found'

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return <PeerRouterProvider router={router}>{children}</PeerRouterProvider>
}
