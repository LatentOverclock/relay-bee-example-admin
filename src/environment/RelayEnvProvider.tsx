import { PeerRelayEnvironmentProvider, usePeerRelayEnv } from 'relay-bee'
import type { ReactNode } from 'react'
import { RelayEnvironmentProvider as LibraryProvider } from 'react-relay'

export const RelayEnvProvider = ({ children }: { children: ReactNode }) => (
  <PeerRelayEnvironmentProvider>
    <RelayProvider>{children}</RelayProvider>
  </PeerRelayEnvironmentProvider>
)

const RelayProvider = ({ children }: { children: ReactNode }) => {
  const relayEnv = usePeerRelayEnv()
  return <LibraryProvider environment={relayEnv}>{children}</LibraryProvider>
}
