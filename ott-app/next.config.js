/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        port: 'localhost:3000',
        pathname: '/t/p/w220_and_h330_face**',
      },
    ],
  },
};

module.exports = nextConfig
