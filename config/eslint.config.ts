import type { Linter } from "eslint";

const config: Linter.Config = {
  extends: ["next/core-web-vitals", "eslint-config-prettier"],
};

export default config;
