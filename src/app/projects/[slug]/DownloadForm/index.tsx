"use client";

import { useState } from "react";
import { IconDownload } from "@tabler/icons-react";
import { Arch, getArchName, getOsName } from "$/arch";
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
        {download.os.map((os) => (
          <option key={os} value={os}>
            {getOsName(os)}
          </option>
        ))}
      </select>
      <select name="arch" onChange={(e) => setArch(e.target.value as Arch)}>
        {download.arch.map((arch) => (
          <option key={arch} value={arch}>
            {getArchName(arch)}
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
