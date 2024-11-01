import reactCompiler from "eslint-plugin-react-compiler";

import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: ["**/dev/*", "**/dist/*", "**/tests/*", "tsconfig.json"],
  },
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  {
    plugins: {
      "react-compiler": reactCompiler,
    },
  },
];
