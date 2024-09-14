import { type JsonValue } from "@vercel/flags";
import {
  type Flag,
  type FlagDeclaration,
  unstable_flag,
} from "@vercel/flags/next";

interface FlagHandlerParams<T> extends FlagDeclaration<T> {
  flagDisabled?: {
    flagDefaultValue: T;
  };
}

export function flag<T extends JsonValue>(
  declaration: FlagHandlerParams<T>
): Flag<T> | Promise<T> {
  if (!declaration.flagDisabled) {
    return unstable_flag<T>(declaration);
  } else {
    return Promise.resolve(declaration.flagDisabled.flagDefaultValue);
  }
}
