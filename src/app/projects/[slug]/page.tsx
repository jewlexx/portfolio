import { type Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IconBrandGit, IconLink as LinkIcon } from "@tabler/icons-react";

import PubDate from "$/components/PubDate";
import Shield from "$/components/Shield";
import IconLink from "$/components/IconLink";
import { twitterConfiguration } from "$/consts";

import "$/styles/project.scss";
import ClientWrapper from "$/components/ClientWrapper";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    var { metadata } = await import(`$/content/projects/${params.slug}.mdx`);
  } catch (e: any) {
    return {};
  }

  const { title: projectTitle, description, pubDate, heroImage } = metadata;

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
          url: heroImage,
          alt: title,
        },
      ],
      siteName: "Juliette Cordor's Portfolio",
    },
    twitter: twitterConfiguration,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { default: Content, metadata } = await import(
      `$/content/projects/${params.slug}.mdx`
    );

    console.log("Content", Content);
    console.log("metadata", metadata);

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
    } = metadata;

    return (
      <article>
        <div className="heroImage">
          {heroImage && !hideHero && (
            <Image width={1020} height={510} src={heroImage} alt="" />
          )}
        </div>
        <div className="prose">
          <div className="title">
            <h1>{title}</h1>
            <i>{description}</i>
            <div className="date">
              <PubDate pubDate={new Date(pubDate)} />
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
                🤏 This is a mini project, meaning it&apo;s all here.
                There&apos;s nothing else to it.
              </p>
            )}
            {shields && (
              <p className="shields">
                {shields?.map((shield: any) => (
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
                />
              )}
              {homepage && (
                <IconLink
                  url={homepage}
                  icon={LinkIcon}
                  title="Homepage link"
                />
              )}
            </span>
            <hr />
          </div>
          <ClientWrapper>
            <Content />
          </ClientWrapper>
        </div>
      </article>
    );
  } catch (e: any) {
    if (e.code === "MODULE_NOT_FOUND") {
      return notFound();
    } else {
      return <div>Error</div>;
    }
  }
}
