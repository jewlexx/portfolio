import { type Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { metadata } = await import(`$/content/projects/${params.slug}.mdx`);

  const { title, description, pubDate, shields, toy, hideHero } = metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        // {
        //   url: heroImage,
        //   alt: title,
        // },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@jewelexx",
      site: "https://cordor.dev",
      title,
      description,
      images: [
        // {
        //   url: heroImage,
        //   alt: title,
        // },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { default: Content } = await import(
      `$/content/projects/${params.slug}.mdx`
    );

    return <Content />;
  } catch (e: any) {
    if (e.code === "MODULE_NOT_FOUND") {
      return notFound();
    } else {
      return <div>Error</div>;
    }
  }
}
