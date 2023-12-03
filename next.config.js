/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig;
