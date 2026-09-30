*This project has been created as part of the 42 curriculum by mgrossi, neandrie, peiyli, yopeng*

# 🎬 CinéClub

A web platform for a local cinema club. Organizers curate an official screening schedule from live [datacinesindes.fr](https://datacinesindes.fr) data. Members browse, RSVP, chat in real time, and export their selection as an iCalendar (.ics) file that can be imported into any standard calendar app (Google Calendar, Apple Calendar, Outlook...).

> 🚧 Work in progress.

## Prerequisites

- [Podman](https://podman.io/) and `podman-compose`
- `make`


## 2. Start the stack

```bash
make up
# might take several minutes
```

Containers run **in the background** (detached), so the terminal returns right away. That's expected.

To follow the logs:

```bash
podman compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev logs -f

# inspect containers
make containers
# development_proxy
# development_frontend
# development_backend
# development_db

# inspect volumes
make volumes
# development_frontend_node_modules
# development_backend_node_modules
# development_postgres_data
```

## 3. Open the app

| Service  | URL                    |
|----------|------------------------|
| Website  | http://localhost:1024  |
| API      | http://localhost:5555  |

⚠️ Type `http://` explicitly: Firefox may silently upgrade to `https://`, which fails in dev.

## 4. Stop the stack

```bash
make down
```

👉 Run `make down` when you're done working, **before switching branches**, and before pulling changes to Dockerfiles, compose files or dependencies. Then `make up` again to rebuild.


## Troubleshooting

```bash
podman ps                          # which containers are running?
podman logs development-proxy      # or -frontend, -backend, -db

# if any container is missing or error occurs, try this:
podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d [_name_]
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d proxy
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d frontend
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d backend
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d db
```

"No such container" errors on `make down` are harmless: nothing was running.

## clean all
```bash
# delete containers and volumes
make clean
```

