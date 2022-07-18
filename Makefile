CURRENT_DIRECTORY := ${CURDIR}

run-cypress-tests-chrome:
	docker run --rm -it -v ${CURRENT_DIRECTORY}/cypress/snapshots:/home/app/cypress/snapshots --entrypoint yarn andremarquesdev/aguarela-cypress-tests-chrome:1.0.1 cypress:test:chrome

run-cypress-tests-chrome-update:
	docker run --rm -it -v ${CURRENT_DIRECTORY}/cypress/snapshots:/home/app/cypress/snapshots --entrypoint yarn andremarquesdev/aguarela-cypress-tests-chrome:1.0.1 cypress:test:chrome:update

run-cypress-tests-edge:
	docker run --rm -it -v ${CURRENT_DIRECTORY}/cypress/snapshots:/home/app/cypress/snapshots --entrypoint yarn andremarquesdev/aguarela-cypress-tests-edge:1.0.1 cypress:test:edge

run-cypress-tests-edge-update:
	docker run --rm -it -v ${CURRENT_DIRECTORY}/cypress/snapshots:/home/app/cypress/snapshots --entrypoint yarn andremarquesdev/aguarela-cypress-tests-edge:1.0.1 cypress:test:edge:update

run-cypress-tests-firefox:
	docker run --rm -it -v ${CURRENT_DIRECTORY}/cypress/snapshots:/home/app/cypress/snapshots --entrypoint yarn andremarquesdev/aguarela-cypress-tests-firefox:1.0.0 cypress:test:firefox

run-cypress-tests-firefox-update:
	docker run --rm -it -v ${CURRENT_DIRECTORY}/cypress/snapshots:/home/app/cypress/snapshots --entrypoint yarn andremarquesdev/aguarela-cypress-tests-firefox:1.0.0 cypress:test:firefox:update