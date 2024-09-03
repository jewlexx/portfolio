// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Metadata } from "next";

export const SITE_TITLE = "Juliette Cordor's silly little universe";
export const SITE_DESCRIPTION =
  "Juliette Cordor's section of the internet. Juliette is a developer, among other things, but mostly that.";

export const twitterConfiguration: Metadata["twitter"] = {
  card: "summary_large_image",
  creator: "@jewlexx",
  site: "https://cordor.dev",
};

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cordor.dev"
    : "http://localhost:3000";
