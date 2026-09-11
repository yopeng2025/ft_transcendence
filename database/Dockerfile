FROM postgres:18-alpine

COPY init.sh /docker-entrypoint-initdb.d/init.sh

RUN chmod 755 /docker-entrypoint-initdb.d/init.sh