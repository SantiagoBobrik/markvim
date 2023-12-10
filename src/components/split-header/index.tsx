import "./index.css";

type Props = {
  title: string;
};
export const SplitHeader = (props: Props) => {
  const { title } = props;

  return <div className="split-header">{title}</div>;
};
