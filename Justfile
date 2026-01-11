# Build and run the docker compose file with a required cloudflared token.
run cloudflare_token:
    CF_TOKEN={{cloudflare_token}} docker compose up -d --build
