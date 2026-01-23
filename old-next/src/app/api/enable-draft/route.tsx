import { NextRequest } from "next/server";
import { draftMode } from "next/headers";

export async function GET(request: NextRequest): Promise<Response | void> {
  if (process.env.NODE_ENV === "production") {
    const { enableDraftHandler } = await import(
      "@contentful/vercel-nextjs-toolkit/app-router"
    );
    return enableDraftHandler(request);
  } else if (process.env.NODE_ENV === "development") {
    const draft = await draftMode();
    if (draft.isEnabled) {
      draft.disable();
      return new Response("Draft mode is disabled");
    } else {
      draft.enable();
      return new Response("Draft mode is enabled");
    }
  }
}
