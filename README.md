# relay-bee-example-admin

Public example showing how to wire an admin frontend with [`relay-bee`](https://github.com/timble-one/relay-bee).

This project is derived from implementation patterns used in private admin projects (`flexirent-admin`, `oad-admin`) and now includes a usable demo flow.

## What this demonstrates

- `EnvironmentContext` setup for endpoint/base-path values
- `PeerRelayEnvironmentProvider` + `react-relay` provider wiring
- Found router integration via `createRouteConfig` + `PeerRouterProvider`
- Login flow in two modes:
  - **demo mode** (local-only, no backend)
  - **real mode** (`relay-bee` `LoginForm`)
- A small admin-style ticket dashboard (`/demo`) that works out of the box

## Stack

- React + TypeScript + Vite
- relay-bee
- Relay Runtime + found/found-relay

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:5173`.

## Demo mode (default)

`.env.example` enables:

```bash
VITE_DEMO_MODE=true
```

With demo mode enabled:
- `/login` uses a local form and stores demo auth in localStorage
- `/demo` provides a small ticket workflow (create + status cycle)
- No backend is required

## Real mode (with backend)

Set:

```bash
VITE_DEMO_MODE=false
VITE_HTTP_ENDPOINT=https://your-api.example.com
```

Then `/login` uses `relay-bee`'s `LoginForm` and backend auth flow.

## Optional schema fetch for Relay

```bash
npm run fetch-schema
```

This writes `src/schema.graphql` from your backend endpoint.
