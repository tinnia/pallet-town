# Deploy

## Requirements

### Common

- k8s
- helm

### Local

- minikube

## Setup

### Minikube

Run `sh ./setup/init/minikube.sh`.

### Deployment

```sh
SERVICE_ROOT_DIR=$(git rev-parse --show-toplevel)
sh ${SERVICE_ROOT_DIR}/run.sh
```

- NOTE: set the ingress ADDRESS value as CNAME of domain if necessary

