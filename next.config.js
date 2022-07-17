/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['countryflagsapi.com', 'randomuser.me'],
  },
}

module.exports = nextConfig
