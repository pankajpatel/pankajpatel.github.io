/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  experimental: {},
};
