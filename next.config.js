/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'f2.lpcdn.site',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
