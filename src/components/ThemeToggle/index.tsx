import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

import { knownTheme } from "$/theme";

export default function ThemeToggle({
  defaultTheme,
}: {
  defaultTheme: string;
}) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <button
      title={"Toggle theme"}
      className={`btn btn-secondary btn-circle lg:btn-lg m-1 [&>svg]:text-white!`}
    >
      {theme === knownTheme.light ? <FaSun /> : <FaMoon />}
    </button>
  );
}
