// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tse1.mm.bing.net" },
      { protocol: "https", hostname: "portal.redevix.com" },
      { protocol: "https", hostname: "agoranovale.com.br" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "static.corinthians.com.br" },
      { protocol: "https", hostname: "ambar-project.vercel.app" },
    ],
  },
};

export default nextConfig;
