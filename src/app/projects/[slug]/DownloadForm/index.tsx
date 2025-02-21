"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { TbDownload } from "react-icons/tb";

import { Arch, getArchName, getOsName, Os, parseArch, parseOs } from "$/arch";
import { ProjectInfo } from "$/content/projects";
import { useRouter } from "next/navigation";

interface DownloadFormData {
  arch: Arch;
  os: Os;
}

function validateData(data: {
  arch: FormDataEntryValue | null;
  os: FormDataEntryValue | null;
}): asserts data is DownloadFormData {
  if (!data.arch) {
    throw new Error("Arch is required");
  }
  if (!data.os) {
    throw new Error("OS is required");
  }

  if (typeof data.arch !== "string") {
    throw new Error("Arch must be a string");
  }
  if (typeof data.os !== "string") {
    throw new Error("OS must be a string");
  }

  const arch = parseArch(data.arch);
  if (!arch) {
    throw new Error("Invalid arch");
  }

  const os = parseOs(data.os);
  if (!os) {
    throw new Error("Invalid os");
  }
}

function validatedData(formData: FormData): DownloadFormData {
  const data = { arch: formData.get("arch"), os: formData.get("os") };

  validateData(data);

  return data;
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
