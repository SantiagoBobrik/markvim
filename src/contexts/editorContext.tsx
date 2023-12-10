import { createContext, useState } from "react";
import { defaultValue } from "../utils/defaultValue";

const DEFAULT_DATA = {
  markdown: defaultValue,
  setMarkdown: () => {},
};

type EditorContextType = {
  markdown: string;
  setMarkdown: (markdown: string) => void;
};

type ProviderProps = {
  children: React.ReactNode;
  value: string;
};

export const EditorContext = createContext<EditorContextType>(DEFAULT_DATA);

export const EditorProvider = (props: ProviderProps) => {
  const { value } = props;
  const [markdown, setMarkdown] = useState(value || defaultValue);

  const { children } = props;

  return (
    <EditorContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </EditorContext.Provider>
  );
};
