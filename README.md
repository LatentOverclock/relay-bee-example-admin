# relay-bee-example-admin

Public example showing how to wire an admin frontend with [`relay-bee`](https://github.com/timble-one/relay-bee).

This project is derived from implementation patterns used in private admin projects (`flexirent-admin`, `oad-admin`) but contains no private business logic.

## What this demonstrates

- `EnvironmentContext` setup for endpoint/base-path values
- `PeerRelayEnvironmentProvider` + `react-relay` provider wiring
- Found router integration via `createRouteConfig` + `PeerRouterProvider`
- `LoginForm` usage and redirect flow

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

## Optional schema fetch for Relay

```bash
npm run fetch-schema
```

This writes `src/schema.graphql` from your backend endpoint.

## Notes

- This is intentionally minimal and focused on structure.
- Add your real route modules, GraphQL fragments, and entity pages on top.
