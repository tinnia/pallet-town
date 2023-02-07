#!/bin/bash
CURRENT_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )"
source "${CURRENT_DIR}"/shell_var.sh

# Switch to Minikube docker images ==========================================
print_text "Switching to Minikube Docker images..." "$GREEN_TEXT"
eval "$(minikube docker-env)"

# Set options ===============================================================
load_base_images="false"
build="false"
phase="l"

while getopts i:b:p: flag
do
  case "${flag}" in
    i) load_base_images=${OPTARG};;
    b) build=${OPTARG};;
    p) phase=${OPTARG};;
    *)
  esac
done

print_text "Running phase : ${phase}" "${RED_TEXT}"

# Build images ==============================================================
print_text "Building images..." "$GREEN_TEXT"
docker system prune -f || true
docker stop $(docker container ls -aq --filter name=frontiers) || true

if [[ "$load_base_images" == "true" ]]; then
  docker rmi -f $(docker images --format '{{.Repository}}:{{.Tag}}' | grep 'frontiers') || true
  sh "${CURRENT_DIR}"/setup/build/tmp/docker-images/load_all.sh
fi

if [[ "$load_base_images" == "true" || "$build" == "true" ]]; then
  sh "${CURRENT_DIR}"/setup/build/run.sh
fi

docker system prune -f || true

docker images

# Helm ======================================================================
cd "${CURRENT_DIR}"/helm || exit
case $phase in
  [Pp]* )
    read -p "$(print_text 'Deplying to PRODUCTION. Are you sure? [y/n]' $BLUE_TEXT)" APPROVE_PRODUCTION_DEPLOYMENT
    if [[ "${APPROVE_PRODUCTION_DEPLOYMENT}" == 'y' ]]; then
      kubectl config use-context k8s@ # add context address here
      cd production || exit
    else
      exit 1
    fi
    ;;
  [Dd]* )
    kubectl config use-context k8s@ # add context address here
    cd development || exit
    ;;
  [Ll]* )
    kubectl config use-context minikube
    cd local || exit
    ;;
  * )
    print_text "Invalid input. Aborting.." "$RED_TEXT"
    exit 1;;
esac

print_text "Removing previous Helm charts..." "$GREEN_TEXT"
for d in ./*/ ;
do
  (cd "$d" && rm -rf charts/*);
  (cd "$d" && rm -rf Chart.lock);
  (cd "$d" && helm dependency update);
done

print_text "Deploying Helm charts..." "$GREEN_TEXT"
# kubectl delete --all all
helm delete frontiers-ingress
helm delete frontiers-frontend
helm delete frontiers-backend
helm delete frontiers-mock

helm install frontiers-ingress ./ingress
helm install frontiers-frontend ./frontiers-frontend
helm install frontiers-backend ./frontiers-backend
helm install frontiers-mock ./frontiers-mock

print_text "Done." "$GREEN_TEXT"
