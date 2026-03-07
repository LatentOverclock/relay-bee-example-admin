import { NotFound } from 'relay-bee'
import { Resolver } from 'found-relay'
import { RouterWrapper } from './RouterWrapper'
import { useRouteConfig } from '../../routes/routes'

export default function App() {
  return <RouterWrapper Resolver={Resolver} NotFound={NotFound} useRouteConfig={useRouteConfig} />
}
