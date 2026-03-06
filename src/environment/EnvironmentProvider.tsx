import { EnvironmentContext } from 'relay-bee'
import type { ReactNode } from 'react'

export const EnvironmentProvider = ({ children }: { children: ReactNode }) => {
  const environment = {
    httpEndpoint: import.meta.env.VITE_HTTP_ENDPOINT,
    basePath: '/api',
    passwordPath: 'security.credentials.password',
    adminBasePath: import.meta.env.VITE_BASE_URL || '/',
  }

  return <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>
}
