"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [selectionHovered, setSelectionHovered] = useState(false);

  useEffect(() => {
    function updateHash(url: string) {
      window.history.replaceState(null, "", url);
      setCurrentHeading(url.slice(1) || undefined);
    }

    function handleHashChange() {
      const currentHeading = window.location.hash.slice(1);
      setCurrentHeading(currentHeading);
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
              updateHash(`#${section.id}`);
            }
          } else if (currentHeading) {
            updateHash("#");
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ul
      className="bg-base-200 fixed top-50 right-5 z-50 flex flex-col gap-2 p-4 shadow-lg"
      onMouseEnter={() => setSelectionHovered(true)}
      onMouseLeave={() => setSelectionHovered(false)}
    >
      {headings.map((heading) => (
        <motion.li key={heading.id} animate={{ width: "auto" }}>
          <AnimatePresence>
            {selectionHovered && (
              <motion.a
                initial="hidden"
                exit="hidden"
                whileHover={{ opacity: 1 }}
                variants={{
                  hovered: { opacity: 0.5 },
                  active: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                animate={currentHeading === heading.id ? "active" : "hovered"}
                href={`#${heading.id}`}
                className={heading.id === currentHeading ? "font-bold" : ""}
              >
                {heading.text}
              </motion.a>
            )}
          </AnimatePresence>
        </motion.li>
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
