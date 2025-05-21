import { performSearch } from "./actions";

import { SiDuckduckgo, SiStartpage } from "react-icons/si";
import { FaGoogle, FaYandexInternational } from "react-icons/fa";

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

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form action={performSearch} className="w-96">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 text-2xl">
          <legend className="fieldset-legend">Pick a search engine</legend>

          <label className="label">Enter your search</label>
          <input
            type="text"
            className="input"
            name="search"
            placeholder="Search"
          />

          <label className="label">Pick your engine</label>
          <label className="label">
            <input
              name="engine"
              type="radio"
              value="duckDuckGo"
              className="radio"
            ></input>
            <SiDuckduckgo />
            DuckDuckGo
          </label>
          <label className="label">
            <input
              name="engine"
              value="google"
              type="radio"
              className="radio"
            ></input>
            <FaGoogle />
            Google
          </label>
          <label className="label">
            <input
              name="engine"
              value="startpage"
              type="radio"
              className="radio"
            ></input>
            <SiStartpage />
            Startpage
          </label>
          <label className="label">
            <input
              name="engine"
              value="yandex"
              type="radio"
              className="radio"
            ></input>
            <FaYandexInternational />
            Yandex
          </label>

          <button className="btn btn-neutral mt-4">Search</button>
        </fieldset>
      </form>
    </div>
  );
}
