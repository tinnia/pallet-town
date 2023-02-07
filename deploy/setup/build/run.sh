#!/bin/bash
CURRENT_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )"
PROJECT_ROOT_DIR="${CURRENT_DIR}"/../../..

# Build MOCK
cd "${CURRENT_DIR}"/mock-server || exit
docker build \
 --build-arg FRONTEND_URL=//frontiers.kbstar.com/api \
 --tag frontiers-mock:latest \
 .

# Build BACKEND
cd "${PROJECT_ROOT_DIR}"/backend || exit
DOCKER_BUILDKIT=1 docker build \
 --tag frontiers-backend:latest \
 .

# Build FRONTEND
cd "${PROJECT_ROOT_DIR}"/frontend || exit
DOCKER_BUILDKIT=1 docker build \
 --build-arg MODE=dev \
 --build-arg BACKEND_URL=/api \
 --output . \
 .

# Build NGINX
cd "${CURRENT_DIR}"/frontend || exit
rm -rf tmp && mkdir tmp
cp -R "${PROJECT_ROOT_DIR}/frontend/dist" "${CURRENT_DIR}/frontend/tmp"
docker build \
  --file ./Dockerfile \
  --tag frontiers-frontend:latest \
  .
