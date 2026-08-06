import type { APIRoute } from "astro";
import config from "@walle/config";
import { getCollection } from "astro:content";
import { SECTION_LIST } from "../utils/awesome";

/**
 * /llms.txt (https://llmstxt.org): a build-time markdown index of the site for AI
 * crawlers. Lists the site identity and each catalog section with its entries.
 */
export const GET: APIRoute = async ({ site }) => {
  const base = (config.app.astro.basePath || "").replace(/\/$/, "");
  const url = (path: string) => new URL(`${base}${path}`, site).href;

  const lines: string[] = [
    `# ${config.app.website.title}`,
    "",
    `> ${config.app.website.description}`,
    "",
    "## Sections",
    "",
    ...SECTION_LIST.map((s) => `- [${s.label}](${url(`/${s.key}`)}): ${s.description}`),
    "",
  ];

  for (const section of SECTION_LIST) {
    const entries = [...(await getCollection(section.collection))].sort((a, b) =>
      String(a.data.name ?? a.id).localeCompare(String(b.data.name ?? b.id))
    );
    lines.push(`## ${section.label}`, "");
    for (const entry of entries) {
      const desc = entry.data.description ? `: ${entry.data.description}` : "";
      lines.push(`- [${entry.data.name}](${url(`/${section.key}/${entry.id}`)})${desc}`);
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
