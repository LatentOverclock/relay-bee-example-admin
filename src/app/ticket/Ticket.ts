import type { EntityDescription } from 'relay-bee'

export type DemoTicketStatus = 'new' | 'in_progress' | 'done'

export type DemoTicket = {
  id: string
  customer: string
  topic: string
  status: DemoTicketStatus
  createdAt: string
}

export const Ticket: EntityDescription = {
  title: {
    singular: 'Ticket',
    plural: 'Tickets',
    demonstrativPronoun: 'this',
  },
  handle: 'ticket',
}
