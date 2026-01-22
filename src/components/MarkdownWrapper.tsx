import MarkdownToJsx from "markdown-to-jsx";

// TODO: Implement inputs
function CustomCode({ children }: { children: string }) {
  return <code>{children}</code>;
}

export const markdownOptions: React.ComponentProps<
  typeof MarkdownToJsx
>["options"] = {
  overrides: {
    code: {
      component: CustomCode,
    },
  },
};

export default function Markdown({ children }: { children: string }) {
  return <MarkdownToJsx options={markdownOptions}>{children}</MarkdownToJsx>;
}
