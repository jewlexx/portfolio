// @ts-check

import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import reactCompiler from "eslint-plugin-react-compiler";
import pluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = tseslint.config(
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  // @ts-expect-error React Compiler types mismatch tseslint types but are compatible
  reactCompiler.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "**/dev/*",
      "**/dist/*",
      "**/tests/*",
      "tsconfig.json",
      "src/lib/paraglide/*",
    ],
  },
);

export default config;
