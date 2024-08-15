"use client";

import { type ReactNode, useEffect, useState } from "react";

interface Props {
  long?: string;
  short?: string;
  shrink?: number | "portrait";
  hide?: number | "portrait";
  children?: ReactNode;
}

export default function Shrunk({
  long,
  short = long?.split(" ")[0],
  shrink = "portrait",
  hide = 500,
  children,
}: Props) {
  const [shrunk, setShrunk] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function updateTitle() {
      const shouldShrink =
        (shrink === "portrait" && window.innerWidth < window.innerHeight) ||
        window.innerWidth < (shrink as number);

      const shouldHide =
        (shrink === "portrait" && window.innerWidth < window.innerHeight) ||
        window.innerWidth < (hide as number);

      setShrunk(shouldShrink);
      setHidden(shouldHide);
    }

    updateTitle();

    window.addEventListener("resize", updateTitle);
    return () => {
      window.removeEventListener("resize", updateTitle);
    };
  }, [hide, shrink]);

  if (long === undefined) {
    return children;
  } else if (hidden) {
    return null;
  } else if (shrunk) {
    return short;
  } else {
    return long;
  }
}
