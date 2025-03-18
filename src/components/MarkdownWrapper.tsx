import type Markdown from "markdown-to-jsx";

// TODO: Implement inputs
function CustomCode({ children }: { children: string }) {
  return <code>{children}</code>;
}

export const markdownOptions: React.ComponentProps<typeof Markdown>["options"] =
  {
    overrides: {
      code: {
        component: CustomCode,
      },
    },
  };
