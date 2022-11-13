/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.cdn.com',
        port: '443',
      },
    ],
  },
};

module.exports = nextConfig;
