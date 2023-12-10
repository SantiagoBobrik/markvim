import { useCallback, useEffect, useState } from "react";
import { markdown as markdownCodeMirror } from "@codemirror/lang-markdown";
import { vim } from "@replit/codemirror-vim";
import CodeMirror from "@uiw/react-codemirror";

import { createTheme } from "@uiw/codemirror-themes";

import { useEditorContext } from "../../hooks/useEditorContext";
import { editorTheme } from "../../utils/editorTheme";
import "./index.css";
import { saveLocalState } from "../../utils/saveLocalState";

const extensions = [vim({ status: true }), markdownCodeMirror()];
export const Editor = () => {
  const DEBOUNCE_TIME = 500;
  const { setMarkdown, markdown } = useEditorContext();

  const [editorValue, setEditorValue] = useState(markdown);

  const myTheme = createTheme(editorTheme);

  const onChange = (value: string) => {
    setEditorValue(value);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      saveLocalState(editorValue);
      setMarkdown(editorValue);
    }, DEBOUNCE_TIME);

    return () => clearTimeout(id);
  }, [editorValue, setMarkdown]);

  return (
    <div className="editor">
      <CodeMirror
        value={markdown}
        height="100vh"
        maxWidth="100%"
        extensions={extensions}
        onChange={useCallback(onChange, [])}
        theme={myTheme}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
          highlightActiveLine: false,
        }}
      />
    </div>
  );
};
