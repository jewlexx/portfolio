import type { Metadata } from "next";
import { type ChapterRange, getChapterData } from "$/computing_compat/chapter";
import GoNext from "../next";
import Markdown from "$/components/MarkdownWrapper";

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
        <Markdown>{contents}</Markdown>
      </main>
      <GoNext chapter={chapter + 1} />
    </div>
  );
}

export function generateStaticParams() {
  function range(end: number, start = 0): number[] {
    return Array.from({ length: end - start }, (_, i) => i + start);
  }

  return range(17, 7).map((v) => ({
    chapter: v.toString(),
  }));
}
