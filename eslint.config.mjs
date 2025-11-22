// @ts-check

import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import reactCompiler from "eslint-plugin-react-compiler";
import pluginReact from "eslint-plugin-react";
import webVitals from "eslint-config-next";

const config = defineConfig(
  ...webVitals,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  reactCompiler.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  // {
  //   settings: {
  //     react: {
  //       version: "detect",
  //     },
  //   },
  //   ignores: [
  //     "**/dev/*",
  //     "**/dist/*",
  //     "**/tests/*",
  //     "tsconfig.json",
  //     "src/lib/paraglide/*",
  //   ],
  // },
);

export default config;
