#!/bin/bash

NAME=angular
DIR=/shared/

docker build \
  --build-arg NAME=$(id -un) \
  --build-arg PSW=1234 \
  --build-arg DIR="$DIR" \
  --tag "$NAME" \
  .

docker run \
  --interactive \
  --tty \
  --name "${NAME}" \
  --network host \
  --volume .$DIR:$DIR \
  "${NAME}"
