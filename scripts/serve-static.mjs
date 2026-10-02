// Minimal static file server for previewing the exported site in `out/`.
// Behaves like a typical static host: serves folder/index.html, falls back to 404.html.
// Usage: npm run preview  (or: node scripts/serve-static.mjs [port])
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "out");
const port = Number(process.argv[2] || process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
};

async function resolve(urlPath) {
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  let file = join(root, safe);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const path = new URL(req.url, "http://localhost").pathname;
  // Mirror static hosts: /about -> /about/
  if (!extname(path) && !path.endsWith("/")) {
    res.writeHead(301, { Location: `${path}/` });
    return res.end();
  }
  const file = await resolve(path);
  if (!file) {
    res.writeHead(404, { "Content-Type": types[".html"] });
    return res.end(await readFile(join(root, "404.html")).catch(() => "Not found"));
  }
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
  res.end(await readFile(file));
}).listen(port, () => console.log(`Static site: http://localhost:${port}`));
