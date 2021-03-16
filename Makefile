run-dev:
	deno run --allow-net --allow-read --allow-env server.ts

run-dev-reload:
	deno run --allow-net --allow-read --allow-env --reload server.ts
