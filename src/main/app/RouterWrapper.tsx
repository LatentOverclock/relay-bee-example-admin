import { createFarceRouter } from 'found'
import type { Resolver } from 'found-relay'
import type { NotFound } from 'relay-bee'
import { BrowserProtocol, queryMiddleware } from 'farce'
import { useRelayEnvironment } from 'react-relay'
import type { useRouteConfig } from '../../routes/routes'

export const RouterWrapper = (props: {
  Resolver: typeof Resolver
  NotFound: typeof NotFound
  useRouteConfig: typeof useRouteConfig
}) => {
  const relayEnvironment = useRelayEnvironment()
  const routeConfig = props.useRouteConfig()

  const Router = createFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig,
    renderError: () => <props.NotFound />,
  })

  // found-relay pattern
  // @ts-expect-error found-relay Resolver typing mismatch in JSX usage
  return <Router resolver={new props.Resolver(relayEnvironment)} />
}
