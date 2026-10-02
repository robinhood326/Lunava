import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Generated once at build time for the static export.
export const dynamic = "force-static";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/engineers/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies/", priority: 0.2, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path || "/"}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
