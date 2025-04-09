import { linksPage } from "$/links";

export default function LinksPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Links</h1>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4">
        {linksPage.map((link) => (
          <a
            key={link.title}
            href={`https://${link.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${link.className}`}
          >
            <link.icon size={24} />
            {link.prettyTitle ?? link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
