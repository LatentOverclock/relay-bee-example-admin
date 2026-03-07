import { FormEvent, useMemo, useState } from 'react'

type TicketStatus = 'new' | 'in_progress' | 'done'

type Ticket = {
  id: number
  customer: string
  topic: string
  status: TicketStatus
}

const initialTickets: Ticket[] = [
  { id: 1, customer: 'Acme GmbH', topic: 'Missing invoice PDF', status: 'new' },
  { id: 2, customer: 'Orchid AG', topic: 'Update billing address', status: 'in_progress' },
  { id: 3, customer: 'Northwind GmbH', topic: 'Access issue in admin panel', status: 'done' },
]

export default function DemoAdminPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets)
  const [customer, setCustomer] = useState('')
  const [topic, setTopic] = useState('')

  const counts = useMemo(() => {
    return {
      new: tickets.filter((t) => t.status === 'new').length,
      inProgress: tickets.filter((t) => t.status === 'in_progress').length,
      done: tickets.filter((t) => t.status === 'done').length,
    }
  }, [tickets])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedCustomer = customer.trim()
    const normalizedTopic = topic.trim()
    if (!normalizedCustomer || !normalizedTopic) {
      return
    }

    const newTicket: Ticket = {
      id: Date.now(),
      customer: normalizedCustomer,
      topic: normalizedTopic,
      status: 'new',
    }

    setTickets((prev) => [newTicket, ...prev])
    setCustomer('')
    setTopic('')
  }

  const rotateStatus = (ticketId: number) => {
    setTickets((prev) =>
      prev.map((ticket) => {
        if (ticket.id !== ticketId) return ticket
        if (ticket.status === 'new') return { ...ticket, status: 'in_progress' }
        if (ticket.status === 'in_progress') return { ...ticket, status: 'done' }
        return { ...ticket, status: 'new' }
      }),
    )
  }

  const badgeClass = (status: TicketStatus) => {
    if (status === 'new') return 'badge badge-new'
    if (status === 'in_progress') return 'badge badge-progress'
    return 'badge badge-done'
  }

  return (
    <div className="page">
      <h1>Demo admin dashboard</h1>
      <p>
        This is a local, backend-free example so the project is usable immediately. It mirrors a
        simple ticket workflow.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <p>New</p>
          <strong>{counts.new}</strong>
        </div>
        <div className="stat-card">
          <p>In progress</p>
          <strong>{counts.inProgress}</strong>
        </div>
        <div className="stat-card">
          <p>Done</p>
          <strong>{counts.done}</strong>
        </div>
      </div>

      <section className="panel">
        <h2>Create ticket</h2>
        <form className="form-grid" onSubmit={onSubmit}>
          <label>
            Customer
            <input value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="ACME GmbH" />
          </label>
          <label>
            Topic
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="What needs support?" />
          </label>
          <button type="submit">Add ticket</button>
        </form>
      </section>

      <section className="panel">
        <h2>Tickets</h2>
        <ul className="ticket-list">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="ticket-item">
              <div>
                <p className="ticket-title">{ticket.topic}</p>
                <p className="ticket-subtitle">{ticket.customer}</p>
              </div>
              <button className={badgeClass(ticket.status)} onClick={() => rotateStatus(ticket.id)}>
                {ticket.status}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
