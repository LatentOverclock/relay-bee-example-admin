# relay-bee-example-admin

Public example admin UI using [`relay-bee`](https://github.com/timble-one/relay-bee), aligned with the module/file-structure style used in real relay-bee admin projects.

## What this now demonstrates

- relay-bee runtime wiring (`EnvironmentProvider`, `PeerRelayEnvironmentProvider`, Found router)
- admin shell with sidebar navigation + protected layout
- entity-style module structure under `src/app/<entity>/`
- route composition via route hooks (`useHomeRoute`, `useTicketRoutes`)
- CRUD-style flow for `ticket` entities

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

## Demo mode

By default (`VITE_DEMO_MODE=true`), login and ticket CRUD run locally so the example works without a backend.

## Real mode

Set:

```bash
VITE_DEMO_MODE=false
VITE_HTTP_ENDPOINT=https://your-api.example.com
```

Then `/login` uses relay-bee `LoginForm`.

## Optional schema fetch for Relay

```bash
npm run fetch-schema
```
