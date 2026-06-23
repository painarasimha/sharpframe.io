import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A parent directory also contains a lockfile, so pin the workspace root
  // to this project to silence Next's root-inference warning.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
