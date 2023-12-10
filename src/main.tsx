import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EditorProvider } from "./contexts/editorContext.tsx";
import { getLocalState } from "./utils/getLocalSate.ts";

const value = getLocalState();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EditorProvider value={value}>
      <App />
    </EditorProvider>
  </React.StrictMode>
);
