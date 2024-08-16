import Image from "next/image";

import { PostInfo } from "$/content/posts";
import { ProgressBarLink } from "$/components/ProgressBar";

import styles from "./index.module.scss";
import ToyTooltip from "../ToyTooltip";

export default function PostDisplay({ post }: { post: PostInfo }) {
  return (
    <ProgressBarLink href={`/projects/${post.slug}/`} className={styles.link}>
      {post.heroImage && (
        <Image width={1200} height={630} src={post.heroImage} alt="" />
      )}
      {post.toy && <ToyTooltip />}
      <h4 className={styles.title}>{post.title}</h4>
    </ProgressBarLink>
  );
}
