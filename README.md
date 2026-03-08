# relay-bee-example-admin

Public example admin UI using [`relay-bee`](https://github.com/timble-one/relay-bee), aligned with the module/file-structure style used in real relay-bee admin projects.

## What this demonstrates

- relay-bee runtime wiring (`EnvironmentProvider`, `PeerRelayEnvironmentProvider`, Found router)
- admin shell with sidebar navigation + protected layout
- entity-style module structure under `src/app/<entity>/`
- route composition via route hooks (`useHomeRoute`, `useTicketRoutes`)
- CRUD-style flow for `ticket` entities
- fixed, local-only demo auth/data flow (no real-mode toggle)

## File structure (key parts)

```text
src/
  app/
    login/LoginPage.tsx
    ticket/
      Ticket.ts
      TicketListPage.tsx
      TicketPage.tsx
      ticketStore.ts
      useTicketRoutes.ts
    HomePage.tsx
    NavigationLayout.tsx
    useHomeRoute.ts
  components/
    sidebar/
      Sidebar.tsx
      navigationElements.ts
  environment/
    EnvironmentProvider.tsx
    RelayEnvProvider.tsx
  main/
    app/App.tsx
    app/RouterWrapper.tsx
    main.tsx
    index.css
    styles.css
  routes/
    RouterProvider.tsx
    routes.tsx
```

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:5173`.

## Notes

- This project is intentionally **demo-only**.
- Login is local and accepts any non-empty email/password.
- Ticket data is stored in localStorage for quick exploration.
