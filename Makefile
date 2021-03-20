run-deno:
	deno run --allow-net --allow-read --allow-env app.ts

run-dev-reload:
	deno run --allow-net --allow-read --allow-env --reload app.ts

run-denon:
	denon start
