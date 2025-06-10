import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["th.bing.com", "www.laut.de", "i.pinimg.com", "br.pinterest.com"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'www.laut.de',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'br.pinterest.com',
      },
    ]
  },
};

export default nextConfig;
