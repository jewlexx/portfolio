import { flag } from "flags/next";

function mangleFlagName(name: string) {
  return "___" + name.replace(/-/g, "_");
}

export const showStars = flag({
  key: "show-stars",
  defaultValue: false,
  decide(params) {
    return params.cookies.get(mangleFlagName(this.key))?.value === "true";
  },
});

export const showGirlAnimation = flag({
  key: "justagirl",
  defaultValue: false,
  decide(params) {
    return params.cookies.get(mangleFlagName(this.key))?.value === "true";
  },
});
