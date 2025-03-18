// @ts-check

import tseslint from "typescript-eslint";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";

const config = tseslint.config(
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  // @ts-expect-error React Compiler types mismatch tseslint types but are compatible
  reactCompiler.configs.recommended,
  reactHooks.configs["recommended-latest"],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
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
