"use client";

import { useEffect, useState } from "react";

export type HeadingType =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6";

export interface Heading {
  headerType: HeadingType;
  text: string;
  id: string;
}

export default function HeadingSelector({ headings }: { headings: Heading[] }) {
  const [currentHeading, setCurrentHeading] = useState<string | undefined>();

  useEffect(() => {
    function replaceState(url: string) {
      window.history.replaceState(null, "", url);
      setCurrentHeading(url.slice(1) || undefined);
    }

    function handleScroll() {
      const currentHeading = window.location.hash.slice(1);

      const sections = document.querySelectorAll<HTMLHeadingElement>(
        "h1, h2, h3, h4, h5, h6",
      );
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (section.id) {
            if (currentHeading !== section.id) {
              replaceState(`#${section.id}`);
            }
          } else if (currentHeading) {
            replaceState("#");
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className="bg-base-200 fixed top-50 right-5 z-50 flex flex-col gap-2 p-4 shadow-lg">
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          className={heading.id === currentHeading ? "font-bold" : ""}
        >
          {heading.text}
        </a>
      ))}
    </ul>
  );
}

export function CurrentHeading({ id }: { id?: string }) {
  return (
    <a
      href={`#${id}`}
      className="link link-hover float-left mr-1 -ml-6 opacity-0 transition-opacity duration-300"
    >
      #
    </a>
  );
}
