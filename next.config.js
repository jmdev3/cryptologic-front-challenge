/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['logos.covalenthq.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig
