import { FormEvent, useMemo, useState } from 'react'
import { createTicket, getTicket, updateTicket } from './ticketStore'
import type { DemoTicketStatus } from './Ticket'

type Props = {
  match?: {
    params?: {
      id?: string
    }
  }
}

export default function TicketPage(props: Props) {
  const id = props.match?.params?.id
  const existing = useMemo(() => (id ? getTicket(id) : undefined), [id])

  const [customer, setCustomer] = useState(existing?.customer ?? '')
  const [topic, setTopic] = useState(existing?.topic ?? '')
  const [status, setStatus] = useState<DemoTicketStatus>(existing?.status ?? 'new')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedCustomer = customer.trim()
    const trimmedTopic = topic.trim()
    if (!trimmedCustomer || !trimmedTopic) {
      return
    }

    if (!id) {
      const created = createTicket({ customer: trimmedCustomer, topic: trimmedTopic })
      window.location.assign(`/ticket/${created.id}`)
      return
    }

    updateTicket(id, {
      customer: trimmedCustomer,
      topic: trimmedTopic,
      status,
    })

    window.location.assign('/ticket')
  }

  return (
    <section className="panel">
      <h2>{id ? 'Edit ticket' : 'Create ticket'}</h2>

      <form className="form-grid" onSubmit={onSubmit}>
        <label>
          Customer
          <input value={customer} onChange={(e) => setCustomer(e.target.value)} />
        </label>

        <label>
          Topic
          <input value={topic} onChange={(e) => setTopic(e.target.value)} />
        </label>

        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value as DemoTicketStatus)}>
            <option value="new">new</option>
            <option value="in_progress">in_progress</option>
            <option value="done">done</option>
          </select>
        </label>

        <div className="action-row">
          <button type="submit">Save</button>
          <button type="button" onClick={() => window.location.assign('/ticket')}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}
