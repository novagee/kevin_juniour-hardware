import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://kevinjuniour-hardwarebackend.vercel.app/api/:path*',
      },
    ];
  },
};

export default nextConfig;
