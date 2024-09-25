import { getProjectBySlug } from "$/content/projects";
import { notFound } from "next/navigation";

export function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const post = getProjectBySlug(params.slug);

  if (!post) {
    return Response.json(
      {
        error: "Project not found",
        project: slug,
      },
      {
        status: 404,
        statusText: "Not Found",
      }
    );
  }

  const { download } = post;

  if (!download) {
    return Response.json(
      {
        error: "Project does not have a download link",
        project: slug,
      },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  if (download.src === "github") {
  }

  return new Response(null, {
    status: 200,
  });
}
