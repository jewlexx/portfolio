import { getSelectedEngine, performSearch } from "./actions";

import { SiDuckduckgo, SiStartpage } from "react-icons/si";
import { FaGoogle, FaYandexInternational } from "react-icons/fa";

export default async function Page() {
  const selectedEngine = await getSelectedEngine();

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
          <select
            name="engine"
            className="select select-bordered mt-2 w-full"
            defaultValue={selectedEngine}
          >
            <option value="duckDuckGo">DuckDuckGo</option>
            <option value="google">Google</option>
            <option value="startpage">StartPage</option>
          </select>

          <button className="btn btn-neutral mt-4">Search</button>
        </fieldset>
      </form>
    </div>
  );
}
