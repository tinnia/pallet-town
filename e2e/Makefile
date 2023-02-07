current_dir = $(shell pwd)

reset-containers:
	docker stop cypress || true; docker rm cypress || true;

tests-suspend:
	# for manual testing on machines without browsers
	make reset-containers
	@/usr/bin/time docker run \
		-w /e2e \
		--network host \
		--entrypoint="" \
		-v $(current_dir):/e2e \
		-e CYPRESS_VIDEO=true \
		--name=cypress \
		cypress/included:12.0.1 \
		/bin/bash -c 'npx wait-on random_wait_file'

tests:
	make reset-containers
	@/usr/bin/time docker run \
		-w /e2e \
		--network host \
		--entrypoint="" \
		-v $(current_dir):/e2e \
		-e CYPRESS_VIDEO=true \
		--name=cypress \
		cypress/included:12.0.1 \
		/bin/bash -c 'cypress run --browser=chrome'
