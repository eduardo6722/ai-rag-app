# ai-rag-app

Turborepo monorepo with Next.js, NestJS, Prisma, and Docker Compose for local development.

## Structure

```
apps/
  web/          Next.js frontend (:3000)
  api/          NestJS backend (:3001)
packages/
  database/     Prisma 7 schema, config, and generated client
```


## Quick start (Docker)

```bash
docker compose up --build
```

- Web: http://localhost:3100
- API: http://localhost:3101/api
- Postgres: `localhost:5433` (host) → `5432` in the Compose network

Host ports are `3100` / `3101` / `5433` to avoid clashing with other local stacks.

Source is bind-mounted; Nest (`--watch`) and Next (`next dev`) reload on file changes.

## Local development (without Docker for Node)

1. Start Postgres:

```bash
docker compose up postgres -d
```

2. Install and prepare the database:

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:push
```

3. Run apps:

```bash
npm run dev
```

## Useful scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start all apps via Turbo |
| `npm run build` | Build all packages/apps |
| `npm run docker:up` | `docker compose up --build` |
| `npm run docker:down` | Stop Compose stack |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to the database |
| `npm run db:migrate` | Run Prisma migrations |
# ai-rag-app
