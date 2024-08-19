import { type ProjectInfo } from "$/content/projects";
import { ProgressBarLink } from "$/components/ProgressBar";
import ToyTooltip from "$/components/ToyTooltip";
import PostImage from "$/components/PostImage";

import styles from "./index.module.scss";

export default function PostDisplay({ post }: { post: ProjectInfo }) {
  return (
    <ProgressBarLink href={`/projects/${post.slug}/`} className={styles.link}>
      <PostImage post={post} />
      {post.toy && <ToyTooltip />}
    </ProgressBarLink>
  );
}
