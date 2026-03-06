import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'relay-bee/dist/style.css'
import './main/styles.css'
import { EnvironmentProvider } from './environment/EnvironmentProvider'
import { RelayEnvProvider } from './environment/RelayEnvProvider'
import App from './main/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EnvironmentProvider>
      <RelayEnvProvider>
        <App />
      </RelayEnvProvider>
    </EnvironmentProvider>
  </StrictMode>,
)
