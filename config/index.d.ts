import type { Options } from "prettier";
import type { Linter } from "eslint";
import type { NextConfig } from "next";

interface Exports {
  prettier: Options;
  eslint: Linter.Config;
  next: NextConfig;
}

declare const prettier: Options;
declare const eslint: Linter.Config;
declare const next: NextConfig;

export { prettier, eslint, next };
