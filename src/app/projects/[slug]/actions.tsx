"use server";

import { Arch, Os, parseOs, parseArch } from "$/arch";
import { redirect, RedirectType } from "next/navigation";

export async function download(formData: FormData) {
  const data = {
    arch: formData.get("arch"),
    os: formData.get("os"),
  };

  validateData(data);

  return redirect(
    `./download?arch=${data.arch}&os=${data.os}`,
    RedirectType.replace,
  );
}
