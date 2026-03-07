import type { RouteObject } from 'found'
import { HomePage } from './HomePage'

export const useHomeRoute = (): RouteObject => ({
  path: '/',
  Component: HomePage,
})
