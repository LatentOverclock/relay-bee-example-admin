import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'relay-bee/dist/style.css'
import './index.css'
import './styles.css'
import App from './app/App'
import { EnvironmentProvider } from '../environment/EnvironmentProvider'
import { RelayEnvProvider } from '../environment/RelayEnvProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EnvironmentProvider>
      <RelayEnvProvider>
        <App />
      </RelayEnvProvider>
    </EnvironmentProvider>
  </StrictMode>,
)
