import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./index.css";

type Props = {
  markdown: string;
};

export const Preview = (props: Props) => {
  const { markdown } = props;
  return (
    <div className="markdown">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
};
