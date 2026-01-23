import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";
import { metadataSchema } from "./projects";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/projects" }),
  schema: metadataSchema,
});

export const collections = { projects };
