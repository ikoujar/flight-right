/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['countryflagsapi.com', 'randomuser.me'],
  },
}

module.exports = nextConfig
