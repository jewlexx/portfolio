import { type NextConfig } from "next";
import createVercelToolbar from "@vercel/toolbar/plugins/next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

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
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  outputFileTracingIncludes: {
    "/api/anybrowser": ["./src/assets/images/anybrowser/*"],
  },
  reactCompiler: true,
};

if (process.env.NODE_ENV === "development") {
  nextConfig.images?.remotePatterns?.push({ hostname: "127.0.0.1" });
}

const withVercelToolbar = createVercelToolbar({
  enableInProduction: false,
});

const withPlugins = composePlugins(withVercelToolbar);

export default withPlugins(nextConfig);
