import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  IconBrandGit,
  IconLink as LinkIcon,
  IconDownload,
} from "@tabler/icons-react";

import PubDate from "$/components/PubDate";
import Shield from "$/components/Shield";
import IconLink from "$/components/IconLink";
import { twitterConfiguration } from "$/consts";
import { getProjectBySlug, getProjectSlugs } from "$/content/projects";
import markdownToHtml from "$/content/markdown";
import Markdown from "$/components/MarkdownWrapper";
import { match } from "ts-pattern";

import "$/styles/project.css";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = getProjectBySlug(params.slug);

  if (!post) {
    return {};
  }

  const { title: projectTitle, description, pubDate, heroImage } = post;

  const title = `${projectTitle} | Juliette's Projects`;

  return {
    title,
    description,
    openGraph: {
      releaseDate: pubDate,
      title,
      description,
      images: [
        {
          url: heroImage!,
          alt: title,
        },
      ],
      siteName: "Juliette Cordor's Portfolio",
    },
    twitter: twitterConfiguration,
  };
}

export function justifyRepoLink(repo: string) {
  return match(repo)
    .when(
      (repo) => repo.startsWith("http://"),
      () => repo.replace("http://", "https://"),
    )
    .when(
      (repo) => repo.startsWith("https://"),
      () => repo,
    )
    .when(
      (repo) => /^[a-zA-Z0-9\-_.]+\/[a-zA-Z0-9\-_.]+$/.test(repo),
      () => `https://github.com/${repo}`,
    )
    .when(
      (repo) => /^[a-zA-Z0-9\-_.]+$/.test(repo),
      () => `https://github.com/jewlexx/${repo}`,
    )
    .otherwise(() => null);
}

export function githubRelease(repo: string | undefined): string | undefined {
  if (!repo) {
    return undefined;
  }

  const repoUrl = justifyRepoLink(repo);

  if (!repoUrl) {
    return undefined;
  }

  if (repoUrl.startsWith("https://github.com/")) {
    return `${repoUrl}/releases/latest`;
  }

  return undefined;
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getProjectBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const {
    title,
    description,
    repo,
    pubDate,
    shields,
    toy,
    hideHero,
    homepage,
    heroImage,
    download,
  } = post;

  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <div className="heroImage">
        {heroImage && !hideHero && (
          <Image width={500} height={200} src={heroImage} alt="" />
        )}
      </div>
      <div className="project-main">
        <div className="title">
          <h1>{title}</h1>
          <i>{description}</i>
          <div className="date">
            {pubDate && <PubDate pubDate={new Date(pubDate)} />}
            {/* {
								updatedDate && (
									<div className="last-updated-on">
										Last updated on <FormattedDate date={updatedDate} />
									</div>
								)
							} */}
          </div>
          {toy && (
            <p>
              🤏 This is a mini project, meaning it&apo;s all here. There&apos;s
              nothing else to it.
            </p>
          )}
          {shields && (
            <p className="flex flex-wrap justify-center gap-2">
              {shields?.map((shield) => (
                <Shield {...shield} key={shield.src} />
              ))}
            </p>
          )}

          <span className="linksContainer">
            {repo && (
              <IconLink
                url={repo}
                icon={IconBrandGit}
                title="Git Source"
                className="btn-secondary"
              />
            )}
            {homepage && (
              <IconLink
                url={homepage}
                icon={LinkIcon}
                title="Homepage"
                className="btn-secondary"
              />
            )}
            {download && (
              <IconLink
                url={githubRelease(repo) ?? "#"}
                title="Download"
                icon={IconDownload}
                className="btn-secondary"
              />
            )}
          </span>
          <hr />
        </div>
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}
