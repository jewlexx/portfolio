import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  // idrk if this is super secure but whatever

  const headers = request.headers;
  const secret = headers.get("ContentfulWebhookSecret");

  if (secret === process.env.CONTENTFUL_ACCESS_TOKEN) {
    revalidateTag("posts");
  }
}
