"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import useSound from "use-sound";

import { knownTheme } from "$/theme";
import { setThemePersist } from "./actions";

export default function ThemeToggle({
  defaultTheme,
}: {
  defaultTheme: string;
}) {
  const [theme, setTheme] = useState(defaultTheme);
  const [playOn] = useSound("/audio/switch-on.compressed.mp3");
  const [playOff] = useSound("/audio/switch-off.compressed.mp3");

  return (
    <button
      title={"Toggle theme"}
      className={`btn btn-secondary btn-circle lg:btn-lg m-1 [&>svg]:!text-white`}
      onClick={() => {
        if (theme === knownTheme.light) {
          playOff();
        } else {
          playOn();
        }

        setThemePersist(
          theme === knownTheme.light ? knownTheme.dark : knownTheme.light,
        );

        const currentDocTheme =
          document.documentElement.getAttribute("data-theme");

        if (currentDocTheme === knownTheme.dark) {
          setTheme(knownTheme.light);
          document.documentElement.setAttribute("data-theme", knownTheme.light);
        } else {
          setTheme(knownTheme.dark);
          document.documentElement.setAttribute("data-theme", knownTheme.dark);
        }
      }}
    >
      {theme === knownTheme.light ? <FaSun /> : <FaMoon />}
    </button>
  );
}
