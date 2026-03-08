import type { RouteObject } from 'found'
import TicketListPage from './TicketListPage'
import TicketPage from './TicketPage'
import { Ticket } from './Ticket'

export const useTicketRoutes = (): RouteObject => ({
  path: Ticket.handle,
  children: [
    {
      path: '',
      Component: TicketListPage,
    },
    {
      path: 'new',
      Component: TicketPage,
    },
    {
      path: ':id',
      Component: TicketPage,
    },
  ],
})
