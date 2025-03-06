import { ReactNode } from "react";
import { BLOCKS, Block, Inline } from "@contentful/rich-text-types";
import { match } from "ts-pattern";

import { CurrentHeading } from "$/components/HeadingSelector";

export function parseHeaderId(id: string): string;
export function parseHeaderId(id: string | false): string | undefined;
export function parseHeaderId(id: string | false) {
  if (id === false) {
    return undefined;
  }
  return id.replace(/ /g, "_").toLowerCase();
}

export function headingRenderer(node: Block | Inline, children: ReactNode) {
  return <Heading node={node}>{children}</Heading>;
}

export default function Heading({
  node,
  children,
}: {
  node: Block | Inline;
  children: ReactNode;
}) {
  const id = parseHeaderId(
    node.content[0].nodeType === "text" && node.content[0].value,
  );

  const className = "hover:[&>a]:opacity-100 ";
  const props = { id, className };

  const element = match(node.nodeType)
    .with(BLOCKS.HEADING_1, () => (
      <h1 {...props}>
        {children}
        <CurrentHeading id={id} />
      </h1>
    ))
    .with(BLOCKS.HEADING_2, () => (
      <h2 {...props}>
        {children}
        <CurrentHeading id={id} />
      </h2>
    ))
    .with(BLOCKS.HEADING_3, () => (
      <h3 {...props}>
        {children}
        <CurrentHeading id={id} />
      </h3>
    ))
    .with(BLOCKS.HEADING_4, () => (
      <h4 {...props}>
        {children}
        <CurrentHeading id={id} />
      </h4>
    ))
    .with(BLOCKS.HEADING_5, () => (
      <h5 {...props}>
        {children}
        <CurrentHeading id={id} />
      </h5>
    ))
    .with(BLOCKS.HEADING_6, () => (
      <h6 {...props}>
        {children}
        <CurrentHeading id={id} />
      </h6>
    ))
    .otherwise(() => {
      throw new Error("Unknown heading type");
    });

  return element;
}
