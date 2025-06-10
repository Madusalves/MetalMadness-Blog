import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["th.bing.com", "www.laut.de"], // adicione os domínios usados em imagens externas
  },
};

export default nextConfig;
