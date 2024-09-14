import { generateRssFeed } from "$/content/feed";

export async function GET() {
  const feed = await generateRssFeed();

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
