import Image from "next/image";
import type { Metadata } from "next";
import { IconBrandApple, IconBrandAndroid } from "@tabler/icons-react";

import IconLink from "$/components/IconLink";
import repertoireIcon from "$/../public/icons/repertoire.png";
import productImages from "./images";

const productImageComponents = Object.entries(productImages).map(
  ([key, image]) => {
    return (
      <Image
        src={image}
        alt={`${key} page`}
        key={key}
        height={384}
        quality={25}
        loading="lazy"
        placeholder="blur"
      />
    );
  },
);

export const metadata: Metadata = {
  title: "Repertoire",
  description: "A simple way to manage eScripts from one app",
  openGraph: {
    type: "article",
    authors: ["Juliette Cordor"],
    images: {
      url: "/hero-images/repertoire.png",
    },
  },
};

export default function Page() {
  return (
    <article>
      <div className="project-main">
        <div className="title">
          <span className="mb-4 flex gap-4">
            <Image
              className="m-0 p-0"
              loading="eager"
              src={repertoireIcon}
              alt="Repertoire Icon"
              width={64}
              height={64}
              quality={25}
              placeholder="blur"
              preload
            />
            <h1 className="mb-0 self-center">{metadata.title as string}</h1>
          </span>
          <i>{metadata.description as string}</i>
          <div className="date">
            {/* {pubDate && <PubDate pubDate={new Date(pubDate)} />} */}
            {/* {
								updatedDate && (
									<div className="last-updated-on">
										Last updated on <FormattedDate date={updatedDate} />
									</div>
								)
							} */}
          </div>
          <div className="flex flex-wrap justify-center gap-8 portrait:*:not-first:hidden">
            {productImageComponents}
          </div>

          {/* {shields && (
            <p className="flex flex-wrap justify-center gap-2">
              {shields?.map((shield) => (
                <Shield {...shield} key={shield.src} />
              ))}
            </p>
          )} */}

          <span className="linksContainer">
            <IconLink
              url="https://testflight.apple.com/join/gq97wtCk"
              icon={IconBrandApple}
              title="Download iOS Beta"
              className="btn-secondary"
            />
            <IconLink
              url="https://gitlab.com/cordor/repertoire/-/releases"
              icon={IconBrandAndroid}
              title="Download Android Beta"
              className="btn-secondary"
            />
            {/* {repo && (
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
            )} */}
          </span>
          <hr />
        </div>
      </div>
    </article>
  );
}
