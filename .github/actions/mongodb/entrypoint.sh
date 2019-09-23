#!/bin/sh

# REF: https://github.com/mirromutth/mysql-action/blob/master/entrypoint.sh

# Exit if any subcommand fails
set -e

docker_run="docker run -d"
docker_run="$docker_run -p 27017:27017"
docker_run="$docker_run -e MONGO_INITDB_ROOT_USERNAME=root"
docker_run="$docker_run -e MONGO_INITDB_ROOT_PASSWORD=1234"
# docker_run="$docker_run -e MONGO_INITDB_DATABASE=1234 "
docker_run="$docker_run mongo"

# echo "$docker_run"
sh -c "$docker_run"
