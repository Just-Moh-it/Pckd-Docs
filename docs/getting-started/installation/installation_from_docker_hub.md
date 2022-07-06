---
sidebar_position: 3
slug: '/install-from-dockerhub'
# draft: true
---

# From Docker Hub

:::caution

Docker images for Pckd are not well-configure yet.
:::

:::warning

You need both images for full application.
:::

## Frontend image
[Hub page](https://hub.docker.com/r/mohit2004/pckd-client)

### Environment
* `BACKEND_URL` - server addres for connection to backend. Example: `http://server:4000`

## Backend image
[Hub page](https://hub.docker.com/r/mohit2004/pckd-server)

### Environment
* `PORT` - Optional: Port to run backend server on (Default `4000`)
* `DATABASE_URL` - [Prisma connection url format](https://www.prisma.io/docs/reference/database-reference/connection-urls) `dbms_name://username:password@host:port/pckd?schema=public&pool_timeout=0` Example: `postgresql://postgres:postgres@db/pckd` 
* `DATABASE_TYPE` - `postgres` | `mysql` 
* `TRUST_PROXY` - Optional: If you are running behind a proxy, enable this so the backend gets the correct IP. Format: `"false"` | `"true" or proxy IP` 
* `JWT_SECRET` - Random 12 chars long string
* `IPREGISTRY_API_KEY` - **API key** from the [ipregistry.co](https://ipregistry.co) website

## Quick start
Easiest way is to use **docker-compose** to start and connect both.

Go to [Installation from Docker Compose](/install-from-docker-compose)

