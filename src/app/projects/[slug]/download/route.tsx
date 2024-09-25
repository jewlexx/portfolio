import { getProjectBySlug } from "$/content/projects";
import { NextRequest } from "next/server";
import { match } from "ts-pattern";

enum Arch {
  x64 = "x86_64",
  x86 = "i686",
  arm64 = "aarch64",
}

function getArch(arch: string): Arch | null {
  return match(arch)
    .with("x64", () => Arch.x64)
    .with("x86_64", () => Arch.x64)
    .with("x86", () => Arch.x86)
    .with("i686", () => Arch.x86)
    .with("arm64", () => Arch.arm64)
    .with("aarch64", () => Arch.arm64)
    .otherwise(() => null);
}

export function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const arch = getArch(searchParams.get("arch") ?? "");

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
