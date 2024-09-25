"use client";

import { useState } from "react";
import { IconDownload } from "@tabler/icons-react";
import { Arch } from "$/arch";
import { ProjectInfo } from "$/content/projects";
import IconLink from "$/components/IconLink";

import styles from "./index.module.scss";

export default function DownloadForm({ post }: { post: ProjectInfo }) {
  const { download } = post;
  const [arch, setArch] = useState<Arch>(Arch.x64);

  if (!download) {
    return null;
  }

  return (
    <div className={styles.container}>
      <p>Download</p>
      <select name="os">
        <option>Windows</option>
      </select>
      <select name="arch" onChange={(e) => setArch(e.target.value as Arch)}>
        {Object.values(Arch).map((arch) => (
          <option key={arch} value={arch}>
            {arch}
          </option>
        ))}
      </select>
      <IconLink
        url={"/projects/" + post.slug + "/download?arch=" + arch}
        icon={IconDownload}
        title="Download link"
      />
    </div>
  );
}
