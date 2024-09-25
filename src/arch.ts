import { match } from "ts-pattern";

export enum Arch {
  x64 = "x86_64",
  x86 = "i686",
  arm64 = "aarch64",
}

export function parseArch(arch: string): Arch | null {
  return match(arch)
    .with("x64", () => Arch.x64)
    .with("x86_64", () => Arch.x64)
    .with("x86", () => Arch.x86)
    .with("i686", () => Arch.x86)
    .with("arm64", () => Arch.arm64)
    .with("aarch64", () => Arch.arm64)
    .otherwise(() => null);
}
