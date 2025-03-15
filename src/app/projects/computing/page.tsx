import type { Metadata } from "next";
import { cookies } from "next/headers";
import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/Home.module.scss";

export const metadata: Metadata = {
  title: "Python Homework",
  description: "My Python homework... but in a website",
};

export default async function Index() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: any = {};

  const cookieStore = await cookies();
  const returning = cookieStore.get("return")?.value === "true";

  return (
    <div
      className={styles.global_container}
      style={{ opacity: returning === null ? "0%" : "100%" }}
    >
      <Head>
        <title>Python Homework</title>
      </Head>

      <main className={styles.container}>
        <h1 className={styles.header}>
          {returning ? "Welcome Back" : "Hello"}, <span>{"Mr AB"}</span>
        </h1>
        <desc>
          This is a little website I made to walk you through my Holiday
          Homework
        </desc>
        <span className={styles.start_button}>
          <Link href="7">Get Started</Link>
        </span>
      </main>
    </div>
  );
}
