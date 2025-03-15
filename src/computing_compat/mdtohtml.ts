import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype, { defaultHandlers } from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

// TODO: Use custom plugin to parse code
export const mdToHtml = async (markdown: string): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {
      handlers: {
        ...defaultHandlers,
        code: (state, node, parent) => {
          const value = node.value ? node.value + "\n" : "";
          /** @type {Properties} */
          const properties = {};

          if (node.lang) {
            properties.className = ["language-" + node.lang];
          }

          // Create `<code>`.
          /** @type {Element} */
          let result = {
            type: "element",
            tagName: "code",
            properties,
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
          return result;
        },
      },
    })
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(markdown);

  return String(file);
};
