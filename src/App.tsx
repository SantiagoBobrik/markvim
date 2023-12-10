import Split from "react-split";
import { Editor } from "./components/editor";
import { Preview } from "./components/preview";
import { SplitHeader } from "./components/split-header";
import { Header } from "./components/header";
import { useEditorContext } from "./hooks/useEditorContext";

function App() {
  const { markdown } = useEditorContext();

  return (
    <>
      <Header />
      <div className="container">
        <Split className="split">
          <div className="split-col">
            <SplitHeader title="MARKDOWN" />
            <Editor />
          </div>

          <div className="split-col">
            <SplitHeader title="PREVIEW" />
            <Preview markdown={markdown} />
          </div>
        </Split>
      </div>
    </>
  );
}

export default App;
