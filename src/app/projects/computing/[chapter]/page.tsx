import type { Metadata } from "next";
import { type ChapterRange, getChapterData } from "$/computing_compat/chapter";
import { range } from "$/computing_compat/range";
import Markdown from "markdown-to-jsx";
import GoNext from "../next";
import { markdownOptions } from "$/components/MarkdownWrapper";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}): Promise<Metadata> {
  const { chapter: chapterString } = await params;
  const chapter = parseInt(chapterString, 10);

  const { title } = await getChapterData(chapter as ChapterRange);

  return { title: `Juliette - ${title}` };
}

export default async function Chapter({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterString } = await params;
  const chapter = parseInt(chapterString, 10);

  const { content } = await getChapterData(chapter as ChapterRange);

  const contents = content.replace(/:warning:/gm, "⚠️");

  return (
    <div className="flex w-full flex-col items-center">
      <main className="prose">
        <Markdown options={markdownOptions}>{contents}</Markdown>
      </main>
      <GoNext chapter={chapter + 1} />
    </div>
  );
}

export function generateStaticParams() {
  return range(17, 7).map((v) => ({
    chapter: v.toString(),
  }));
}
