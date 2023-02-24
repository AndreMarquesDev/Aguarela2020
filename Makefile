CURRENT_DIRECTORY := ${CURDIR}

clean:
	docker compose down

rebuild:
	docker-compose up --build --force-recreate

# Run all tests

chrome:
	docker compose up chrome --build --force-recreate

edge:
	docker compose up edge --build --force-recreate

firefox:
	docker compose up firefox --build --force-recreate

# Run tests for desktop

chrome-desktop:
	docker compose up chrome-desktop --build --force-recreate

edge-desktop:
	docker compose up edge-desktop --build --force-recreate

firefox-desktop:
	docker compose up firefox-desktop --build --force-recreate

# Run tests for mobile

chrome-mobile:
	docker compose up chrome-mobile --build --force-recreate

edge-mobile:
	docker compose up edge-mobile --build --force-recreate

firefox-mobile:
	docker compose up firefox-mobile --build --force-recreate

# Update snapshots

chrome-update:
	docker compose up chrome-update --build --force-recreate

edge-update:
	docker compose up edge-update --build --force-recreate

firefox-update:
	docker compose up firefox-update --build --force-recreate

# Playwright

run-playwright-all:
	docker compose up run-playwright-all --build --force-recreate

run-playwright-chrome:
	docker compose up run-playwright-chrome --build --force-recreate

run-playwright-edge:
	docker compose up run-playwright-edge --build --force-recreate

run-playwright-firefox:
	docker compose up run-playwright-firefox --build --force-recreate

run-playwright-safari:
	docker compose up run-playwright-safari --build --force-recreate

run-playwright-chrome-mobile:
	docker compose up run-playwright-chrome-mobile --build --force-recreate

run-playwright-safari-mobile:
	docker compose up run-playwright-safari-mobile --build --force-recreate
