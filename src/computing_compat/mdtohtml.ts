import { unified } from "unified";
import remarkParse from "remark-parse";
import type { Handler } from "mdast-util-to-hast";
import type { Code } from "mdast";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type HandlerResult = ReturnType<Handler>;

// TODO: Use custom plugin to parse code
export const mdToHtml = async (markdown: string): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {
      handlers: {
        code: (state, node: Code) => {
          const value = node.value ? node.value + "\n" : "";
          const values = value.split("\n");

          const valueElements = values.map((value) => {
            const className = [];
            if (node.lang) {
              className.push(`language-${node.lang}`);
            }
            let result: HandlerResult = {
              type: "element",
              tagName: "code",
              properties: { className },
              children: [{ type: "text", value }],
            };

            if (node.meta) {
              result.data = { meta: node.meta };
            }

            state.patch(node, result);
            result = state.applyData(node, result);

            // Create `<pre>`.
            result = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [result],
            };
            state.patch(node, result);

            result = state.applyData(node, result);
            return result;
          });

          const result: HandlerResult = {
            type: "element",
            tagName: "div",
            properties: { className: ["computing-code"] },
            children: valueElements,
          };
          state.patch(node, result);
          return result;
        },
      },
    })
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(markdown);

  return String(file);
};
