/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'raw.githubusercontent.com', 'matheasily.com'],
  },
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  // }
}

// module.exports = withPWA(nextConfig)
module.exports = nextConfig
