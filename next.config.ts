import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH to "" when using a custom domain (no subpath).
// For GitHub Pages without a custom domain it must be "/lillehammerbilverksted".
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath === "" ? undefined : basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
