import type { DemoTicket } from './Ticket'

const storageKey = 'relay-bee-example:tickets'

const defaults: DemoTicket[] = [
  {
    id: 't-1',
    customer: 'Acme GmbH',
    topic: 'Missing invoice PDF',
    status: 'new',
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-2',
    customer: 'Orchid AG',
    topic: 'Update billing address',
    status: 'in_progress',
    createdAt: new Date().toISOString(),
  },
]

export const getTickets = (): DemoTicket[] => {
  const raw = localStorage.getItem(storageKey)
  if (!raw) {
    return defaults
  }

  try {
    const parsed = JSON.parse(raw) as DemoTicket[]
    if (Array.isArray(parsed)) {
      return parsed
    }
  } catch {
    // ignore invalid data and reset to defaults
  }

  return defaults
}

export const saveTickets = (tickets: DemoTicket[]) => {
  localStorage.setItem(storageKey, JSON.stringify(tickets))
}

export const getTicket = (id: string) => getTickets().find((ticket) => ticket.id === id)

export const createTicket = (input: Pick<DemoTicket, 'customer' | 'topic'>): DemoTicket => {
  const tickets = getTickets()
  const ticket: DemoTicket = {
    id: `t-${Date.now()}`,
    customer: input.customer,
    topic: input.topic,
    status: 'new',
    createdAt: new Date().toISOString(),
  }

  saveTickets([ticket, ...tickets])
  return ticket
}

export const updateTicket = (
  id: string,
  input: Pick<DemoTicket, 'customer' | 'topic' | 'status'>,
): DemoTicket | undefined => {
  let updated: DemoTicket | undefined
  const next = getTickets().map((ticket) => {
    if (ticket.id !== id) {
      return ticket
    }

    updated = { ...ticket, ...input }
    return updated
  })

  saveTickets(next)
  return updated
}

export const deleteTicket = (id: string) => {
  saveTickets(getTickets().filter((ticket) => ticket.id !== id))
}
