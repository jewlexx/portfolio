import { type NextConfig } from "next";
import createVercelToolbar from "@vercel/toolbar/plugins/next";

function composePlugins(...plugins: ((config: NextConfig) => NextConfig)[]) {
  return (config: NextConfig) => {
    return plugins.reduce((acc, plugin) => {
      return plugin(acc);
    }, config);
  };
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "repository-images.githubusercontent.com" },
      { hostname: "http.cat" },
      { hostname: "cordor.dev" },
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  outputFileTracingIncludes: {
    "/api/anybrowser": ["./src/assets/images/anybrowser/*"],
  },
  experimental: { reactCompiler: true },
};

const withVercelToolbar = createVercelToolbar({
  enableInProduction: false,
});

const withPlugins = composePlugins(withVercelToolbar);

export default withPlugins(nextConfig);
