import { defineCollection } from "astro:content";

import { glob, file } from "astro/loaders";

import { z } from "astro/zod";
import { Arch, Os } from "./arch";

export const archSchema = z.nativeEnum(Arch);

export const osSchema = z.nativeEnum(Os);

export const downloadSchema = z.object({
  src: z.literal("github"),
  infoExtractor: z.string(),
  arch: z.array(archSchema),
  os: z.array(osSchema),
});

export const shieldSchema = z.object({
  alt: z.string().optional(),
  src: z.string().optional(),
  href: z.string().optional(),
});

export const metadataSchema = z.object({
  featured: z.boolean().optional(),
  title: z.string(),
  description: z.string(),
  emoji: z.string().optional(),
  pubDate: z.string(),
  repo: z.string().optional(),
  homepage: z.string().optional(),
  heroImage: z.string().optional(),
  profileImage: z.string().optional(),
  shields: z.array(shieldSchema).optional(),
  toy: z.boolean().optional(),
  hideHero: z.boolean().optional(),
  download: downloadSchema.optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/projects" }),
  schema: metadataSchema,
});

export const collections = { projects };
