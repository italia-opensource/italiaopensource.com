import type { APIRoute } from "astro";
import config from "@walle/config";

/**
 * /robots.txt — crawler directives + sitemap pointer, built from config so it
 * stays correct for every consumer (the site URL and base path come from
 * app.json, not a hardcoded string).
 *
 * Seed file: owned by the consumer after scaffold — tighten the rules or add
 * per-agent blocks as needed.
 */
export const GET: APIRoute = ({ site }) => {
  const base = (config.app.astro.basePath || "").replace(/\/$/, "");
  const allowIndexing = !/noindex/i.test(config.app.website.robots || "");

  const lines = ["User-agent: *", allowIndexing ? "Allow: /" : "Disallow: /"];

  if (site) {
    lines.push("", `Sitemap: ${new URL(`${base}/sitemap-index.xml`, site).href}`);
  }

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
