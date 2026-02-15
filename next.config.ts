import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.winblu.it',
      },
      {
        protocol: 'https',
        hostname: 'winblu.it',
      },
    ],
  },
};

export default nextConfig;
