"use server";

import { cookies } from "next/headers";

export async function setThemePersist(theme: string) {
  const cookieStore = await cookies();
  cookieStore.set("theme", theme, { path: "/", maxAge: 60 * 60 * 24 * 365 });
}
