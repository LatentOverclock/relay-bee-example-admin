import { EnvironmentContext } from 'relay-bee'
import type { ReactNode } from 'react'

export const EnvironmentProvider = ({ children }: { children: ReactNode }) => {
  const rawBaseUrl = String(import.meta.env.VITE_BASE_URL ?? '/').trim()
  const stripped = rawBaseUrl.replace(/^\/+|\/+$/g, '')
  const normalizedBaseUrl = stripped ? `/${stripped}` : ''

  const environment = {
    httpEndpoint: '',
    basePath: '/api',
    passwordPath: 'security.credentials.password',
    adminBasePath: normalizedBaseUrl,
  }

  return <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>
}
