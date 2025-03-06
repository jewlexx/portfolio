"use client";

import Link from "next/link";

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
  return (
    <ul className="bg-base-200 fixed top-50 right-5 z-50 flex flex-col gap-2 p-4 shadow-lg">
      {headings.map((heading) => (
        <Link key={heading.id} href={`#${heading.id}`}>
          {heading.text}
        </Link>
      ))}
    </ul>
  );
}

export function CurrentHeading({ id }: { id?: string }) {
  return (
    <Link
      href={`#${id}`}
      className="link link-hover mr-1 opacity-0 transition-opacity duration-300"
    >
      #
    </Link>
  );
}
