import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true, // If you're using strict mode
  images: {
    domains: ['scontent.cdninstagram.com', 'instagram.fmgf7-1.fna.fbcdn.net'], // Add the Instagram CDN domain
  },
};

export default nextConfig;
