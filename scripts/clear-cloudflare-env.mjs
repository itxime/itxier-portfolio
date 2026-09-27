import { writeFile } from "node:fs/promises";

// OpenNext copies local .env values into this generated module. Production
// configuration belongs in Cloudflare runtime bindings, never in the bundle.
await writeFile(
  new URL("../.open-next/cloudflare/next-env.mjs", import.meta.url),
  "export const production = {};\nexport const development = {};\nexport const test = {};\n",
);
