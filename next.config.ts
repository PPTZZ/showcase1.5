import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/PPTZZ/portofolio-images/**',
      },
    ],
  },
};

export default nextConfig;
