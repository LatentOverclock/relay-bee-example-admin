import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { PeerRouterProvider, Spinner } from 'relay-bee'
import { useRouter } from 'found'

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <PeerRouterProvider router={router}>
      <Suspense fallback={<div className="route-loading"><Spinner /></div>}>{children}</Suspense>
    </PeerRouterProvider>
  )
}
