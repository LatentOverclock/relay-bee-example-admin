import { lazy } from 'react'
import { createRouteConfig, NotFound } from 'relay-bee'
import { RouterProvider } from './RouterProvider'
import { useHomeRoute } from '../app/useHomeRoute'
import { useTicketRoutes } from '../app/ticket/useTicketRoutes'

const LoginPage = lazy(() => import('../app/login/LoginPage'))
const NavigationLayout = lazy(() => import('../app/NavigationLayout'))

export const useRouteConfig = () => {
  const base = import.meta.env.VITE_BASE_URL || '/'

  return createRouteConfig(
    [
      {
        path: base,
        children: [
          {
            Component: RouterProvider,
            children: [
              { path: 'login', Component: LoginPage },
              {
                Component: NavigationLayout,
                children: [
                  useHomeRoute(),
                  useTicketRoutes(),
                  { path: '*', Component: NotFound },
                ],
              },
            ],
          },
        ],
      },
    ],
    base,
  )
}
