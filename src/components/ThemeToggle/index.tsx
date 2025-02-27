"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { themeChange } from "theme-change";

import { knownTheme, themeToggleList } from "$/theme";
import { setThemePersist } from "./actions";

export default function ThemeToggle({
  defaultTheme,
}: {
  defaultTheme: string;
}) {
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <button
      role="button"
      title={"Toggle theme"}
      className={`btn btn-circle lg:btn-lg m-1 [&>svg]:!text-white`}
      data-toggle-theme={themeToggleList}
      data-act-class="ACTIVECLASS"
      onClick={() => {
        setThemePersist(theme);
        setTheme((oldTheme) =>
          oldTheme === knownTheme.light ? knownTheme.dark : knownTheme.light,
        );
      }}
    >
      {theme === knownTheme.light ? <FaSun /> : <FaMoon />}
    </button>
  );
}
