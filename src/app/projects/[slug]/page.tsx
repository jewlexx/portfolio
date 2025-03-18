import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IconBrandGit, IconLink as LinkIcon } from "@tabler/icons-react";

import PubDate from "$/components/PubDate";
import Shield from "$/components/Shield";
import IconLink from "$/components/IconLink";
import { twitterConfiguration } from "$/consts";
import { getProjectBySlug, getProjectSlugs } from "$/content/projects";
import markdownToHtml from "$/content/markdown";
import DownloadForm from "./DownloadForm";

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
  } = post;

  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <div className="heroImage">
        {heroImage && !hideHero && (
          <Image width={500} height={200} src={heroImage} alt="" />
        )}
      </div>
      <div className="prose">
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
                title="Git Source link"
                className="btn-secondary"
              />
            )}
            {homepage && (
              <IconLink
                url={homepage}
                icon={LinkIcon}
                title="Homepage link"
                className="btn-secondary"
              />
            )}
            <DownloadForm post={post} />
          </span>
          <hr />
        </div>
        <section dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
}
