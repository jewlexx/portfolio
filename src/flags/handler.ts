import { type FlagDeclaration, type JsonValue } from "@vercel/flags";
import { type Flag, flag as vercelFlag } from "@vercel/flags/next";

type FlagHandlerParams<T> = {
  flagDisabled?: {
    flagDefaultValue: T;
  };
} & FlagDeclaration<T, any>;

export function flag<T extends JsonValue>(
  declaration: FlagHandlerParams<T>
): Flag<T> | (() => Promise<T>) {
  if (!declaration.flagDisabled) {
    return vercelFlag<T>(declaration);
  } else {
    const defaultValue = declaration.flagDisabled.flagDefaultValue;
    return () => Promise.resolve(defaultValue);
  }
}
