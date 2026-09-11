
secrets:
	@systemctl --user is-active --quiet podman.socket || systemctl --user start podman.socket
	@echo "🔌 Podman socket is ready."
	@echo "🔍 Checking Podman managed secrets..."
	@podman secret inspect backend_pw >/dev/null 2>&1 || podman secret create backend_pw secrets/backend_pw.txt
	@podman secret inspect postgres_root_pw >/dev/null 2>&1 || podman secret create postgres_root_pw secrets/postgres_root_pw.txt
	@podman secret inspect jwt_secret >/dev/null 2>&1 || podman secret create jwt_secret secrets/jwt_secret.txt
	@echo "🔑 Secrets are ready."

build:
	podman-compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev build		

up: secrets
	podman-compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev up -d

down:
	podman-compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev down

clean:
	podman-compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev down -v

volumes:
	podman volume ls

containers:
	podman ps -a

.PHONY: secrets up down clean volumes containers