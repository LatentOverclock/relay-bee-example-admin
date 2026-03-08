import { useMemo, useState } from 'react'
import { Badge, Link, ListPage } from 'relay-bee'
import { Ticket } from './Ticket'
import { deleteTicket, getTickets } from './ticketStore'

export default function TicketListPage() {
  const [version, setVersion] = useState(0)
  const tickets = useMemo(() => getTickets(), [version])

  return (
    <ListPage entityDescription={Ticket}>
      <section className="panel">
        <h2>Tickets</h2>

        <table className="crud-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <Link to={`/ticket/${ticket.id}`}>{ticket.topic}</Link>
                </td>
                <td>{ticket.customer}</td>
                <td>
                  <Badge>{ticket.status}</Badge>
                </td>
                <td>
                  <div className="action-row">
                    <Link to={`/ticket/${ticket.id}`}>Edit</Link>
                    <button
                      className="danger-link"
                      onClick={() => {
                        deleteTicket(ticket.id)
                        setVersion((v) => v + 1)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </ListPage>
  )
}
