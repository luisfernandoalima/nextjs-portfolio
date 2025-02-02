import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.shields.io" }],
    dangerouslyAllowSVG: true,
    domains: ['localhost']
  },
};

export default nextConfig;
