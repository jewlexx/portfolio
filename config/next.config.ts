import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
    styledComponents: true,
  },
};

export default config;
