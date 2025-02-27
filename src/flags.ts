import { flag } from "flags/next";

export const showStars = flag({
  key: "show-stars",
  defaultValue: false,
  decide(params) {
    return params.cookies.get("___show-stars")?.value === "true";
  },
});
