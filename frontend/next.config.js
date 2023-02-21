/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**picsum.photos",
      },
      {
        protocol: "https",
        hostname: "**unsplash.com",
      },
    ],
    domains: ["picsum.photos", "fastify.picsum.photos"],
  },
};

module.exports = nextConfig;
