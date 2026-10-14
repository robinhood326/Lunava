import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Generated once at build time for the static export.
export const dynamic = "force-static";

/** Bump when page content meaningfully changes (a fixed date keeps crawlers from seeing every deploy as an update). */
const lastModified = new Date("2026-10-14");

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/opportunities/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies/", priority: 0.2, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path || "/"}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
