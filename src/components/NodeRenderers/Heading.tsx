import { ReactNode } from "react";
import { BLOCKS, Block, Inline } from "@contentful/rich-text-types";
import { match } from "ts-pattern";

export function parseHeaderId(id: string | false) {
  if (!id) {
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

  const element = match(node.nodeType)
    .with(BLOCKS.HEADING_1, () => <h1 id={id}>{children}</h1>)
    .with(BLOCKS.HEADING_2, () => <h2 id={id}>{children}</h2>)
    .with(BLOCKS.HEADING_3, () => <h3 id={id}>{children}</h3>)
    .with(BLOCKS.HEADING_4, () => <h4 id={id}>{children}</h4>)
    .with(BLOCKS.HEADING_5, () => <h5 id={id}>{children}</h5>)
    .with(BLOCKS.HEADING_6, () => <h6 id={id}>{children}</h6>)
    .otherwise(() => {
      throw new Error("Unknown heading type");
    });

  return element;
}
