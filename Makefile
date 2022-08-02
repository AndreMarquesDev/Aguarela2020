CURRENT_DIRECTORY := ${CURDIR}

clean:
	docker compose down

rebuild:
	docker-compose up --build --force-recreate

chrome:
	docker compose up chrome

edge:
	docker compose up edge

firefox:
	docker compose up firefox

chrome-update:
	docker compose up chrome-update

edge-update:
	docker compose up edge-update

firefox-update:
	docker compose up firefox-update

chrome-rebuild:
	docker compose up chrome --build --force-recreate

edge-rebuild:
	docker compose up edge --build --force-recreate

firefox-rebuild:
	docker compose up firefox --build --force-recreate
