import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — the whole site is prerendered to /out and served as files.
  output: "export",
  // Trailing slashes keep static hosts happy with nested routes.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
