# Cloudflare deployment

This app runs on Cloudflare Workers with `@opennextjs/cloudflare` (OpenNext).
Next.js remains at 16.3.6. The portfolio pages use the static-assets incremental
cache; `POST /api/contact` runs in the Worker and sends email through Resend.
No static export, R2 bucket, or database is required.

## Build and deploy

Use Node.js 22 or later and the committed npm lockfile:

```sh
npm ci
npm run lint
npm run build:cloudflare
npx tsc --noEmit
npm run preview
```

After validation, deploy the generated bundle with `npm run deploy`.
The Worker name is `itxier-portfolio`; its custom domains are configured in
`wrangler.jsonc`.

For Cloudflare Workers Builds, connect `itxime/itxier-portfolio`, use production
branch `main`, repository root `/`, build command `npm run build:cloudflare`,
and deploy command `npm run deploy`.

## Runtime configuration

Set these bindings under Workers & Pages → itxier-portfolio → Settings →
Variables and Secrets:

- `RESEND_API_KEY`: secret
- `CONTACT_EMAIL_FROM`: verified Resend sender
- `CONTACT_EMAIL_TO`: destination mailbox

These are runtime values; they are not needed for the build. Never use a
`NEXT_PUBLIC_` prefix for them. `keep_vars` preserves dashboard-set variables.
The key and both email settings may also be stored with `wrangler secret bulk`
using secure standard input.

OpenNext copies local `.env` defaults into its generated server module.
`scripts/clear-cloudflare-env.mjs` removes those defaults after the Cloudflare
build and again before deployment, so production uses only runtime bindings.
`.env*`, `.dev.vars*`, `.open-next`, and `.wrangler` are ignored by Git.
Use `npm run dev` for local development with `.env.local`.

The `www` to apex redirect is managed as a Cloudflare zone Redirect Rule,
preserving the path and query string.

## Verification

Check all portfolio and project routes, images, and navigation over HTTPS.
An empty JSON POST to `/api/contact` should return 400 with field errors;
this checks server execution without sending email. The site owner should
submit the final real delivery test through `/contact`.
