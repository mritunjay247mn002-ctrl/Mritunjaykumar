/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  /**
   * Dev-only: disable webpack filesystem cache so `.next` cannot reference
   * stale chunk ids (e.g. `./152.js`) after interrupted compiles / AV sync.
   * Production builds keep default caching.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
