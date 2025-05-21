"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const searchEngines = {
  duckDuckGo: (query: string) =>
    `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
  google: (query: string) =>
    `https://www.google.com/search?q=${encodeURIComponent(query)}`,
  startpage: (query: string) =>
    `https://www.startpage.com/do/search?q=${encodeURIComponent(query)}`,
  yandex: (query: string) =>
    `https://yandex.com/search/?text=${encodeURIComponent(query)}`,
};

const schema = z.object({
  search: z.string().min(1, "Search query is required"),
  engine: z.enum(["duckDuckGo", "google", "startpage", "yandex"]),
});

export async function performSearch(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const data = schema.parse(rawData);

  const { search, engine } = data;

  const searchUrl = searchEngines[engine](search);

  redirect(searchUrl);
}
