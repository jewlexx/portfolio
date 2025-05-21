import { performSearch } from "./actions";

import { SiDuckduckgo, SiStartpage } from "react-icons/si";
import { FaGoogle, FaYandexInternational } from "react-icons/fa";

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
            required
          />

          <label className="label">Pick your engine</label>
          <label className="label">
            <input
              name="engine"
              type="radio"
              value="duckDuckGo"
              className="radio"
              required
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
              required
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
              required
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
              required
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
