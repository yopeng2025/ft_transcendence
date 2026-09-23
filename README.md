# ft_transcendence


## Commands

```bash
# build images
make build

# create containers and volumes
make up

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

# if any container is missing or error occurs, try this:
podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d [_name_]
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d proxy
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d frontend
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d backend
# podman-compose -p development -f compose.yaml -f compose.dev.yaml --env-file .env.dev up -d db

# delete containers
make down

# delete containers and volumes
make clean

```