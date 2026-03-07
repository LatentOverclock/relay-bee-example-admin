import { createRouteConfig, NotFound } from 'relay-bee'
import { RouterProvider } from './RouterProvider'
import LoginPage from '../app/login/LoginPage'
import NavigationLayout from '../app/NavigationLayout'
import { useHomeRoute } from '../app/useHomeRoute'
import { useTicketRoutes } from '../app/ticket/useTicketRoutes'

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
