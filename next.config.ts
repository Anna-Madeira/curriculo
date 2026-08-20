import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/curriculo",
  assetPrefix: "/curriculo/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
