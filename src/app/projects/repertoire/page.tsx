import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repertoire",
  description: "A simple way to manage eScripts from one app",
};

export default function Page() {
  return (
    <article>
      <div className="heroImage">
        {/* {heroImage && !hideHero && (
          <Image width={500} height={200} src={heroImage} alt="" />
        )} */}
      </div>
      <div className="project-main">
        <div className="title">
          <h1>{metadata.title as string}</h1>
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
          {/* {shields && (
            <p className="flex flex-wrap justify-center gap-2">
              {shields?.map((shield) => (
                <Shield {...shield} key={shield.src} />
              ))}
            </p>
          )} */}

          <span className="linksContainer">
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
