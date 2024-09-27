import { CodeBlock, dracula } from "react-code-blocks";

export default function MyCodeBlock({ codeSyntax }: { codeSyntax: string }) {
  return (
    <CodeBlock text={codeSyntax} language={"javascript"} theme={dracula} />
  );
}
