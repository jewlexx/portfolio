"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { TbDownload } from "react-icons/tb";

import { Arch, getArchName, getOsName, Os } from "$/arch";
import { ProjectInfo } from "$/content/projects";
import { useRouter } from "next/navigation";

interface DownloadFormData {
  arch: Arch;
  os: Os;
}

function generateDownloadUrl(data: DownloadFormData, slug: string) {
  const { arch, os } = data;

  return `/projects/${slug}/download?arch=${arch}&os=${os}`;
}

export default function DownloadForm({ post }: { post: ProjectInfo }) {
  const { register, handleSubmit } = useForm<DownloadFormData>();
  const router = useRouter();
  const onSubmit: SubmitHandler<DownloadFormData> = (data) => {
    const url = generateDownloadUrl(data, post.slug);
    router.push(url);
  };

  const { download } = post;

  if (!download) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="bg-base-200 border-base-300 rounded-box fieldset gap-2 border p-4">
        <legend className="fieldset-legend">Download</legend>

        <label className="fieldset-label">
          Select OS
          <select className="select" {...register("os")}>
            {download.os.map((os) => (
              <option key={os} value={os}>
                {getOsName(os)}
              </option>
            ))}
          </select>
        </label>

        <label className="fieldset-label">
          Select Arch
          <select
            className="select"
            {...register("arch")}
            // onChange={(e) => setArch(e.target.value as Arch)}
          >
            {download.arch.map((arch) => (
              <option key={arch} value={arch}>
                {getArchName(arch)}
              </option>
            ))}
          </select>
        </label>

        <button
          className={`btn btn-primary`}
          type="submit"
          title="Download link"
        >
          <TbDownload />
          Download
        </button>
      </fieldset>
    </form>
  );
}
