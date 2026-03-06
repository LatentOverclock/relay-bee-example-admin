import { createFarceRouter } from 'found'
import { Resolver } from 'found-relay'
import { BrowserProtocol, queryMiddleware } from 'farce'
import { useRelayEnvironment } from 'react-relay'
import { useRouteConfig } from '../routes/routes'
import { NotFound } from 'relay-bee'

export const RouterWrapper = () => {
  const relayEnvironment = useRelayEnvironment()
  const routeConfig = useRouteConfig()

  const Router = createFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig,
    renderError: () => <NotFound />,
  })

  // found-relay pattern
  // @ts-expect-error
  return <Router resolver={new Resolver(relayEnvironment)} />
}
