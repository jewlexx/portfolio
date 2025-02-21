import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import reactCompiler from "eslint-plugin-react-compiler";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  { ignores: ["**/dev/*", "**/dist/*", "**/tests/*", "tsconfig.json"] },
  reactCompiler.configs.recommended,
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
];
