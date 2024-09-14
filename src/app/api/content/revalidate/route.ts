import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  // idrk if this is super secure but whatever

  const headers = request.headers;
  const secret = headers.get("ContentfulWebhookSecret");

  if (secret === process.env.CONTENTFUL_WEBHOOKS_SECRET) {
    revalidateTag("posts");

    revalidatePath("/rss.xml");
    revalidatePath("/sitemap.xml");
    revalidatePath("/blog");

    return new Response(null, {
      status: 200,
    });
  } else {
    return new Response(null, {
      status: 401,
    });
  }
}
