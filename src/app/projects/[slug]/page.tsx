import { notFound } from "next/navigation";
import styles from "./page.module.scss";

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
