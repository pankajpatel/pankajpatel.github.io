/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  experimental: {},
};
