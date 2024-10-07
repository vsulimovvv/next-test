/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dobropizza.ru',
        port: '',
        pathname: '/upload/products/**',
      },
      {
        protocol: 'https',
        hostname: 'files.dobropizza.ru',
        port: '',
        pathname: '/images/products/**',
      },
    ],
  },
};

module.exports = nextConfig;
