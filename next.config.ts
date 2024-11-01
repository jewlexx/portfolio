import createMDX from "@next/mdx";
import { type NextConfig } from "next";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "repository-images.githubusercontent.com",
      },
      {
        hostname: "http.cat",
      },
      {
        hostname: "cordor.dev",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  outputFileTracingIncludes: {
    "/api/anybrowser": ["./src/assets/images/anybrowser/*"],
  },
  experimental: {
    reactCompiler: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
});

export default withMDX(nextConfig);
