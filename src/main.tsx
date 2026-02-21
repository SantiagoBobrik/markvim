import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EditorProvider } from "./contexts/editorContext.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";
import { getLocalState } from "./utils/getLocalState.ts";

const value = getLocalState();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <EditorProvider value={value}>
        <App />
      </EditorProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
