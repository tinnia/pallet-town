prepare:
	yarn --cwd frontend lint && make tests

tests:
	tput setaf 1; echo 'Backend:'
	tput sgr0; make -C backend tests
	tput setaf 1; echo 'Frontend:'
	tput sgr0; make -C frontend tests
	tput setaf 1; echo 'E2E:'
	tput sgr0; make -C build/e2e tests

tests-succinct:
	tput setaf 1; echo 'Backend:'
	tput sgr0; make -C backend tests 2>&1 | grep -A 2 'Results:' | grep 'Tests'
	tput setaf 1; echo 'Frontend:'
	tput sgr0; make -C frontend tests 2>&1 | grep 'Tests:\|passed\|failed'
	tput setaf 1; echo 'E2E:'
	tput sgr0; make -C build/cypress tests 2>&1 | grep 'Tests:\|passed\|failed'

preview:
	sh ./deploy/run.sh -i true -b true -p l

setup:
	git clone git@github.com:younajaeCheon/frontiers-maven-dependencies.git `pwd`/backend/tmp/maven-dependencies || git -C `pwd`/backend/tmp/maven-dependencies pull || true
	sh `pwd`/backend/tmp/maven-dependencies/load.sh ~/.m2
	cp `pwd`/backend/tmp/maven-dependencies/settings.xml `pwd`/backend/settings.xml

	git clone git@github.com:younajaeCheon/frontiers-docker-images `pwd`/tmp/docker-images || git -C `pwd`/tmp/docker-images pull || true
	sh `pwd`/tmp/docker-images/load_all.sh
