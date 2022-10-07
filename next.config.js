/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }
}

export default withPWA(nextConfig)
