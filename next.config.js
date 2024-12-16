/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Remove experimental section since serverActions is now default
}

module.exports = nextConfig