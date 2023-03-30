CURRENT_DIRECTORY := ${CURDIR}

clean:
	docker compose down

rebuild:
	docker-compose up --build --force-recreate

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
