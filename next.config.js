/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
  },
};
