import type { NextConfig } from "next";

/**
 * Static website build.
 *
 * `next build` writes plain HTML, CSS and JS to `out/`, which can be hosted on
 * any static host (Netlify, Vercel, GitHub Pages, S3/CloudFront, nginx…).
 * `trailingSlash` emits each page as `folder/index.html`, so URLs like
 * `/about/` work everywhere without server rewrites.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
