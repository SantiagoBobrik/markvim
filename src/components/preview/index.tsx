import { memo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./index.css";

type Props = {
  markdown: string;
};

export const Preview = memo(({ markdown }: Props) => {
  return (
    <div className="markdown">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
});
