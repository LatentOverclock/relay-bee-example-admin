import { createRouteConfig, NotFound } from 'relay-bee'
import { RouterProvider } from './RouterProvider'
import LoginPage from '../app/login/LoginPage'
import HomePage from '../app/home/HomePage'
import DemoAdminPage from '../app/demo/DemoAdminPage'

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
              { path: 'demo', Component: DemoAdminPage },
              { path: '', Component: HomePage },
              { path: '*', Component: NotFound },
            ],
          },
        ],
      },
    ],
    base,
  )
}
