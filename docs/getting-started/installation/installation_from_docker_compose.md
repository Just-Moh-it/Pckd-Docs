---
sidebar_position: 4
slug: "/install-from-docker-compose"
# draft: true
---

# From Docker Compose

:::caution

Docker Compose support is currently unstable and [issues are known](https://github.com/PckdHq/Pckd/issues/34)
:::

:::info

For fur explanation of Env variables go to [Install from Docker Hub](/install-from-dockerhub)
:::

## Basic
```yaml
version: "3"

services:
  server:
    # Local build
    #build:
    #  context: ./server
    image: pckd/pckd-server
    volumes:
      - ./logs:/home/node/app/logs
    environment:
      # db <- refers to container name of postgres db (name of service in compose)
      - DATABASE_URL=postgresql://postgres:postgres@db/pckd
      - DATABASE_TYPE=postgres
      - JWT_SECRET=verysecurestring
      - IPREGISTRY_API_KEY=f1ntkcjoqaazglj7
    depends_on:
      - db

  frontend:
    # Local build
    #build:
    #  context: ./frontend
    image: pckd/pckd-client
    ports:
      - 80:80
    environment:
      # server <- refers to container name of backend server (name of service in compose)
      - BACKEND_URL=http://server:4000

  db:
    image: postgres:13-alpine
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=pckd
```

Keep in mind to change your **secrets** and you **volumes**

### Env version

Example with `.env` file for easier configuration.

```env
JWT_SECRET=verysecurestring
IPREGISTRY_API_KEY=f1ntkcjoqaazglj7

DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=pckd
```

```yaml
version: "3"

services:
  server:
    # Local build
    #build:
    #  context: ./server
    image: mohit2004/pckd-server
    volumes:
      - ./logs:/home/node/app/logs
    environment:
      # db <- refers to container name of postgres db (name of service in compose)
      - DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@db/${DB_NAME}
      - DATABASE_TYPE=postgres
      - JWT_SECRET=${JWT_SECRET}
      - IPREGISTRY_API_KEY=${IPREGISTRY_API_KEY}
    depends_on:
      - db

  frontend:
    # Local build
    #build:
    #  context: ./frontend
    image: mohit2004/pckd-client
    ports:
      - 80:80
    environment:
      # server <- refers to container name of backend server (name of service in compose)
      - BACKEND_URL=http://server:4000

  db:
    image: postgres:13-alpine
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=${DB_NAME}
```


## Proxy support

Only thing is to connect your proxy to exposed port by *frontend* container. Currently frontend port is `80`.


## Full example

### Env + External traefik proxy + volumes

```env
JWT_SECRET=verysecurestring
IPREGISTRY_API_KEY=f1ntkcjoqaazglj7

DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=pckd
```

```yaml
version: "3"

services:
  server:
    image: mohit2004/pckd-server
    volumes:
      - logs:/home/node/app/logs
    environment:
      # db <- refers to container name of postgres db (name of service in compose)
      - DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@db/${DB_NAME}
      - DATABASE_TYPE=postgres
      - JWT_SECRET=${JWT_SECRET}
      - IPREGISTRY_API_KEY=${IPREGISTRY_API_KEY}
      - TRUST_PROXY="true" # or your proxy IP
    depends_on:
      - db
    networks:
      - app
      - db

  frontend:
    image: mohit2004/pckd-client
    labels:
      - traefik.enable=true
      - "traefik.http.routers.pckd.rule=Host(`pckd.myhost.domain`)"
      - traefik.http.routers.pckd.entrypoints=https
      - traefik.http.routers.pckd.tls=true
      # your cert resolver
      - traefik.http.routers.pckd.tls.certresolver=default
      # your proxy network name
      - traefik.docker.network=proxy-tier
    expose:
      - 80
    environment:
      # server <- refers to container name of backend server (name of service in compose)
      - BACKEND_URL=http://server:4000
    networks:
      - app
      - proxy-tier

  db:
    image: postgres:13-alpine
    volumes:
      -  db:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=${DB_NAME}
    networks:
      - db

networks:
  app:
  db:
  # your proxy network name
  proxy-tier:
    external:

volumes:
  db:
  logs:

```



