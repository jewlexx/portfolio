import { z } from "astro/zod";
import { Arch, Os } from "$/arch";

export const archSchema = z.nativeEnum(Arch);

export const osSchema = z.nativeEnum(Os);

export const downloadSchema = z.object({
  src: z.literal("github"),
  infoExtractor: z.string().transform((input) => new RegExp(input)),
  arch: z.array(archSchema),
  os: z.array(osSchema),
});
export type Download = z.infer<typeof downloadSchema>;

export const shieldSchema = z.object({
  alt: z.string().optional(),
  src: z.string().optional(),
  href: z.string().optional(),
});
export type Shield = z.infer<typeof shieldSchema>;

export const metadataSchema = z.object({
  featured: z.boolean().optional().default(false),
  title: z.string(),
  description: z.string(),
  emoji: z.string().optional(),
  pubDate: z.string().optional(),
  repo: z.string().optional(),
  homepage: z.string().optional(),
  heroImage: z.string().optional(),
  profileImage: z.string().optional(),
  shields: z.array(shieldSchema).optional().default([]),
  toy: z.boolean().optional().default(false),
  hideHero: z.boolean().optional().default(false),
  download: downloadSchema.optional(),
});
export type Metadata = z.infer<typeof metadataSchema>;

export const projectSchema = metadataSchema.extend({
  slug: z.string(),
  content: z.string().optional(),
});
export type Project = z.infer<typeof projectSchema>;

export function sortProject(a: Project, b: Project) {
  if (a.featured) {
    return -1;
  }
  if (b.featured) {
    return 1;
  }

  if (a.pubDate === undefined || b.pubDate === undefined) {
    return 0;
  }

  if (new Date(a.pubDate) > new Date(b.pubDate)) {
    return -1;
  } else {
    return 1;
  }
}
