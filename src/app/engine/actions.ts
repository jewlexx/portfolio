"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SearchEngine = keyof typeof searchEngines;

const searchEngines = {
  duckDuckGo: (query: string) =>
    `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
  google: (query: string) =>
    `https://www.google.com/search?q=${encodeURIComponent(query)}`,
  startpage: (query: string) =>
    `https://www.startpage.com/do/search?q=${encodeURIComponent(query)}`,
  yandex: (query: string) =>
    `https://yandex.com/search/?text=${encodeURIComponent(query)}`,
} as const;

const schema = z.object({
  search: z.string().min(1, "Search query is required"),
  engine: z.enum(["duckDuckGo", "google", "startpage", "yandex"]),
});

export async function performSearch(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const data = schema.parse(rawData);

  const { search, engine } = data;

  const cookieStore = await cookies();

  cookieStore.set("selectedEngine", engine);

  const searchUrl = searchEngines[engine](search);

  redirect(searchUrl);
}

export async function getSelectedEngine(): Promise<SearchEngine> {
  const cookieStore = await cookies();
  const selectedEngine = cookieStore.get("selectedEngine");

  if (selectedEngine && selectedEngine.value in searchEngines) {
    return selectedEngine.value as SearchEngine;
  }

  // Default to duckDuckGo if no engine is selected
  return "duckDuckGo";
}
