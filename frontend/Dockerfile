FROM node:24-alpine AS dev

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# default port for Vite development server
EXPOSE 5173

# CMD: run after docker is built and container is started
# npx vite --host: run vite dev server && listen on all network interfaces (not only localhost)
CMD ["npx", "vite", "--host" ]

