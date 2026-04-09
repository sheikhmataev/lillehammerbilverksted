import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH to "" when using a custom domain (no subpath).
// For GitHub Pages without a custom domain it must be "/lillehammerbilverksted".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/lillehammerbilverksted";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
