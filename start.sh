#!/bin/bash

NAME=production-case

docker build \
  --build-arg NAME=$(id -un) \
  --build-arg UID=$(id -u) \
  --build-arg GID=$(id -g) \
  --build-arg PSW=1234 \
  -t "$NAME" \
  .

docker run \
  -it \
  --name "${NAME}" \
  --network host \
  --volume ./homes-app/:/homes-app/ \
  "${NAME}"
