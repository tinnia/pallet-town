#!/bin/bash
CURRENT_DIR=$(dirname "$0")
source ${CURRENT_DIR}/../../shell_var.sh

print_text "Available driver options: " $BLUE_TEXT
echo "Linux: docker / kvm2 / virtualbox / none / podman"
echo "macOS: docker / hyperkit / virtualbox / parallels / vmware"
echo "Windows: hyper-v / docker / virtualbox"

read -p "$(print_text 'Driver: ' $BLUE_TEXT)" DRIVER

minikube start --vm=true --driver=${DRIVER}
minikube addons enable ingress
minikube addons enable registry
minikube addons configure registry-creds
minikube addons enable registry-creds
