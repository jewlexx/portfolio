import { NextRequest } from "next/server";
import { getProjectBySlug, getProjectSlugs } from "$/content/projects";
import { parseArch } from "$/arch";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function GET(
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const arch = parseArch(searchParams.get("arch") ?? "");

  if (!arch) {
    return Response.json(
      {
        error: "Missing or invalid architecture provided for download",
      },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  const post = getProjectBySlug(slug);

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
    const repoUrl = post.repo;

    if (!repoUrl) {
      return Response.json(
        {
          error: "Project had invalid or missing download reference",
          project: slug,
        },
        {
          status: 400,
          statusText: "Bad Request",
        }
      );
    }

    const matches =
      /^https:\/\/github\.com\/(?<user>[a-zA-Z0-9\-_\.]+)\/(?<repo>[a-zA-Z0-9\-_\.]+$)/.exec(
        repoUrl
      )?.groups;

    if (!matches) {
      return Response.json(
        {
          error: "Project had invalid or missing download reference",
          project: slug,
        },
        {
          status: 400,
          statusText: "Bad Request",
        }
      );
    }

    const { user, repo } = matches;

    const downloadUrl = `https://github.com/${user}/${repo}/releases/latest/download/${slug}-${arch}.exe`;

    return Response.redirect(downloadUrl, 302);
  }

  return Response.json(
    {
      error: "Project had invalid or missing download reference",
      project: slug,
    },
    {
      status: 400,
      statusText: "Bad Request",
    }
  );
}
