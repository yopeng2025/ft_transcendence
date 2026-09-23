*This project has been created as part of the 42 curriculum by mgrossi, neandrie, peiyli, yopeng*

# 🎬 CinéClub

A web platform for a local cinema club. Organizers curate an official screening schedule from live [datacinesindes.fr](https://datacinesindes.fr) data. Members browse, RSVP, chat in real time, and export their selection as an iCalendar (.ics) file that can be imported into any standard calendar app (Google Calendar, Apple Calendar, Outlook...).

> 🚧 Work in progress.

## Prerequisites

- [Podman](https://podman.io/) and `podman-compose`
- `make`

## 1. Create your local secrets

Generate random secrets once, from the repo root:

```bash
mkdir -p secrets
for name in backend_pw postgres_root_pw jwt_secret; do
  openssl rand -base64 32 | tr -d '\n' > "secrets/${name}.txt"
done
chmod 600 secrets/*.txt
```

Never commit the `secrets/` folder.

## 2. Start the stack

```bash
make up
```

Containers run **in the background** (detached), so the terminal returns right away. That's expected.

To follow the logs:

```bash
podman compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev logs -f
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
```

"No such container" errors on `make down` are harmless: nothing was running.