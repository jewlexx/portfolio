import styles from "./page.module.scss";

export default async function Page({ params }: { params: { slug: string } }) {
  const Content = await import(`$/content/projects/${params.slug}.mdx`);

  return <Content />;
}
