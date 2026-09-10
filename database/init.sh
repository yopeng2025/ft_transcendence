#!/bin/bash

set -e     # any error will cause the script to exit immediately

# ${}: unfold the environment variables from the .env file
# $(): execute the command in the parentheses and return the output
BACKEND_PASSWORD=$(cat /run/secrets/backend_pw)

# initialize PostgreSQL database
#
# -v: set a variable in psql
#     ON_ERROR_STOP=1: stop execution if any error occurs
# 1. run psql command with the specified username(superuser) and databasename(postgresql), and execute the SQL commands provided in the here-document (<<- without tab).
# 2. create a new user with the password stored in the BACKEND_PASSWORD variable.
# 3. give this user all privileges on the 'postgresql' database

# 4. (/connect) switch to the 'postgresql' database
# 5. schema=file/namespace in postgresql; allow this user to USE and CREATE objects in schema called "file"
# 6. grant all privileges on all tables in the "file" schema to this user
# 7. grant all privileges on all sequences(index) in the "file" schema to this user
# 8.                             functions

# 9. set default privileges for this user on all NEW tables, sequences, and functions in the "file" schema
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL

    CREATE USER "${BACKEND_USER}" WITH PASSWORD '${BACKEND_PASSWORD}';
    GRANT ALL PRIVILEGES ON DATABASE "${POSTGRES_DB}" TO "${BACKEND_USER}";

    \c "${POSTGRES_DB}"; 
    GRANT USAGE, CREATE ON SCHEMA public TO "${BACKEND_USER}";
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to "${BACKEND_USER}";
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to "${BACKEND_USER}";
    GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public to "${BACKEND_USER}";   

    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO "${BACKEND_USER}";
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO "${BACKEND_USER}";
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO "${BACKEND_USER}";
EOSQL






