/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This forces static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig