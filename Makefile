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
	docker compose up chrome-update --build --force-recreate

edge-update:
	docker compose up edge-update --build --force-recreate

firefox-update:
	docker compose up firefox-update --build --force-recreate

chrome-rebuild:
	docker compose up chrome --build --force-recreate

edge-rebuild:
	docker compose up edge --build --force-recreate

firefox-rebuild:
	docker compose up firefox --build --force-recreate

chrome-desktop-rebuild:
	docker compose up chrome-desktop --build --force-recreate

edge-desktop-rebuild:
	docker compose up edge-desktop --build --force-recreate

firefox-desktop-rebuild:
	docker compose up firefox-desktop --build --force-recreate

chrome-mobile-rebuild:
	docker compose up chrome-mobile --build --force-recreate

edge-mobile-rebuild:
	docker compose up edge-mobile --build --force-recreate

firefox-mobile-rebuild:
	docker compose up firefox-mobile --build --force-recreate
