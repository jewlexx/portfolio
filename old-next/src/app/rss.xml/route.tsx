import { generateRssFeed } from "$/content/feed";

export const revalidate = 60;

export async function GET() {
  const feed = await generateRssFeed();

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
