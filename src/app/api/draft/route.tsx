import { draftMode } from "next/headers";

export async function GET() {
  if (process.env.NODE_ENV === "development") {
    const draft = await draftMode();
    draft.enable();
    return new Response("Draft mode is enabled");
  } else {
    return new Response("Not supported in production environments");
  }
}
