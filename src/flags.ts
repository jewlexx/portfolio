import { flag } from "./flags/handler";

export const showStars = flag({
  flagDisabled: {
    flagDefaultValue: false,
  },
  key: "show-stars",
  defaultValue: false,
  decide(params) {
    return params.cookies.get("___show-stars")?.value === "true";
  },
});
