import Image from "next/image";

import { type ProjectInfo } from "$/content/projects";

import styles from "./index.module.css";

export default function PostImage({ post }: { post: ProjectInfo }) {
  if (!post.heroImage && !post.profileImage) {
    return null;
  }

  if (post.featured && post.heroImage) {
    return (
      <span>
        <Image width={1200} height={630} src={post.heroImage} alt="" />
        <h4 className={styles.title}>{post.title}</h4>
      </span>
    );
  }

  if (post.profileImage) {
    return (
      <span className={`${styles.card} ${styles.nonFeatured}`}>
        <Image width={256} height={256} src={post.profileImage} alt="" />
        <h4 className={styles.title}>{post.title}</h4>
      </span>
    );
  }
}
