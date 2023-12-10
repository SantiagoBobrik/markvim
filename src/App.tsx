import { lazy } from "react";
import Split from "react-split";
import { SplitHeader } from "./components/split-header";
import { Header } from "./components/header";
import { useEditorContext } from "./hooks/useEditorContext";

const Editor = lazy(() =>
  import("./components/editor").then(({ Editor }) => ({
    default: Editor,
  }))
);

const Preview = lazy(() =>
  import("./components/preview").then(({ Preview }) => ({
    default: Preview,
  }))
);

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
