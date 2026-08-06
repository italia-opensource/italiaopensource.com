// @ts-check
import { defineWalleConfig } from "./src/@walle/config";

// Repo-internal dev tooling. The Astrobook component catalog mounts only when
// WALLE_ASTROBOOK=1 is set (via `just astrobook` / `yarn astrobook`). It is dev-only:
// excluded from the normal site build and never seeded to consumers — stories live in
// ./astrobook (outside src/@walle, which is the website module's managed zone).
const astrobookIntegrations = process.env.WALLE_ASTROBOOK
  ? [(await import("astrobook")).default({ directory: "astrobook", subpath: "/astrobook" })]
  : [];

// Thin consumer-owned shell. All walle logic (SSR flag, default integrations,
// variant resolution, theme tokens) lives in src/@walle/config (updatable zone).
// Pass native Astro overrides here: scalar keys override walle's resolved values;
// `integrations` are merged additively onto the walle defaults (mdx, sitemap, icon).
// e2e sandboxes live under tests/e2e/.sandbox/ (own Astro projects, some SSR). The dev server
// must not watch them, or their tsconfig/SSR churn breaks HMR (astro:server-app.js). Repo-only
// override.
export default defineWalleConfig({
  integrations: astrobookIntegrations,
  vite: { server: { watch: { ignored: ["**/tests/e2e/.sandbox/**"] } } },
});
