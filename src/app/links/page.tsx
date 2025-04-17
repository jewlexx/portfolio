import { linksSupportMe, linksFindMe } from "$/links";

export const dynamic = "force-static";

export default function LinksPage() {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Support Me</h1>
        <div className="flex min-w-[25vw] flex-col flex-wrap items-center justify-center gap-4 [&>a]:w-full">
          {linksSupportMe.map((link) => (
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

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Find Me</h1>
        <div className="flex min-w-[25vw] flex-col flex-wrap items-center justify-center gap-4 [&>a]:w-full">
          {linksFindMe.map((link) => (
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
    </div>
  );
}
