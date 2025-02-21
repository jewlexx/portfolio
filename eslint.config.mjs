// @ts-check

import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import reactCompiler from "eslint-plugin-react-compiler";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default tseslint.config(
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  compat.extends("next/core-web-vitals"),
  {
    ignores: ["**/dev/*", "**/dist/*", "**/tests/*", "tsconfig.json"],
    plugins: { "react-compiler": reactCompiler },
    rules: { "react-compiler/react-compiler": "error" },
  },
);
