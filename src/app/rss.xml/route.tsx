import { generateRssFeed } from "$/content/feed";

export function GET(request: Request) {
  const feed = generateRssFeed();

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
