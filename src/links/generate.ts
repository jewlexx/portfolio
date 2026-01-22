export function objToParams(obj: Record<string, string>) {
  return `?${Object.entries(obj).map(([key, value], i) => {
    return `${i === 0 ? "" : "&"}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  })}`;
}

function baseGenerateLink(baseUrl: string, params: Record<string, string>) {
  return `${baseUrl}${objToParams(params)}`;
}

export const generate = {
  twitter: (slug: string) =>
    baseGenerateLink("https://twitter.com/intent/tweet", {
      text: "Woah I just found this really cool blog post!!! Go check it out",
      url: `https://www.cordor.dev/blog/${slug}`,
    }),
  bluesky: (slug: string) =>
    baseGenerateLink("https://bluesky.app/intent/compose", {
      text: `Woah I just found this really cool blog post!!! Go check it out, https://www.cordor.dev/blog/${slug}`,
    }),
} as const;
