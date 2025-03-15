import Head from "next/head";
import Link from "next/link";
import { type ChapterRange, getChapterData } from "$/computing_compat/chapter";
import { range } from "$/computing_compat/range";
import { mdToHtml } from "$/computing_compat/mdtohtml";
// import styles from "../../styles/Chapter.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: any = {};

function GoNext({
  chapter,
  home = false,
}: {
  chapter: number;
  home?: boolean;
}) {
  // useEffect(() => {
  //   const expiry = new Date();
  //   expiry.setFullYear(expiry.getFullYear() + 1);
  //   document.cookie = serialize("return", home.toString(), {
  //     expires: expiry,
  //     path: "/",
  //     sameSite: "strict",
  //   });
  // }, [home]);

  return (
    <span className={styles.next_page}>
      {home ? (
        <Link href="/">Go Home</Link>
      ) : (
        <Link href={`computing/${chapter + 1}`}>
          Continue to the next chapter
        </Link>
      )}
    </span>
  );
}

export default async function Chapter({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterString } = await params;
  const chapter = parseInt(chapterString, 10);

  const { title, content } = await getChapterData(chapter as ChapterRange);

  const contents = await mdToHtml(content.replace(/:warning:/gm, "⚠️"));

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        dangerouslySetInnerHTML={{ __html: contents }}
        className={styles.mainContent}
      ></main>
      {chapter < 17 ? (
        <GoNext chapter={chapter} />
      ) : (
        <GoNext chapter={chapter} home />
      )}
    </div>
  );
}

export function generateStaticParams() {
  return range(7, 17).map((v) => ({
    chapter: v.toString(),
  }));
}
