
secrets:
	@echo "🔍Checking Podman managed secrets..."
	@podman secret inspect backend_pw >/dev/null 2>&1 || podman secret create backend_pw secrets/backend_pw.txt
	@podman secret inspect postgres_root_pw >/dev/null 2>&1 || podman secret create postgres_root_pw secrets/postgres_root_pw.txt
	@podman secret inspect jwt_secret >/dev/null 2>&1 || podman secret create jwt_secret secrets/jwt_secret.txt
	@echo "🔑Secrets are ready."
up: secrets
	podman compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev up -d --build

down:
	podman compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev down

clean:
	podman compose -p development -f compose.yaml -f compose.dev.yaml  --env-file .env.dev down -v

volumes:
	podman volume ls

containers:
	podman ps -a

.PHONY: secrets up down clean volumes containers